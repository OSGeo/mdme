<template>
  <div>
    <v-app-bar :elevation="0">
      <a href="https://github.com/osgeo/mdme">
        <v-img class="mx-5" v-bind:src="require('./img/logo.svg')" max-height="80" max-width="120" contain></v-img></a>
      <v-btn id="mnu" color="primary" class="me-2">
        File &nbsp; &#9660;
        <v-menu activator="#mnu" location="bottom">
          <v-list>
            <v-list-item @click="filedialog = true">
              <v-list-item-title>Open</v-list-item-title>
            </v-list-item>
            <v-list-item @click="reset">
              <!-- todo: if dirty, warn to save -->
              <v-list-item-title>New</v-list-item-title>
            </v-list-item>
            <v-list-item @click="importdialog = true">
              <v-list-item-title>Import</v-list-item-title>
            </v-list-item>
            <v-list-item @click="wmsdialog = true">
              <v-list-item-title>Import from WMS</v-list-item-title>
            </v-list-item>
            <v-list-item @click="exportdialog = true">
              <v-list-item-title>Export</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <v-btn class="me-auto" @click="saveFile">Save</v-btn>

      <a href="https://github.com/osgeo/mdme" class="text-decoration-none" target="_blank">
        <v-btn>Documentation</v-btn></a>
    </v-app-bar>

    <v-dialog v-model="filedialog" width="auto">
      <v-card>
        <v-card-title> Open MCF </v-card-title>
        <v-card-text>
          <p>Open a local Metadata Control File</p>

          <file-reader @load="data = $event"></file-reader>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="MCFOpen" elevation="2" small color="primary">
            Open
          </v-btn>
          <v-btn small @click="filedialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="importdialog" width="auto">
      <v-card>
        <v-card-title>Import metadata</v-card-title>
        <v-card-text>
          <p>
            Import metadata from a local or remote location. MDME uses a
            metadata transformation service provided by
            <a href="https://pygeoapi.io">pygeoapi</a> for the conversion.
          </p>
          <p>Select the format of the record.</p>
          <!-- todo: auto-detect; potential schema's: FGDC, oarec-record, stac-item  -->
          <v-select v-model="importschema" :items="['iso19139', 'doi']" :menu-props="{ maxHeight: '400' }"
            label="Select"></v-select>

          <v-row>
            <v-col>
              Enter URL to metadata
              <v-text-field v-model="record" label="Metadata record"></v-text-field>
            </v-col>
            <v-col>
              Or select locally
              <file-reader @load="uploadMetadata($event)"></file-reader>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="getMetadata" elevation="2" small color="primary">
            Import metadata
          </v-btn>
          <v-btn small @click="importdialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="wmsdialog" width="auto">
      <v-card>
        <v-card-title>Web Map Service</v-card-title>
        <v-card-text>
          <p>The dataset is exposed as a OGC WMS Webservice?</p>

          <v-text-field v-model="service" label="Web Map Service" @blur="fetchCapabilities"></v-text-field>

          If the service above is correct, the list of available layers in that
          service will be displayed below. Select the relevant layer you want to
          describe.

          <v-select :disabled="!WmsLayers" v-model="layers" :items="WmsLayers" :menu-props="{ maxHeight: '400' }"
            label="Select" item-text="title" item-value="name" multiple></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="getLayer" elevation="2" small color="primary">
            Get layer
          </v-btn>
          <v-btn small @click="wmsdialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="exportdialog" width="auto">
      <v-card>
        <v-card-title>Export record</v-card-title>
        <v-card-text>
          <p>
            MDME uses a metadata transformation service provided by
            <a href="https://pygeoapi.io">pygeoapi</a> for the conversion.
            Select the schema to use for the exported record
          </p>
          <v-select v-model="exportschema" :items="['iso19139', 'oarec-record', 'stac-item', 'dcat']"
            :menu-props="{ maxHeight: '400' }" label="Select"></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="exportFile" elevation="2" small color="primary">
            Export
          </v-btn>
          <v-btn small @click="exportdialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FileReader from "./FileReader";
//import $RefParser from "@apidevtools/json-schema-ref-parser";
//import mergeAllOf from "json-schema-merge-allof";
import { parse } from "yaml";
//import { clean } from "@/scripts/helpers.js";

var parseString = require("xml2js").parseString;

