import { nanoid } from 'nanoid';

export default function Rates(props) {
    // Компонент для формирования списка котировок
    return(
        <>
          {props.rates.map((item) =>
            <div key={nanoid()}>
                <span className="currency">
                    {item.currency}
                </span>
                <span>
                    {item.rate}
                </span>
                <span className="gray-block">
                    {item.growth}
                </span>
            </div>
          )}
        </>
    );
}