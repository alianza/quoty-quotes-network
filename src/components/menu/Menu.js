import './Menu.scss'
import { NavLink, useLocation } from "react-router-dom";
import scrollToTop from "../../lib/ScrollToTop";

function Menu(props) {
    const { pathname } = useLocation();

    const about = () => {
        alert('This is a react based quotes Application!\n' +
            'For the kabisa coding assigment!\n' +
            'Made by Jan-Willem van Bremen - 2021');
    }

    const closeMenuIfMobile = () => {
        if (window.innerWidth < 600) {
            document.getElementById('app').classList.remove('menu-active');
        }
    }

    return (
        <div className="menu">
            <div onClick={e => props.onMenuClick(e)} className="menu-close">✖</div>
            <h1>Menu</h1>
            <ul className="menu-top" onClick={() => closeMenuIfMobile()}>
                <li><NavLink to={'/'} isActive={ (match) => pathname.includes('/page') || match.url === '/'} activeClassName={'active'} onClick={() => scrollToTop()}>Home</NavLink></li>
                <li className="login-only"><NavLink to={'/popular'} isActive={() => pathname.includes('/popular')} activeClassName={'active'}>Popular Quotes</NavLink></li>
                {!props.user ?
                <li className="logout-only"><NavLink to={'/login'} isActive={ () => pathname.includes('/login') } activeClassName={'active'}>Login</NavLink></li>
                    :
                <>
                    <li className="login-only"><NavLink to={'/profile'} isActive={() => pathname.includes('/profile')} activeClassName={'active'}>Profile</NavLink></li>
                    <li className="login-only"><NavLink to={'/quotes'} isActive={() => pathname.includes('/quotes')} activeClassName={'active'}>My Quotes</NavLink></li>
                    <li className="login-only"><span onClick={() => props.logOut()}>Sign-Out</span></li>
                </>
                }
                <li onClick={about}>About</li>
            </ul>
            <p className="menu-bottom">Jan-Willem van Bremen</p>
        </div>
    );
}

export default Menu;
