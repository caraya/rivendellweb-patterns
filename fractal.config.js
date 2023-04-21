'use strict';

const hbs = require('@frctl/handlebars')({
  helpers: {
    uppercase: function(str) {
      return str.toUpperCase();
    },
  },
  /* other configuration options here */
});

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

// Project information
fractal.set('project.title', 'rivendellweb pattern library');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Carlos Araya');

// Tell Fractal where the components will live
fractal.components.set('path', __dirname + '/src/components');
// use customized Handlebars for components
fractal.components.engine(hbs);
// look for files with a .njk file extension
fractal.components.set('ext', '.hbs');
// default status for components
fractal.components.set('default.status', 'idea');
// different status levels for components
fractal.components.set('statuses', {
  idea: {
    label: 'Idea',
    description: 'Somethign I\'m thinking about',
    color: '#f0f',
  },
  draft: {
    label: 'Draft',
    description: 'First implementation',
    color: '#663399',
  },
  review: {
    label: 'Review',
    description: 'Ready for review',
    color: '#0f0',
  },
  done: {
    label: 'Done',
    description: 'I\'m done with this.',
    color: '#00f',
  },
});


// Tell Fractal where the documentation pages will live
fractal.docs.set('path', __dirname + '/src/docs');
// use customized Handlebars for components
fractal.docs.engine(hbs);

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/static');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');
