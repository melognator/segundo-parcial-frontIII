import Layout from "./Routes/Layout";
import ContactPage from "./Routes/ContactPage/ContactContainer";
import DetailPage from "./Routes/DetailPage/DetailContainer";
import FavsPage from "./Routes/FavsPage/FavsContainer";
import HomePage from "./Routes/HomePage/HomeContainer";
import NotFoundPage from "./Routes/NotFoundPage/NotFound";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from "./Components/utils/global.context";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/dentist/:id" element={<DetailPage />} />
                    <Route path="/favs" element={<FavsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
