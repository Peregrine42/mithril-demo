var mithrilMatchers = {
  toHave: function(util, customEqualityTesters) {
    return {
      compare: function(actual, expected) {
        if (expected === undefined) {
          expected = '';
        }
        var result = {};
        result.pass = util.equals(actual.has(expected), true);
        if (result.pass) {
          result.message = "Expected " + actual + " to have " + expected;
        } else {
          html = mithrilNodeRender(actual.rootEl)
          result.message = 
            "Expected " + html + 
            " to match " + expected + ", but it wasn't there.";
        }
        return result;
      }
    };
  }
};
