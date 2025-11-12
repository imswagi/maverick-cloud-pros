import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              About Maverick-CloudPro
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted AWS Advanced Tier Partner, delivering excellence in cloud transformation since 2014.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Leading Cloud Innovation in Singapore
              </h2>
              <p className="text-muted-foreground">
                Maverick-CloudPro Pte Ltd is a Singapore-based AWS Advanced Tier Partner specializing in comprehensive cloud consulting, migration, and managed services. We help businesses of all sizes leverage the full power of AWS to drive innovation and growth.
              </p>
              <p className="text-muted-foreground">
                With over a decade of experience and a team of AWS-certified professionals, we've successfully migrated and managed hundreds of workloads for clients across various industries. Our commitment to excellence and customer success has made us a trusted partner for cloud transformation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-border shadow-card">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-primary mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">AWS Certifications</div>
                </CardContent>
              </Card>
              <Card className="border-border shadow-card">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-secondary mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </CardContent>
              </Card>
              <Card className="border-border shadow-card">
                <CardContent className="pt-6">
                  <Target className="h-8 w-8 text-primary mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card className="border-border shadow-card">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 text-secondary mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="border-border shadow-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with cutting-edge AWS cloud solutions that drive innovation, efficiency, and sustainable growth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading AWS partner in Southeast Asia, recognized for excellence in cloud transformation and customer success.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, Innovation, Integrity, Customer Focus, and Continuous Learning drive everything we do.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Why Choose Maverick-CloudPro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "AWS Advanced Tier Partner with proven expertise",
                "100+ AWS-certified professionals",
                "24/7 support and monitoring",
                "Proven track record with 500+ successful migrations",
                "Deep expertise across all AWS services",
                "Competitive pricing and flexible engagement models",
                "Strong focus on security and compliance",
                "Dedicated customer success team",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
