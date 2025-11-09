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
const deleteTestimonial = async (id: string) => {
  const result = await prisma.testimonials.delete({
    where: {
      id
    },
  });
  return result;
};


export const testimonialsServices = {
  createtestimonials,
  getAlltestimonials,
  deleteTestimonial
};
