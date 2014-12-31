var UI = require('ui');
var Vector2 = require('vector2');

var l_daybar_width=11;

exports.decorate=function(data_p){
  if (data_p.value===null && data_p.time===null) {
    var daybarFrame = new UI.Rect({
      position : data_p.position,
      size : new Vector2(l_daybar_width, data_p.height),
      backgroundColor : 'white',
      borderColor : 'black'
    });
    data_p.parent.add(daybarFrame);  
    var daybarDivider= new UI.Rect({
      position : new Vector2(data_p.position.x+5, data_p.position.y),
      size : new Vector2(1, data_p.height),
      backgroundColor : 'black',
      borderColor : 'black'
    });
    data_p.parent.add(daybarDivider);  
  } else {
    if (data_p.value!==null) {
      data_p.parent.remove(data_p.value);
    }
    if (data_p.time!==null) {
      data_p.parent.remove(data_p.time);
    }
  }
  var valueProportion=data_p.height*data_p.current/data_p.target;
  var daybarValue = new UI.Rect({
    position : new Vector2(data_p.position.x+1, data_p.position.y+data_p.height-valueProportion),
    size : new Vector2(4, valueProportion),
    backgroundColor : 'black',
    borderColor : 'black'
  });
  data_p.parent.add(daybarValue);
  var timeProportion=data_p.height*((new Date()).getHours())/24;
  var daybarTime = new UI.Rect({
    position : new Vector2(data_p.position.x+6, data_p.position.y+data_p.height-timeProportion),
    size : new Vector2(4, timeProportion),
    backgroundColor : 'black',
    borderColor : 'black'
  });
  data_p.parent.add(daybarTime);  

};

