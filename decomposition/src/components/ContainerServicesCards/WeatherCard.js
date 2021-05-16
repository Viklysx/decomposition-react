export default function WeatherCard(props) {
    return(
        <div className="card-item-block">
            <div>
                <img src={props.icon} alt="icon-weather" width="50px"/>
            </div>
            <div>
                <span className="average-temperature">{props.averageTemperature}</span>
            </div>
            <div className="card-item-temperature">
                <div>
                    <span>Утром {props.morningTemperature}</span>,
                </div>
                <div>
                    <span>днём {props.dayTemperature}</span>
                </div>
            </div>
        </div>
    );
}