import React from "react";

function Details() {
  let Display = () => {
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let cnum = document.getElementById("cnum").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let addr = document.getElementById("addr").value;
    alert("Hii " + name + " You've Submitted the Form!!");
  };

  return (
    <>
      <h1>Personal Details </h1>
      <br></br>
      <label>Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter Your Name" />
      <br />
      <br />
      <label>Age:</label>
      <input type="number" id="age" name="age" placeholder="Enter Your Age" />
      <br />
      <br />
      <label>DOB:</label>
      <input type="date" id="dob" name="dob" />
      <br />
      <br />
      <label>Contact Number:</label>
      <input type="tel" id="cnum" name="cnum" placeholder="Enter Your Contact Number" />
      <br />
      <br />
      <label>Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter Your Email Address"
      />
      <br />
      <br />
      <label>Address:</label>
      <textarea
        id="addr"
        name="addr"
        rows="4"
        cols="35"
        placeholder="Enter Your Address"
      ></textarea>{" "}
      <br />
      <br />
      <button onClick={Display}>Submit</button>
    </>
  );
}

export default Details;