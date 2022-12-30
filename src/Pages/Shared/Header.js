import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
const {user, logout} = useContext(AuthContext)

const handleLogOut = () => {
    logout()
        .then(() => { })
        .catch(error => console.error(error))
}
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Media</Link></li>
                        <li><Link>Massage</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl font-sans">HelloBook</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Media</Link></li>
                    <li><Link>Massage</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* {user?.email ? (
                <Link onClick={logout} className="btn">Log Out</Link>

                ):(

                <Link className="btn">Login</Link>
                )} */}
            
            {
						user?.email ?
							<div data-tip={user?.displayName} className='flex'>
								{/* <ReactTooltip /> */}
								<Link><button className=" self-center px-4 py-3 font-bold rounded dark:bg-violet-400 dark:text-gray-900 flex gap-x-2">
									<div>
										{user?.displayName}
									</div>
									{/* <div>
										{user?.photoURL ?
											<img className='rounded-2xl h-7'
												src={user?.photoURL} />
											: <div className='text-2xl'></div>
										}
									</div> */}
								</button></Link>
								<Link className='text-2xl'><button onClick={handleLogOut} className='pt-3 pl-3'></button></Link>
							</div>
							:
							<div>
								<Link to='/login'><button className="self-center px-3 py-3 rounded">Log in</button></Link>
								/
								<Link to='/signup'><button className="self-center px-3 py-3 rounded">Sign Up</button></Link>
							</div>

					}

            </div>
        </div>
    );
};

export default Header;