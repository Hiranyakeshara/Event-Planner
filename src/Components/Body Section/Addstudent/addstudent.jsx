import Wrapper from './addstudentStyles';
import React, { useState } from 'react';
import db from '../../../firebase/firebase.config';

const Addstudent = () => {
  const [idNo, setIdNo] = useState("");
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentRef = db.collection("students");
    const newStudent = {
      idNo: idNo,
      name: name,
      sex: sex,
      address: address,
      email: email,
      contact: contact
    };
    studentRef.add(newStudent)
      .then(() => {
        alert("Student added successfully!");
        setIdNo("");
        setName("");
        setSex("");
        setAddress("");
        setEmail("");
        setContact("");
      })
      .catch((error) => {
        console.error("Error adding student: ", error);
      });
  };
  return (
    <Wrapper>
      <div>
        <h1>Add student</h1>
      </div>
      <div class="event">
        <form onSubmit={handleSubmit}>
          <div className="event-details">
            <div className="input-box">
              <span class="details">ID NO</span>
              <input
                type="text"
                placeholder="Enter Student ID no"
                value={idNo}
                onChange={(e) => setIdNo(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span class="details">Name</span>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span class="details">Sex</span>
              <input
                type="text"
                placeholder="Enter your Sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span class="details">Address </span>
              <input
                type="text"
                placeholder="Enter your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span class="details">Email </span>
              <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span class="details">Contact </span>
              <input
                type="text"
                placeholder="Enter your Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Addstudent;

