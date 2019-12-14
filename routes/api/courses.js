const express = require('express');
const router = express.Router();
const courses = require('../../Courses');
var results = require('../../Results');

//router.get('/', (req, res) => res.json(courses));
router.post('/instructor_day', (req, res) => {
  const found = courses.some(course => course.day.toLowerCase().includes(req.body.day.toLowerCase()) && course.instructor.toLowerCase().includes(req.body.instructor.toLowerCase()));
  if (found)
    {
      results = courses.filter(course => course.day.toLowerCase().includes(req.body.day.toLowerCase()) && course.instructor.toLowerCase().includes(req.body.instructor.toLowerCase()));
      res.render('index', {
        courses, results
      })
  } else {
    var errorMessage = `No course with the instructor: ${req.body.instructor} and on the day: ${req.body.day}`;
    res.render('index', {
      errorMessage
    })
  }
})
router.post('/instructor_seats', (req, res) => {
  const found = courses.some(course => course.seats >= parseInt(req.body.seats) && course.instructor.toLowerCase().includes(req.body.instructor.toLowerCase()));
  if (found)
    {
      results = courses.filter(course => course.seats >= parseInt(req.body.seats) && course.instructor.toLowerCase().includes(req.body.instructor.toLowerCase()));
      res.render('index', {
        courses, results
      })
  } else {
    var errorMessage = `No course with at least ${req.body.seats} seats and with the instructor ${req.body.instructor}`;
    res.render('index', {
      errorMessage
    })
  }
})
router.post('/classType', (req, res) => {
  const found = courses.some(course => course.Type.toLowerCase().includes(req.body.Type.toLowerCase()));
  if (found)
    {
      results = courses.filter(course => course.Type.toLowerCase().includes(req.body.Type.toLowerCase()));
      res.render('index', {
        courses, results
      })
  } else {
    var errorMessage = `No course with the structure of ${req.body.classType}`;
    res.render('index', {
      errorMessage
    })
  }
})
router.post('/seats', (req, res) => {
  const found = courses.some(course => course.seats >= parseInt(req.body.seats));
  if (found)
    {
      results = courses.filter(course => course.seats >= parseInt(req.body.seats));
      res.render('index', {
        courses, results
      })
  } else {
    var errorMessage = `No course with at least ${req.body.seats} seats`;
    res.render('index', {
      errorMessage
    })}
})
router.post('/day', (req, res) => {
  const found = courses.some(course => course.day.toLowerCase().includes(req.body.day.toLowerCase()));
  if (found)
    {
      results = courses.filter(course => course.day.toLowerCase().includes(req.body.day.toLowerCase()));
      res.render('index', {
        courses, results
      })
  } else {
    var errorMessage = `No course with the day of ${req.body.day}`;
    res.render('index', {
      errorMessage
    })}
})
router.post('/instructor', (req, res) => {
  const found = courses.some(course => course.instructor.toLowerCase().includes(req.body.instructor.toLowerCase()));
  if (found)
    {
      results = courses.filter(course => course.instructor.toLowerCase().includes(req.body.instructor.toLowerCase()));
      res.render('index', {
        courses, results
      })
  } else {
    var errorMessage =  `No course with the instructor of ${req.body.instructor}`;
    res.render('index', {
      errorMessage
    })}
})
router.post('/code', (req, res) => {
  const found = courses.some(course => course.code.toLowerCase().includes(req.body.code.toLowerCase()));
  if (found)
    {
      results = courses.filter(course => course.code.toLowerCase().includes(req.body.code.toLowerCase()));
      res.render('index', {
        courses, results
      })
  } else {
    var errorMessage = `No course with the code of ${req.body.code}`;
    res.render('index', {
      errorMessage
    })
  }
})

router.post('/title', (req, res) => {
  const found = courses.some(course => course.title.toLowerCase().includes(req.body.title.toLowerCase()));
  if (found)
    {
      results = courses.filter(course => course.title.toLowerCase().includes(req.body.title.toLowerCase()));
      res.render('index', {
        courses, results
      })
  } else {
    var errorMessage = `No course with the title of ${req.body.title}`;
    res.render('index', {
      errorMessage
    })
  }
})
module.exports = router;
