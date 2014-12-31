var UI = require('ui');
var Vector2 = require('vector2');
var Layout = require('layout_constants');
var Toolbar = require('toolbar_decorator');
var Daybar = require('daybar_decorator');
var ListView = require('list_window');
var ModelHelper = require('model_helper');
var DateHelper = require('date_helper');

/**
 * Main window layout variables
 **/
var l_head_y=2;
var l_head_width=100;
var l_head_height=30;
var l_value_width=100;
var l_value_height=30;
var l_value_y=28;
var l_foot_width=120;
var l_foot_height=30;
var l_foot_y=62;
var l_daybar_x=100;
var l_daybar_y=10;
var l_daybar_height=48;
var l_offset = 82;

var window = new UI.Window({ fullscreen: 'true' });

/**
 * Main window model
 */
var model=null;

exports.setModel=function(model_p) {
  model=model_p;
};

/**
 * Main window wiring
 */
var add_view = null;

exports.setAddView=function(add_view_p) {
  add_view=add_view_p;
};

/**
 * Main window refresh values
 */
var eatValue=null;
var eatDaybar={
  parent : window,
  position : new Vector2(l_daybar_x, l_daybar_y),
  height : l_daybar_height,
  start_h : 8,
  end_h : 20,
  current : 0,
  target : 2200,
  value : null,
  time : null

};
var drinkValue=null;
var drinkDaybar={
  parent : window,
  position : new Vector2(l_daybar_x, l_daybar_y+l_offset),
  height : l_daybar_height,
  start_h : 8,
  end_h : 20,
  current : 0,
  target : 2000,
  value : null,
  time : null
};

function refresh_values() {
  var values = ModelHelper.day_overview(model, DateHelper.today());
  if (eatValue!==null) {
    window.remove(eatValue);
  }
  eatValue = new UI.Text({
    position: new Vector2(Layout.left_margin_x, l_value_y),
    size: new Vector2(l_value_width, l_value_height),
    font: 'bitham-30-black',
    text: values.eat,
    color: 'black'
  });
  window.add(eatValue);
  eatDaybar.current=values.eat;
  Daybar.decorate(eatDaybar);  
  if (drinkValue!==null) {
    window.remove(drinkValue);
  }
  drinkValue = new UI.Text({
    position: new Vector2(Layout.left_margin_x, l_value_y+l_offset),
    size: new Vector2(l_value_width, l_value_height),
    font: 'bitham-30-black',
    text: values.drink,
    color: 'black'
  });
  window.add(drinkValue);  
  drinkDaybar.current=values.drink;
  Daybar.decorate(drinkDaybar);
}

/**
 * Main window construction
 */
exports.create=function() {
  var background = new UI.Rect({
    position: new Vector2(0, 0),
    size: new Vector2(Layout.max_x, Layout.max_y),
    backgroundColor: 'white',
    borderColor: 'clear'
  });
  window.add(background);  
  var eatHead = new UI.Text({
    position: new Vector2(Layout.left_margin_x, l_head_y),
    size: new Vector2(l_head_width, l_head_height),
    font: 'gothic-24',
    text: 'Eat',
    color: 'black'
  });
  window.add(eatHead);
  var eatFoot = new UI.Text({
    position: new Vector2(Layout.left_margin_x, l_foot_y),
    size: new Vector2(l_foot_width, l_foot_height),
    font: 'gothic-14',
    text: 'kcal of 2200 kcal/day',
    color: 'black'
  });
  window.add(eatFoot);
  var drinkHead = new UI.Text({
    position: new Vector2(Layout.left_margin_x, l_head_y+l_offset),
    size: new Vector2(l_head_width, l_head_height),
    font: 'gothic-24',
    text: 'Drink',
    color: 'black'
  });  
  window.add(drinkHead);
  var drinkFoot = new UI.Text({
    position: new Vector2(Layout.left_margin_x, l_foot_y+l_offset),
    size: new Vector2(l_foot_width, l_foot_height),
    font: 'gothic-14',
    text: 'ml of 2000 ml/day',
    color: 'black'
  });
  window.add(drinkFoot);
  refresh_values();
  Toolbar.decorate(window, '+', 'i', '=');
  window.show();
};

exports.init=function() {
  refresh_values();
};

/**
 * Main window functions
 */
window.on('click', 'up', function() {
  add_view.init();
  add_view.window.show();
});

window.on('click', 'down', function() {
  ListView.setModel(model);
  ListView.create();
});

window.on('click', 'select', function() {
  var model_string = JSON.stringify(model);
  console.log('Saving data : '+model_string);
  localStorage.setItem(1, model_string);
  console.log('Data saved');
});

exports.window = window;
