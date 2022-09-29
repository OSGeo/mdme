<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
       <p>&nbsp;</p> <p>&nbsp;</p>
              <h1>Welcome</h1>
              <p>&nbsp;</p> 
              <p>
              This app aims to facilitate the registration of a dataset based on common conventions.
              Properties of a dataset are extracted from existing sources and/or entered manually.
              </p>
              <p>
              In the first step you are invited to add references to existing resources related to the dataset.
              The app will try to parse this information in order to fetch existing metadata.
              </p><p>
              In the next step (change tab above) you can complete any resource information in a web form.
              Finally, you can save and/or export the results in various formats.
              </p>
              <p>&nbsp;</p>
              <h2>Existing resources</h2>
              <p>&nbsp;</p>

    <v-expansion-panels accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>Import DOI metadata</v-expansion-panel-header>
        <v-expansion-panel-content>
        
                If a DOI is registerd for this dataset, Bibtex metadata will be extracted for this DOI
            
                <v-text-field 
                  v-model="doi"
                  label="DOI"
                  description=""
                ></v-text-field>

                <v-btn @click="fetchDOI"
                    elevation="2"
                    small
                  > Fetch DOI </v-btn>
         </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Import metadata record</v-expansion-panel-header>
        <v-expansion-panel-content>
                <!-- try https://nationaalgeoregister.nl/geonetwork/srv/api/records/5951efa2-1ff3-4763-a966-a2f5497679ee/formatters/xml -->
                <p>If this dataset is registered in a catalog, add a link to the record (as iso19139).</p>
                <v-text-field
                  v-model="record"
                  label="Metadata record"
                ></v-text-field>
                <v-btn @click="getMetadata"
                    elevation="2"
                    small
                  > Import metadata </v-btn>
                  <p>&nbsp;</p> 
                <p>
                  Or upload a iso19139 metadata document. Typically a metadata file is 
                  stored along side a tif or shapefile as {filename}.shp.xml.
                </p>
                <file-reader @load="parseMetadata($event)"></file-reader>
                
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Web Map Service</v-expansion-panel-header>
        <v-expansion-panel-content>
                <p>The dataset is exposed as a OGC WMS Webservice?</p>

                <v-text-field
                  v-model="service"
                  label="Web Map Service" @blur="fetchCapabilities"
                ></v-text-field>

                If the service above is correct, the list of available layers in that service will be displayed below. 
                Select the relevant layer you want to describe. 

                <v-select :disabled="!WmsLayers"
                          v-model="layers"
                          :items="WmsLayers"
                          :menu-props="{ maxHeight: '400' }"
                          label="Select"
                          item-text="title"
                          item-value="name"
                          multiple
                        ></v-select>

                  <v-btn @click="getLayer"
                    elevation="2"
                    small
                  > Get layer </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Upload dataset</v-expansion-panel-header>
        <v-expansion-panel-content>

                <p>Upload a sample of the dataset</p>

                <file-reader @load="data = $event"></file-reader>
              
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FileReader from "./FileReader";
var parseString = require('xml2js').parseString;

