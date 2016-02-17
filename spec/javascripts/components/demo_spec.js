//= require mithril_query
//= require mithril_node_render

var customMatchers = {
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
          debugger
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

describe("Demo", function() {
  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });
  
  it("can produce a controller that holds the graphs", function() {
    expect(Demo.controller().graphs).toEqual([])
  })
  
  it("has a view method which produces a title", function() {
    var output = Demo.view(Demo.controller())
    $output = mithrilQuery(output)
    expect($output).toHave('div > h1:contains(Line Graph)')
  })
})