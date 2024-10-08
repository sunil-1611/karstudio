
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";
import Editor from './pages/Editor';
import EditorList from './pages/EditorList';
import EditorImage from './pages/EditorWithImage'
import './App.css'
import Plans from './pages/Plans';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/karkiosk" element={<Home/>}/>
        <Route path="/" element={<About/>}/>
        <Route path="/guide" element={<Contact/>}/>
        <Route path="/editor/new" element={<Editor/>}/>
        <Route path="/editor" element={<EditorList/>}/>
        <Route path="/editor-image" element={<EditorImage/>}/>
        <Route path="/package" element={<Plans/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
       
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
