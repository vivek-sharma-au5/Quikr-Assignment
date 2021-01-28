import React, { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/body";

function App() {
  const [searchList, setSearchList] = useState([]);

  return (
    <div className='App'>
      <div>
        <NavbarComponent
          searchList={searchList}
          setSearchList={setSearchList}
        />
      </div>
      <div className='Body'>
        <Body searchList={searchList} />
      </div>
    </div>
  );
}

export default App;
