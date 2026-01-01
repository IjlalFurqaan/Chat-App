import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import KotoTeaser from "./components/KotoTeaser";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='h-screen flex flex-col'>
            {/* Navbar is hidden on Teaser page for full immersion */}
            {window.location.pathname !== '/teaser' && <Navbar />}
            
            <div className={`flex-1 flex items-center justify-center ${window.location.pathname !== '/teaser' ? 'pt-16' : ''}`}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
                    <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
                    <Route path='/teaser' element={<KotoTeaser />} />
                </Routes>
            </div>
			<Toaster />
		</div>
	);
}

export default App;
