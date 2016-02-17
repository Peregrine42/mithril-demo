//= require mithril_query

describe("Demo", function() {
  it("can produce a controller that holds the graphs", function() {
    expect(Demo.controller().graphs).toEqual([])
  })
})