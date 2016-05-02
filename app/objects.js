exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var result = [];
      for (var property in obj) {
        if (obj.hasOwnProperty(property)) result.push(property + ': ' + obj[property]);
      }
    return result;
  }
};
