import React from 'react';

//css
import "bulma/css/bulma.css";
import './App.css';

//components
import Header from "./global/Header";
import {Content} from "./global/Content";
import {Footer} from "./global/Footer";


function App({children}) {
  return (
    <div className="App">
      <Header/>
      <Content>
        {children}
      </Content>
      <Footer/>
    </div>
  );
}
export default App;
