import React, { useContext, useEffect, useState } from "react";
import "./StudPerformance.css";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import Sidebar from "../../component/molecule/Sidebar/Sidebar";
import { StudContext } from "../../utiles/context";
import axios from "axios";

function StudPerformance() {
  const [students, setstudents] = useState([]);
  const info = useContext(StudContext);
  const userId = info.user.id;
  useEffect(() => {
    axios
      .post(process.env.AXIOS_BASE_URL + "getstudents", { userId })
      .then((response) => {
        setstudents(response.data);
        console.log("Here are the students", response);
      })
      .catch((err) => {
        console.log("Error while fetching students", err);
      });
  }, []);

  const click = () => {
    console.log(students)
  }

  return (
    <>
      <Usersnav />
      <div className="students_score">
        <Sidebar />
        <div className="studperfom_container">
          <p className="student_p">Dashboard</p>
          <div className="studperfom_mainpage">
            <div>
              <h1 className="student_h1">Students Performances</h1>
              <hr />
              <button onClick={() => click()}>click</button>
              <div className="table">
                {students.map((stud, index) => (
                  <table key={index}>
                    <tr className="line" key={index}>
                      <th>Full name</th>
                      <th>quiz title</th>
                      <th>score</th>
                      <th>Time spent</th>
                    </tr>
                    <tr>
                      <td>{stud.name}</td>
                      <td>{stud.title} </td>
                      <td>{stud.score}</td>
                      <td>{stud.timeSpent}</td>
                    </tr>
                  </table>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudPerformance;
