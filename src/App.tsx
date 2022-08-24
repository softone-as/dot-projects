import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './helper';
import Layout from './layout';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';

function App() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path='news'
                    element={
                        <ProtectedRoute>
                            <News />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='news/:title'
                    element={
                        <ProtectedRoute>
                            <NewsDetail />
                        </ProtectedRoute>
                    }
                />
                <Route path='about' element={<About />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Route>
        </Routes>
    );
}

export default App;
