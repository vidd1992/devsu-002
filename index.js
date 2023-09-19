import sequelize from './shared/database/database.js';
import { usersRouter } from './users/router.js';
import { checkDataRouter } from './health/router.js';
import express from 'express';

const app = express();
const PORT = 8000;

sequelize.sync({ force: true }).then(() => console.log('db is ready'));

app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/health', checkDataRouter);

const server = app.listen(PORT, () => {
  console.log('Server running on port PORT', PORT);
});

export { app, server };
