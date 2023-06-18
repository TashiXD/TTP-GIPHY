import './App.css';
import { Topbar, TrendingGif,SearchGif} from './components';
//Loads in our landing page
function App() {
  return (
    <div className="App">
      <Topbar />
      <TrendingGif />
      <SearchGif />
    </div>
  );
}

export default App;
