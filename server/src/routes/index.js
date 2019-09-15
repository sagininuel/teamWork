/* eslint-disable linebreak-style */
import express from 'express';

// import 'babel-polyfill';

const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => res.json({ status: 200, message: 'Welcome to the Team Work API' }),);

apiRoutes.get('/v1', (req, res) => res.json({ status: 200, message: 'Welcome to version 1 of Team Work API' }),);

export default apiRoutes;
