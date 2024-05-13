import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import DashBoard from "./Pages/DashBoard";
import { SocketProvider } from "./Components/VideoCall/SocketProvider";



function App() {
  return (
    <SocketProvider>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>

        
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>

          <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>

        

         
       
      </div>
    </BrowserRouter>
    </SocketProvider>
  );
}

export default App;
