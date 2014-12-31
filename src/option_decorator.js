var UI = require('ui');

function refresh_option(option_p) {
  if (option_p.text!==null) {
    option_p.parent.remove(option_p.text);
  }
  option_p.text = new UI.Text({
    position: option_p.position,
    size: option_p.size,
    font: option_p.font,
    text: option_p.options[option_p.index],
    color: option_p.color
  });
  option_p.parent.add(option_p.text);    
}

exports.decorate=function(option_p){
  option_p.index=0;
  refresh_option(option_p);
};

exports.undecorate=function(option_p){
  option_p.index=0;
  if (option_p.text!==null) {
    option_p.parent.remove(option_p.text);
  }
};

exports.decorate_next=function(option_p){
  option_p.index = (option_p.index+1)%option_p.options.length;
  refresh_option(option_p);
};

exports.decorate_prev=function(option_p){
  option_p.index = (option_p.index+option_p.options.length-1)%option_p.options.length;
  refresh_option(option_p);
};
