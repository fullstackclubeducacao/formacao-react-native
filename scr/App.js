import React, { useEffect } from 'react';

import Navigation from './navigation';
import useToDoList from './hooks/useToDoList';

function App() {
  const { loadLocalData } = useToDoList({});

  useEffect(() => {
    loadLocalData();
  }, []);

  return <Navigation />;
}

export default App;
