const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

function uploadImage(filename, fileContent) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${filename}.jpg`,
    Body: fileContent,
  };
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.Location);
    });
  });
}

module.exports = { uploadImage };
