# domain-glossary-geocode

![test](https://github.com/ehmpathy/domain-glossary-geocode/workflows/test/badge.svg)
![publish](https://github.com/ehmpathy/domain-glossary-geocode/workflows/publish/badge.svg)

A glossary of intuitive, universally unambiguous geocode definitions and procedures.

# purpose

enable static-type checks for geocodes
- `Geocode` = `AsOfGlossary<string, 'Geocode'>`
- `isGeocode`

# install

```sh
npm install domain-glossary-geocode
```

# use

## Geocode

### declare that a given variable is a geocode

```ts
const geocode: Geocode;
```


### assure that a given string is a geocode

```ts
const geocode: Geocode = isGeocode.assure('33127');
```

