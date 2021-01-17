#!/bin/bash

yarn build

bucket_name="aprils.live"
website_directory="./build/"

# # 1. Create a new bucket with a unique name
# aws s3 mb --region us-west-1 "s3://$bucket_name" 

# # 2. Enable public access to the bucket
# aws s3api put-public-access-block \
#     --region us-west-1 \
#     --bucket $bucket_name \
#     --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# # 3. Update the bucket policy for public read access:
# aws s3api put-bucket-policy --region us-west-1 --bucket $bucket_name --policy "{
#   \"Version\": \"2012-10-17\",
#   \"Statement\": [
#       {
#           \"Sid\": \"PublicReadGetObject\",
#           \"Effect\": \"Allow\",
#           \"Principal\": \"*\",
#           \"Action\": \"s3:GetObject\",
#           \"Resource\": \"arn:aws:s3:::$bucket_name/*\"
#       }
#   ]
# }"

# # # 4. Enable the s3 bucket to host an `index` and `error` html page
# aws s3 website "s3://$bucket_name" --index-document index.html --error-document index.html --region us-west-1

# 5. Upload you website
aws s3 sync $website_directory "s3://$bucket_name/"  --region us-west-1