/*--- Libraries ---*/
let express = require('express');

/*--- Constants ---*/
const API_URI = "/my_api_dashbord_TWProject";

// express Init
let app_api = express();
app_api.use(require('./middlewares/allowCrossDomain'));

//define routes
let usersRouter = require('./routes/users');
let sensorsRouter = require('./routes/sensors');
let mesuresRouter = require('./routes/mesures');
app_api.use(API_URI, moviesRouter);
app_api.use(API_URI, sensorsRouter);
app_api.use(API_URI, mesuresRouter);

//define port listener
app_api.listen(3000);

module.exports = app_api;