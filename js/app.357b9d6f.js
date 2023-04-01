(function(){var e={6346:function(e,t,i){"use strict";var r=i(144),o=i(1096),n=i(3385),a=i(5223),s=i(6035),d=i(6904),c=i(3551),p=function(){var e=this,t=e._self._c;return t(o.Z,[t(c.Z,[t("main-menu",{ref:"MainMenu",on:{updateModel:e.setModel,saveFile:e.saveData}}),t(s.Z,[t(n.Z,{attrs:{flat:""}},[t(a.ZB,[t("p",[e._v(" ")]),t("h1",[e._v("Dataset annotation")]),t(d.Z,{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("v-jsf",{attrs:{schema:e.schema},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)],1)],1)],1)],1)},l=[],u=i(4346),f=(i(2113),i(3250)),m=i(7179),h=i(5452),y=i(2469),g=i(248),b=i(1908),v=i(1193),w=i(92),x=i(5135),O=i(5251),k=function(){var e=this,t=e._self._c;return t("div",[t(f.Z,{attrs:{elevation:0}},[t("a",{attrs:{href:"https://github.com/osgeo/mdme"}},[t(y.Z,{staticClass:"mx-5",attrs:{src:i(4688),"max-height":"80","max-width":"120",contain:""}})],1),t(m.Z,{staticClass:"me-2",attrs:{id:"mnu",color:"primary"}},[e._v(" File   ▼ "),t(w.Z,{attrs:{activator:"#mnu",location:"bottom"}},[t(g.Z,[t(b.Z,{on:{click:function(t){e.filedialog=!0}}},[t(v.V9,[e._v("Open")])],1),t(b.Z,{on:{click:e.reset}},[t(v.V9,[e._v("New")])],1),t(b.Z,{on:{click:function(t){e.xmldialog=!0}}},[t(v.V9,[e._v("Import XML")])],1),t(b.Z,{on:{click:function(t){e.doidialog=!0}}},[t(v.V9,[e._v("Import DOI")])],1),t(b.Z,{on:{click:function(t){e.wmsdialog=!0}}},[t(v.V9,[e._v("Import from WMS")])],1)],1)],1)],1),t(m.Z,{staticClass:"me-auto",on:{click:e.saveFile}},[e._v("Save")]),t("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/osgeo/mdme",target:"_blank"}},[t(m.Z,[e._v("Documentation")])],1)],1),t(h.Z,{attrs:{width:"auto"},model:{value:e.filedialog,callback:function(t){e.filedialog=t},expression:"filedialog"}},[t(n.Z,[t(a.EB,[e._v(" Open MCF ")]),t(a.ZB,[t("p",[e._v("Open a local Metadata Control File")]),t("file-reader",{on:{load:function(t){e.data=t}}})],1),t(a.h7,[t(m.Z,{attrs:{elevation:"2",small:"",color:"primary"},on:{click:e.MCFOpen}},[e._v(" Open ")]),t(m.Z,{attrs:{small:""},on:{click:function(t){e.filedialog=!1}}},[e._v("Close Dialog")])],1)],1)],1),t(h.Z,{attrs:{width:"auto"},model:{value:e.doidialog,callback:function(t){e.doidialog=t},expression:"doidialog"}},[t(n.Z,[t(a.EB,[e._v("Import DOI metadata")]),t(a.ZB,[e._v(" If a DOI is registerd for this dataset, Bibtex metadata will be extracted for this DOI "),t(O.Z,{attrs:{label:"DOI",description:""},model:{value:e.doi,callback:function(t){e.doi=t},expression:"doi"}})],1),t(a.h7,[t(m.Z,{attrs:{elevation:"2",small:"",color:"primary"},on:{click:e.fetchDOI}},[e._v(" Fetch DOI ")]),t(m.Z,{attrs:{small:""},on:{click:function(t){e.doidialog=!1}}},[e._v("Close Dialog")])],1)],1)],1),t(h.Z,{attrs:{width:"auto"},model:{value:e.xmldialog,callback:function(t){e.xmldialog=t},expression:"xmldialog"}},[t(n.Z,[t(a.EB,[e._v("Import xml metadata")]),t(a.ZB,[e._v(" If this dataset is registered in a catalog, add a link to the record (as iso19139). "),t(O.Z,{attrs:{label:"Metadata record"},model:{value:e.record,callback:function(t){e.record=t},expression:"record"}}),t(m.Z,{attrs:{elevation:"2",small:""},on:{click:e.getMetadata}},[e._v(" Import metadata ")]),t("p",[e._v(" ")]),t("p",[e._v(" Or upload a iso19139 metadata document. Typically a metadata file is stored along side a tif or shapefile as {filename}.shp.xml. ")]),t("file-reader",{on:{load:function(t){return e.parseMetadata(t)}}})],1),t(a.h7,[t(m.Z,{attrs:{elevation:"2",small:"",color:"primary"},on:{click:e.fetchDOI}},[e._v(" Fetch DOI ")]),t(m.Z,{attrs:{small:""},on:{click:function(t){e.xmldialog=!1}}},[e._v("Close Dialog")])],1)],1)],1),t(h.Z,{attrs:{width:"auto"},model:{value:e.wmsdialog,callback:function(t){e.wmsdialog=t},expression:"wmsdialog"}},[t(n.Z,[t(a.EB,[e._v("Web Map Service")]),t(a.ZB,[t("p",[e._v("The dataset is exposed as a OGC WMS Webservice?")]),t(O.Z,{attrs:{label:"Web Map Service"},on:{blur:e.fetchCapabilities},model:{value:e.service,callback:function(t){e.service=t},expression:"service"}}),e._v(" If the service above is correct, the list of available layers in that service will be displayed below. Select the relevant layer you want to describe. "),t(x.Z,{attrs:{disabled:!e.WmsLayers,items:e.WmsLayers,"menu-props":{maxHeight:"400"},label:"Select","item-text":"title","item-value":"name",multiple:""},model:{value:e.layers,callback:function(t){e.layers=t},expression:"layers"}})],1),t(a.h7,[t(m.Z,{attrs:{elevation:"2",small:"",color:"primary"},on:{click:e.getLayer}},[e._v(" Get layer ")]),t(m.Z,{attrs:{small:""},on:{click:function(t){e.wmsdialog=!1}}},[e._v("Close Dialog")])],1)],1)],1)],1)},j=[],C=(i(7658),i(271)),M=function(){var e=this,t=e._self._c;return t(C.Z,{attrs:{label:"Upload"},on:{change:e.loadTextFromFile}})},I=[],_={methods:{loadTextFromFile(e){const t=new FileReader;t.onload=e=>this.$emit("load",e.target.result),t.readAsText(e)}}},S=_,Z=i(1001),q=(0,Z.Z)(S,M,I,!1,null,null,null),T=q.exports,$=i(252),D=i(5108),P=i(5055).parseString,F={emits:["updateModel"],name:"IntroPage",data:()=>({doidialog:!1,xmldialog:!1,filedialog:!1,wmsdialog:!1,doi:"",metadata:"",data:"",service:"",WMSCaps:[],WmsLayers:[],layers:[],upload:"",record:"",WMSContact:{}}),components:{FileReader:T},methods:{parseMetadata(e){let t=this;P(e,((e,i)=>{if(e)D.log(e);else try{let e=i["gmd:MD_Metadata"]["gmd:fileIdentifier"][0]["gco:CharacterString"][0],r={identification:{id:e}};t.$emit("updateModel",r),alert("Record "+e+" imported")}catch(r){D.log(r)}}))},saveFile(){let e=this;e.$emit("saveFile")},reset(){let e=this;e.$emit("updateModel",{})},MCFOpen(){let e=this;var t=this.loadMCF(this.data);e.$emit("updateModel",t),this.filedialog=!1},loadMCF(e){var t=(0,$.Qc)(e);return D.log(t),t},getMetadata(){let e=this;this.axios.get(this.record,{headers:{Accept:"application/xml"}}).then((function(t){e.parseMetadata(t.data)}))},fetchDOI(){let e=this.doi;if(e=0==e.trim().indexOf("http")?e.trim():0==e.indexOf("doi:")?e.replace("doi:","https://doi.org/"):"https://doi.org/"+e,""!=e.trim()){let t={},i=this;this.axios.get(e,{headers:{Accept:"application/x-bibtex"}}).then((function(r){let o={};r.data.split(",").forEach((function(e){let t=e.split("=");2==t.length&&(o[t[0].trim()]=t[1].replace("{","").replace("}","").trim())})),t.identification={};try{let e=[];o.author.split(" and ").forEach((function(t){e.push({name:t,role:"author"})})),o.publisher&&e.push({organisation:o.publisher,role:"publisher"}),t.contact={contacts:e}}catch(n){D.log(n)}o.title&&(t.identification.title=o.title),o.language&&(t.identification.language=o.language);try{o.year&&(t.identification.modDate=o.year.toString()+"-"+(o.month?["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"].findIndex((e=>e===o.month))+1:1).toString()+"-1")}catch(n){D.log(n)}o.keywords&&(t.identification.keywords=o.keywords.split(",")),t.identification.id=e.split("doi.org/")[1],i.$emit("updateModel",t),alert("Doi "+e+" imported!")})).catch((function(t){alert("Failed to retrieve DOI: "+e+"; "+t)}))}},getLayer(){let e="",t=this,i={identification:{},distribution:{},contact:{}};if(this.layers.forEach((function(r){let o=t.WmsLayers.find((e=>e.name===r));if(o){i.identification.title=o.title;try{i.identification.abstract=o.abstract,e=o.name,i.identification.keywords=[],o.keywordlist.Keyword.forEach((function(e){""!=e&&i.identification.keywords.push(e)}))}catch(n){D.log(n)}try{let e=o.ex_geographicboundingbox;i.identification.geographicalextent=e.westBoundLongitude.toString()+","+ +e.southBoundLatitude+","+e.eastBoundLongitude+","+e.northBoundLatitude}catch(n){D.log(n)}}})),t.WMSCaps){i.identification.id=t.WMSCaps.href.split("?")[0]+"#"+e,i.distribution.distributions=[{url:t.WMSCaps.href,name:e,protocol:"OGC:WMS"}];try{let e=t.WMSCaps.contact;i.contact.contacts=[{email:e.ContactElectronicMailAddress[0],role:"publisher",name:e.ContactPersonPrimary[0].ContactPerson[0],organisation:e.ContactPersonPrimary[0].ContactOrganization[0]}]}catch(r){D.log(r)}try{let e=t.WMSCaps.license;i.identification.accessconstraints=e}catch(r){D.log(r)}t.$emit("updateModel",i),alert("Metadata from wms imported!")}},fetchCapabilities(){let e=this;this.axios.get(this.service.split("?")[0]+"?request=GetCapabilities&service=WMS&version=1.3.0").then((t=>{P(t.data,((t,i)=>{if(t)D.log(t);else{e.WMSCaps={href:e.service,contact:i["WMS_Capabilities"].Service[0].ContactInformation[0],license:i["WMS_Capabilities"].Service[0].AccessConstraints[0]};try{e.WmsLayers=[],i["WMS_Capabilities"]["Capability"][0]["Layer"][0]["Layer"].forEach((function(t){let i={};Object.keys(t).forEach((function(e){t[e][0]&&(i[e.toLowerCase()]=t[e][0])})),i.name&&e.WmsLayers.push(i)}))}catch(r){D.log(r)}}}))}))}}},L=F,A=(0,Z.Z)(L,k,j,!1,null,null,null),E=A.exports,W=i(5108);const R="mcf",U=i(8734)("./"+R+"/model.json"),z=i(322)("./"+R+"/template.json"),B={};var N={name:"App",components:{MainMenu:E,VJsf:u.Z},opts:B,data:()=>({valid:!1,model:Object.assign({},z),opts:B,schema:U}),methods:{reset(){this.model={}},setModel(e){let t=this;["metadata","identification","distribution","contact","citation","metadata"].forEach((function(i){e[i]&&(t.model[i]||(t.model[i]={}),W.log(i,e[i]),Object.keys(e[i]).forEach((function(r){t.model[i][r]=e[i][r]})))}))},saveData(){const e=(0,$.Pz)(this.model),t=new Blob([e],{type:"text/plain"}),i=document.createEvent("MouseEvents"),r=document.createElement("a");r.download=this.model.metadata.identifier+".yml",r.href=window.URL.createObjectURL(t),r.dataset.downloadurl=["text/vnd.yaml",r.download,r.href].join(":"),i.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(i)}}},G=N,J=(0,Z.Z)(G,p,l,!1,null,null,null),V=J.exports,H=i(1773);r.ZP.use(H.Z);var X=new H.Z({}),K=i(6154),Q=i(2346);r.ZP.use(Q.Z,K.Z),r.ZP.config.productionTip=!1,new r.ZP({vuetify:X,render:e=>e(V)}).$mount("#app")},8734:function(e,t,i){var r={"./datapackage/model.json":8144,"./mcf/model.json":6649,"./ogcapi-record/model.json":3615};function o(e){var t=n(e);return i(t)}function n(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=n,e.exports=o,o.id=8734},322:function(e,t,i){var r={"./datapackage/template.json":7027,"./mcf/template.json":9047,"./ogcapi-record/template.json":9161};function o(e){var t=n(e);return i(t)}function n(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=n,e.exports=o,o.id=322},4688:function(e,t,i){"use strict";e.exports=i.p+"img/logo.aaae67fa.svg"},2361:function(){},4616:function(){},8144:function(e){"use strict";e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"Data Package","description":"Data Package is a simple specification for data access and delivery.","type":"object","required":["name","resources"],"properties":{"name":{"$ref":"definitions.json#/define/name","propertyOrder":10},"title":{"$ref":"definitions.json#/define/title","propertyOrder":20},"description":{"$ref":"definitions.json#/define/description","format":"textarea","propertyOrder":30},"homepage":{"$ref":"definitions.json#/define/homepage","propertyOrder":40},"version":{"$ref":"definitions.json#/define/version","propertyOrder":50},"license":{"$ref":"definitions.json#/define/license","propertyOrder":60},"author":{"$ref":"definitions.json#/define/author","propertyOrder":70},"contributors":{"$ref":"definitions.json#/define/contributors","propertyOrder":80,"options":{"hidden":true}},"resources":{"title":"Resources","description":"The data resources that this package describes.","type":"array","propertyOrder":90,"minItems":0,"items":{"type":"object","properties":{"name":{"$ref":"definitions.json#/define/name","propertyOrder":10},"title":{"$ref":"definitions.json#/define/title","propertyOrder":20},"description":{"$ref":"definitions.json#/define/description","propertyOrder":30,"format":"textarea"},"schema":{"$ref":"definitions.json#/define/schema","propertyOrder":40},"url":{"$ref":"definitions.json#/define/url","propertyOrder":50},"path":{"$ref":"definitions.json#/define/path","propertyOrder":60},"data":{"$ref":"definitions.json#/define/data","propertyOrder":70},"format":{"$ref":"definitions.json#/define/format","propertyOrder":80},"mediatype":{"$ref":"definitions.json#/define/mediatype","propertyOrder":90},"encoding":{"$ref":"definitions.json#/define/encoding","propertyOrder":100},"bytes":{"$ref":"definitions.json#/define/bytes","propertyOrder":110,"options":{"hidden":true}},"hash":{"$ref":"definitions.json#/define/hash","propertyOrder":120,"options":{"hidden":true}},"dialect":{"$ref":"definitions.json#/define/dialect","propertyOrder":130,"options":{"hidden":true}},"sources":{"$ref":"definitions.json#/define/sources","propertyOrder":140,"options":{"hidden":true}},"license":{"$ref":"definitions.json#/define/license","description":"The license under which the resource is published.","propertyOrder":150,"options":{"hidden":true}}},"anyOf":[{"title":"url required","required":["url"]},{"title":"path required","required":["path"]},{"title":"data required","required":["data"]}]}},"keywords":{"$ref":"definitions.json#/define/keywords","propertyOrder":100},"sources":{"$ref":"definitions.json#/define/sources","propertyOrder":110,"options":{"hidden":true}},"image":{"$ref":"definitions.json#/define/image","propertyOrder":120,"options":{"hidden":true}},"dataDependencies":{"$ref":"definitions.json#/define/dataDependencies","propertyOrder":140,"options":{"hidden":true}}}}')},7027:function(e){"use strict";e.exports={}},6649:function(e){"use strict";e.exports=JSON.parse('{"type":"object","x-display":"vertical-stepper","properties":{"mcf":{"type":"object","x-display":"hidden","description":"core mcf metadata","properties":{"version":{"type":"number","description":"version of MCF format","const":1}},"required":["version"]},"metadata":{"type":"object","title":"Metadata","description":"unique identifier for this metadata file","properties":{"identifier":{"type":"string","description":"unique identifier for this metadata file"},"language":{"type":"string","description":"primary language used for documenting metadata, the metadata records themselves can be provided in multiple languages nonetheless"},"language_alternate":{"type":"string","description":"alternate language used for documenting metadata"},"charset":{"type":"string","description":"full name of the character coding standard used for the metadata set"},"parentidentifier":{"type":"string","description":"file identifier of the metadata to which this metadata is a subset"},"hierarchylevel":{"type":"string","description":"level to which the metadata applies","enum":["series","software","featureType","model","collectionHardware","collectionSession","nonGeographicDataset","propertyType","fieldSession","dataset","service","attribute","attributeType","tile","feature","dimensionGroup"]},"datestamp":{"format":"date","description":"date that the metadata was created, pygeometa supports specifying the `$date$` or `$datetime$` variable to update the date value at run time"},"dataseturi":{"type":"string","description":"Uniform Resource Identifier (URI) of the dataset to which the metadata applies"}},"required":["identifier","language","charset","hierarchylevel","datestamp","dataseturi"]},"spatial":{"type":"object","title":"Spatial","properties":{"datatype":{"type":"string","description":"method used to represent geographic information in the dataset","enum":["vector","grid","textTable","tin","stereoModel","video"]},"geomtype":{"type":"string","description":"name of point or vector objects used to locate zero-, one-, two-, or threedimensional spatial locations in the dataset","enum":["complex","composite","curve","point","solid","surface"]}},"required":["datatype","geomtype"]},"identification":{"type":"object","title":"Identification","properties":{"doi":{"type":"string","description":"Digital Object Identifier (DOI)"},"language":{"type":"string","description":"language(s) used within the dataset. If the dataset is made of numerical values, the dataset language can\\nbe set to `missing`, `withheld`, `inapplicable`, `unknown` or `template`"},"charset":{"type":"string","description":"full name of the character coding standard used for the dataset"},"title":{"type":"string","description":"name by which the cited resource is known"},"abstract":{"type":"string","description":"brief narrative summary of the content of the resource(s)"},"fees":{"type":"string","description":"fees and terms for retreiving the resource. Include monetary units (as specified in ISO 4217). If there\\nare no fees, use the term \'None\'"},"accessconstraints":{"type":"string","description":"access constraints applied to assure the protection of privacy or intellectual property, and any special\\nrestrictions or limitations on obtaining the resource or metadata. If there are no accessconstraints,\\nuse the term \'otherRestrictions\'","items":{"type":"string","enum":["patent","otherRestrictions","copyright","trademark","patentPending","restricted","license","intellectualPropertyRights"]}},"topiccategory":{"type":"array","description":"main theme(s) of the dataset","items":{"type":"string","enum":["geoscientificInformation","farming","elevation","utilitiesCommunication","oceans","boundaries","inlandWaters","intelligenceMilitary","environment","location","economy","planningCadastre","biota","health","imageryBaseMapsEarthCover","transportation","society","structure","climatologyMeteorologyAtmosphere"]}},"rights":{"type":"string","description":"name by which the cited resource is known"},"url":{"type":"string","description":"URL of the dataset to which the metadata applies"},"status":{"description":"the status of the resource(s)","items":{"type":"string","enum":["planned","historicalArchive","completed","onGoing","underDevelopment","required","obsolete"]}},"maintenancefrequency":{"description":"frequency with which modifications and deletions are made to the data after it is first produced","items":{"type":"string","enum":["continual","daily","weekly","fortnightly","monthly","quarterly","biannually","annually","asNeeded","irregular","notPlanned","unknown"]}},"browsegraphic":{"type":"string","description":"graphic that provides an illustration of the dataset"},"dates":{"type":"object","properties":{"anyOf":{"creation":{"format":"date","type":"string"},"publication":{"format":"date","type":"string"},"revision":{"format":"date","type":"string"}}}},"extents":{"type":"object","description":"spatial and temporal extents","properties":{"spatial":{"type":"array","description":"spatial extent and CRS","properties":{"bbox":{"type":"array","description":"bounding box of resource","items":{"type":"number"},"minItems":4,"maxItems":6},"crs":{"type":"string","description":"coordinate reference system of bbox","default":"http://www.opengis.net/def/crs/OGC/1.3/CRS84"}},"required":["bbox"]},"temporal":{"type":"array","description":"temporal extent of resource","properties":{"begin":{"type":["string","null"],"format":"date-time","nullable":true},"end":{"type":["string","null"],"format":"date-time","nullable":true},"resolution":{"type":"string","description":"Minimum time period resolvable in the dataset, as an ISO 8601 duration"}}}},"required":["spatial"]},"keywords":{"type":"object","patternProperties":{"^.*":{"type":"object","description":"The key name indicates the type of keywords (either schema specific\\nof user defined).  The values are the keywords, type, and codelists.","properties":{"keywords":{"type":"array","items":{"type":"string"},"description":"category keywords"},"keywords_type":{"type":"string","description":"subject matter used to group similar keywords","enum":["discipline","place","stratum","temporal","theme"]},"keywords_codelist":{"type":"string","description":"specific code list URL (for advanced use cases, else the default\\nis as per the given specified schema)"},"vocabulary":{"type":"object","properties":{"name":{"description":"name of the source of keywords"},"url":{"type":"string","format":"uri","description":"URL of source of keywords"}},"required":["name"]}}}}}},"required":["language","charset","title","abstract","topiccategory","fees","accessconstraints","rights","url","status","maintenancefrequency","dates","extents","keywords"]},"content_info":{"type":"object","title":"Content information","properties":{"type":{"type":"string","description":"Content type","enum":["coverage","image","feature_catalogue"]},"cloud_cover":{"type":"number","description":"area of the dataset obscured by clouds, expressed as a percentage\\nof the spatial extent"},"processing_level":{"type":"string","description":"image distributor’s code that identifies the level of radiometric\\nand geometric processing that has been applied"},"attributes":{"type":"array","title":"Feature catalogue","minItems":0,"items":{"type":"object","properties":{"name":{"type":"string","description":"attribute name"},"type":{"type":"string","description":"data type of attribute","enum":["string","number","integer","object","array","boolean"]},"units":{"type":"string","description":"SI Unit"},"title":{"type":"string","description":"human readable title of attribute"},"abstract":{"description":"description of attribute"},"url":{"type":"string","description":"URL with more information about the attribute"}},"required":["name"]}},"dimensions":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string","description":"name of dimension"},"units":{"type":"string","description":"units in which sensor wavelengths are expressed"},"min":{"type":"number","description":"shortest wavelength that the sensor is capable of collecting within a designated band"},"max":{"type":"number","description":"longest wavelength that the sensor is capable of collecting within a designated band"}},"required":["name","units","min","max"]}}},"required":["type","dimensions"]},"contact":{"title":"Contacts","patternProperties":{"^.*":{"type":"object","description":"MCFs can have 1..n contact sections as required using nesting\\nA contact with a key called `pointOfContact` is minimally required.","properties":{"organization":{"description":"name of the responsible organization"},"url":{"type":"string","format":"uri","description":"on-line information that can be used to contact the individual or organization"},"individualname":{"description":"name of the responsible person-surname"},"positionname":{"description":"role or position of the responsible person"},"phone":{"type":"string","description":"telephone number by which individuals can speak to the responsible organization or individual"},"fax":{"type":"string","description":"telephone number of a facsimile machine for the responsible organization or individual"},"address":{"description":"address line for the location (as described in ISO 11180)"},"city":{"description":"city of the location"},"administrativearea":{"description":"city of the location"},"postalcode":{"type":"string","description":"ZIP or other postal code"},"country":{"description":"country of the physical address"},"email":{"type":"string","description":"address of the electronic mailbox of the responsible organization or individual"},"hoursofservice":{"description":"time period (including time zone) when individuals can contact the organization or individual"},"contactinstructions":{"description":"supplementalinstructions on how or when to contact the individual or organization"}},"required":["organization","url","individualname","positionname","phone","fax","address","city","administrativearea","postalcode","country","email"]}}},"distribution":{"title":"Distributions","patternProperties":{"^.*":{"type":"object","description":"MCFs can have 1..n distribution sections as required using nesting.","properties":{"url":{"type":"string","format":"uri","description":"location (address) for on-line access using a Uniform Resource Locator address or similar addressing scheme such as http://www.isotc211.org/"},"type":{"type":"string","description":"connection protocol to be used. Must be one of the `identifier` values from https://github.com/OSGeo/Cat-Interop/blob/master/LinkPropertyLookupTable.csv"},"name":{"description":"name of the online resource"},"description":{"description":"detailed text description of what the online resources is/does"},"function":{"type":"string","description":"code for function performed by the online resource","enum":["download","information","offlineAccess","order","search"]},"format":{"description":"Format of the distribution method"}},"required":["url","type","name","description","function"]}}},"dataquality":{"type":"object","title":"Data quality","properties":{"scope":{"type":"object","properties":{"level":{"type":"string","description":"hierarchical level of the data specificed by the scope"}}},"lineage":{"type":"object","properties":{"statement":{"type":"string","description":"general explanationn of the data producer\'s knowledge about the lineage of a dataset"}}}}},"acquisition":{"type":"object","title":"Acquisition","properties":{"platforms":{"type":"array","items":{"type":"object","properties":{"identifier":{"type":"string","description":"unique identification of the platform"},"description":{"type":"string","description":"platform description"},"instruments":{"type":"array","items":{"type":"object","properties":{"identifier":{"type":"string","description":"instrument identifier"},"type":{"type":"string","description":"instrument type"}}}}},"required":["identifier","description","instruments"]}}},"required":["platforms"]}},"required":["mcf","metadata","spatial","identification","contact","distribution"],"definitions":{"any_type":{"type":["string","number","integer","object","array","boolean"]},"i18n_array":{"oneOf":[{"type":"string"},{"type":"object","patternProperties":{".*_\\\\w{2}$":{"allOf":[{"type":"array","items":{"type":"string"}}]}}}]},"i18n_string":{"oneOf":[{"type":"string"},{"type":"object","patternProperties":{".*_\\\\w{2}$":{"allOf":[{"type":"string"}]}}}]},"date_or_datetime_string":{"anyOf":[{"type":"string","format":"date"},{"type":"string","format":"date-time"}]}}}')},9047:function(e){"use strict";e.exports=JSON.parse('{"mcf":{"version":""},"metadata":{"dataseturi":"","hierarchylevel":"","identifier":""},"distribution":{"first":[{"name":"","href":"","protocol":""}]},"contact":{"pointOfContact":[{"organisation":"","email":"","role":""}]},"identification":{"id":"","title":"","abstract":"","temporalextent":"","geographicalextent":"","modDate":"","keywords":[],"language":"en","status":"completed","maintenancefrequency":"irregular","usageconstraints":"CC-BY","accessconstraints":"0","topic":"geoscientificInformation","scale":"","crs":""}}')},3615:function(e){"use strict";e.exports=JSON.parse('{"type":"object","required":["id","type","time","geometry","properties"],"properties":{"id":{"title":"Identification","type":"string","description":"A unique identifier of the catalogue record.","format":"uri"},"conformsTo":{"type":"string","x-display":"hidden","enum":["Feature"]},"type":{"type":"string","x-display":"hidden","enum":["Feature"]},"time":{"title":"Time","type":"string","format":"date-time"},"geometry":{"title":"Geometry","type":"object","required":["type","coordinates"],"properties":{"type":{"type":"string","x-display":"hidden","enum":["Point"]},"coordinates":{"type":"array","minItems":2,"items":{"type":"number"}}}},"properties":{"title":"Properties","type":"object","required":["type","title"],"properties":{"recordCreated":{"type":"string","description":"Date of creation of this record.","format":"date-time"},"recordUpdated":{"type":"string","description":"The most recent date on which the record was changed.","format":"date-time"},"type":{"type":"string","description":"The nature or genre of the resource. The value should be a code, convenient for filtering the records. Where available, a link to the canonical URI of the record type resource will be added to the \'links\' property.","enum":["dataset","service","feature","software"],"maxLength":64},"title":{"type":"string","description":"A human-readable name given to the resource."},"description":{"type":"string","description":"A free-text account of the resource."},"keywords":{"type":"array","description":"The topic or topics of the resource. Typically represented using free-form keywords, tags, key phrases, or classification codes.","items":{"type":"string"}},"language":{"type":"string","description":"The natural language used for textual values (e.g. titles, descriptions, etc.) of the resource. ISO 639-1/639-2 codes should be used.","default":"en"},"externalIds":{"type":"array","description":"An identifier for the resource assigned by an external (to the catalogue) entity.","items":{"type":"object","properties":{"scheme":{"type":"string","description":"A reference to an authority or identifier for a knowledge organization system from which the external identifier was obtained.  It is recommended that the identifier be a resolvable URI.","value":{"type":"string","description":"The value of the identifier."}}},"required":["value"]}},"created":{"type":"string","description":"Date of creation of the resource.","format":"date-time"},"updated":{"type":"string","description":"Most recent date on which the resource was changed.","format":"date-time"},"themes":{"type":"array","description":"A knowledge organization system used to classify the resource.","items":{"type":"object","properties":{"concepts":{"type":"array","description":"One or more entity/concept identifers from this knowledge system. it is recommended that a resolvable URI be used for each entity/concept identifier.","items":{"type":"string"}},"scheme":{"type":"string","description":"An identifier for the knowledge organization system used to classify the resource.  It is recommended that the identifier be a resolvable URI."}}}},"formats":{"type":"array","description":"A list of available distributions of the resource.","items":{"type":"string"}},"providers":{"type":"array","items":{"oneOf":[{"type":"string","description":"A reference to information about the responsible party.  For example,\\na link to a VCard (see https://www.w3.org/TR/vcard-rdf/).","format":"url"},{"type":"object","description":"Identification of, and means of communication with, person responsible\\nfor the resource.","required":["name"],"properties":{"identifier":{"type":"string","description":"A value uniquely identifying a party (individual or organization)"},"name":{"type":"string","description":"The name of the organization or the individual."},"positionName":{"type":"string","description":"Role or position of the responsible person."},"logo":{"type":"string","description":"Graphic identifying a party"},"contactInfo":{"type":"object","description":"Information required to enable contact with the responsible party.","properties":{"phone":{"type":"object","description":"Telephone numbers at which contact can be made.","patternProperties":{"^.*":{"type":"string","description":"The key name indicates the type of phone number (e.g. home,\\nwork, fax, etc.). The value is the phone number itself.","pattern":"^+[1-9]{1}[0-9]{3,14}$"}}},"email":{"type":"object","description":"Email address at which contact can be made.","patternProperties":{"^.*":{"type":"string","description":"The key name indicates the type of email address (e.g. home,\\nwork, etc.). The value of the email address itself.","format":"email"}}},"address":{"type":"object","description":"Physical location at which contact can be made.","patternProperties":{"^.*":{"type":"object","description":"The key name indicates the type of address (e.g. office,\\nhome, etc.). The value is the address itself.","properties":{"deliveryPoint":{"type":"string","description":"Address line for the location."},"city":{"type":"string","description":"City for the location."},"administrativeArea":{"type":"string","description":"State or province of the location."},"postalCode":{"type":"string","description":"ZIP or other postal code."},"country":{"type":"string","description":"Country of the physical address."}}}}},"url":{"type":"string","description":"On-line information about the responsible party."},"hoursOfService":{"type":"string","description":"Time period (including time zone) when the resposible party\\ncan be contacted."},"contactInstructions":{"type":"string","description":"Supplemental instructions on how or when to contact the\\nresponsible party."}}},"roles":{"type":"array","items":{"type":"object","description":"The function performed by the responsible party. Suggested codelists include the STAC Collection\\nProvider roles as well as ISO 19115.","required":["name"],"properties":{"name":{"type":"string"},"authority":{"type":"string","format":"uri"}}}}}}]},"description":"A list of providers qualified by their role in association to the record."},"license":{"type":"string","description":"A legal document under which the resource is made available. The value should be a code, convenient for filtering the records. Where applicable, the use of the identifiers from the SPDX License List is recommended. If multiple licenses apply, it is recommended to use \\"various\\".  Where available, links to a URI of each applicable license should be added to the \'links\' property.","maxLength":64},"rights":{"type":"string","description":"A statement that concerns all rights not addressed by the license such as a copyright statement."}}},"links":{"title":"Links","type":"array","description":"A list of links for accessing the resource (e.g. download link, access link) in one of the supported distribution formats and/or links to other resources associated with this resource. Also, a list of links for navigating the API (e.g. prev, next, etc.).","items":{"type":"object","required":["href"],"properties":{"href":{"type":"string","format":"url"},"rel":{"type":"string"},"type":{"type":"string"},"hreflang":{"type":"string"},"title":{"type":"string"},"templated":{"type":"boolean"},"variables":{"description":"This object contains one key per substitution variable in a templated\\nhref.  Each key defines the schema of one substitution variable using\\na JSON Schema fragment and can thus include things like the data type\\nof the variable, enumerations, minimum values, maximum values, etc.\\nIn combination with a templated href, the variables section should\\nprovide enough information to bind to the target resource (e.g. a WMS).","type":"object"}}}}}}')},9161:function(e){"use strict";e.exports=JSON.parse('{"conformsTo":"Feature","type":"Feature","geometry":{"type":"Point","coordinates":[]}}')}},t={};function i(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=e,function(){i.amdO={}}(),function(){var e=[];i.O=function(t,r,o,n){if(!r){var a=1/0;for(p=0;p<e.length;p++){r=e[p][0],o=e[p][1],n=e[p][2];for(var s=!0,d=0;d<r.length;d++)(!1&n||a>=n)&&Object.keys(i.O).every((function(e){return i.O[e](r[d])}))?r.splice(d--,1):(s=!1,n<a&&(a=n));if(s){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,o,n]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,a=r[0],s=r[1],d=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(d)var p=d(i)}for(t&&t(r);c<a.length;c++)n=a[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(p)},r=self["webpackChunkmdme"]=self["webpackChunkmdme"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(6346)}));r=i.O(r)})();
//# sourceMappingURL=app.357b9d6f.js.map