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
  
  it("has a view method which produces a title", function() {
    var output = Demo.view(Demo.controller())
    $output = mithrilQuery(output)
    expect($output).toHave('div > h1:contains(Bar Graph)')
  })
  
  it("has some initial data", function() {
    expect(Demo.controller([0.4,0.3,0.9]).data).toEqual([0.4,0.3,0.9])
  })
  
  it("renders the initial data as a series of svg rects", function() {
    var output = Demo.view(Demo.controller([0.3]))
    $output = mithrilQuery(output)
    expect($output).toHave('div > svg > rect')
  })
})