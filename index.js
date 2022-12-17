const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var mysql = require('mysql');


//Creating Connection to the SQL server
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port:8889,
    database: "employees"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // var sql = "CREATE DATABASE employees";
    // con.query(sql, (err, result)=>{
    //     if(err) throw err;
    //     console.log("DB created!");
    // })

    // var sql = "CREATE TABLE employee (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), SSN VARCHAR(255), Salary VARCHAR(255), Designation VARCHAR(255), Department VARCHAR(255), Experience INT, doj VARCHAR(255)) ";
    // con.query(sql, (err, result)=>{
    //     if(err) throw err;
    //     console.log("Table Created");
    // })

    // var sql = "INSERT INTO employee (name , SSN, Salary, Designation, Department, Experience, doj) VALUES ? ";
    // var values = [
    //     ["Darshan", "123", "10000", "Developer", "Sales", 20, "10-10-2022"],
    //     ["Darshan1", "124", "20000", "TPM", "Sales", 30, "10-10-2022"],
    //     ["Darshan2", "125", "40000", "Developer", "Sales", 26, "10-10-2022"],
    //     ["Darshan3", "126", "60000", "TPM", "Production", 28, "10-10-2022"],
    //     ["Darshan4", "122", "10000", "Developer", "Sales", 78, "10-10-2022"],
    //     ["Darshan5", "129", "20000", "Developer", "Production", 12, "10-10-2022"],
    //     ["Darshan6", "121", "50000", "TPM", "Sales", 40, "10-10-2022"],
    //     ["Darshan7", "128", "60000", "Developer", "Sales", 50, "10-10-2022"],
    //     ["Darshan8", "129", "10000", "TPM", "Sales", 60, "10-10-2022"],
    //     ["Darshan9", "120", "60000", "Developer", "Production", 60, "10-10-2022"],
    // ];

    // con.query(sql, [values], (err, result)=>{
    //     if(err) throw err;
    //     console.log(result);
    // })
});

app.get("/getEmployees", (req, res)=>{

        // var name = "Darshan2";
        var sql = "SELECT * FROM employee";
        con.query(sql, (err, result)=>{
            if(err) throw err;
            res.send(JSON.parse(JSON.stringify(result)))
        })
})


app.get("/deleteEmployee", (req, res)=>{
        var experience = 20;
        var sql1 = "DELETE FROM employee WHERE Experience=?";
        if(experience === 20){
            con.query(sql1, [experience], (err, result)=>{
                if(err) throw err;
                console.log("User deleted."+result.affectedRows);
            })
        }
})

app.post("/deleteEmp", (req, res)=>{
    // console.log(req.body);
    // var sql1 = "DELETE FROM employee WHERE name=?";
    // con.query(sql1, [name], (err, result)=>{
    //     if(err) throw err;
    //     console.log(`User with Name : ${name} deleted.`+result.affectedRows);
    // })
})


app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
})