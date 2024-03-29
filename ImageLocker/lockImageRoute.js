require('dotenv').config();
const express = require("express");
const multer = require('multer');
const Minio = require('minio');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
    username: 'api',
    key: process.env.EMAIL_API_KEY,
});
const isLoggedIn = require('./middleware/userMiddleware');

const minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'username',
    secretKey: 'password',
});

const router = express.Router();
const upload = multer();

router.post("/lockImage", isLoggedIn, upload.single('image'), async (req, res, next) => {
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

async function sendMail() {
    mg.messages
        .create("sandbox2d9138016dc54e54a5454dafc5d0a227.mailgun.org", {
            from: "Mailgun Sandbox <postmaster@sandbox2d9138016dc54e54a5454dafc5d0a227.mailgun.org>",
            to: ["nguiquerro@myges.fr"],
            subject: "Your Image has been delivred",
            text: "Thans for your contributing :D !",
        })
        .then(msg => console.log(msg))
        .catch(err => console.log(err));
}

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

    const username = req.body.user;

    if (!username) {
        return res.status(400).json({ error: 'No username provided' });
    }
    const date = Date.now();
    console.log(date)
    const fileName = username + "|" + date + "|" + imageFile.originalname;
    const fileBuffer = imageFile.buffer;

    await minioClient.putObject(lockBucketName, fileName, fileBuffer, fileBuffer.length);

    sendMail();
    res.status(200).json({
        message: "Image uploaded successfully",
    });
}

module.exports = router;
