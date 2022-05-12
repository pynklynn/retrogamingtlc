import { Router } from '@vaadin/router';

const outlet = document.querySelector('main');
const router = new Router(outlet);
router.setRoutes([
  { path: '/', component: 'rtg-home-view', name: 'home' },
  { path: '/restoration', component: 'rtg-restoration-view', name: 'restoration' }
]);

// handle routing for GitHub pages
const path = localStorage.getItem('path');
if (path) {
  localStorage.removeItem('path');
  Router.go({
    pathname: `/${path}`
  });
}
