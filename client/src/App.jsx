// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Dashboard from "./pages/dashboard";
// import Matches from "./pages/matches";
// import Training from "./pages/training";
// import Live from "./pages/live";
// import Ranking from "./pages/ranking";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/dashboard" replace />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/matches" element={<Matches />} />
//         <Route path="/training" element={<Training />} />
//         <Route path="/live" element={<Live />} />
//         <Route path="/ranking" element={<Ranking />} />
//       </Routes>
//     </BrowserRouter>
//   );
//}

import Header from './Header.jsx';  
import Footer from './Footer.jsx';  
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';


function App() { //serve as the root
  return( // We only have capability to return one single component, enclose components with a fragment.

    //We now have a header component
    // Fragment <>
    //We can re-use components and arrange them as we want.
    <> 
      {/* <Header> </Header>      
      <Food> </Food>        
      <Food></Food>
      <Footer></Footer> */}



      {//Student is the child of app in this case
      //If I want to send some data to my student component, we need to list key: value pairs.
      // When we send key value pairs to a component they're all stored within the props opbject.  Name is key, value is Spongebob or whatever Name
      // If some data is not a string literal, you have to enclose it with curly braces
      }
        <Student name="Spongebob" age={42} isStudent={true}/>
        <Button> </Button>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Squidward" age={50} isStudent={false}/>  
        <Student name="Sandy" age={35} isStudent={true}/> 
        <Student />


    </>

    // Empty student component with no props
  );
  //or
  //<Header/> shorter version
}

export default App