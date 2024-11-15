import { Router } from 'express';
import { getAllSurveys, getSurveyById, createSurvey, updateSurvey, deleteSurvey } from '../controllers/surveyController';

const router:Router = Router();

router.get('/surveys', getAllSurveys);
router.get('/surveys/:id', getSurveyById);
router.post('/surveys', createSurvey);
router.put('/surveys/:id', updateSurvey);
router.delete('/surveys/:id', deleteSurvey);

export default router;

