const { Router } = require('express');

const { api } = require('../services/api');

const r = Router();

r.post('/api/result', async (req, res) => {
	let data = await api(req.body.url, req.body.data);

	res.send(data);
});

module.exports = r;
