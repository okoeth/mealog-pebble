/**
 * Calculate today's overview
 **/
exports.day_overview=function(model_p, date_p) {
  var result = {
    eat : 0,
    drink : 0
  };
  for (var item in model_p) {
    console.log(model_p[item].date);
    if (model_p[item].date==date_p) {
      if (model_p[item].category=='Sweet' || model_p[item].category=='Savory') {
        result.eat = result.eat + model_p[item].value;
      } else if (model_p[item].category=='Alcohol') {
        result.eat = result.eat + ((model_p[item].value * 45) / 100);
      } else if (model_p[item].category=='Water') {
        result.drink = result.drink + model_p[item].value;
      }
    }
  }
  return result;
};

exports.week_overview=function(model_p) {
  // TODO: Compile weekly overview
};
