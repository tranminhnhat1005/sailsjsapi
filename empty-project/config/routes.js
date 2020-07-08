/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // 'GET /api/random-quote': 'QuoteController.getQuote',
  // 'GET /api/protected/random-quote': 'QuoteController.getProtectedQuote',
  // 'GET /api/tasks': 'TaskController.getTasks',
  // 'POST /api/tasks': 'TaskController.creatTask',
  // 'PUT /api/tasks': 'TaskController.updateTask',
  // 'DELETE /api/tasks': 'TaskController.deleteTask',

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  // 'GET /get'  : 'UserController.get',
  // 'POST /login': 'AuthController.login',
  // '/logout': 'AuthController.logout',
  // '/login': 'UserController.use',
  'GET /login': {view: 'login'},
  'GET /register': {view: 'register'},
  '/': {view: 'pages/homepage'},

  'GET /users': 'UserController.users',
  'GET /users/:username': 'UserController.findUserByUsername',
  'POST /create': 'UserController.create',
  'POST /login': 'UserController.login',
  'PUT /update': 'UserController.updateEmail',
  'DELETE /user/delete/:username': 'UserController.deleteByUsername',
  // 'POST user': {
  //   controller: 'UserController',
  //   action: 'create',
  // },
  // 'GET /user/login'   : 'UserController.login',
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
};
