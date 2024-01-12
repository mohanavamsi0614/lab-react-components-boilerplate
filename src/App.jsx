import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Head from './components/head';
import Body from './components/body';
import Data from './components/data'
function App() {
  return (
    <div>
      <Head/>
      <Body data={Data}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
