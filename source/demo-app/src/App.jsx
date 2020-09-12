import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { DemoPane } from './components/DemoPane';

function App() {
  return (
    <ThemeProvider
      theme={createMuiTheme({
        palette: {
          type: 'dark',
        },
      })}
    >
      <CssBaseline />
      <DemoPane />
    </ThemeProvider>
  );
}

export default App;
