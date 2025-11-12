import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Database, Settings, CreditCard, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Consulting & Advisory",
    description: "Strategic guidance for your cloud journey with AWS best practices and architecture design.",
    features: ["Architecture Review", "Cost Optimization", "Security Assessment", "Migration Planning"],
  },
  {
    icon: Database,
    title: "Cloud Migration Services",
    description: "Seamless migration of workloads from any cloud provider to AWS with minimal disruption.",
    features: ["Assessment & Planning", "Zero-Downtime Migration", "Data Transfer", "Post-Migration Support"],
  },
  {
    icon: Settings,
    title: "Managed Cloud Services",
    description: "24/7 monitoring, management, and optimization of your AWS infrastructure.",
    features: ["Infrastructure Management", "Performance Monitoring", "Security Updates", "Cost Management"],
  },
  {
    icon: CreditCard,
    title: "AWS Credits Provision",
    description: "Access AWS credits to reduce costs and accelerate your cloud adoption journey.",
    features: ["Credit Assessment", "Application Support", "Usage Optimization", "Credit Management"],
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Comprehensive AWS Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to ongoing management, we provide end-to-end AWS services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {services.map((service) => (
            <Card key={service.title} className="border-border shadow-card hover:shadow-card-lg transition-all">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="mt-4">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="group">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
