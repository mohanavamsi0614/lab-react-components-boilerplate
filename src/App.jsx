import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Head from './components/head';
import Body from './components/body';

function App() {
  return (
    <div>
      <Head/>
      <Body/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
