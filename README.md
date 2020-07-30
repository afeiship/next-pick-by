# next-pick-by
> Pick value from object by callback.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-pick-by
```

## usage
```js
import '@feizheng/next-pick-by';

const object = {
  'a': 1,
  'c': 'c-value',
  'k1': 111,
  'k2': 222,
  'k3': 333,
  some: {
    what: {
      and: {
        deep: {
          one: 1
        }
      }
    }
  }
};

const res = nx.pickBy(object, function (key, value, item) {
  return typeof(value) === 'number';
});

// { a: 1, k1: 111, k2: 222, k3: 333 }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-pick-by/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-pick-by
[version-url]: https://npmjs.org/package/@feizheng/next-pick-by

[license-image]: https://img.shields.io/npm/l/@feizheng/next-pick-by
[license-url]: https://github.com/afeiship/next-pick-by/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-pick-by
[size-url]: https://github.com/afeiship/next-pick-by/blob/master/dist/next-pick-by.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-pick-by
[download-url]: https://www.npmjs.com/package/@feizheng/next-pick-by
