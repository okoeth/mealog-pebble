var UI = require('ui');
var Vector2 = require('vector2');
var DateHelper = require('date_helper');
var Layout = require('layout_constants');
var Toolbar = require('toolbar_decorator');
var Option = require('option_decorator');

/**
 * Add window layout variables
 */
var l_category_width=120;
var l_category_height=30;
var l_value_y=28;
var l_sample_y=62;

var select_category=true;

var window = new UI.Window({ fullscreen: 'true' });

var category_option = {
  parent : window,
  position : new Vector2(Layout.left_margin_x, Layout.top_margin_y),
  size : new Vector2(l_category_width, l_category_height),
  font : 'gothic-24',
  color : 'black',
  options : ['Sweet', 'Savory', 'Water', 'Alcohol'],
  index : 0,
  text : null
};

var value_option = {
  parent : window,
  position: new Vector2(Layout.left_margin_x, l_value_y),
  size : new Vector2(l_category_width, l_category_height),
  font : 'bitham-30-black',
  color : 'black',
  options : [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
  index : 0,
  text : null
};

var sample_option = null;

var sweet_option = {
  parent : window,
  position: new Vector2(Layout.left_margin_x, l_sample_y),
  size : new Vector2(l_category_width, l_category_height),
  font : 'gothic-14',
  color : 'black',
  options : [
    // 100,
    'Sweet stuff with 100 kcals',
    // 200, 
    'Sweet stuff with 200 kcals',
    // 300, 
    'Sweet stuff with 300 kcals',
    // 400, 
    'Sweet stuff with 400 kcals',
    // 500, 
    'Sweet stuff with 500 kcals',
    // 600, 
    'Sweet stuff with 600 kcals',
    // 700, 
    'Sweet stuff with 700 kcals',
    // 800, 
    'Sweet stuff with 800 kcals',
    // 900, 
    'Sweet stuff with 900 kcals',
    // 1000
    'Sweet stuff with 1000 kcals'
  ],
  index : 0,
  text : null
};

var savory_option = {
  parent : window,
  position: new Vector2(Layout.left_margin_x, l_sample_y),
  size : new Vector2(l_category_width, l_category_height),
  font : 'gothic-14',
  color : 'black',
  options : [
    // 100,
    'Savory stuff with 100 kcals',
    // 200, 
    'Savory stuff with 200 kcals',
    // 300, 
    'Savory stuff with 300 kcals',
    // 400, 
    'Savory stuff with 400 kcals',
    // 500, 
    'Savory stuff with 500 kcals',
    // 600, 
    'Savory stuff with 600 kcals',
    // 700, 
    'Savory stuff with 700 kcals',
    // 800, 
    'Savory stuff with 800 kcals',
    // 900, 
    'Savory stuff with 900 kcals',
    // 1000
    'Savory stuff with 1000 kcals'
  ],
  index : 0,
  text : null
};

/**
 * Add window model
 */
var model=null;

exports.setModel=function(model_p) {
  model=model_p;
};

/**
 * Add window wiring
 */
var main_view = null;

exports.setMainView=function(main_view_p) {
  main_view=main_view_p;
};

/**
 * Add window construction
 */
exports.create=function() {
  var background = new UI.Rect({
    position: new Vector2(0, 0),
    size: new Vector2(Layout.max_x, Layout.max_y),
    backgroundColor: 'white',
    borderColor: 'clear'
  });  
  window.add(background);
  Toolbar.decorate(window, '+', 'C', '-');
};

/**
 * Add window initialisation
 */
exports.init=function() {
  select_category=true; 
  Option.decorate(category_option);
  Option.undecorate(value_option);
  Option.undecorate(sweet_option);
  Option.undecorate(savory_option);
  sample_option=null;
};

/**
 * Add window functions
 */
window.on('click', 'up', function() {
  if (select_category) {
    Option.decorate_next(category_option);
  } else {
    Option.decorate_next(value_option);
    Option.decorate_next(sample_option);
  }
});

window.on('click', 'down', function() {
  if (select_category) {
    Option.decorate_prev(category_option);
  } else {
    Option.decorate_prev(value_option);
    Option.decorate_prev(sample_option);
  }
});

window.on('click', 'select', function() {
  if (select_category) {
    select_category = false;
    Option.decorate(value_option);
    if (category_option.options[category_option.index]=='Sweet') {
      sample_option=sweet_option;
      Option.decorate(sweet_option);
    }
    else if (category_option.options[category_option.index]=='Savory') {
      sample_option=savory_option;
      Option.decorate(savory_option);
    }
  } else {
    var add_item = {
      date : DateHelper.today(),
      category : category_option.options[category_option.index],
      value : value_option.options[value_option.index]
    };
    model.push (add_item);
    localStorage.setItem(1, JSON.stringify(model));
    main_view.init();
    window.hide();
  }
});

exports.window=window;
