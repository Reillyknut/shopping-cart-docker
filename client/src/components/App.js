// import React, { useState, useEffect } from "react";

import Shop from './Shop'
import Products from './Products'
import AddProduct from './AddProduct'

const App = () => { 
  return (
    <div id="app">
      <header>
        <Shop />
      </header>
      
      <main>
        <Products />
        <AddProduct />
      </main>
    </div>
  );
};

export default App;