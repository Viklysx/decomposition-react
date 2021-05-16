export default function WidjetRight(props) {
    // Компонент, отвечающий за содание виджета в правой верхней части страницы («Работа над ошибками»)
    return (
        <div className="widjet">
            <div>
              <img src={props.content[0].img} alt="image" className="widjet-img" />  
            </div>
            <div>
                <p className="widjet-title">{props.content[0].title}</p>
            </div>
            <div>
                <p>{props.content[0].description}</p>
            </div>
        </div>
    )
}