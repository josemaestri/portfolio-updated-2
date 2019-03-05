// req vars
var path = require('path');
var data = require(path.join(__dirname,'../data/data.js'));

// run the trap
// =========================
module.exports = function(app){
  app.get('/',function(req,res){
    res.render('index',{
      data: data,
      helpers:{
        ifEq: function(a,b,options){
          return (a === b) ? options.fn(this) : options.inverse(this);
        }
      }
    });
  });
};

