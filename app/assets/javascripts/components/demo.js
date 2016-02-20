//= require mithril

var Demo = {
  controller: function() {
    Demo.properties || (Demo.properties = Demo.getDefaults());
    return { 
      data: Demo.properties.data || [],
      width: Demo.properties.dimensions.width,
      height: Demo.properties.dimensions.height
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
      return Demo.column(datum, data, index, width, height); 
    });
  },
  view: function(ctrl) {
    return m('div', [
      m('h1', ['Bar Graph']),
      m('div', { style: { width: "600px", height: "300px" } }, [
        m('svg', { width: ctrl.width + "px", height: ctrl.height +"px" }, 
          Demo.columns(ctrl.data, ctrl.width, ctrl.height)
        )
      ])
    ])
  }
}
