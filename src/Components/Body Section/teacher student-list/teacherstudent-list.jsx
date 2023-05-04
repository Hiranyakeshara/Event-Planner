import { useState, useEffect } from 'react';
import React  from 'react';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from '../../../firebase.config';

//import styles from "./teacherstudent-list.scss";
import Wrapper from './teacherstudent-listStyles';
import { BiFontColor } from 'react-icons/bi';
function TeacherstudentList() {
    
  const [students, setStudents] = useState([]);
  const studentsCollectionRef = collection(db, "students");

  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentsCollectionRef);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), studentid: doc.studentid })));
    
    };

    getStudents();



  },[]);

  return (
    <Wrapper>
      <div class='filter'>
        <h1>List of students</h1>
        <table>
          {students.map((student) => (
            <tr>
              <td>{student.studentid}</td>
              <td>{student.name}</td>
              <td>{student.sex}</td>
              <td>{student.email}</td>
              <td>{student.contact}</td>
              <td>{student.address}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </table>
      </div>
    </Wrapper>
  );
};

export default TeacherstudentList;
