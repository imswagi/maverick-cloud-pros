import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Shield, Star } from "lucide-react";

const Partnership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="text-base px-4 py-2 mb-6">
              <Award className="h-4 w-4 mr-2" />
              AWS Advanced Tier Partner
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              AWS Partnership Excellence
            </h1>
            <p className="text-lg text-muted-foreground">
              Our Advanced Tier Partner status demonstrates our commitment to AWS excellence and customer success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                What is AWS Advanced Tier Partnership?
              </h2>
              <p className="text-muted-foreground">
                The AWS Partner Network (APN) Advanced Tier is a prestigious designation awarded to partners who have demonstrated deep AWS expertise, technical proficiency, and proven customer success. This tier requires significant investment in AWS certifications, customer success stories, and ongoing technical validation.
              </p>
              <p className="text-muted-foreground">
                As an Advanced Tier Partner, Maverick-CloudPro has met stringent requirements including maintaining a team of AWS-certified professionals, demonstrating proven customer success, and showing expertise across multiple AWS service categories.
              </p>
            </div>
            <Card className="border-border shadow-card-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  Partnership Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Access to AWS technical resources and support",
                  "Early access to new AWS services and features",
                  "Joint marketing and co-sell opportunities",
                  "AWS funding programs and credits for customers",
                  "Advanced training and certification programs",
                  "Direct access to AWS specialists",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our AWS Competencies & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Migration Competency",
                  description: "Proven expertise in migrating complex workloads to AWS",
                  icon: Award,
                },
                {
                  title: "DevOps Competency",
                  description: "Advanced capabilities in AWS DevOps practices and automation",
                  icon: Star,
                },
                {
                  title: "Security Competency",
                  description: "Specialized knowledge in AWS security and compliance",
                  icon: Shield,
                },
              ].map((competency) => (
                <Card key={competency.title} className="border-border shadow-card">
                  <CardHeader>
                    <competency.icon className="h-8 w-8 text-primary mb-3" />
                    <CardTitle className="text-lg">{competency.title}</CardTitle>
                    <CardDescription>{competency.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle>Team Certifications</CardTitle>
                <CardDescription>Our team holds over 100 AWS certifications across all levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">AWS Certified Solutions Architect</span>
                    <Badge variant="secondary">35+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">AWS Certified DevOps Engineer</span>
                    <Badge variant="secondary">20+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">AWS Certified Security</span>
                    <Badge variant="secondary">15+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">AWS Certified Developer</span>
                    <Badge variant="secondary">18+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">AWS Certified SysOps Administrator</span>
                    <Badge variant="secondary">12+</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle>Customer Success Metrics</CardTitle>
                <CardDescription>Proven track record of delivering results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Successful Migrations</span>
                      <span className="text-2xl font-bold text-primary">500+</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                      <span className="text-2xl font-bold text-primary">99.9%</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Average Cost Reduction</span>
                      <span className="text-2xl font-bold text-primary">35%</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Years as AWS Partner</span>
                      <span className="text-2xl font-bold text-primary">10+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Partner with AWS Excellence
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our Advanced Tier Partner status means you get access to AWS expertise, resources, and support that drives real business results.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;
