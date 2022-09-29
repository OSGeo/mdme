# mdme [model-driven-metadata-editor]

App to fetch metadata from a dataset and complete the annotations in a basic web form.

The editor supports multiple metadata models (and can easily be extended),  currently [pygeometa](https://github.com/geopython/pygeometa)'s mcf (a yaml encoding oriented to iso19139) and ogcapi-records.

Models are defined in `/models/{model}/model.json`. Used by [vjsf](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/examples#basic) component to build the form. Some special fields ('x-display: 'hidden') added for vizualisations. Which model to use is defined in `app.vue`.

Capabilities: 
- import metadata from:
  - DOI
  - WMS
  - iso19139 upload/reference (use python api to parse iso19139)
  - upload dataset (use python api to extract metadata from data; projection, bounds, name, format, column names, data-type)
- edit metadata, the editor is generated from json-schema, change the editor by updating the schema file  
- export metadata as mcf
- persist metadata via python api (on git/pycsw/...), hope to support OGC API Records transactions soon

## installation

requires 
- NODE 
- YARN

```
yarn install
yarn serve
```

visit http://localhost:8080

Import a record, or move to 'annotate' tab directly to start editing
