/*
  {
    "index": NumberInt(0),
    "name": "Aurelia Gonzales",
    "isActive": false,
    "registered": ISODate("2015-02-11T04:22:39+0000"),
    "age": NumberInt(20),
    "gender": "female",
    "eyeColor": "green",
    "favoriteFruit": "banana",
    "company": {
      "title": "YURTURE",
      "email": "aureliagonzales@yurture.com",
      "phone": "+1 (940) 501-3963",
      "location": {
        "country": "USA",
        "address": "694 Hewes Street"
      }
    },
    "tags": [
      "enim",
      "id",
      "velit",
      "ad",
      "consequat"
    ]
  },
  {
    "index": NumberInt(1),
    "name": "Kitty Snow",
    "isActive": false,
    "registered": ISODate("2018-01-23T04:46:15+0000"),
    "age": NumberInt(38),
    "gender": "female",
    "eyeColor": "blue",
    "favoriteFruit": "apple",
    "company": {
      "title": "DIGITALUS",
      "email": "kittysnow@digitalus.com",
      "phone": "+1 (949) 568-3470",
      "location": {
        "country": "Italy",
        "address": "154 Arlington Avenue"
      }
    },
    "tags": [
      "ut",
      "voluptate",
      "consequat",
      "consequat"
    ]
  },
*/

/*

Here are the MongoDB interview questions based on the given collection of documents:

1. How would you find all documents where the `gender` is "female" and `eyeColor` is "blue"?
2. How would you query documents where the `company.location.country` is "Italy"?
3. How would you find all documents that contain the tag "consequat"?
4. How would you find documents with at least two occurrences of a specific tag?
5. How would you group documents by `favoriteFruit` and count the number of documents in each group?
6. How would you group documents by `eyeColor` and calculate the average `age` for each group?
7. How would you get the names and ages of users registered in the USA, including their company titles?
8. How would you find the most common tag across all documents?
9. How would you update the `isActive` field to `true` for all users who work at the company "YURTURE"?
10. How would you add a new tag "fruitLover" to all users whose favorite fruit is "banana"?
11. How would you remove the tag "consequat" from all documents?
12. How would you delete all documents where `isActive` is `false`?
13. How would you delete all documents containing the tag "velit"?
14. How would you create an index on `company.location.country` to improve query performance?
15. How would you create a compound index on `gender` and `age`?
16. How would you find the document with the earliest registration date?
17. How would you count the number of users who have blue eyes?
18. How would you design a schema to handle multiple phone numbers for a user?
19. How would you optimize the schema for read-heavy operations?

These questions are designed to test your understanding of MongoDB operations, schema design, and performance optimization.

*/

/*

1. db.people.find({ gender: 'female', eyeColor: 'blue'   })
2. db.people.find({'company.location.country': 'Italy'})
3. db.people.find({tags: 'consequat'})
4. 
5. db.people.aggregate({ $group: { _id: '$favoriteFruit', count: { $sum: 1} } })
6. db.people.aggregate({ $group: { _id: '$eyeColor', avgAge : { $avg: '$age'} } })
7. db.people.find({'company.location.country': 'USA'},{name:1,age:1,'company.title':1})
8. 
9. db.people.updateMany({'company.title': 'YURTURE'}, { $set: { isActive: true } })
10. db.people.updateMany({'favoriteFruit': 'banana'}, { $push: { tags: 'fruitLover' }})
11. db.people.updateMany({}, { $pull: { tags: 'consequat' }})
12. db.people.deleteMany({isActive: false})
13. db.people.deleteMany({tags: 'velit'})
14. db.people.createIndex({'company.location.country':1})
15. 
16. db.people.aggregate([{$sort:{ registred: 1   }},{$limit: 1}])
17. db.people.countDocuments({eyeColor:'blue'})
18. 
19.

*/

/*

Here are the practice questions:

1. **$group**:  
   Group the documents by `gender` and calculate the average `age` and the count of users for each gender.

2. **$out**:  
   Write an aggregation pipeline that groups the documents by `eyeColor` and then saves the results into a new collection called `EyeColorSummary`.

3. **$merge**:  
   Group the documents by `favoriteFruit` and merge the results into an existing collection called `FavoriteFruitSummary`. If the document already exists, update it; otherwise, insert a new document.

4. **$expr - Compare fields in the same document**:  
   Find all documents where the `index` field is equal to the `age` field.

5. **$elemMatch - Embedded documents in an array**:  
   Find all documents where the `tags` array contains both `"consequat"` and `"id"`.

*/

/*

1. db.people.aggregate({$group: {  _id: '$gender', avgAge: {  $avg: '$age' }     }})
2. db.people.aggregate([{$group: {  _id: '$eyeColor', count: {  $sum : 1 }     }},{$out: 'EyeColorSummary'}])
3. db.people.aggregate([{$group: { _id: '$favoriteFruit', count: { $sum: 1 }  }}, { $merge: {  into:"FavoriteFruitSummary", whenMatched: "merge",whenNotMatched: "insert"}   }  ])
4. db.people.find({ $expr: { $eq : [  '$index' , '$age'] } })

db.survey.insertMany( [
   { "_id": 1, "results": [ { "product": "abc", "score": 10 },
                            { "product": "xyz", "score": 5 } ] },
   { "_id": 2, "results": [ { "product": "abc", "score": 8 },
                            { "product": "xyz", "score": 7 } ] },
   { "_id": 3, "results": [ { "product": "abc", "score": 7 },
                            { "product": "xyz", "score": 8 } ] },
   { "_id": 4, "results": [ { "product": "abc", "score": 7 },
                            { "product": "def", "score": 8 } ] },
   { "_id": 5, "results": { "product": "xyz", "score": 7 } }
] )


5. db.survey.find({results: { $elemMatch: { product : "xyz", score: { $gte: 8 }   }  }})

db.students.insertMany([
{
 _id: 1,
 zipcode: "63109",
 students: [
              { name: "john", school: 102, age: 10 },
              { name: "jess", school: 102, age: 11 },
              { name: "jeff", school: 108, age: 15 }
           ]
},
{
 _id: 2,
 zipcode: "63110",
 students: [
              { name: "ajax", school: 100, age: 7 },
              { name: "achilles", school: 100, age: 8 },
           ]
},
{
 _id: 3,
 zipcode: "63109",
 students: [
              { name: "ajax", school: 100, age: 7 },
              { name: "achilles", school: 100, age: 8 },
           ]
},
{
 _id: 4,
 zipcode: "63109",
 students: [
              { name: "barney", school: 102, age: 7 },
              { name: "ruth", school: 102, age: 16 },
           ]
}
])

db.

*/