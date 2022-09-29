<template>
  <v-app>
   <v-main>
    <v-container>
      <v-tabs 
      v-model="toptab"
      background-color="transparent"
      color="basil"
      grow>
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-1">Welcome</v-tab>
        <v-tab href="#tab-2">Annotate</v-tab>
      </v-tabs>
    
    <v-tabs-items v-model="toptab">
      <v-tab-item value="tab-1">
        <v-card flat>
          <v-card-text>

            <intro-page ref="IntroPage" @updateModel="setModel" />

          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-card flat>
          <v-card-text>
           <p>&nbsp;</p>
              <h1>Dataset annotation</h1>
               <p>&nbsp;</p>
              <p>A subset of fields to annotate a dataset with required metadata elements</p>
              <v-form v-model="valid">
                <v-jsf v-model="model" :schema="schema" />
                 <p>&nbsp;</p>
                <v-btn
                  color="success"
                  class="mr-4"
                  @click="saveData"
                >  export
                </v-btn>
                <v-btn
                  class="mr-4"
                  @click="reset"
                >  reset
                </v-btn>
              </v-form>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VJsf from '@koumoul/vjsf/lib/VJsf.js'
import '@koumoul/vjsf/lib/VJsf.css'
import '@koumoul/vjsf/lib/deps/third-party.js'
import IntroPage from './components/IntroPage.vue'

const vocab = "ogcapi-record"; //mcf

//import model
const mdl = require('./models/'+vocab+'/model.json');
//import template
const tpl = require('./models/'+vocab+'/template.json');

const opts = {}

export default {
  name: 'App',
  components: { 
    'IntroPage': IntroPage,
    'VJsf': VJsf 
  },
  opts,
  data: () => ({
    valid: false,
    model: Object.assign({}, tpl),
    opts,
    toptab: null,
    schema: mdl
  }),
  methods: {
    reset () {
      this.model = {};
    },
    setModel (mdl) {
      //copy key-values from object 2 levels deep
      let self = this;
      ["identification","distribution","contact","citation"].forEach(function(m){
        if (mdl[m]){
          if (!self.model[m]) self.model[m] = {};
          Object.keys(mdl[m]).forEach(function(k){self.model[m][k] = mdl[m][k]});
        }
      })
    },
    saveData() {
      const data = JSON.stringify(this.model)
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = "test.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    }
  }
};
</script>

