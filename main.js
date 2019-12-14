const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const courses = require('./Courses');
var results = require('./Results');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Courses App',
     results
  }) 
);
 app.use(express.static(path.join(__dirname, '/public')));
// Members API Routes
app.use('/api/courses', require('./routes/api/courses'));
app.use('/api/forms', require('./routes/api/forms'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
