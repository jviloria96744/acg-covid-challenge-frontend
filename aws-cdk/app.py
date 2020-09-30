#!/usr/bin/env python3
import os
from aws_cdk import core
from static_site_stack.static_site_stack import StaticSiteStack
from certificate_stack.certificate_stack import CertificateStack

app = core.App()

sub_domain = "acg-covid-challenge"
domain = app.node.try_get_context("domain")

cert_env = core.Environment(account=os.environ["CDK_DEFAULT_ACCOUNT"],
                            region="us-east-1")

CertificateStack(app, "CertificateStack", sub_domain, domain, env=cert_env)
stack_id = "PythonETLDashboard"
StaticSiteStack(app, stack_id, sub_domain, domain, env=aws_env)

app.synth()
