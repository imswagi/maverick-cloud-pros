import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, BookOpen, Download } from "lucide-react";

const resources = [
  {
    category: "Whitepapers",
    icon: FileText,
    items: [
      { title: "AWS Migration Best Practices", type: "PDF", size: "2.5 MB" },
      { title: "Cost Optimization Strategies", type: "PDF", size: "1.8 MB" },
      { title: "Security & Compliance Guide", type: "PDF", size: "3.2 MB" },
      { title: "Cloud Architecture Patterns", type: "PDF", size: "2.1 MB" },
    ],
  },
  {
    category: "Case Studies",
    icon: BookOpen,
    items: [
      { title: "E-commerce Platform Migration", type: "PDF", size: "1.5 MB" },
      { title: "Financial Services Transformation", type: "PDF", size: "1.9 MB" },
      { title: "Healthcare Data Platform", type: "PDF", size: "1.7 MB" },
      { title: "Retail Analytics Solution", type: "PDF", size: "1.4 MB" },
    ],
  },
  {
    category: "Webinars & Videos",
    icon: Video,
    items: [
      { title: "Getting Started with AWS Migration", type: "Video", duration: "45 min" },
      { title: "AWS Cost Optimization Masterclass", type: "Video", duration: "60 min" },
      { title: "Security Best Practices", type: "Video", duration: "38 min" },
      { title: "DevOps on AWS", type: "Video", duration: "52 min" },
    ],
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Resources & Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Access our collection of whitepapers, case studies, and webinars to learn more about AWS best practices and success stories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {resources.map((section, index) => (
            <div key={section.category} className={index > 0 ? "mt-16" : ""}>
              <div className="flex items-center space-x-3 mb-6">
                <section.icon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{section.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <Card key={item.title} className="border-border shadow-card hover:shadow-card-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-4">
                        <span className="text-sm">{item.type}</span>
                        <span className="text-sm text-muted-foreground">
                          {'size' in item ? item.size : item.duration}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full group">
                        <Download className="h-4 w-4 mr-2 transition-transform group-hover:translate-y-0.5" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Looking for Specific Resources?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our team and we'll provide you with customized resources for your specific needs.
            </p>
            <Button size="lg">Contact Us</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
