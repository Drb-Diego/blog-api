import 'dotenv/config';
import express from 'express';

import userRoutes from '../routes/user.routes';
import loginRoutes from '../routes/login.routes';

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(loginRoutes);

export default app;
