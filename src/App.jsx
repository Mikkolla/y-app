

import Status from "./sections/first/Status";
import Main from "./sections/first/Main";
import Navigation from "./sections/first/Navigation";
import City from "./sections/first/City";
import Functions from "./sections/first/Functions";

export default function App() {
  return (
  <div className="container">
    {/* <img className="bg" src="main/bg.png" alt="bg" /> */}
      <div className="wrapper">
      
      <Status />
      
      <Main />
      <Functions />
      <City />
      <Navigation />

      </div>
      <div className="wrapper">
      <Status />
      
      <Main />
      <Functions />
      <City />
      <Navigation />
      

      </div>
      
      
  </div>
    
  );
}

