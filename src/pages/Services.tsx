import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Database, Settings, CreditCard, Shield, BarChart, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Consulting & Advisory",
    description: "Strategic cloud transformation guidance tailored to your business objectives.",
    features: [
      "AWS Well-Architected Framework Review",
      "Cloud Strategy Development",
      "Architecture Design & Best Practices",
      "Cost Optimization Strategies",
      "Security & Compliance Assessment",
      "Technology Roadmap Planning",
    ],
  },
  {
    icon: Database,
    title: "Cloud Migration Services",
    description: "End-to-end migration services from any cloud platform to AWS.",
    features: [
      "Comprehensive Migration Assessment",
      "Zero-Downtime Migration Strategy",
      "Application & Database Migration",
      "Data Transfer & Synchronization",
      "Testing & Validation",
      "Post-Migration Optimization",
    ],
  },
  {
    icon: Settings,
    title: "Managed Cloud Services",
    description: "24/7 monitoring and management of your AWS infrastructure.",
    features: [
      "Infrastructure Monitoring & Management",
      "Performance Optimization",
      "Security Patch Management",
      "Backup & Disaster Recovery",
      "Cost Management & Reporting",
      "Incident Response & Support",
    ],
  },
  {
    icon: CreditCard,
    title: "AWS Credits Provision",
    description: "Maximize your cloud investment with AWS credits and funding programs.",
    features: [
      "Credits Assessment & Eligibility",
      "Application Process Support",
      "Usage Optimization Guidance",
      "Credit Management & Tracking",
      "Program Renewals",
      "ROI Analysis & Reporting",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Comprehensive security solutions aligned with industry standards.",
    features: [
      "Security Architecture Design",
      "Identity & Access Management",
      "Data Encryption & Protection",
      "Compliance Framework Implementation",
      "Security Audits & Assessments",
      "Threat Detection & Response",
    ],
  },
  {
    icon: BarChart,
    title: "DevOps & Automation",
    description: "Streamline operations with CI/CD pipelines and infrastructure automation.",
    features: [
      "CI/CD Pipeline Development",
      "Infrastructure as Code (IaC)",
      "Automated Deployment Solutions",
      "Container Orchestration",
      "Monitoring & Logging Setup",
      "Performance Testing Automation",
    ],
  },
  {
    icon: Users,
    title: "Training & Enablement",
    description: "Empower your team with AWS knowledge and best practices.",
    features: [
      "AWS Certification Training",
      "Custom Workshop Development",
      "Hands-on Technical Training",
      "Best Practices Workshops",
      "Team Skill Assessment",
      "Ongoing Knowledge Transfer",
    ],
  },
  {
    icon: Zap,
    title: "Cloud Optimization",
    description: "Continuous improvement and optimization of your AWS environment.",
    features: [
      "Performance Tuning & Optimization",
      "Cost Reduction Strategies",
      "Right-Sizing Recommendations",
      "Reserved Instance Planning",
      "Architecture Modernization",
      "Workload Optimization",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Comprehensive AWS Services
            </h1>
            <p className="text-lg text-muted-foreground">
              End-to-end cloud solutions designed to accelerate your digital transformation and maximize your AWS investment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border-border shadow-card hover:shadow-card-lg transition-all">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-muted-foreground">
                        <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how our AWS expertise can help accelerate your business goals.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
