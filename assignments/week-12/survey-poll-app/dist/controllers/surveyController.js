"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSurvey = exports.updateSurvey = exports.createSurvey = exports.getSurveyById = exports.getAllSurveys = void 0;
const surveyModel_1 = require("../models/surveyModel");
const getAllSurveys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const surveys = yield surveyModel_1.SurveyModel.getAllSurveys();
    res.json(surveys);
});
exports.getAllSurveys = getAllSurveys;
const getSurveyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const survey = yield surveyModel_1.SurveyModel.getSurveyById(id);
    res.json(survey) || null;
});
exports.getSurveyById = getSurveyById;
const createSurvey = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const survey = yield surveyModel_1.SurveyModel.createSurvey(data);
    res.json(survey);
});
exports.createSurvey = createSurvey;
const updateSurvey = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const survey = yield surveyModel_1.SurveyModel.updateSurvey(id, data);
    res.json(survey);
});
exports.updateSurvey = updateSurvey;
const deleteSurvey = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const survey = yield surveyModel_1.SurveyModel.deleteSurvey(id);
    res.json(survey);
});
exports.deleteSurvey = deleteSurvey;
