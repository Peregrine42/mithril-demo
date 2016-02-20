//= require mithril_query
//= require mithril_node_render
//= require mithril_matchers

describe("BarGraph", function() {
  beforeEach(function() {
    jasmine.addMatchers(mithrilMatchers);
    BarGraph.properties = BarGraph.getDefaults();
  });
  
  it("has a view method which produces a title", function() {
    var output = BarGraph.view(BarGraph.controller())
    $output = mithrilQuery(output)
    expect($output).toHave('div > h1:contains(Bar Graph)')
  })
  
  it("has some initial data", function() {
    BarGraph.properties.data = [0.4,0.3,0.9];
    expect(BarGraph.controller().data).toEqual([0.4,0.3,0.9])
  })
  
  it("renders the initial data as a series of svg rects", function() {
    BarGraph.properties.data = [0.3];
    var output = BarGraph.view(BarGraph.controller())
    $output = mithrilQuery(output)
    expect($output).toHave('div > svg > rect')
  })
  
  it("turns values between 0 and 1 into columns", function() {
    var width = 40; var height = 40;
    expect(BarGraph.columns([0, 1, 0.5, 0.2], width, height)).toEqual([
      m("rect", { x: 0,  y: 40, width: 10, height: 0  }),
      m("rect", { x: 10, y: 0,  width: 10, height: 40 }),
      m("rect", { x: 20, y: 20, width: 10, height: 20 }),
      m("rect", { x: 30, y: 32, width: 10, height: 8  })
    ])
  })
})
