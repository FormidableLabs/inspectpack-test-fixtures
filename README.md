Inspectpack Test Fixtures
=========================

Packaged, ready-to-go fixtures for test scenarios that won't blow up our git size.

## Fixtures

Our basic directories:

* `src`: Source code that we build to `dist`.
* `built`: Pre-built, manually tweaked bundles.

And inputs/outputs:

* `src/bad-bundle.js` -> `dist/bad-bundle.js`
* (_config_) -> `dist/empty-manifest.js`
* `built/basic-lodash-object-expression.js`

## Releases

We have a `version` script that builds stuff.

```
$ npm version [<VERSION_STRING> | major | minor | patch]
$ npm publish
$ git push && git push --tags
```
