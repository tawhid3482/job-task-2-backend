import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const createtestimonials = async (data: any) => {
  const result = await prisma.testimonials.create({
    data: {
      ...data,
    },
  });
 
  return result;
};

const getAlltestimonials = async () => {
  const user = await prisma.testimonials.findMany();

  return user;
};

export const testimonialsServices = {
  createtestimonials,
  getAlltestimonials,
};