export default {
  emits: ["updateModel"],
  name: "IntroPage",
  data: () => ({
    importdialog: false,
    filedialog: false,
    wmsdialog: false,
    exportdialog: false,
    exportschema: "",
    importschema: "iso19139",
    metadata: "",
    data: "",
    service: "",
    WMSCaps: [],
    WmsLayers: [],
    layers: [],
    upload: "",
    record: "",
    WMSContact: {},
  }),
  components: {
    FileReader,
  },
  methods: {
    uploadMetadata(str) {
      this.upload = str;
    },
    getMetadata() {
      let self = this;
      if (this.record != "") {
        switch (self.importschema) {
          case "doi":
            self.fetchDOI();
            break;
          case "iso19139":
            this.axios
              .get(this.record, { headers: { Accept: "application/xml" } })
              .then(function (response) {
                try {
                  self.parseMetadata(
                    response.data.split("<gmd:MD_Metadata")[1],
                    self.importschema
                  );
                } catch (e) {
                  console.log(e);
                }
              });
            break;
          default:
            this.axios
              .get(this.record, { headers: { Accept: "application/json" } })
              .then(function (response) {
                self.parseMetadata(response.data, self.importschema);
              });
        }
      } else if (this.upload != "") {
        self.parseMetadata(this.upload, self.importschema);
      } else {
        alert("Provide a url or upload a record.");
      }
    },
    parseMetadata(str, schema) {
      let self = this;
      //send xml to pygeoapi
      this.axios
        .post(
          "https://demo.pygeoapi.io/master/processes/pygeometa-metadata-import/execution",
          {
            inputs: {
              metadata: str,
              schema: schema,
            },
          },
          {
            headers: { Accept: "application/json" },
          }
        )
        .then(function (response) {
          //todo: build some check to evaluate if the content is of expected type
          if (response.data.value) {
            self.$emit("updateModel", self.loadMCF(response.data.value));
            self.importdialog = false;
          } else {
            var err = "Import failed; ";
            if (response.data.code) {
              err += response.data.code;
            }
            if (response.data.description) {
              err += response.data.description;
            }
            alert(err);
          }
        })
        .catch(function (error) {
          alert('Unknown error: ' + error);
        });
    },
    saveFile() {
      let self = this;
      self.$emit("saveFile");
    },
    exportFile() {
      let self = this;
      self.$emit("saveFile", self.exportschema);
    },
    reset() {
      let self = this;
      self.$emit("updateModel", {});
    },
    MCFOpen() {
      let self = this;
      var model = this.loadMCF(parse(this.data));
      self.$emit("updateModel", model);
      this.filedialog = false;
    },
    loadMCF(model) {
      //convert contacts and distributions to arrays
      var cnt = [];
      if (model["contact"]) {
        Object.keys(model["contact"]).forEach(function (k) {
          var newCnt = model["contact"][k];
          newCnt["role"] = k;
          cnt.push(newCnt);
        });
      }
      model["contact"] = { contacts: cnt };
      var dst = [];
      if (model["distribution"]) {
        Object.keys(model["distribution"]).forEach(function (k) {
          dst.push(model["distribution"][k]);
        });
      }
      model["distribution"] = { distributions: dst };
      //todo: verify if this is valid mcf, you could merge the json with a default json
      //if (this.data.mcf && this.data.mcf.version && this.data.mcf.version == "1.0"){}
      return model;
    },
    fetchDOI() {
      let doi = this.record;
      if (doi.trim().indexOf("http") == 0) {
        //normal case
        doi = doi.trim();
      } else if (doi.indexOf("doi:") == 0) {
        doi = doi.replace("doi:", "https://doi.org/");
      } else {
        doi = "https://doi.org/" + doi;
      }
      if (doi.trim() != "") {
        let mdl = {};
        let self = this;
        this.axios
          .get(doi, { headers: { Accept: "application/x-bibtex" } })
          .then(function (response) {
            let doiMD = {};
            response.data.split(",").forEach(function (f) {
              let tpl = f.split("=");
              if (tpl.length == 2) {
                doiMD[tpl[0].trim()] = tpl[1]
                  .replace("{", "")
                  .replace("}", "")
                  .trim();
              }
            });
            mdl.identification = {};

            //publisher and authors
            try {
              let cnt = [];
              doiMD.author.split(" and ").forEach(function (c) {
                cnt.push({ name: c, role: "author" });
              });
              if (doiMD.publisher) {
                cnt.push({ organisation: doiMD.publisher, role: "publisher" });
              }
              mdl.contact = { contacts: cnt };
            } catch (e) {
              console.log(e);
            }
            if (doiMD.title) {
              mdl.identification.title = doiMD.title;
            }
            if (doiMD.language) {
              mdl.identification.language = doiMD.language;
            }
            try {
              if (doiMD.year) {
                mdl.identification.modDate =
                  doiMD.year.toString() +
                  "-" +
                  (doiMD.month
                    ? [
                      "jan",
                      "feb",
                      "mar",
                      "apr",
                      "may",
                      "jun",
                      "jul",
                      "aug",
                      "sep",
                      "oct",
                      "nov",
                      "dec",
                    ].findIndex((m) => m === doiMD.month) + 1
                    : 1
                  ).toString() +
                  "-1";
              }
            } catch (e) {
              console.log(e);
            }
            if (doiMD.keywords) {
              mdl.identification.keywords = doiMD.keywords.split(",");
            }
            mdl.identification.id = doi.split("doi.org/")[1];
            self.$emit("updateModel", mdl);
            alert("Doi " + doi + " imported!");
          })
          .catch(function (e) {
            alert("Failed to retrieve DOI: " + doi + "; " + e);
          });
      }
    },
    getLayer() {
      let layerName = "";
      let self = this;
      let mdl = { identification: {}, distribution: {}, contact: {} };
      this.layers.forEach(function (l) {
        let myLayer = self.WmsLayers.find((ls) => ls.name === l);
        if (myLayer) {
          mdl.identification.title = myLayer.title;
          try {
            mdl.identification.abstract = myLayer.abstract;
            layerName = myLayer.name;
            mdl.identification.keywords = [];
            myLayer.keywordlist.Keyword.forEach(function (kw) {
              if (kw != "") mdl.identification.keywords.push(kw);
            });
          } catch (e) {
            console.log(e);
          }
          try {
            let bb = myLayer.ex_geographicboundingbox;
            mdl.identification.geographicalextent =
              bb.westBoundLongitude.toString() +
              "," +
              +bb.southBoundLatitude +
              "," +
              bb.eastBoundLongitude +
              "," +
              bb.northBoundLatitude;
          } catch (e) {
            console.log(e);
          }
        }
      });
      if (self.WMSCaps) {
        mdl.identification.id =
          self.WMSCaps.href.split("?")[0] + "#" + layerName;
        mdl.distribution.distributions = [
          { url: self.WMSCaps.href, name: layerName, protocol: "OGC:WMS" },
        ];
        try {
          let c = self.WMSCaps.contact;
          mdl.contact.contacts = [
            {
              email: c.ContactElectronicMailAddress[0],
              role: "publisher",
              name: c.ContactPersonPrimary[0].ContactPerson[0],
              organisation: c.ContactPersonPrimary[0].ContactOrganization[0],
            },
          ];
        } catch (e) {
          console.log(e);
        }
        try {
          let l = self.WMSCaps.license;
          mdl.identification.accessconstraints = l;
        } catch (e) {
          console.log(e);
        }
        self.$emit("updateModel", mdl);
        alert("Metadata from wms imported!");
      }
    },
    fetchCapabilities() {
      let self = this;
      this.axios
        .get(
          this.service.split("?")[0] +
          "?request=GetCapabilities&service=WMS&version=1.3.0"
        )
        .then((response) => {
          parseString(response.data, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              self.WMSCaps = {
                href: self.service,
                contact:
                  result["WMS_Capabilities"].Service[0].ContactInformation[0],
                license:
                  result["WMS_Capabilities"].Service[0].AccessConstraints[0],
              };
              try {
                self.WmsLayers = [];
                result["WMS_Capabilities"]["Capability"][0]["Layer"][0][
                  "Layer"
                ].forEach(function (lyr) {
                  let myLayer = {};

                  Object.keys(lyr).forEach(function (k) {
                    if (lyr[k][0]) myLayer[k.toLowerCase()] = lyr[k][0];
                  });
                  if (myLayer.name) {
                    self.WmsLayers.push(myLayer);
                  }
                });
              } catch (e) {
                console.log(e);
              }
            }
          });
        });
    },
  },
};
</script>
