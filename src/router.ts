import { Router } from '@vaadin/router';

const outlet = document.querySelector('main');
const router = new Router(outlet);
router.setRoutes([
  { path: '/', component: 'rtg-home-view' },
  { path: '/restoration', component: 'rtg-restoration-view' }
]);
