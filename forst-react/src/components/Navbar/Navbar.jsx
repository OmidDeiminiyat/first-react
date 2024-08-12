import style from './Navbar.module.scss';
export const Navbar = () => {
    return(
        <nav className={style.navbarStyle}>
           <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>About us</li>
            </ul>
            <ul>
                <li>Log in</li>
                <li>sign up</li>
            </ul>
        </nav>
    );
}