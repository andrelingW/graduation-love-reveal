// src/main.tsx (or index.tsx)
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const base = import.meta.env.DEV 
  ? '/' 
  : '/graduation-love-reveal/';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={base}>
    <App />
  </BrowserRouter>
);
