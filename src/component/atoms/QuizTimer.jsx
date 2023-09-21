import React, { useEffect, useState } from 'react'

function QuizTimer({durationInMinutes}) {
    const [endTime, setEndTime] = useState(null);
    const now = new Date()
 
    useEffect(() => {
        const calculateEndTime = () => {
          const now = new Date();
          const endTime = new Date(now.getTime() + durationInMinutes * 60 * 1000);
          setEndTime(endTime); 
        };
    
        calculateEndTime();
      }, [durationInMinutes]);
      
      useEffect(() => {
        const interval = setInterval(() => {
          const now =new Date();
    
          if (now > endTime) {
            // The quiz is over 
            clearInterval(interval);
          }
        }, [1000])
    
        return () => {
          clearInterval(interval)
        };
      }, [endTime]);

      return (
        <p>{endTime - now}</p>
      );

};

export default QuizTimer;