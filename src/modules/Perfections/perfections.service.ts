import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPerfection = async (data: any) => {
  const result = await prisma.perfections.create({
    data: {
      Title: data.Title,
      Type: data.Type,
      Orientation: data.Orientation,
      Address: data.Address,
      FrontRoad: data.FrontRoad,
      LandSize: data.LandSize,
      ApartmentSize: data.ApartmentSize,
      NumberOfUnits: data.NumberOfUnits,
      NumberOfParking: data.NumberOfParking,
      NumberOfFloors: data.NumberOfFloors,
      Image: data.doc, 
    },
  });
  return result;
};



const updatePerfection = async (id: string, data: any) => {
  const result = await prisma.perfections.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });
  return result;
};

const getAllPerfection = async () => {
  const user = await prisma.perfections.findMany();

  return user;
};

export const perfectionServices = {
  createPerfection,
  getAllPerfection,
  updatePerfection,
};
