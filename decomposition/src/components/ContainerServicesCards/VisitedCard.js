export default function VisitedCard(props) {
    return(
        <div className="visited">
            <p>
                <a href={props.link}>
                    <span>
                        {props.title}
                    </span>
                    &nbsp;-&nbsp;{props.description}
                </a>
            </p>
        </div>
    );
}