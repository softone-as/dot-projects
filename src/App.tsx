import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './helper';
import Layout from './layout';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                            <Layout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path='news' element={<News />} />
                    <Route path='news/:title' element={<NewsDetail />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
