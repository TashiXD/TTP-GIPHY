import './App.css';
import { TrendingGif,SearchGif } from './components';
function App() {
  return (
    <div className="App">
      <h1>Gif search</h1>
      <TrendingGif />
      <SearchGif />
    </div>
  );
}

export default App;
