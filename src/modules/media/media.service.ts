import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const createmediaPhoto = async (data: any) => {
  const result = await prisma.photo.create({
    data: {
      ...data,
    },
  });
  // hide password
  return result;
};

const getAllmediaPhoto = async () => {
  const user = await prisma.photo.findMany();

  return user;
};
const createmediaVideo = async (data: any) => {
  const result = await prisma.video.create({
    data: {
      ...data,
    },
  });
  // hide password
  return result;
};

const getAllmediaVideo = async () => {
  const user = await prisma.video.findMany();

  return user;
};

export const mediaServices = {
 createmediaPhoto,
 createmediaVideo,
 getAllmediaPhoto,
 getAllmediaVideo
};
