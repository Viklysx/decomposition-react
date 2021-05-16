export default function ContainerTopHeaders(props) {
    // Компонент для отображения табов в верхней части страницы
    return(
        <ul>
          {props.filters.map((item) =>
            <li 
                key={item}
                className={props.selected === item ? "active" : ""}
                onClick={props.onClickTab}>
                    {item}
            </li>
          )}
        </ul>
    );
}