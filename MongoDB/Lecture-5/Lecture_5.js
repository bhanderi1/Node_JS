
// group:-
db.Book.aggregate([
    {
        $group: {
            _id: "$country",
            total:{
                $sum:1
            },
        },
    }
 ])
 
 db.Students.insertMany([
     {
         "studentId": "std001",
         "stdName"  : "srushti",
         "Course"   : "Fll-stack",
         "faculty"  : "tea002"
     },
          {
         "studentId": "std002",
         "stdName"  : "Jsami",
         "Course"   : "Fll-stack",
         "faculty"  : "tea003"
     },   
     {
         "studentId": "std003",
         "stdName"  : "Meet",
         "Course"   : "Fll-stack",
         "faculty"  : "tea002"
     },
          {
         "studentId": "std004",
         "stdName"  : "Romil",
         "Course"   : "Fll-stack",
         "faculty"  : "tea002"
     },
          {
         "studentId": "std005",
         "stdName"  : "Ani",
         "Course"   : "Fll-stack",
         "faculty"  : "tea002"
     },
     ])
     
 db.Teachers.insertMany([
     {
         "TeacherId": "tea001",
         "TeacherName"  : "Kiran",
     },
          {
         "TeacherId": "tea002",
          "TeacherName"  : "Nandini",
     },   
     {
         "TeacherId": "tea003",
          "TeacherName"   : "Janvi",
     },
])


db.Students.find({})
db.Teachers.find({})


// lookup & Unwind :- remove to the array
db.Students.aggregate([
    {
        $lookup: {
              from: "Teachers",
              localField: "faculty",
              foreignField: "TeacherId",
              as: "faculty"
             }
    },
    {
        $unwind : "$faculty"
    }
])
    

db.Students.update({"stdName":"Jasmi"},{$currentDate : {newDate:true}})