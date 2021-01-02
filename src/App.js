import './App.scss';
import { Header } from './Header';
import { SwipeButtons } from './SwipeButtons';
import { TinderCards } from './TinderCards'

function App() {
  document.title = "Fake Tinder"
  
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
