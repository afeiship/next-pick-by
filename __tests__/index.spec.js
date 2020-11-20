(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.pickBy', function () {
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

      expect(res).toEqual({ a: 1, k1: 111, k2: 222, k3: 333 });
    });
  });
})();
