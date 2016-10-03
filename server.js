let express = require('express');
let compression = require('compression')
let path = require('path');

let app = express();
app.use(compression());


app.use('/build', express.static(__dirname + '/build'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/video', express.static(__dirname + '/video'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!');
});

app.listen(3000, () => {
  console.log('Portfolio listening on port 3000!');
});