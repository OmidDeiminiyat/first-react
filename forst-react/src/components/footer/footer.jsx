import style from './footer.module.scss';
export const Footer = () => {
    return (
        <footer className={style.footerStyle}>
            <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>Pages</li>
            </ul>
            <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Cookie</li>
            </ul>
            <ul>
                <li>FB</li>
                <li>X</li>
                <li>IN</li>
            </ul>
        </footer>
    )
}