export default {
  emits: [ 'updateModel' ],
  name: 'IntroPage',
  data: () => ({
    'doi': "",
    'metadata': "",
    'data': "",
    'service': "",
    'WMSCaps': [],
    'WmsLayers': [],
    'layers': [],
    'upload': "",
    'record': "",
    'WMSContact':{}
  }),
  components : {
    FileReader
  },
  methods : {
    parseMetadata (str) {
      let self = this;
      parseString(str, (err, result) => {
        if(err) {
          console.log(err)
        } else {
          try {
            let uuid = result['gmd:MD_Metadata']['gmd:fileIdentifier'][0]['gco:CharacterString'][0];
            let model = {identification:{id: uuid}};
            self.$emit('updateModel',model);
            alert('Record ' +uuid+ ' imported');
          } catch (e) {console.log(e)}
        }
      });
    },
    getMetadata(){
      let self = this;
      this.axios.get(this.record, {headers: {'Accept': 'application/xml'}}).then(function(response){
             self.parseMetadata(response.data);
            })
    },
    fetchDOI() {
        let doi = this.doi;
        if (doi.trim().indexOf('http') == 0) { 
          //normal case
          doi = doi.trim();
        } else if (doi.indexOf('doi:') == 0) {
          doi = doi.replace('doi:','https://doi.org/');
        } else {
          doi = 'https://doi.org/' + doi;
        }
        if (doi.trim() != '') {
          let mdl = {}
          let self = this;
          this.axios.get(doi, {headers: {'Accept': 'application/x-bibtex'}}).then(function(response){
            let doiMD = {}; 
            response.data.split(',').forEach(function(f){
              let tpl = f.split('=');
              if (tpl.length==2){
                doiMD[tpl[0].trim()]=tpl[1].replace('{','').replace('}','').trim()
              }
            })
            mdl.identification = {};

            //publisher and authors
            try {
              let cnt = [];
              (doiMD.author).split(' and ').forEach(function(c){
                cnt.push({"name":c, role:'author'});
              })
              if (doiMD.publisher){
                cnt.push({"organisation":doiMD.publisher,role:'publisher'});
              }
              mdl.contact = {contacts: cnt}
            } catch (e) { console.log(e) }
            if (doiMD.title) { mdl.identification.title = doiMD.title } 
            if (doiMD.language) { mdl.identification.language = doiMD.language } 
            try {
              if (doiMD.year) { 
                  mdl.identification.modDate = doiMD.year.toString() + "-" + (doiMD.month?(["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"].findIndex(m => (m === doiMD.month))+1):1).toString() + "-1" } 
            } catch (e) { console.log(e) }
            if (doiMD.keywords) { mdl.identification.keywords = doiMD.keywords.split(',')}
            mdl.identification.id = doi.split('doi.org/')[1];
            self.$emit('updateModel',mdl);
            alert('Doi '+ doi +' imported!')
          }).catch(function(e){alert('Failed to retrieve DOI: ' + doi + '; ' + e)}) 
        }
    },
  getLayer(){
      let layerName = "";
      let self = this;
      let mdl = {identification:{},distribution:{},contact:{}}
      this.layers.forEach(function(l){
        let myLayer = self.WmsLayers.find(ls => ls.name === l);
        if (myLayer){
          mdl.identification.title = myLayer.title;
          try {
            mdl.identification.abstract = myLayer.abstract;
            layerName = myLayer.name;
            mdl.identification.keywords = [];
            myLayer.keywordlist.Keyword.forEach(function(kw){
              if (kw!='') mdl.identification.keywords.push(kw);
            });
          } catch (e) { console.log(e)}
          try {
           let bb = myLayer.ex_geographicboundingbox;
           mdl.identification.geographicalextent = bb.westBoundLongitude.toString() + ',' + +bb.southBoundLatitude +  ',' + bb.eastBoundLongitude + ',' + bb.northBoundLatitude;
          } catch (e) { console.log(e)}
        }   
      })
      if (self.WMSCaps){
        mdl.identification.id = self.WMSCaps.href.split('?')[0] + '#' + layerName;
        mdl.distribution.distributions = [{url:self.WMSCaps.href,name:layerName,protocol:'OGC:WMS'}];
        try {
          let c = self.WMSCaps.contact;
          mdl.contact.contacts=[{email:c.ContactElectronicMailAddress[0],
                role:'publisher',
                name: c.ContactPersonPrimary[0].ContactPerson[0],
                organisation:  c.ContactPersonPrimary[0].ContactOrganization[0]
            }];
        } catch (e) { console.log(e)}
        try {
          let l = self.WMSCaps.license;
          mdl.identification.accessconstraints=l;
        } catch (e) { console.log(e)}
      self.$emit('updateModel',mdl);
      alert('Metadata from wms imported!')
      }
    },
    fetchCapabilities(){
      let self = this;
      this.axios.get(this.service.split('?')[0] + '?request=GetCapabilities&service=WMS&version=1.3.0')
        .then(response => {
          parseString(response.data, (err, result) => {
            if(err) {
              console.log(err);
            } else {
              self.WMSCaps = {
                href: self.service,
                contact: result['WMS_Capabilities'].Service[0].ContactInformation[0],
                license: result['WMS_Capabilities'].Service[0].AccessConstraints[0]
              }
              try {
                self.WmsLayers = []
                result['WMS_Capabilities']['Capability'][0]['Layer'][0]['Layer'].forEach(function(lyr){
                  let myLayer = {}
                  
                  Object.keys(lyr).forEach(function(k){
                    if (lyr[k][0]) myLayer[k.toLowerCase()] = lyr[k][0];
                  })
                  if (myLayer.name){
                    self.WmsLayers.push(myLayer);
                  }
              })
              } catch (e) {
                console.log(e);
              }
            }
          });        
        })
    }
  }
}
</script>
