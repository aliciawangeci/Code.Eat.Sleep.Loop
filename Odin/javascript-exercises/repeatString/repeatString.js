var repeatString = function(s, num) {
  if (isNaN(num) || num < 0) {
    return "ERROR";
  } else {
    return s.repeat(num);
  }
};

module.exports = repeatString;
