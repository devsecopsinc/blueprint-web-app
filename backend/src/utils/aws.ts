import * as AWS from 'aws-sdk'

export const AWS_CONFIG = {
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  AWS_REGION: process.env.AWS_REGION,
  AWS_S3_BUCKET_UPLOADS: process.env.AWS_S3_BUCKET_UPLOADS,
  AWS_S3_PRESIGNED_URL_TTL: process.env.AWS_S3_PRESIGNED_URL_TTL
}

export const AWS_S3 = new AWS.S3({
  accessKeyId: AWS_CONFIG.AWS_ACCESS_KEY,
  secretAccessKey: AWS_CONFIG.AWS_SECRET_KEY,
  region: AWS_CONFIG.AWS_REGION
})
