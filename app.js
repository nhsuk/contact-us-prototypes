// Core dependencies
const path = require('path')

// External dependencies
const bodyParser = require('body-parser')
const express = require('express');
const nunjucks = require('nunjucks');

// Local dependencies
const authentication = require('./middleware/authentication');
const automaticRouting = require('./middleware/auto-routing');
const config = require('./app/config');
const locals = require('./app/locals');
const routes = require('./app/routes');
const documentationRoutes = require('./docs/documentation_routes');

// Set configuration variables
const port = process.env.PORT || config.port;
const useDocumentation = process.env.SHOW_DOCS || config.useDocumentation;

// Initialise applications
const app = express();
const documentationApp = express();

// Authentication middleware
app.use(authentication);

// Local variables
app.use(locals(config));

// View engine
app.set('view engine', 'html');
documentationApp.set('view engine', 'html');

// Middleware to serve static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use('/nhsuk-frontend', express.static(path.join(__dirname, 'node_modules/nhsuk-frontend/packages')));
app.use('/nhsuk-frontend', express.static(path.join(__dirname, 'node_modules/nhsuk-frontend/dist')));

// Nunjucks configuration for application
var appViews = [
  path.join(__dirname, 'app/views/'),
  path.join(__dirname, 'node_modules/nhsuk-frontend/packages/components')
]

nunjucks.configure(appViews, {
  autoescape: true,
  express: app
});

// Support for parsing data in POSTs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

// Custom application routes
app.use('/', routes);

// Automatically route pages
app.get(/^([^.]+)$/, function (req, res, next) {
  automaticRouting.matchRoutes(req, res, next)
})

if (useDocumentation) {
  // Documentation routes
  app.use('/docs', documentationApp);

  // Nunjucks configuration for documentation
  var docViews = [
    path.join(__dirname, 'docs/views/'),
    path.join(__dirname, 'node_modules/nhsuk-frontend/packages/components')
  ]

  nunjucks.configure(docViews, {
    autoescape: true,
    express: documentationApp
  });

  // Support for parsing data in POSTs
  documentationApp.use(bodyParser.json());
  documentationApp.use(bodyParser.urlencoded({
    extended: true
  }))
  
  // Custom documentation routes
  documentationApp.use('/', documentationRoutes);

  // Automatically route documentation pages
  documentationApp.get(/^([^.]+)$/, function (req, res, next) {
    automaticRouting.matchRoutes(req, res, next)
  })

}

// Run the application
app.listen(port);

module.exports = app;
