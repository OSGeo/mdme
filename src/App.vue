<template>
  <v-app>
   <v-main>
    <main-menu ref="MainMenu" @updateModel="setModel" @saveFile="saveData" />
    <v-container>
        <v-card flat>
          <v-card-text>
              <v-form v-model="valid">
                <v-jsf v-model="model" :schema="schema" />
              </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VJsf from '@koumoul/vjsf/lib/VJsf.js'
import '@koumoul/vjsf/lib/VJsf.css'
import '@koumoul/vjsf/lib/deps/third-party.js'
import MainMenu from './components/MainMenu.vue'
import { stringify } from "yaml";
import { array2dict } from "@/scripts/helpers.js";
import "@/scripts/helpers.css";

const vocab = "mcf"; //ogcapi-record

//import model
let mdl = require('./models/'+vocab+'/model.json');
//import template
const tpl = require('./models/'+vocab+'/template.json');

const opts = {}

export default {
  name: 'App',
  components: { 
    'MainMenu': MainMenu,
    'VJsf': VJsf 
  },
  opts,
  data: () => ({
    valid: false,
    model: Object.assign({}, tpl),
    opts,
    schema: mdl
  }),
  methods: {
    reset () {
      this.model = {};
    },
    download (data,mode) {
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = this.model.metadata.identifier + "." + mode;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    },
    setModel (mdl) {
      //copy key-values from object 2 levels deep
      let self = this;
      //self.model = mdl;
      ["metadata","spatial","identification","distribution","contact","acquisition","dataquality","content_info"].forEach(function(m){
        if (mdl[m]){
          if (!self.model[m]) self.model[m] = {};
          Object.keys(mdl[m]).forEach(function(k){self.model[m][k] = mdl[m][k]});
        }
      })
    },
    saveData(mode) {
      let self = this;
      if (!mode){
        mode = 'mcf';
      }
      let toExp = Object.assign({}, this.model);
      //convert contact/dist to objects
      toExp.contact = array2dict(toExp.contact.contacts,"role");
      toExp.distribution = array2dict(toExp.distribution.distributions);
      if (!toExp.identification) toExp.identification = {};
      toExp.identification.keywords = array2dict(toExp.identification.keywords);
      if (mode=='mcf'){
        self.download(stringify(toExp), 'yml');
      } else {
        this.axios.post("https://demo.pygeoapi.io/master/processes/pygeometa-metadata-generate/execution", {
          "inputs": {
            "mcf": toExp,
            "schema": mode
          }
        },{
          headers: {'Accept': 'application/json'}
        }).then(function(response){
          //todo: build some check to evaluate if the content is of expected type

          if (typeof response.data === 'object'){
            self.download(JSON.stringify(response.data), 'json');
          } else {
            self.download(response.data, 'xml');
          }
        }).catch(function (error) {
          alert(error);
        })
      }
    }
  }
};

</script>

