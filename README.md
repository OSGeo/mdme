
![MDME](./src/components/img/logo.svg)

A web based (node/vuejs) application to populate yml/json oriented [metadata records](https://en.wikipedia.org/wiki/Geospatial_metadata). The editor supports multiple metadata models (and can easily be extended),  currently supported are: 
- [mcf](https://geopython.github.io/pygeometa/reference/mcf/) 
- [ogcapi-records](https://ogcapi.ogc.org/records/) 
- [datapackage](https://specs.frictionlessdata.io/data-package/)

The app is currently in BETA, improvement suggestions very welcomed.

A default installation of the app is available via [github.io](https://osgeo.github.io/mdme).

## Capabilities 

- Open local metadata (mcf)
- Import metadata from:
  - DOI (extract DOI metadata as bibtex)
  - WMS (extract metadata from capabilities)
  - iso19139 (TODO!)
- edit metadata
- save metadata 

Note that the application runs client side only. No content is send to a server. Although the client can easily be extended to store the output in a git repository or a catalogue system, like [pygeoapi](https://pygeoapi.io), [pycsw](https://pycsw.org), [geonetwork](https://geonetwork-opensource.org) or [ckan](https://ckan.org).

## About MCF

Metadata is exported in the [Metadata Control File](https://geopython.github.io/pygeometa/reference/mcf/) (mcf) format. The format is encoded as yaml, which is an optimal format for content versioning in a git repository. When alternate formats are needed (iso19115, dcat, STAC), you can transform mcf to these using [pygeometa](https://geopython.github.io/pygeometa/) or [pyGeoDataCrawler](https://github.com/pvgenuchten/pyGeoDataCrawler).

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

## Configuration

Configure `vocab` in app.vue on which schema to use, [mcf](https://geopython.github.io/pygeometa/reference/mcf/), [ogcapi-records](https://ogcapi.ogc.org/records/) or [datapackage](https://specs.frictionlessdata.io/data-package/).

Models are defined in `/models/{model}/model.json`. Very welcome to adjust the existing schema's or add a new one.

## Vuetify JSON Schema Form

The library [vjsf](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/examples#basic) uses a json-schema definition to render a form. Some special fields ('x-display: 'hidden') are added to the schema file to enrich vizualisation. 

MCF introduces contacts and distributions as key-value pairs. This pattern is not supported by vsjf. For this reason contacts and distributions are converted to array at loading time and back to object when saving.

## License 

MIT


