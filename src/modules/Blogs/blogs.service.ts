import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const createblogs = async (data: any) => {
  const result = await prisma.blogs.create({
    data: {
      ...data,
    },
  });
  // hide password
  return result;
};

const getAllblogs = async () => {
  const user = await prisma.blogs.findMany();

  return user;
};

export const blogsServices = {
  createblogs,
  getAllblogs,
};
