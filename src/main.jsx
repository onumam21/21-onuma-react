import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'

// const browser = createBrowserRouter([
//   {
//     path: "/",
//     element: (<>
//                 <NavBar/>
//                 <App/>
//                 <div> React - Assessment </div>
//                 <ButtonPage/>
//               </>
//     ),
//   },
//   // -----------------------------
//   {
//     path: "/user",
//     element: (<>
//                 <NavBar/>
//                 <App/>
//                 <div>React - User-Home Sector</div>
//                 <ButtonPage/>
//                 <User/>
//               </>
//     ),
//   },
//   // -----------------------------
//   {
//     path: "/admin",
//     element: (<>
//                 <NavBar/>
//                 <App/>
//                 <div>React - Admin-Home Sector</div>
//                 <ButtonPage/>
//                 <Admin/>
//               </>
//     ),
//   },
//   // -----------------------------
//   {
//     path: "/owner",
//     element: (<>
//                 <NavBar/>
//                 <Owner/>
//               </>
//     ),
//   },
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
