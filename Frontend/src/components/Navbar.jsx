import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
	const { authUser } = useAuthContext();
	const { logout } = useLogout();

	return (
		<div className='navbar bg-base-100 bg-opacity-30 backdrop-blur-lg fixed top-0 z-50 px-4 h-16 border-b border-white/10'>
			<div className='flex-1'>
				<Link to='/' className='btn btn-ghost text-xl text-white'>ChatApp</Link>
			</div>
			<div className='flex-none gap-2'>
				{!authUser ? (
					<>
						<Link to='/login' className='btn btn-sm btn-ghost text-white'>Login</Link>
						<Link to='/signup' className='btn btn-sm btn-primary'>Sign Up</Link>
					</>
				) : (
					<div className="dropdown dropdown-end">
						<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img alt="User" src={authUser.profilePic} />
							</div>
						</div>
						<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-gray-800">
							<li><a onClick={logout}>Logout</a></li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};
export default Navbar;
