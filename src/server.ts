import app from './config/appConfig';

const { PORT } = process.env;

app.listen(PORT, () => console.log('Server up on port %d', PORT));
