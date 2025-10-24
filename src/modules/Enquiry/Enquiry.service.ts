import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const createEnquiry = async (data: any) => {
  const result = await prisma.enquiry.create({
    data: {
      ...data,
    },
  });
  // hide password
  return result;
};

const getAllEnquiry = async () => {
  const user = await prisma.enquiry.findMany();

  return user;
};

export const EnquiryServices = {
  createEnquiry,
  getAllEnquiry,
};
