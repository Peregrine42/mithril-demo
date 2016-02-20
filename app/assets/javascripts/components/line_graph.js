var isNotANumber = function(value) {
  return value !== value;
}

var LineGraph = {
  controller: function() {
    LineGraph.properties || (LineGraph.properties = LineGraph.getDefaults());
    return {
      data: LineGraph.properties.data,
      width: LineGraph.properties.dimensions.width,
      height: LineGraph.properties.dimensions.height
    }
  },
  getDefaults: function() {
    return {
      data: [],
      dimensions: { width: 0, height: 0 }
    }
  },
  lines: function(data, width, height) {
    var result = data.map(function(datum, index) {
      var x1 = (width / data.length) * index;
      var y1 = height * (1 - datum);
      var x2 = (width / data.length) * (index + 1);
      var y2 = height * (1 - data[index+1]);
      if (isNotANumber(y2)) { return NaN }
      return m("path", {
        d: "M " + x1 + " " + y1 + " L " + x2 + " " + y2,
        stroke: "black",
        "stroke-width": 1
      })
    });
    return result.filter(function(line) { return !isNotANumber(line) });
  },
  view: function(ctrl) {
    return m("div", [
      m("h1", ["Line Graph"]),
      m('div', [
        m('svg', { width: ctrl.width + "px", height: ctrl.height +"px" }, 
          LineGraph.lines(ctrl.data, ctrl.width, ctrl.height)
        )
      ])
    ])
  }
}
