'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Rivendellweb Styles');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'text'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Tell Fractal what to use as the preview layout 
*/
fractal.components.set('default.preview', '@preview');

/* 
 * Set destinations
*/
/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/docs');

/*
 * Tell Fractal what statuses to use
*/
fractal.components.set('statuses', {
  idea: {
    label: "Idea",
    description: "Something worth exploring",
    color: "rebeccapurple"
  },
  draft: {
    label: "Draft",
    description: "First Draft",
    color: "#FF00FF",
  },
  wip: {
    label: "WIP",
    description: "Work in progress",
    color: '#FF000088'
  },
  done: {
    label: "Done",
    description: "Ready for production.",
    color: "green"
  }
});