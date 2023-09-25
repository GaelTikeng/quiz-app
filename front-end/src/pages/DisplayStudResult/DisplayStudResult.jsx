import React from 'react'
import './DisplayStudResult.css'
import Usersnav from '../../component/molecule/Usersnav/Usersnav'
import Button from '../../component/atoms/button/Button'

function DisplayStudResult() {
  return (
    <div>
        <Usersnav/>
        <div className='result-cont'>
           <div className='result-div'>
               <h1 className='stud-name'>
                Student name 
               </h1>
               <div className='score-details'>
                <p>Quiz title</p>
                <p>Score</p>
                <p>Time spent</p>
               </div>
               <div className='action-btn'>
                <Button title="Restart" className="restart-btn"/>
                <Button title="Exit" className="exit-btn"/>
               </div>
           </div>
        </div>
    </div>
  )
}

export default DisplayStudResult