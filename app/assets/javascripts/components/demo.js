//= require mithril

var Demo = {
  controller: function(data, width, height) {
    return { 
      data: data || [],
      width: width,
      height: height
    }
  },
  column: function(datum, data, index, width, height) {
    var x = (width / data.length) * index;
    var y = height * (1 - datum);
    var columnWidth = width / data.length;
    var columnHeight = height * datum;
    return m("rect", { x: x, y: y, width: columnWidth, height: columnHeight });
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
        m('svg', { width: ctrl.width, height: ctrl.height }, 
          Demo.columns(ctrl.data, ctrl.width, ctrl.height)
        )
      ])
    ])
  }
}