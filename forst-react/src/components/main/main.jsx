import style from './Main.module.scss';

export const Main = (props) => {
    return (
        <div className={style.mainStyle}>
            <article>
                <header>
                <h1>welcome to main</h1>
                </header>
                <ul>
                {props.name.map((omidDishes, index) => (
                <li key={index}>{omidDishes}</li>
                ))}
                </ul>
            </article>
        </div>
       

    )
}