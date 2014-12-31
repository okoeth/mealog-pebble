var UI = require('ui');
var Vector2 = require('vector2');
var Layout = require('layout_constants');

/**
 * Main window layout variables
 **/
var l_tool_width=12;
var l_tool_height=50;
var l_tool_text_x=4;
var l_tool_text_y=18;
var l_tool_text_height=14;

exports.decorate=function(window, text1, text2, text3) {
  var toolbar = new UI.Rect({
    position: new Vector2(Layout.max_x-l_tool_width, 0),
    size: new Vector2(l_tool_width, Layout.max_y),
    backgroundColor: 'black',
    borderColor: 'black'
  });
  window.add(toolbar);
  var add_buttonLine1 = new UI.Rect({
    position: new Vector2(Layout.max_x-l_tool_width, l_tool_height),
    size: new Vector2(l_tool_width, 1),
    backgroundColor: 'white',
    borderColor: 'white'
  });  
  window.add(add_buttonLine1);
  var add_buttonLine2 = new UI.Rect({
    position: new Vector2(Layout.max_x-l_tool_width, Layout.max_y-l_tool_height),
    size: new Vector2(l_tool_width, 1),
    backgroundColor: 'white',
    borderColor: 'white'
  });  
  window.add(add_buttonLine2);
  var add_buttonText1 = new UI.Text({
    position: new Vector2(Layout.max_x-l_tool_width+l_tool_text_x, l_tool_text_y),
    size: new Vector2(l_tool_width, l_tool_text_height),
    font: 'gothic-14',
    text: text1,
    color: 'white'
  });  
  window.add(add_buttonText1);
  var add_buttonText2 = new UI.Text({
    position: new Vector2(Layout.max_x-l_tool_width+l_tool_text_x, 77),
    size: new Vector2(l_tool_width, l_tool_text_height),
    font: 'gothic-14',
    text: text2,
    color: 'white'
  });  
  window.add(add_buttonText2);
  var add_buttonText3 = new UI.Text({
    position: new Vector2(Layout.max_x-l_tool_width+l_tool_text_x, Layout.max_y-l_tool_height+l_tool_text_y),
    size: new Vector2(l_tool_width, l_tool_text_height),
    font: 'gothic-14',
    text: text3,
    color: 'white'
  });  
  window.add(add_buttonText3);  
};
