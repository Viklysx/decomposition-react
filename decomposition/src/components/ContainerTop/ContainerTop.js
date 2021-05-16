import WidjetRight from "./WidjetRight";
import ContainerTopHeaders from "./ContainerTopHeaders";
import Date from "./Date";
import ContainerNews from "./ContainerNews";
import Rates from "./Rates";

export default function ContainerTop(props) {
    // Компонент отвечает за верхнюю часть страницы (пункты с новостями, датой и блок «Работа над ошибками»)
    const filters = ["Сейчас в СМИ", "В Германии", "Рекомендуем"];
    const newsList = [
        {
            icon: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
            text: "Путин упростит получение автомобильных номеров",
            link: "#"
        },
        {
            icon: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
            text: "В команде Зеленского раскрыли план реформ на Украине",
            link: "#"
        },
        {
            icon: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
            text: "«Турпомощь» прокомментировала гибель десятков россиян в Анталье",
            link: "#"
        },
        {
            icon: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
            text: "Суд закрыл дело Демпартии США прости России",
            link: "#"
        },
        {
            icon: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
            text: "На Украине призвали создать ракеты для удара по Москве",
            link: "#"
        }
    ];
    const rates = [
        {
            currency: "USD MOEX",
            rate: "63,52",
            growth: "+0,09"
        },
        {
            currency: "EUR MOEX",
            rate: "70,86",
            growth: "+0,14"
        },
        {
            currency: "НЕФТЬ",
            rate: "64,90",
            growth: "+1,63%"
        }
    ];
    const widjetContent = [{
        img: "https://yastatic.net/s3/home/services/block/toloka1.svg",
        title: "Работа над ошибками",
        description: "Смотрите на Яндексе и запоминайте"
    }];

    function onClickTab(filters) {
        //   
    }

    return (
        <div className="container-top">
            <div>
                <div className="container-top-tabs">
                    <ContainerTopHeaders 
                        filters={filters}
                        selected={"Сейчас в СМИ"}
                        onSelect={onClickTab}
                    />
                    <Date />
                </div> 
                <div className="container-news-list">
                    <ContainerNews list={newsList}/>
                </div>  
                <div className="container-rate-list">
                    <Rates rates={rates}/>
                </div>        
            </div>
            <WidjetRight content={widjetContent}/>
        </div>
    )
}