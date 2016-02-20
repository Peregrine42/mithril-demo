//= require mithril_query
//= require mithril_node_render
//= require mithril_matchers

describe("LineGraph", function() {
  beforeEach(function() {
    jasmine.addMatchers(mithrilMatchers);
    LineGraph.properties = LineGraph.getDefaults();
  });
  
  it("has a view method which produces a title", function() {
    var output = LineGraph.view(LineGraph.controller())
    $output = mithrilQuery(output)
    expect($output).toHave('div > h1:contains(Line Graph)')
  })
  
  it("has some initial data", function() {
    LineGraph.properties.data = [0.4, 0.3, 0.9];
    expect(LineGraph.controller().data).toEqual([0.4, 0.3, 0.9])
  })
  
  it("renders the initial data as a series of svg paths", function() {
    LineGraph.properties.data = [0.3, 0.2];
    var output = LineGraph.view(LineGraph.controller())
    $output = mithrilQuery(output)
    expect($output).toHave('div > svg > path')
  })

  it("can turn numbers between 0 and 1 into a series of lines", function() {
    expect(LineGraph.lines([0, 1, 0.5, 0.1], 100, 100)).toEqual([
      m("path", { d: "M 0 100 L 25 0",  stroke: "black", "stroke-width": 1 }),
      m("path", { d: "M 25 0 L 50 50",  stroke: "black", "stroke-width": 1 }),
      m("path", { d: "M 50 50 L 75 90", stroke: "black", "stroke-width": 1 })
    ])
  })
})
