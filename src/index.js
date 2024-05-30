import React from 'react';
import ReactDOM from 'react-dom/client';
import { App1 } from 'components/App';
import { Footer } from 'components/Footer';
import { M1Z1 } from 'components/M1Z1';
import * as m1Z from 'components/M1Z1';
import './scss/stylStartowy.css';
import './scss/footer.css';
import './index.css';

ReactDOM.createRoot(document.querySelector('div#root')).render(
  <React.StrictMode>
    <App1 />
    {/* Moduł 1 - Zajęcia 1 - Wprowadzenie do React */}
    <M1Z1 />
    <m1Z.M1Z1a />
    <m1Z.M1Z1S1 />
    <Footer />
  </React.StrictMode>
);
