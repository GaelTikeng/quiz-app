import React from "react";
import "./StudPerformance.css";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import Sidebar from "../../component/molecule/Sidebar/Sidebar";

function StudPerformance() {
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
              <div className="table">
                <table>
                  <tr className="line">
                    <th>Full name</th>
                    <th>quiz title</th>
                    <th>score/10</th>
                    <th>Time spent</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
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