/* eslint-disable linebreak-style */
import express from 'express';
import apiRoutes from './routes/index';

// import 'babel-polyfill';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', apiRoutes);
app.use('*', (req, res) => res.status(404).json({ status: 404, error: 'Page Not Found' }),);

app.listen(port, () => console.log(`Hey Sagini, am listening on port ${port}!`),);

export default app;
