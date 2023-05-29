import { Route, Routes } from "react-router-dom";
import "./index.css";
import Profil from "./pages/Profil";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MainLayout from "./pages/MainLayout";
import ProfilLayout from "./pages/ProfilLayout";
import Provider from "./context/MainContext";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<Main />} />
            
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="profil"
              element={
                <ProfilLayout>
                  <Profil />
                </ProfilLayout>
              }
            />
          </Route>
              <Route path="login" element={<Login/>}/>
        </Routes>
        
      </Provider>
    </>
  );
}

export default App;
