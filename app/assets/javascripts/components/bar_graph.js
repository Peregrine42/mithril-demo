//= require mithril

var BarGraph = {
  controller: function() {
    BarGraph.properties || (BarGraph.properties = BarGraph.getDefaults());
    return { 
      data: BarGraph.properties.data,
      width: BarGraph.properties.dimensions.width,
      height: BarGraph.properties.dimensions.height
    }
  },
  getDefaults: function() {
    return {
      data: [],
      dimensions: { width: 0, height: 0 }
    }
  },
  column: function(datum, data, index, width, height) {
    var x = (width / data.length) * index;
    var y = height * (1 - datum);
    var columnWidth = width / data.length;
    var columnHeight = height * datum;
    return m("rect", 
      { x: x, 
        y: y, 
        width: columnWidth, 
        height: columnHeight });
  },
  columns: function(data, width, height){
    return data.map(function(datum, index) {
      return BarGraph.column(datum, data, index, width, height); 
    });
  },
  view: function(ctrl) {
    return m('div', [
      m('h1', ['Bar Graph']),
      m('div', [
        m('svg', { width: ctrl.width + "px", height: ctrl.height +"px" }, 
          BarGraph.columns(ctrl.data, ctrl.width, ctrl.height)
        )
      ])
    ])
  }
}
