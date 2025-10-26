import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const createslider = async (data: any) => {
  const result = await prisma.slider.create({
    data: {
      ...data,
    },
  });
  // hide password
  return result;
};

const getAllslider = async () => {
  const user = await prisma.slider.findMany();

  return user;
};

export const sliderServices = {
  createslider,
  getAllslider,
};
