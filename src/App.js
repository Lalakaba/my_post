import React from 'react';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { api } from './api';

api.getAllPosts()

function App() {
 

  return (
    <div>
      <Header />
     
        <Main />
      
    </div>
  );
}

export default App;
