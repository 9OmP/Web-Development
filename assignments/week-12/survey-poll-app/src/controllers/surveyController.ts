import { Request, Response } from 'express';
import { SurveyModel } from '../models/surveyModel';

export const getAllSurveys = async (req: Request, res: Response) => {
    const surveys = await SurveyModel.getAllSurveys()
    res.json(surveys) 
}

export const getSurveyById = async ( req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const survey = await SurveyModel.getSurveyById(id)
    res.json(survey) || null
}

export const createSurvey = async (req: Request, res: Response): Promise<void> => {
    const data = req.body
    const survey = await SurveyModel.createSurvey(data)
    res.json(survey)
} 

export const updateSurvey = async(req: Request, res: Response): Promise<void> => {
    const id =  parseInt(req.params.id)
    console.log(id)
    const data = req.body
    const survey = await SurveyModel.updateSurvey(id, data)
    res.json(survey)
}

export const deleteSurvey = async(req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id)
    const survey = await SurveyModel.deleteSurvey(id)
    res.json(survey)
}