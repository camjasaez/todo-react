import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { TodosProvider } from './context/TodosContext';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './utils/Theming';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </TodosProvider>
  </React.StrictMode>
);
