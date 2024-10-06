import { Link, NavLink } from 'react-router-dom';
import '../../styles/Navbar.css'; // Importa el archivo CSS

export const Navbar = () => {
    const handleLogout = ()=>{
        console.log('logout');
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Principal
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        //asegurar la correcta funcion "isActive"
                        className={(isActive)=>'nav-item nav-link '+ ( isActive ? 'active' : '' )} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={(isActive)=>'nav-item nav-link '+ ( isActive ? 'active' : '' )} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={(isActive)=>'nav-item nav-link '+ ( isActive ? 'active' : '' )} 
                        to="/hero"
                    >
                        Hero
                    </NavLink>

                    <NavLink 
                        className={(isActive)=>'nav-item nav-link '+ ( isActive ? 'active' : '' )} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        David SC
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout} 
                        
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}