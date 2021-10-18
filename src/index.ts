import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import './styles/app.scss';
import './components/site-nav.component';
import './components/nav-item.component';
import './components/site-footer.component';

navigator.serviceWorker.register('service-worker.js', {
  scope: './'
});
