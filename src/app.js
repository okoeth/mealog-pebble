/**
 * Mealog - Pebble.js
 *
 * Main application file assembles and wires the windows
 */


// TODO-2: Refresh today
// TODO-2: Weekly report
// TODO-3: Save on phone (i)
// TODO-4: Research samples
// Further topics: settings, bars for main, write to heroku, reports, archive

var UI = require('ui');
var Vector2 = require('vector2');
var AddView = require('add_window');
var MainView = require('main_window');

/**
 * Test Data

var model = [
{
  date : '2014-12-28',
  category : 'Sweet',
  value : 200
},
{
  date : '2014-12-28',
  category : 'Savory',
  value : 300
},
{
  date : '2014-12-28',
  category : 'Water',
  value : 400
},
{
  date : '2014-12-28',
  category : 'Alcohol',
  value : 100
}
];
*/

// TODO: Stringify / parse required?
var model_string = localStorage.getItem(1);
var model = [];
if (model_string!==null) {
  model = JSON.parse(model_string);
} else {
  console.log('No model found in local storage');
}

MainView.setModel(model);
AddView.setModel(model);

MainView.create();
AddView.create();
MainView.setAddView(AddView);
AddView.setMainView(MainView);
