import { PrismaClient } from "@prisma/client";
import sendEmail from "../../utils/sendMailByNodeMailer";
import { scheduleEmailTemplate } from "../../utils/sendEmailTemplete";

const prisma = new PrismaClient();

const createSchedule = async (data: any) => {
  const result = await prisma.schedule.create({
    data: {
      ...data,
    },
  });

  const { subject, html } = scheduleEmailTemplate(result);

  await sendEmail(result.email, subject, html);

  return {
    data: result,
  };
};

const getSchedules = async () => {
  const user = await prisma.news.findMany();
  return user;
};

export const ScheduleServices = {
  createSchedule,
  getSchedules,
};
