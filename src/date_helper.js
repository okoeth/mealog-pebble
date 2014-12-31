/**
 * Date conversions, this app uses YYYY-MM-DD format
 **/
exports.today=function() {
  var now=new Date();
  var today_string=(1900+now.getYear())+'-'+(now.getMonth()+1)+'-'+now.getDate();
  return today_string;
};
