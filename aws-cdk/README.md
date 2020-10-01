# Python ETL Dashboard

This project deploys the dashboard as a static site hosted from an S3 Bucket. This dashboard is associated with step 11 of the [September 2020 ACloudGuru Challenge](https://acloudguru.com/blog/engineering/cloudguruchallenge-python-aws-etl).

NOTE: The following instructions (until the CloudFormation Stack Description section) mirror the CDK template that is created when running `cdk init app --lanugage python`. This is left for people that are new to CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

This project is set up like a standard Python project. The initialization
process also creates a virtualenv within this project, stored under the .env
directory. To create the virtualenv it assumes that there is a `python3`
(or `python` for Windows) executable in your path with access to the `venv`
package. If for any reason the automatic creation of the virtualenv fails,
you can create the virtualenv manually.

To manually create a virtualenv on MacOS and Linux:

```
$ python3 -m venv .env
```

After the init process completes and the virtualenv is created, you can use the following
step to activate your virtualenv.

```
$ source .env/bin/activate
```

If you are a Windows platform, you would activate the virtualenv like this:

```
% .env\Scripts\activate.bat
```

Once the virtualenv is activated, you can install the required dependencies.

```
$ pip install -r requirements.txt
```

At this point you can now synthesize the CloudFormation template for this code.

```
$ cdk synth
```

To add additional dependencies, for example other CDK libraries, just add
them to your `setup.py` file and rerun the `pip install -r requirements.txt`
command.

## Useful commands

- `cdk ls` list all stacks in the app
- `cdk synth` emits the synthesized CloudFormation template
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk docs` open CDK documentation

## CloudFormation Stack Description

There are two CloudFormation stacks that this project creates.

- `CertificateStack-acg-covid-challenge` : This creates the SSL Certificate in the `us-east-1` region tied to `acg-covid-challenge.jviloria.com`
- `PythonETLDashboard` : This creates the S3 Bucket used for static site hosting, the CloudFront Distribution that sits in front of it and the Route53 record set that ties the custom domain name to the CloudFront DNS.

When deploying the stacks, two context variables must be included,

- `domain` : This is the custom domain name, the GitHub Secret, AWS_DOMAIN_NAME
- `certificate_arn` : This is the ARN (Amazon Resource Number) of the certificate created by the `CertificateStack-acg-covid-challenge`

Enjoy!
