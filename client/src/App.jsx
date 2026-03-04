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
          <Card></Card>

      <Card></Card>

    </>
  );
  //or
  //<Header/> shorter version
}

export default App