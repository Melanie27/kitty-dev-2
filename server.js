var express = require('express'),
  http = require('http'),
  items = require('./data/menu-items');
  questions = require('./data/kitty-questions');
  supplies = require('./data/kitty-supplies');

var app = express()
  .use(express.bodyParser())
  .use(express.static('public'));

app.get('/items', function  (req, res) {
  res.json(items);
});

app.get('/questions', function  (req, res) {
  res.json(questions);
});

app.get('/supplies', function  (req, res) {
  res.json(supplies);
});

app.post('/items', function  (req, res) {
  var matches = items.filter(function  (item) {
    return item.url === req.body.url;
  });

  if (matches.length > 0) {
    res.json(409, {status: 'item already exists'});
  } else {
    req.body.id = req.body.url;
    items.push(req.body);
    res.json(req.body);
  }

});

app.post('/questions', function  (req, res) {
  var matches = questions.filter(function  (question) {
    return question.url === req.body.url;
  });

  if (matches.length > 0) {
    res.json(409, {status: 'question already exists'});
  } else {
    req.body.id = req.body.url;
    questions.push(req.body);
    res.json(req.body);
  }

});

app.post('/supplies', function  (req, res) {
  var matches = supplies.filter(function  (supply) {
    return supply.url === req.body.url;
  });

  if (matches.length > 0) {
    res.json(409, {status: 'supply already exists'});
  } else {
    req.body.id = req.body.url;
    questions.push(req.body);
    res.json(req.body);
  }

});



app.get('/items/:item_name', function  (req, res) {
  var matches = items.filter(function  (item) {
    return item.url === req.params.item_name;
  });

  if (matches.length > 0) {
    res.json(matches[0]);
  } else {
    res.json(404, {status: 'invalid menu item'});
  }

});

app.get('/questions/:question_name', function  (req, res) {
  var matches = questions.filter(function  (question) {
    return question.url === req.params.question_name;
  });

  if (matches.length > 0) {
    res.json(matches[0]);
  } else {
    res.json(404, {status: 'invalid survey question'});
  }

});

app.get('/supplies/:supply_name', function  (req, res) {
  var matches = supplies.filter(function  (supply) {
    return supply.url === req.params.supply_name;
  });

  if (matches.length > 0) {
    res.json(matches[0]);
  } else {
    res.json(404, {status: 'invalid supply request'});
  }

});

app.delete('/items/:item_name', function  (req, res) {

  var found = false;

  items.forEach(function (item, index) {
    if (item.url === req.params.item_name) {
      found = index;
    }
  });

  if (found) {
    items.splice(found, 1);
    res.json(200, {status: 'deleted'});
  } else {
    res.json(404, {status: 'invalid menu item'});
  }

});

app.delete('/questions/:question_name', function  (req, res) {

  var found = false;

  items.forEach(function (question, index) {
    if (question.url === req.params.question_name) {
      found = index;
    }
  });

  if (found) {
    items.splice(found, 1);
    res.json(200, {status: 'deleted'});
  } else {
    res.json(404, {status: 'invalid survey question deletion'});
  }

});

app.delete('/supplies/:supply_name', function  (req, res) {

  var found = false;

  items.forEach(function (supply, index) {
    if (supply.url === req.params.supply_name) {
      found = index;
    }
  });

  if (found) {
    items.splice(found, 1);
    res.json(200, {status: 'deleted'});
  } else {
    res.json(404, {status: 'invalid survey question deletion'});
  }

});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

http.createServer(app).listen(3000, function () {
  console.log("Server ready at http://localhost:3000");
});
