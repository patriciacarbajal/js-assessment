exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    
    return Promise.resolve().then(function() {
      return value;
    });
  },

  manipulateRemoteData: function(url) {
    var deffered = $.Deferred();
    
     $.ajax(url).then(function(res) {
       var people = $.map(res.people, function(person) {
         return person.name;
       });
       deffered.resolve(people.sort());
     });

     return deffered.promise();
   }
};