
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Sofa, 
  Lightbulb, 
  Ruler, 
  Hammer, 
  Camera,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Complete Interior Design",
      description: "Full-service interior design from concept to completion",
      features: ["Space planning and layout", "Color scheme selection", "Furniture and decor selection", "Project management"],
      price: "Starting from ₹2,000/sq ft"
    },
    {
      icon: Sofa,
      title: "Custom Furniture Design",
      description: "Bespoke furniture designed to fit your space perfectly",
      features: ["Custom measurements", "Material selection", "Unique designs", "Quality craftsmanship"],
      price: "Starting from ₹15,000"
    },
    {
      icon: Lightbulb,
      title: "Lighting Solutions",
      description: "Innovative lighting design for ambiance and functionality",
      features: ["LED lighting systems", "Smart controls", "Accent lighting", "Energy efficient solutions"],
      price: "Starting from ₹500/sq ft"
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Optimal utilization of available space with smart layouts",
      features: ["2D floor plans", "3D layouts", "Traffic flow optimization", "Storage solutions"],
      price: "Starting from ₹50/sq ft"
    },
    {
      icon: Hammer,
      title: "Home Renovation",
      description: "Complete renovation services for homes and offices",
      features: ["Structural modifications", "Electrical and plumbing", "Flooring and ceiling", "Paint and finishes"],
      price: "Starting from ₹1,200/sq ft"
    },
    {
      icon: Camera,
      title: "3D Visualization",
      description: "Photorealistic renders to visualize your dream space",
      features: ["3D modeling", "Virtual walkthroughs", "Material visualization", "Multiple design options"],
      price: "Starting from ₹5,000"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive interior design services to transform your space into a work of art
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl text-center group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
                    <Button className="w-full">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to creating beautiful and functional spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your needs and vision" },
              { step: "02", title: "Design", desc: "Creating detailed plans and 3D visualizations" },
              { step: "03", title: "Execution", desc: "Managing the project from start to finish" },
              { step: "04", title: "Completion", desc: "Final styling and handover of your space" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us today for a free consultation and personalized quote
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
