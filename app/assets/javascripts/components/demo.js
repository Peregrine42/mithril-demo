var Demo = {
  controller: function(data) {
    return { 
      data: data || []
    }
  },
  columns: function(data){
    return data.map(function(datum) { return m("rect") })
  },
  view: function(ctrl) {
    return m('div', [
      m('h1', ['Bar Graph']),
      m('div', { style: { width: "600px", height: "300px" } }, [
        m('svg[height=100%][width=100%]', {}, Demo.columns(ctrl.data))
      ])
    ])
  }
}