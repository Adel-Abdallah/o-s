import './App.css';
import { Routes ,Route } from 'react-router-dom';
import NavBar from './components/navbar/Nav';
import About from './pages/About';
import Info from './pages/Info';
import Item from './pages/Item';
import Press from './pages/Press';
import Shop from './pages/Shop';
import Home from './pages/Home';

function App() {
  const items = [
    {
      imgSrc: 'https://drive.google.com/uc?export=view&id=1fXPp3kcR2p0Fb2ViIDgw-8srAOV62shM',
      price: '$100',
      colorVariants: ['Red', 'Green', 'Blue','beige'],
      title:"ゆったりしたセーター"
    },
    {
        imgSrc: 'https://drive.google.com/uc?export=view&id=1fXPp3kcR2p0Fb2ViIDgw-8srAOV62shM',
      price: '$150',
      colorVariants: ['Black', 'White', 'brown','violet','lavender'],
      title:"ゆったりしたセーター"
    },
    {
      imgSrc: 'https://drive.google.com/uc?export=view&id=1fXPp3kcR2p0Fb2ViIDgw-8srAOV62shM',
      price: '$80',
      colorVariants: ['Yellow', 'Orange', 'Pink', "teal", 'orange', 'maroon'],
      title:"ゆったりしたセーター"
    },
    {
      imgSrc: 'https://drive.google.com/uc?export=view&id=1fXPp3kcR2p0Fb2ViIDgw-8srAOV62shM',
      price: '$400',
      colorVariants: ['Red', 'Green', 'Blue','beige'],
      title:"ゆったりしたセーター"
    },
    {
        imgSrc: 'https://drive.google.com/uc?export=view&id=1fXPp3kcR2p0Fb2ViIDgw-8srAOV62shM',
      price: '$450',
      colorVariants: ['Black', 'White', 'brown','violet','lavender'],
      title:"ゆったりしたセーター"
    },
    {
      imgSrc: 'https://drive.google.com/uc?export=view&id=1fXPp3kcR2p0Fb2ViIDgw-8srAOV62shM',
      price: '480',
      colorVariants: ['Yellow', 'Orange', 'Pink', "teal", 'orange', 'maroon'],
      title:"ゆったりしたセーター"
    },
    {
      imgSrc: 'https://drive.google.com/uc?export=view&id=1fXPp3kcR2p0Fb2ViIDgw-8srAOV62shM',
      price: '$1100',
      colorVariants: ['Red', 'Green', 'Blue','beige'],
      title:"ゆったりしたセーター"
    },
    {
        imgSrc: 'https://drive.google.com/uc?export=view&id=1fXPp3kcR2p0Fb2ViIDgw-8srAOV62shM',
      price: '$1150',
      colorVariants: ['Black', 'White', 'brown','violet','lavender'],
      title:"ゆったりしたセーター"
    },
    {
      imgSrc: 'https://drive.google.com/uc?export=view&id=1fXPp3kcR2p0Fb2ViIDgw-8srAOV62shM',
      price: '$810',
      colorVariants: ['Yellow', 'Orange', 'Pink', "teal", 'orange', 'maroon'],
      title:"ゆったりしたセーター"
    }
  ];
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home  items={items}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/item" element={<Item  items={items}/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/press" element={<Press/>} />
      </Routes>
    </div>
  );
}

export default App;
