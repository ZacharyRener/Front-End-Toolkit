// import local dependencies
import Router from './util/Router.js';
import common from './routes/common.js';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
});

// Load Events
routes.loadEvents()