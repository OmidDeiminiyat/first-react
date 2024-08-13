import style from './Header.module.scss';

export const Header = (props) => {
    return(
        
            <section className={style.headerStyle}>
                <h1>{props.name}</h1>
            </section>
           

    );
}