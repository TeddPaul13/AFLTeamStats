import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import DisplayTeams from './components/DisplayTeams';

import OffcanvasExample from './components/navbar';

import SearchForm from './components/SearchForm';
import HandleSearchForTeam from './components/HandleSearchForTeam';

function App() {
 return (
  <>
  <OffcanvasExample />

  <DisplayTeams/>
  <HandleSearchForTeam/>
 
  </>
 )
}

export default App;
