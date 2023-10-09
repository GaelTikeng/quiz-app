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
      .post(process.env.VITE_AXIOS_BASE_URL + "getstudents", { userId })
      .then((response) => {
        setstudents(response.data);
        console.log("Here are the students", response);
      })
      .catch((err) => {
        console.log("Error while fetching students", err);
      });
  }, []);

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
              <hr className="hr" />
              <div className="table">
                <table>
                  <tbody>
                    <tr className="line">
                      <th>Full name</th>
                      <th>quiz title</th>
                      <th>score</th>
                      <th>Time spent</th>
                    </tr>
                    {students?.map((stud, index) => (
                      <tr key={index}>
                        <td>{stud.name}</td>
                        <td>{stud.title} </td>
                        <td>{stud.score}</td>
                        <td>{stud.timeSpent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudPerformance;
