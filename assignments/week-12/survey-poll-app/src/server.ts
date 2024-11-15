import express, { Application } from 'express';
import config from './config';
import surveyRoutes from './routes/surveyRoutes';


const app:Application = express()

app.use(express.json())
app.use('/api', surveyRoutes)

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});