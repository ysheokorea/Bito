import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './pages/serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
serviceWorker.unregister();
