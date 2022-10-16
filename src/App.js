import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Slider from './components/Slider';
import Items from './components/Items';
import Categoery from './components/Categoery';
import Magic from './components/Magic';
import Drag from './components/Draggable/Drag';
import Best from './components/Bestofboat/Best';
import Press from './components/Press';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <Items/>
      <Categoery/>
      <Magic/>'
      <Drag/>
      <Best/>
      <Press/>
      <Footer/>
    </>
  )
}

export default App;