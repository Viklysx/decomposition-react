export default function BroadcastCard(props) {
    return(
        <div className="channel">
            <p>
                <a href={props.link}>
                    <img src={props.icon} alt="icon" width="15px" /> {props.title} <span className="gray-block">{props.broadcast}</span>
                </a>
            </p>
        </div>
    );
}