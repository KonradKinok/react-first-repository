import './scss/stylStartowy.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App1 } from 'components/App';
import { Footer } from 'components/Footer';
import { M1Z1 } from 'components/M1Z1';
import * as m1Z from 'components/M1Z1';
import * as m1Z2 from 'components/M1Z2';
import * as M1Z1S2 from 'components/M1Z2S2/Alert_M1Z2S2';
// Moduł 2 - Zajęcia 3 - Zdarzenia i stany
// Section2 Article2: Licznik
import * as M2Z3S2ZdarzeniaStany from 'components/M2Z3S2ZdarzeniaStany/M2Z3S2ZdarzeniaStany';
ReactDOM.createRoot(document.querySelector('div#root')).render(
  <React.StrictMode>
    <App1 />
    {/* Moduł 1 - Zajęcia 1 - Wprowadzenie do React */}
    <M1Z1 />
    <m1Z.M1Z1a />
    <m1Z.M1Z1S1 />
    {/* Moduł 1 - Zajęcia 2 - Stylizacja */}
    <m1Z2.M1Z2_Stylizacja />
    <M1Z1S2.App_M1Z1S2_VanillaCss />
    {/* Moduł 2 - Zajęcia 3 - Zdarzenia i stany */}
    <M2Z3S2ZdarzeniaStany.Counter step={5} />
    {/* Footer */}
    <Footer />
  </React.StrictMode>
);
