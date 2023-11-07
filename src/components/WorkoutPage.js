import React, { useState } from 'react';
import './WorkoutPage.css';
import About from './About';
 // Make sure the path is correct

function WorkoutPag() {
  const [selectedWeight, setSelectedWeight] = useState(''); // State to manage the selected weight

  const handleWeightChange = (event) => {
    setSelectedWeight(event.target.value); // Update the selected weight when the user selects an option
  };

  return (
    
    <div>
      <About content='hi'/>
      <h1>Workout Page</h1>
      
      <div>
        
        <label htmlFor="weight"><i>Select Weight:</i></label>
        <select id="weight" value={selectedWeight} onChange={handleWeightChange} className='custom-select'>
          <option value="">Select a weight</option>
          <option value="5lbs">5 lbs</option>
          <option value="10lbs">10 lbs</option>
          <option value="15lbs">15 lbs</option>
          {/* Add more weight options as needed */}
        </select>
        <div>
      
        </div>
       
      </div>
      
      {/* You can access the selected weight using the selectedWeight state and use it in your workout routines */}
    </div>
  );
}

export default WorkoutPag;
