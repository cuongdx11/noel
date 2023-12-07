const express = require('express');
const app = express();
const port = 3000; // hoặc bất kỳ cổng nào bạn muốn

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index'); // Điều này giả định bạn có một file 'index.ejs' trong thư mục 'views'
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
