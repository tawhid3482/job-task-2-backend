import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import AppError from "../../helpers/AppError";
import { envVars } from "../../config/env";

const prisma = new PrismaClient();

const createPerfection = async (data: any) => {
  const result = await prisma.perfections.create({
    data: {
      ...data,
    },
  });
  // hide password
  return result;
};

const getAllPerfection = async () => {
  const user = await prisma.perfections.findMany();

  return user;
};

export const perfectionServices = {
  createPerfection,
  getAllPerfection,
};
