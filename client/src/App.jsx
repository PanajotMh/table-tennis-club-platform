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
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx'

function App() { //serve as the root
  // Return a list component.


    const fruits = [{id:1, name: "Apple", calories: 95},
                  {id:2, name: "Orange", calories: 45},
                  {id:3, name:"Banana", calories: 105},
                  {id:4, name: "Coconut", calories: 150},
                  {id:5, name: "Pineapple", calories: 37}
    ];

    const vegetables = [{id:6, name: "Potatoes", calories: 110},
                        {id:7, name: "Celery", calories: 15},
                        {id:8, name:"Carrots", calories: 25},
                        {id:9, name: "Corn", calories: 63},
                        {id:10, name: "Broccoli", calories: 50}
    ];

    //only render if list is not empty.


    // && short-circuiting
  return( 
    <>
    
    {fruits.length > 0 && <List items={fruits}  category="Fruits"/>} 
    {fruits.length > 0 ? <List items={vegetables}  category="Vegetables"/> : null}
    

    </>
  );
 
}

export default App