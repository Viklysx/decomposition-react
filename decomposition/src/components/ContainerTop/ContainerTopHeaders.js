export default function ContainerTopHeaders(props) {
    return(
        <ul>
          {props.filters.map((item) =>
            <li 
                key={item}
                className={props.selected === item ? "tab active" : "tab"}
                onClick={props.onClickTab}>
                    {item}
            </li>
          )}
        </ul>
    );
}