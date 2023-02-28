import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { StylesGlobal } from './styles/styles.global';
import {theme} from "./styles/theme"
import Home from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <StylesGlobal />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
