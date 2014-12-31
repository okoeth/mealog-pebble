var UI = require('ui');

var window=null;

/**
 * List window model
 */
var model=null;

exports.setModel=function(model_p) {
  model=model_p;
};

/**
 * List window construction
 */
exports.create=function() {
  var menu = {
    sections : [
      {
        title : 'Reports',
        items : [
          {
            title : 'Day',
            subtitle : 'Last day'
          },
          {
            title : 'Week',
            subtitle : 'Last 7 days'
          }

        ]
      },
      {
        title : 'Items',
        items : []
      }
    ]
  };
  
  for (var item in model) {
    menu.sections[1].items.push({ 
      title : model[item].category, 
      subtitle : model[item].date+':'+model[item].value
    });
  }

  window = new UI.Menu(menu);
  
  window.on('select', function(e) {
    // TODO: Implement edit item
  });
  window.on('longSelect', function(e) {
    if (e.sectionIndex==1) {
      console.log('Delete item: '+e.itemIndex); 
      var items=window.items(1);
      items.splice(e.itemIndex, 1);
      window.items(1, items);
      model.splice(e.itemIndex, 1);
      localStorage.setItem(1, JSON.stringify(model));
      // TODO: Refresh main window, better: listen on model
    }
  });
  
  window.show();
};

exports.window=window;

