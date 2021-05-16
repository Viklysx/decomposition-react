import './App.css';
import ContainerTop from './components/ContainerTop/ContainerTop';
import ContainerServices from './components/ContainerServices/ContainerServices';
import ContainerSearch from './components/ContainerSearch/ContainerSearch';
import ContainerBanner from './components/ContainerBanner/ContainerBanner';
import ContainerServicesCards from './components/ContainerServicesCards/ContainerServicesCards';

function App() {
  return (
    <div className="App">
      <ContainerTop />
      <ContainerServices />
      <ContainerSearch />
      <ContainerBanner />
      <ContainerServicesCards />
    </div>
  );
}

export default App;
