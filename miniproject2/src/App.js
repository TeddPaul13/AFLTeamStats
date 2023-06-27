import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamDetails from './components/TeamDetails';
import DisplayTeams from './components/DisplayTeams';

import OffcanvasExample from './components/navbar';
import Post from './components/postRandomData';
import SearchForm from './components/SearchForm';
import HandleSearchForTeam from './components/HandleSearchForTeam';

function App() {
 return (
  <>
  <OffcanvasExample />

  {/* <Post/> component for showing dog image */}

  {/* <TeamDetails/> */}

  {/* <DisplayTeams/> */}
  <HandleSearchForTeam/>
 
  </>
 )
}

export default App;
