import './Bomin.css';
import { Routes, Route, useNavigate } from 'react-router';
import Bm1 from './pages/Bm1';
import Bm2 from './pages/Bm2';

export default function Bomin() {

    let navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/')}>
                홈으로
            </button>
            <button onClick={() => navigate('/1')}>
                1번 버튼
            </button>
            <button onClick={() => navigate('/2')}>
                2번 버튼
            </button>

            <Routes>
                <Route path="/" element={<h1>보민들 나옴</h1>} />
                <Route path="/1" element={<Bm1/>} />
                <Route path="/2" element={<Bm2/>} />
                <Route path="*" element={<h1>404 에러</h1>} />
            </Routes>
        </div>
    );
}