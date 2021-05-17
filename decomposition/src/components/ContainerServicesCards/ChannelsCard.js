export default function ChannelsCard(props) {
    return(
        <div className="channel">
            <p>
                <a href={props.link}>
                    {props.time}&nbsp;&nbsp;{props.title}&nbsp;&nbsp;<span className="gray-block">{props.channel}</span>
                </a>
            </p>
        </div>
    );
}