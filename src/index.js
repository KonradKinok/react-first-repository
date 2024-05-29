import React from 'react';
import ReactDOM from 'react-dom/client';
import { App1 } from 'components/App';
import { Footer } from 'components/Footer';

import './scss/stylStartowy.css';
import './scss/footer.css';
import './index.css';
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.querySelector('div#root')).render(
  <React.StrictMode>
    <App1 />
    <Footer />
  </React.StrictMode>
);
