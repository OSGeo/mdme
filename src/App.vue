<template>
  <v-app>
   <v-main>
    <main-menu ref="MainMenu" @updateModel="setModel" @saveFile="saveData" />
    <v-container>
        <v-card flat>
          <v-card-text>
           <p>&nbsp;</p>
              <h1>Dataset annotation</h1>
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
import { stringify  } from "yaml";
const vocab = "mcf"; //ogcapi-record

//import model
const mdl = require('./models/'+vocab+'/model.json');
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
    setModel (mdl) {
      //copy key-values from object 2 levels deep
      let self = this;
      //self.model = mdl;
      
      ["metadata","identification","distribution","contact","citation","metadata"].forEach(function(m){
        if (mdl[m]){
          if (!self.model[m]) self.model[m] = {};
          console.log(m,mdl[m]);
          Object.keys(mdl[m]).forEach(function(k){self.model[m][k] = mdl[m][k]});
        }
      })
    },
    saveData() {
      const data = stringify(this.model)
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = this.model.metadata.identifier + ".yml";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/vnd.yaml', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    }
  }
};
</script>

