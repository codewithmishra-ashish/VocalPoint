import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

export const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "public-read",
    key: function (req, file, cb) {
      const fileName = `audio/${req.user._id}/${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
});
