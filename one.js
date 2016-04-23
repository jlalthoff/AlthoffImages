var MongoClient = require('mongodb').MongoClient;
   MongoClient.connect('mongodb://localhost:27017/mongotest',
   function(err, db) {
       console.log('Connected to MongoDB!');
       var collection = db.collection('testing');
       collection.insert({
           'title': 'Snowcrash'
       }, function(err, result) {
           console.log(result.ops.length + ' record inserted.' );

           collection.findOne({
               title: 'Snowcrash'
           }, function(err, result) {
               console.log(result._id + ' - ' + result.title);
               db.close();
 }); });
});
