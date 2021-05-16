import { nanoid } from "nanoid";

export default function ContainerServices(props) {
    // Компонент, отвечающий за линейку сервисов (строка над поисковой)
    const services = ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "еще"]
    return (
        <div className="services">
            {services.map((item) => 
                <span key={nanoid()} className="service-item">
                    {item}
                </span>
            )}
        </div>
    )
}