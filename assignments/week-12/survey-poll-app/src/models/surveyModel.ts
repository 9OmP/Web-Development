import { PrismaClient, Survey } from '@prisma/client';
const prisma = new PrismaClient();

export class SurveyModel {
    static async getAllSurveys() {
      return await prisma.survey.findMany();
    }
  
    static async getSurveyById(id: any) {
      return await prisma.survey.findUnique({ where: { id } });
    }
  
    static async createSurvey(data: any) {
      return await prisma.survey.create({ data });
    }
  
    static async updateSurvey(id: any, data: any) {
      return await prisma.survey.update(
        { where: { id: id }, data });}
  
    static async deleteSurvey(id: any) {
      return await prisma.survey.delete({ where: { id } });
    }
  }
  
  module.exports = { SurveyModel }