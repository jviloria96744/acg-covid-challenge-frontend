# Python ETL Dashboard

This project is a front-end dashboard associated with step 11 of the [September 2020 ACloudGuru Challenge](https://acloudguru.com/blog/engineering/cloudguruchallenge-python-aws-etl). The dashboard is created using React and is hosted from an S3 Bucket. The dashboard is available to view [here](https://acg-covid-challenge.jviloria.com/)

The GitHub Actions Workflow is responsible for the CI/CD portion of this project and leverages the AWS Cloud Development Kit to create the S3 Bucket, CloudFront Distribution, SSL Certificate and associated permissions/access policies.
