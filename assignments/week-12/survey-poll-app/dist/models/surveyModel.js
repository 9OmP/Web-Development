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
exports.SurveyModel = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class SurveyModel {
    static getAllSurveys() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.survey.findMany();
        });
    }
    static getSurveyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.survey.findUnique({ where: { id } });
        });
    }
    static createSurvey(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.survey.create({ data });
        });
    }
    static updateSurvey(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.survey.update({ where: { id }, data });
        });
    }
    static deleteSurvey(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.survey.delete({ where: { id } });
        });
    }
}
exports.SurveyModel = SurveyModel;
module.exports = { SurveyModel };
