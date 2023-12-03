import AWS from "aws-sdk";

export async function uploadImage(files) {
    
    await AWS.config.update({
      accessKeyId: "AKIA6FDZ4F3XBF36VG7W",
      secretAccessKey: "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",
    });
    const s3 = new AWS.S3({
      params: { Bucket: "bnb-server-bucket" },
      region: "us-east-1",
    });
    try {
      console.log(1)
      var images = [];
      console.log(2)
      await Promise.all(
        files.map(async (file) => {
          console.log(3)
          const params = {
            Bucket: "bnb-server-bucket",
            Key: file.name,
            Body: file,
          };
          const data = await s3.upload(params).promise();
          images.push({ image: data.Location });
        })
      );
      return images;
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

