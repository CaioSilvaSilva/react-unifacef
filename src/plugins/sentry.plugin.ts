import { configureScope, init } from '@sentry/browser';

(() => {

  //Desativa o plugin localhost
  if (window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1') {
    return;
  }

  init({dsn: "https://c382da9c98444a388033153b127978fe@o403751.ingest.sentry.io/5266734"});

  configureScope(scope => {
  })

})();
