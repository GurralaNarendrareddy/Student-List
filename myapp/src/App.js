import './App.css';
import Studentlist from './Dashboard/studentlist';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Create from './Create/create';
import Read from './Read/read';
import Edit from './Edit/edit';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/add" element={<Create/>}/> 
          <Route path="/" element={<Studentlist/>}/> 
          <Route path="/read/:id" element={<Read/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
       </Routes>
    </BrowserRouter>
      
  );
}

export default App;