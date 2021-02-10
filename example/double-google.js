var vivaldi = require('../index');

vivaldi.getCookies('http://google.com', function (err, cookies) {
	vivaldi.getCookies('http://google.com', function (err, cookies) {

		if (err) {
			console.error(err);
			return;
		}

		console.log(cookies);

	});
});
