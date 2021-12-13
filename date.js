
module.exports.getDate = getDate ;

function getDate() {

  var today = new Date();

  var options = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long"
};
  var day = today.toLocaleDateString("en-us", options);
  return day;
};

module.exports.getDay = getDay ;

function getDay() {
  var today = new Date();

  var options = {
    weekday: "long",

};
var day = today.toLocaleDateString("en-us", options);
return day;
};
