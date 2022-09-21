import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Menu/NavBar';
import { Container } from '@mui/system';
import List from './components/ListGroups/List';
import { People } from './components/People/People';
import { Create } from './components/createGroup/Create';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
      <Routes>
        <Route path='/home' element={<List />} />
        <Route path='/people/:num' element={<People />} />
        <Route path='/create' element={<Create />}/>
      </Routes>
      </Container>
    </div>
  );
}

export default App;
