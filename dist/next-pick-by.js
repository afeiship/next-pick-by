/*!
 * name: @feizheng/next-pick-by
 * description: Pick value from object by callback.
 * homepage: https://github.com/afeiship/next-pick-by
 * version: 1.0.0
 * date: 2020-07-30T03:29:14.226Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.pickBy = function (inObject, inCallback, inContext) {
    var result = {};
    nx.forIn(inObject, function (key, value) {
      if (inCallback.apply(inContext, arguments)) {
        nx.set(result, key, value);
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pickBy;
  }
})();
