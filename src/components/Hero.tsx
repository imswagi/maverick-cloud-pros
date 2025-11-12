import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              AWS Advanced Tier Partner
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Transform Your Business with{" "}
              <span className="text-primary">AWS Cloud Excellence</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Expert cloud consulting, migration, and managed services from Singapore's trusted AWS Advanced Tier Partner. Accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Workloads Migrated</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg bg-card p-6 shadow-card border border-border">
              <Cloud className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Cloud Migration</h3>
              <p className="text-sm text-muted-foreground">Seamless migration from any cloud platform to AWS with zero downtime</p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-card border border-border">
              <Shield className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Security & Compliance</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade security with AWS best practices and compliance frameworks</p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-card border border-border">
              <Zap className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Managed Services</h3>
              <p className="text-sm text-muted-foreground">24/7 monitoring and management to optimize your AWS infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
