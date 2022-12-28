var axios = require('axios');

function config(url, data) {
	return {
		method: 'post',
		url,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({ data }),
	};
}

async function api(url, data) {
	let result = await axios(config(url, data));

	return result.data;
}

module.exports = { api };
