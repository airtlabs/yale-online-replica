import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Users, 
  Award, 
  Clock, 
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Palette,
  Sofa,
  Lightbulb,
  Camera,
  Ruler,
  Hammer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion"; // npm install framer-motion

const sliderImages = [
  {
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&h=600&fit=crop",
    alt: "Elegant Living Room",
    caption: "Elegant Living Room"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&h=600&fit=crop",
    alt: "Modern Kitchen",
    caption: "Modern Kitchen"
  },
  {
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=900&h=600&fit=crop",
    alt: "Luxury Bedroom",
    caption: "Luxury Bedroom"
  },
  {
    src: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=900&h=600&fit=crop",
    alt: "Creative Workspace",
    caption: "Creative Workspace"
  }
];

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop",
    product: "https://pngimg.com/d/sofa_PNG6954.png", // Example PNG product
    heading: "Transform Your Dream Space",
    subheading: "Expert interior design services that bring luxury, comfort, and functionality to your home and office spaces.",
    cta: "Start Your Project"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop",
    product: "https://pngimg.com/d/armchair_PNG7042.png",
    heading: "Modern Designs, Timeless Appeal",
    subheading: "From concept to completion, we create spaces that inspire and delight.",
    cta: "View Portfolio"
  },
  {
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&h=800&fit=crop",
    product: "https://pngimg.com/d/lamp_PNG101453.png",
    heading: "Luxury Meets Functionality",
    subheading: "Personalized solutions for every lifestyle and business need.",
    cta: "Get Free Consultation"
  }
];

const Index = () => {
  const services = [
    {
      icon: Palette,
      title: "Interior Design",
      description: "Complete interior design solutions for residential and commercial spaces"
    },
    {
      icon: Sofa,
      title: "Furniture Design",
      description: "Custom furniture design and manufacturing to fit your style and space"
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Innovative lighting solutions to enhance ambiance and functionality"
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Optimal space utilization with smart planning and layout design"
    },
    {
      icon: Hammer,
      title: "Renovation",
      description: "Complete home and office renovation with modern design concepts"
    },
    {
      icon: Camera,
      title: "3D Visualization",
      description: "Realistic 3D renders to help you visualize your dream space"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      description: "Contemporary design with elegant furniture and lighting"
    },
    {
      id: 2,
      title: "Luxury Bedroom",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      description: "Luxurious bedroom design with custom wardrobe solutions"
    },
    {
      id: 3,
      title: "Modern Kitchen",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      description: "Sleek modular kitchen with smart storage solutions"
    },
    {
      id: 4,
      title: "Office Space",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      description: "Professional office design promoting productivity and comfort"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Home, value: "1000+", label: "Projects Completed" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Client Rating" }
  ];

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 1.2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 1.5, spacing: 32 } },
    },
  });

  const [heroSliderRef, heroSlider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      drag: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <Layout>
      {/* Hero Section with Interior Design Video Background */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-living-room-1176-large.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/80 z-10" />

        {/* Centered Content */}
        <div className="relative z-20 w-full max-w-2xl px-4 flex flex-col items-center text-center">
          <motion.h1
            className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Transform Your Dream Space
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-blue-100 mb-8 max-w-xl mx-auto"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Expert interior design services that bring luxury, comfort, and functionality to your home and office spaces.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-primary hover:text-white text-lg px-8 font-bold shadow-xl"
            >
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to your unique style and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest interior design projects showcasing creativity and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-luxury transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Blue Taare?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Expert Design Team</h3>
                    <p className="text-gray-600">Experienced designers with creative vision and technical expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Quality Materials</h3>
                    <p className="text-gray-600">Premium quality materials and finishes for lasting beauty</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Timely Delivery</h3>
                    <p className="text-gray-600">On-time project completion with transparent communication</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Budget-Friendly</h3>
                    <p className="text-gray-600">Competitive pricing without compromising on quality</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop" 
                alt="Interior Design Process"
                className="rounded-lg shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slider Carousel Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Inspiration Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Discover stunning spaces designed by Blue Taare
            </p>
          </div>
          <div ref={sliderRef} className="keen-slider rounded-xl shadow-luxury overflow-hidden">
            {sliderImages.map((img, idx) => (
              <div
                key={idx}
                className="keen-slider__slide flex flex-col items-center justify-center bg-gray-100"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-80 object-cover rounded-xl"
                  style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
                />
                <div className="mt-4 text-xl font-semibold text-primary">{img.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's bring your vision to life with our expert interior design services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
              Call Now: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
