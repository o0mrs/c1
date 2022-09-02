import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import { unregister } from './serviceWorker';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration => {
    registration.unregister();

    if (caches) {
      // Service worker cache should be cleared with caches.delete()
      caches.keys().then(async (names) => {
        await Promise.all(names.map(name => caches.delete(name)));
      });
    }
  });
}
// serviceWorkerRegistration.register();

// let installPromptEvent;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome <= 67 from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  // installPromptEvent = event;
  // Update the install UI to notify the user app can be installed
});
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
