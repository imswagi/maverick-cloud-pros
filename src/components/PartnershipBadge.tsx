import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";

const PartnershipBadge = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="text-base px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              AWS Advanced Tier Partner
            </Badge>
            
            <h2 className="text-3xl font-bold text-foreground">
              Recognized Excellence in AWS Cloud Services
            </h2>
            
            <p className="text-lg text-muted-foreground">
              As an AWS Advanced Tier Partner, we've demonstrated deep expertise and proven success in helping organizations build and scale on AWS. Our partnership status reflects our commitment to AWS best practices and customer success.
            </p>

            <div className="space-y-3">
              {[
                "AWS-certified architects and engineers",
                "Proven track record with 500+ successful migrations",
                "Access to AWS technical resources and support",
                "Specialized expertise in AWS services",
              ].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-card p-6 border border-border shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Certified Professionals</div>
            </div>
            <div className="rounded-lg bg-card p-6 border border-border shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="rounded-lg bg-card p-6 border border-border shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="rounded-lg bg-card p-6 border border-border shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBadge;
