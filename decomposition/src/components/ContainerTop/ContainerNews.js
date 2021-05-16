import { nanoid } from 'nanoid';

export default function ContainerNews(props) {
    // Компонент для формирования списка новостей
    return(
        <>
          {props.list.map((item, i) =>
            <div key={nanoid()}>
                <a href={item.text}>
                    <img src={item.icon} />
                    <p>{item.text}</p>
                </a>
            </div>
          )}
        </>
    );
}