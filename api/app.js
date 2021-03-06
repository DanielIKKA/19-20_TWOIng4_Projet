/*--- Libraries ---*/
let express = require('express');

/*--- Constants ---*/
const API_URI = "/my_api_dashbord_TWProject";

// express Init
let app_api = express();
app_api.use(require('./middlewares/allowCrossDomain'));

//db connection
let db = require('./models/database');

//define routes
let usersRouter = require('./routes/users.route');
let sensorsRouter = require('./routes/sensors.route');
let mesuresRouter = require('./routes/mesures.route');
app_api.use(API_URI, usersRouter);
app_api.use(API_URI, sensorsRouter);
app_api.use(API_URI, mesuresRouter);



//define port listener
app_api.listen(3030);

module.exports = app_api;