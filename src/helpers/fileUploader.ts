import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const audio = upload.single("audio");

// Upload single images

const chatIamge = upload.single("chatImage");

const completeWorkDocuments=upload.fields([
  { name: "signature", maxCount:1 },
  { name: "beforePhoto", maxCount: 10 },
  { name: "afterPhoto", maxCount: 10 },

]);
// ✅ Upload single files
const avatar = upload.single("avatar");
const chatImage = upload.single("chatImage");
const doc = upload.single("doc");
const jobImage=upload.single("jobImage")

const profileUpdateFields = upload.fields([
  { name: "profileImage", maxCount: 1 },
  { name: "doc", maxCount: 1 },
]);


export const fileUploader = {
  avatar,
  chatIamge,
  audio,
  profileUpdateFields,
  jobImage,
  chatImage,
  doc,
  completeWorkDocuments

};
