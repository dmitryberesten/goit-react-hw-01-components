import React from 'react'; // основна бібліотека
import ReactDOM from 'react-dom/client'; // основна бібліотека
import { App } from 'components/App'; // кореневий компонент
import './index.css'; // стилізація

// створення кореневого компонента та рендеринг його у HTML-елемент "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  // використовуємо суворий режим + додаємо кореневий компонент App
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Діма Берестень
