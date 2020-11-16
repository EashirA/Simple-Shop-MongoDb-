const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const MongoDbUrl = 'mongodb+srv://Arafat:arafat007@mongodbcluster001.akzag.mongodb.net/shop?retryWrites=true&w=majority';

let _db;
//Establishing Connection
const initDb = callback => {
    if(_db){
        console.log('Database is alredy initialized!');
        return callback(null, _db)
    }

    MongoClient.connect(MongoDbUrl)
    .then(client => {
        _db=client;
        callback(null, _db);
    })
    .catch(err =>{
        callback(err)
    });
}

//Get access to an existing connection
const getDb = () => {
  if(!_db){
    throw Error('Database is not initialized!');
  }  
  return _db;
}

module.exports= {
    initDb, 
    getDb 
}