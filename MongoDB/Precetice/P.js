// use Srushti;

// ----------------create collection-----------------------
db.createCollection("data1")
// show collections;

// -------------     inser Data  --------------------------
db.data1.insertOne({
    "name":"srushti",
    "age" :20,
})

 db.data1.find()

db.data1.insertMany([
    {
     "name":"Jasmi",
     "age" : 19
    },
    {
     "name":"Priyanshi",
     "age" :19
    }
    ])

// ---------------- Retrive Find -----------------------
db.data1.find()

db.data1.find({"age" : 19})
.projection({})
.sort({ name: 1 })
.limit(100)

db.data1.findOne({"age" : 19})
  
  
//---------------- update data ------------------------
db.data1.updateOne({"age":19} , {$set:{"bod year" : 2006}} , {upsert : true})
db.data1.updateMany({"age":19} , {$set:{"bod year" : 2006 , "passion" : "student"}} , {upsert : true})
        
        
// --------------- delete data ------------------------
db.data1.deleteOne({_id:ObjectId("6698a49adb47cd184c3ff87e")})
db.data1.deleteMany({"age" : 19})

// -------------- drop collection ---------------------
db.data1.drop()

// --------------- drop database --------------------
db.srushti.drop()
db.dropdatabase()


// ----------------------------------------------------------------------------------------------------------

//rename collection
db.data1.renameCollection("data2")

// increment
db.data1.updateMany({}, { $inc: { age: 1 } })

// current date
db.data1.updateMany({}, { $currentDate: { "Date": true } })
db.students.updateMany({"Date":{$exists: true}},{$set:{"Date":new Date("2024-07-18")}})