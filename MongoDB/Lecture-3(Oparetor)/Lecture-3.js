// We need to insertdata for insertMany
// it will create collection by it own self

// For importing json file
// step.1 : Download MongoDB Command Line Database Tools Download from Mongodb Tools
// step.2 : then open bin folder and copy all files 
//          next open program files - Mongodb - server - bin then patse all files in this bin folder 
// step 3 : create json file and add any dummy data into file
// step 4 : open terminal and type mongod   //If your server is already open so dont write it again
// step 5 : open git bash where json file is located mean give path and type this command
            // mongoimport --db databaseName --collection collectionName --file fileName --JsonArray


// for importing js file
// step.1 : Download MongoDB Command Line Database Tools Download from Mongodb Tools
// step.2 : then open bin folder and copy all files 
//          next open program files - Mongodb - server - bin then patse all files in this bin folder 
//step 1 : create js file
//step 2 : open terminal and type mongod //If your server is already open so dont write it again
//step 3 : open terminal and type mongosh
//step 4 : load('filename.js')


// show collections

db.Lecture.find({})
// equal to
db.Lecture.find({"userId" : {$eq : 33}})
db.Lecture.find({"totalProducts" : {$eq : 2}})

//not equal to
db.Lecture.find({"userId": {$ne : 147}})
db.Lecture.find({"totalProducts": {$ne : 2}})

// greater than
db.Lecture.find({"totalProducts": {$gt : 5}})
// greater than equal
db.Lecture.find({"totalProducts": {$gte : 5}})

// less than
db.Lecture.find({"totalProducts": {$lt : 5}})
// less than equal 
db.Lecture.find({"totalProducts": {$lte : 5}})

// in
db.Lecture.find({"totalProducts": {$in : [5,2]}})
// not in
db.Lecture.find({"totalProducts": {$nin :  [5,2]}})



// LOGICAL OPERETAER

// and
db.Lecture.find({$and: [
        {"totalProducts":5} , {"userId": {$gt : 142}}
    ]})

    //or
db.Lecture.find({$or: [
        {"totalProducts":5} , {"userId": {$gt : 142}}
    ]})

// not or
db.Lecture.find({$nor: [
    {"totalProducts":5} , {"userId": {$gt : 142}}
]})

// not
db.Lecture.find({"totalProducts" : {$not : {$lt : 3}}})


