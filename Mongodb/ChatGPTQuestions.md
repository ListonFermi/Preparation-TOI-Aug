Here are the questions with the expected output:

1. **Find the employees who have not been assigned to any departments.**

   - **Expected Output:**

   ```json
   [{ "_id": 4, "name": "Emily Davis" }]
   ```

2. **Count the number of employees in each department.**

   - **Expected Output:**

   ```json
   [
     { "_id": "Sales", "count": 1 },
     { "_id": "Marketing", "count": 1 },
     { "_id": "HR", "count": 1 },
     { "_id": "Engineering", "count": 1 },
     { "_id": null, "count": 1 }
   ]
   ```

3. **Join employees with departments and list employee names along with their department names.**

   - **Expected Output:**

   ```json
   [
     { "_id": 1, "name": "John Doe", "department": "Sales" },
     { "_id": 2, "name": "Jane Smith", "department": "Marketing" },
     { "_id": 3, "name": "Jim Brown", "department": "HR" },
     { "_id": 5, "name": "Michael Johnson", "department": "Engineering" }
   ]
   ```

4. **Add a new field `age` with a default value of 30 to all documents in the employees collection.**

   - **Expected Output:**

   ```json
   { "acknowledged": true, "modifiedCount": 5 }
   ```

5. **Delete all employees from the HR department.**

   - **Expected Output:**

   ```json
   { "acknowledged": true, "deletedCount": 1 }
   ```

6. **Find all employees whose name starts with "Jo".**

   - **Expected Output:**

   ```json
   [
     { "_id": 1, "name": "John Doe", "department": "Sales" },
     { "_id": 5, "name": "Michael Johnson", "department": "Engineering" }
   ]
   ```

7. **Sum the ages of all employees.**

   - **Expected Output:**

   ```json
   [{ "_id": null, "totalAge": 150 }]
   ```

8. **Find the average age of employees in each department.**

   - **Expected Output:**

   ```json
   [
     { "_id": "Sales", "averageAge": 30 },
     { "_id": "Marketing", "averageAge": 30 },
     { "_id": "Engineering", "averageAge": 30 },
     { "_id": null, "averageAge": 30 }
   ]
   ```

   1. db.employees.find({department: {$exists: false}})
   2. db.employees.aggregate([{$group: { _id: '$department', count: { $sum: 1 } }}])
   3.
   4. db.employees.updateMany({},{$set: { age: 30 }})
   5. db.employees.deleteMany({})
   6. db.employees.find({ name: {$regex: '^Jo' } })
   7. db.employees.aggregate([{$group: {  _id: null , totalAge: { $sum: '$age'  }     }  }])
   8. db.employees.aggregate([{$group: { _id: '$department', avgAge: { $avg: '$age'}    }}])
