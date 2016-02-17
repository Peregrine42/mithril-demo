var Demo = {
  controller: function() {
    return {
      graphs: []
    }
  },
  view: function(ctrl) {
    return m('div', [
      m('h1', ['Line Graph'])
    ])
  }
}