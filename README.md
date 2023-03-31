
![MDME](./src/components/img/logo.svg)

Web based (node/vuejs) application to populate yml/json oriented metadata records.

The editor supports multiple metadata models (and can easily be extended),  currently supported are: 
- [mcf](https://geopython.github.io/pygeometa/reference/mcf/) 
- [ogcapi-records](https://ogcapi.ogc.org/records/) 
- [datapackage](https://specs.frictionlessdata.io/data-package/)

Models are defined in `/models/{model}/model.json`. Used by [vjsf](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/examples#basic) component to build the form. Some special fields ('x-display: 'hidden') added for vizualisations. 

Capabilities: 
- Open local metadata
- Import metadata from:
  - DOI
  - WMS
  - iso19139 
- edit metadata
- save metadata

## Installation

Requires: 
- NODE 
- YARN

```
git clone https://github.com/osgeo/mdme
yarn install
yarn serve
```

Visit [localhost:8000](http://localhost:8080).

Open, Import a record, or directly start editing.

Save the generated file as mcf and postprocess it in [pygeometa](https://geopython.github.io/pygeometa).

## Configuration

Configure `vocab` in app.vue on which schema to use, [mcf](https://geopython.github.io/pygeometa/reference/mcf/), [ogcapi-records](https://ogcapi.ogc.org/records/) or [datapackage](https://specs.frictionlessdata.io/data-package/).

## License 

MIT


