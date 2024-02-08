# Image Locker React App

## Installation Front

Pour lancer l'appli:

1. npm install dans les 2 repo (front et back)
2. pour lancer le front/back : npm start
3. dans le back il faut

    .env à la racine (la sécurité) :

FIREBASE_API_KEY=AIzaSyCpl5yTgx8om6oCfHGyJsdeUiC_-7M7u-M
FIREBASE_AUTH_DOMAIN=imagelockerpro.firebaseapp.com
FIREBASE_PROJECT_ID=imagelockerpro
FIREBASE_STORAGE_BUCKET=imagelockerpro.appspot.com
FIREBASE_MESSAGING_SENDER_ID=297643225257
FIREBASE_APP_ID=1:297643225257:web:cb2ce84368a4fe4d6bb9b8
EMAIL_API_KEY=19949c2d460544fbb6d563e8a3eabb54-8c90f339-792a7b3d
MAILGUN_DOMAIN=sandbox2d9138016dc54e54a5454dafc5d0a227.mailgun.org

dans le back dans /config créer un fichier :
firebaseServiceAccountKey.json

Avec :
{
  "type": "service_account",
  "project_id": "imagelockerpro",
  "private_key_id": "c64871a83c5b9ef46ab49f67538c2aa00cd41648",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCf5CAsnaBYl8DG\nIP1jc5NK7Jcr2HhDFm3PbN05N5v5gm01QSoDH0DfFaR3JP3kCEF8BTMW9j4NppA8\n4N3OkObGxmi/g0jol2zhT2iqH9LaRmZSKMr26ItLbCWVf29ptM89NEXdaJeV9VjI\nEzs7/5oppy+G9nEEL+x67CYS5Ljwwgy+86X6sqUEtLGInzQiQG6qz/pB8kAE6EmW\nAgx+qVaOA4AaisWh6R0c3efOlsBuiX6j2scjhEfviYYIVTIiMnxexEqQVgpNFFao\nuJ3+fpYzen/Y+vEnL9mjzGlOWYCLPfQWX/dX40VgkiYUfGdzLdiWh9UM5MoAAxrh\n86z9YQv/AgMBAAECggEATz1AULwhfiZe7BHnYcUiZwxPcvRJzX2tGBIspLGRhBsG\nQlE0H+36OVTBeCaGCN+qjGsLQcLxR9SXQQR0CG45YKNtwBOxK0v4MsUm6sDwvyoK\nhYcf5zOh7NQA4FEShwGLfxqL0UmHblL0F9uoDHkFDsWDQVCa++dAPD8SM2TU3sOT\nqlp5JY6c1lTasg5agBg38jWcasZRuP8n+kuWURhf+obk3ny8mKSFHSokKTCnXnwq\nDiNDNyfVwwP+FAeSGzz+pTkYMZeIBTu/5ICjFJ3Mtv11qx9F5RoYjNKsUZF8jHrh\nkpKuksnnZVbZBAxJJv7psHX9ONt4jbY3cdZoUNIbKQKBgQDWktqYVKzIbNP3xkTk\n+vDibHJb3NPKQ1BvUno+dyWLkktgCUaPTf+Y5oL+Sv7xMNJCuqrG6bJHr1PmiUWU\nZeR12DzYahit0TWibRw33PUcC+BvzI9i9C577aTaIUS3dxlJeaslAu/e0cCIT9Os\nlPB7g+vhLUgaqaJ2Wa+fJ7NtawKBgQC+wqCkyTPFdcJPB451yaSgQK++kPwHBPAl\nquAB82DyKF0t79F7Hnifz0u2i9rVc3WCb9FVyCdC6wfL1yMtoZN5j9Lzy5U5o6sF\nSh4XyiZp0ycLCfIV6KmIGAIMMuBCP8pamSRDp9+rpE+noSHqFEU5c281fA6FiaLV\nqxj+TijMvQKBgDHnUaOf/ddXSC0WFavTmPZwFmC7CR6/bROW8QtaFodRbOpW/ewS\nTeG3qruNoaFio2QVmeZNL8NwSWkSf/Y1hF7L/cqvUjIKuBigm7F6WB8/u+EEiEyR\nUcZMzMxWdG7e6iimfWFMP5Fo4whQ2IAI260+Tzu9lkltLnWsAiZXy2klAoGAaFXB\nUX/uvhCDf4AtjgUE8tWOihd4kUpFIwUL0mVQYAJtvINPuxxWc2oJCkYCIf8thXMt\nNtLrjnFIaVg5GGsoYzOj+M4fx0/aaWE5hl99lSH1V9dPvmXr29DtxchJ2lJTlivu\npsZ50sJjAtdh2krN9fdKGyHIO4elNWKIoAcVz60CgYEAzY84DgpVD5bnVIJS5KCe\nv6ASgMtrAX/3Do0xpTtkxC/bGTx/7xhibvkHY1jKMuZxeuMgV6A9NxfSkHlps5JJ\neAFq/a0uesGntFbO91dUphOCDPGbiIacgquOJaPQsJtN4sXeL0GqOUvSqyihH7Mx\nZAFw7NUpSCf3DHPUrxmsemQ=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xrw14@imagelockerpro.iam.gserviceaccount.com",
  "client_id": "112659516490553327323",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xrw14%40imagelockerpro.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}