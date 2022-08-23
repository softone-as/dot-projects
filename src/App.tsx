import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/' element={<Layout />}>
                    <Route path='home' element={<Home />} />
                    <Route path='news' element={<News />} />
                    <Route path='news/:title' element={<NewsDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
