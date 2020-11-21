import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import GlobalStyles from './index.css';

import theme from 'utils/theme';

import { Navigation, Wrapper, LoadingIndicator, Button } from 'components'; 



function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Navigation items={[
          { content: 'Homepage', to: '/' },
          { content: 'Budget', to: '/budget' }
        ]}
        RightElement={(
          <div>
            <Button variant='regular'>pl</Button>
            <Button variant='regular'>en</Button>
          </div>
        )}
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">Homepage</Route>
            <Route path="/budget">Budget page</Route>
          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={LoadingIndicator}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
