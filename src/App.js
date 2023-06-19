import './App.css';
import { Topbar, TrendingGif} from './components';

import LoadGif from './components/LoadGif/LoadGif';
//Loads in our landing page
function App() {
  return (
    <div className="App">
      <Topbar />
      <TrendingGif/>
    </div>
  );
}

export default App;
