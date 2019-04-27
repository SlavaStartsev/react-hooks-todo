import React from 'react';
import { hot } from 'react-hot-loader';

import WithState from './WithState';
import WithReducer from './WithReducer';

function App(): React.ReactElement {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <WithState />
      <div style={{ borderLeft: '1px solid black', height: '90vh' }} />
      <WithReducer />
    </div>
  );
}

export default hot(module)(App);
