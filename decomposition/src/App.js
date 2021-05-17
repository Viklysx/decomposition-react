import './App.css';
import ContainerTop from './components/ContainerTop/ContainerTop';
import ContainerServices from './components/ContainerServices/ContainerServices';
import ContainerSearch from './components/ContainerSearch/ContainerSearch';
import ContainerBanner from './components/ContainerBanner/ContainerBanner';
import ContainerServicesCards from './components/ContainerServicesCards/ContainerServicesCards';
import WeatherCard from './components/ContainerServicesCards/WeatherCard';
import VisitedCard from './components/ContainerServicesCards/VisitedCard';
import ChannelsCard from './components/ContainerServicesCards/ChannelsCard';
import BroadcastCard from './components/ContainerServicesCards/BroadcastCard';

function App() {
  const visited = [
    {
      title: 'Недвижимость',
      description: 'о сталинках',
      link: '#'
    },
    {
      title: 'Маркет',
      description: 'люстры и светильники',
      link: '#'
    },
    {
      title: 'Авто.ру',
      description: 'привод 4x4 до 500 000',
      link: '#'
    }
  ];
  const channels = [
    {
      time: '02:00',
      title: 'ТНТ.Best',
      channel: 'ТНТ International',
      link: '#'
    },
    {
      time: '02:15',
      title: 'Джунглики',
      channel: 'Карусель INT',
      link: '#'
    },
    {
      time: '02:25',
      title: 'Наедине со всеми',
      channel: 'Первый',
      link: '#'
    }
  ];
  const broadcasts = [
    {
      icon: 'https://img-premium.flaticon.com/png/512/482/482059.png?token=exp=1621289515~hmac=867b14d702b9db6db72ad746d4a8df4c',
      title: 'Управление как искусство',
      broadcast: 'Успех',
      link: '#'
    },
    {
      icon: 'https://img-premium.flaticon.com/png/512/482/482059.png?token=exp=1621289515~hmac=867b14d702b9db6db72ad746d4a8df4c',
      title: 'Ночь. Мир в это время',
      broadcast: 'earthTV',
      link: '#'
    },
    {
      icon: 'https://img-premium.flaticon.com/png/512/482/482059.png?token=exp=1621289515~hmac=867b14d702b9db6db72ad746d4a8df4c',
      title: 'Андрей Возн...',
      broadcast: 'Совершенно секретно',
      link: '#'
    },
  ];

  return (
    <div className="App">
      <ContainerTop />
      <ContainerServices />
      <ContainerSearch />
      <ContainerBanner />
      <div className="wrapper-card">   
        <div className="wrapper-card-block">    
          <ContainerServicesCards title="Погода">
            <WeatherCard 
              icon="https://yt3.ggpht.com/a/AATXAJxZLC22vQcgrouhnq03lFL20raYV5rOJAcI3K1d=s900-c-k-c0xffffffff-no-rj-mo"
              averageTemperature="+17"
              morningTemperature="+17"
              dayTemperature="+20"
            />
          </ContainerServicesCards>
          <ContainerServicesCards title="Посещаемое">
            {visited.map((item) => 
              <VisitedCard {...item} />
            )}
          </ContainerServicesCards>
        </div>
        <div className="wrapper-card-block">
          <ContainerServicesCards title="Карта Германии">
            <p>
              <a href="#">
                Расписания
              </a>
            </p>
          </ContainerServicesCards>
          <ContainerServicesCards title="Телепрограмма">
            <span className="airing">Эфир</span>
            {channels.map((item) => 
              <ChannelsCard {...item} />
            )}
          </ContainerServicesCards>
        </div>
        <div className="wrapper-card-block">
          <ContainerServicesCards title="Эфир">
            {broadcasts.map((item) => 
              <BroadcastCard {...item} />
            )}
          </ContainerServicesCards>
        </div>
      </div>
    </div>
  );
}

export default App;
