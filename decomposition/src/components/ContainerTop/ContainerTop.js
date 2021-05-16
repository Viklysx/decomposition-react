import WidjetRight from './WidjetRight';
import ContainerTopHeaders from './ContainerTopHeaders';
import Date from './Date';
import ContainerNews from './ContainerNews';

export default function ContainerTop(props) {
    // компонент отвечает за верхнюю часть страницы (пункты с новостями, датой и блок «Работа над ошибками»)
    const filters = ["Сейчас в СМИ", "В Германии", "Рекомендуем"];

    function onClickTab(filters) {
        //   
    }


    return (
        <div className="container-top">
            <div>
                <div>
                    <ContainerTopHeaders 
                        filters={filters}
                        selected={"Сейчас в СМИ"}
                        onSelect={onClickTab}
                    />
                    <Date />
                </div> 
                <div>
                    <ContainerNews />
                </div>          
            </div>
            <WidjetRight/>
        </div>
    )
}