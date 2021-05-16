import './App.css';
import ContainerTop from './components/ContainerTop/ContainerTop';
import ContainerServices from './components/ContainerServices/ContainerServices';
import ContainerSearch from './components/ContainerSearch/ContainerSearch';
import ContainerBanner from './components/ContainerBanner/ContainerBanner';
import ContainerServicesCards from './components/ContainerServicesCards/ContainerServicesCards';
import WeatherCard from './components/ContainerServicesCards/WeatherCard';

function App() {
  return (
    <div className="App">
      <ContainerTop />
      <ContainerServices />
      <ContainerSearch />
      <ContainerBanner />
      <ContainerServicesCards title="Погода">
        <WeatherCard 
          icon="https://yt3.ggpht.com/a/AATXAJxZLC22vQcgrouhnq03lFL20raYV5rOJAcI3K1d=s900-c-k-c0xffffffff-no-rj-mo"
          averageTemperature="+17"
          morningTemperature="+17"
          dayTemperature="+20"
        />
      </ContainerServicesCards>
    </div>
  );
}

export default App;
