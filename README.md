
![MDME](./src/components/img/logo.svg)

A web based (Node/Vue.js) application to populate YAML/JSON oriented [metadata records](https://en.wikipedia.org/wiki/Geospatial_metadata). The editor supports multiple metadata models (and models can be extended), currently supported are:
- [MCF](https://geopython.github.io/pygeometa/reference/mcf/) 
- [OGC API - Records](https://ogcapi.ogc.org/records/) 
- [Data Package](https://specs.frictionlessdata.io/data-package/)

The app is currently in BETA, improvement suggestions very welcomed.

Deployment of latest version can be found at [GitHub.io](https://osgeo.github.io/mdme).

## Capabilities 

- Open local metadata (MCF)
- Import metadata from:
  - DOI (extract DOI metadata as DataCite)
  - WMS (extract metadata from Capabilities)
  - iso19139 (via metadata conversion service provided by [pygeoapi.io](https://demo.pygeoapi.io/master)
- Export metadata (via metadata conversion service)
  - iso19139
  - OGCAPI-Records
  - Spatio Temporal Asset Catalog (STAC)
  - DCAT
- edit metadata
- save metadata 

Note that the application runs client side only. No content is send to a server. Although the client can easily be extended to store the output in a Git repository or a catalogue system, like [pygeoapi](https://pygeoapi.io), [pycsw](https://pycsw.org), [Geonetwork opensource](https://geonetwork-opensource.org) or [CKAN](https://ckan.org).

Exceptions are import and export metadata, which use a metadata transformation service provided by [demo.pygeoapi.io](https://demo.pygeoapi.io/master).

## About MCF

Metadata is saved in the [Metadata Control File](https://geopython.github.io/pygeometa/reference/mcf/) (MCF) format. The format is encoded as YAML, which is a readable file format and optimal for content versioning in a Git repository. When alternate formats are needed (iso19115, DCAT, STAC), you can export to these formats using a transformation service provided by [the pygeoapi demo server](https://demo.pygeoapi.io/master/processes/pygeometa-metadata-generate) based on [pygeometa](https://geopython.github.io/). 

## Installation

Requires: 
- Node.js
- Yarn

```bash
git clone https://github.com/osgeo/mdme.git
yarn install
yarn serve
```

Visit [localhost:8000](http://localhost:8080).

## Configuration

Configure `vocab` in `app.vue` on which schema to use, [MCF](https://geopython.github.io/pygeometa/reference/mcf/), [OGC API - Records](https://ogcapi.ogc.org/records/) or [Data Package](https://specs.frictionlessdata.io/data-package/).

Models are defined in `models/{model}/model.json`. Very welcome to adjust the existing schema's or add a new one.

## Vuetify JSON Schema Form

The library [vjsf](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/examples#basic) uses a json-schema definition to render a form. Some special fields ('x-display: 'hidden') are added to the schema file to enrich vizualisation. 

MCF introduces contacts and distributions as key-value pairs. This pattern is not supported by vsjf. For this reason contacts and distributions are converted to array at loading time and back to object when saving.

## License 

MIT
