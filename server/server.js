const express = require('express');
const app = express();
const port = 3333;

app.use('/', express.static( './public' ));

app.listen(3000, () => {
	console.log('server is running on port 3000');
});
