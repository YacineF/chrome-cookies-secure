var vivaldi = require('../index');

vivaldi.getCookies('https://www.goodreads.com', function (err, cookies) {

	if (err) {
		console.error(err);
		return;
	}

	console.log(cookies);

});
