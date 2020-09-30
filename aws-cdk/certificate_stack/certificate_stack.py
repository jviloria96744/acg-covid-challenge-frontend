from aws_cdk import (
    core,
    aws_certificatemanager as cm,
)


class CertificateStack(core.Stack):

    def __init__(self, scope: core.Construct, id: str, sub_domain: str, domain: str, ** kwargs) -> None:
        """
        CertificateStack creates the CloudFormation Stack that provisions the SSL Certificate that the CloudFront Distributions use for HTTPS traffic.

        arguments:
        sub_domain -- sub domain name used for the dashboard url, acg-covid-challenge
        domain -- custom domain name owned by user, e.g. my-domain.com        
        """

        super().__init__(scope, id, **kwargs)

        # Certificate covers the domain, acg-covid-challenge.my-domain.com
        certificate = cm.Certificate(self, "MyCertificate",
                                     domain_name=f"{sub_domain}.{domain}",
                                     validation_method=cm.ValidationMethod.DNS
                                     )

        core.CfnOutput(self, "certificatearn",
                       value=certificate.certificate_arn)
