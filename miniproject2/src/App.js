import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamDetails from './components/TeamDetails';
import DisplayTeams from './components/DisplayTeams';

import OffcanvasExample from './components/navbar';
import Post from './components/postRandomData';

function App() {
 return (
  <>
  <OffcanvasExample />

  {/* <Post/> component for showing dog image */}

  {/* <TeamDetails/> */}

  <DisplayTeams/>
  </>
 )
}

export default App;
