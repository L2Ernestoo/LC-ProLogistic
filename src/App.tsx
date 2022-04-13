import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';

function App() {
  return (
    <div className="App">
      <Container>
        <AppBar position='static'>
          <IconButton edge='start' color='inherit' aria-label='menu'></IconButton>
        </AppBar>
      </Container>
    </div>
  );
}

export default App;
