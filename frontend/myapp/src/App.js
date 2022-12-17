import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import react, { useEffect, useState } from "react";
import { response } from 'express';


function App() {
  const [arr, setArr] = useState([]);
  const [emp, setEmp] = ("");

  async function handleClick() {
    await axios.get("http://localhost:3000/getEmployees").then(response => {
      console.log(response);
      setArr(response.data);
    })
  }

  function handleChange(e){
    setEmp(e.target.value);
  }

  async function deleteEmployee(){
    // var config = {
    //   method: 'post',
    //   url: '',
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   },
    //   data : {
    //       empname: emp.ename
    //   }
    // };

    // await axios.post("http://localhost:3000/deleteEmp", {empname:emp}).then(response =>{
    //   console.log(response);
    // }).catch(err=>{
    //   console.log(err);
    // })
  }

  useEffect(
    // deleteEmployee()
  )

  return (
    <div className="App">
      <button id="btn" onClick={handleClick}>Get Data</button>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Department</th>
            <th scope="col">Designation</th>
            <th scope="col">Experience</th>
            <th scope="col">SSN</th>
            <th scope="col">Salary</th>
            <th scope="col">doj</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((data, key) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.Department}</td>
                  <td>{data.Designation}</td>
                  <td>{data.Experience}</td>
                  <td>{data.SSN}</td>
                  <td>{data.Salary}</td>
                  <td>{data.doj}</td>
                  <td>{data.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <form method='POST'>
  <div class="form-group">
    <label for="empName">Email address</label>
    <input type="text" name='empname' onChange={handleChange} class="form-control" id="empName" placeholder="Enter employee name"/> 
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>

    </div>
  );
}

export default App;
