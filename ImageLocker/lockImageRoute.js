const express = require("express");
const multer = require('multer');
const Minio = require('minio');

const minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'username',
    secretKey: 'password',
});

const router = express.Router();
const upload = multer();

router.post("/lockImage", upload.single('image'), async (req, res, next) => {
    const lockBucketName = "lock-bucket";
    try {
        await createBucket(lockBucketName);
        await stockImage(lockBucketName, req, res);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

async function createBucket(lockBucketName) {
    const exists = await minioClient.bucketExists(lockBucketName);
    if (!exists) {
        await minioClient.makeBucket(lockBucketName, 'us-east-1');
    }
}

async function stockImage(lockBucketName, req, res) {
    const imageFile = req.file;

    if (!imageFile) {
        return res.status(400).json({ error: 'No image provided' });
    }

    const fileName = imageFile.originalname;
    const fileBuffer = imageFile.buffer;

    await minioClient.putObject(lockBucketName, fileName, fileBuffer, fileBuffer.length);

    res.status(200).json({
        message: "Image uploaded successfully",
    });
}

module.exports = router;
