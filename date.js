exports.getDate = function () {

var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};
var today = new Date();
return today.toLocaleDateString("en-us", options);

};
exports.getYear = function () {

var options = {
    year: "numeric"
};
var today = new Date();
return today.toLocaleDateString("en-us", options);
};