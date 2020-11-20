/*!
 * name: @jswork/next-pick-by
 * description: Pick value from object by callback.
 * homepage: https://github.com/afeiship/next-pick-by
 * version: 1.0.0
 * date: 2020-11-20 17:34:01
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

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
