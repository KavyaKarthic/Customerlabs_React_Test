import './App.css';
import React, { useState } from 'react';
import Popup from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <header className="AppHeader">
        <h3 classname ="hheader"> <img className="arrow" src="back.png" alt="arrow"/> View Audience </h3>
      </header>
      <body>
        <input id="savebtn" type="button" value={"Save segment"} onClick={togglePopup}></input>
      </body>
      {isOpen && <Popup
      content={<>
        <header className="AppHeader">
          <h3 classname ="hheader"> <img className="arrow" src="back.png" alt="arrow"/> Saving Segment </h3>
        </header>
        <div classname="popup-content">
          Enter the name of segment <br></br>
          <input id="segmentname" type="text" placeholder="Name of the segment"/>
          <br></br>
          To save your segment, you need to add the schemas to build the query
          <br></br>
          <select className="dropdown" >
            <option value="" disabled>Add schema to segment</option>
            <option value={"first_name"}>First Name</option>
            <option value={"last_name"}>Last Name</option>
            <option value={"gender"}>Gender</option>
            <option value={"age"}>Age</option>
            <option value={"account_name"}>Account Name</option>
            <option value={"city"}>City</option>
            <option value={"state"}>State</option>
          </select>
          <br></br>
          <input id="addschemalink" type="button" value={"+ Add new schema"}/>
          <br></br>
          <div className="buttons">
          <input id="saveseg" type="button" value={"Save the Segment"}/>
          <input id="cancelbtn" type="button" value={"Cancel"}/>
          </div>
        </div>          
      </>}
      handleClose={togglePopup}
    />}
    </div>
  );
}

export default App;
