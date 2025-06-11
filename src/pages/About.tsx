
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Home,
  Star,
  Lightbulb,
  Heart,
  Palette,
  Ruler,
  Coffee
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Home, value: "200+", label: "Projects Completed" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
    { icon: Globe, value: "15+", label: "Cities Served" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every design detail, ensuring your space reflects the highest quality craftsmanship."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We blend contemporary trends with timeless elegance to create unique spaces that stand the test of time."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for design drives us to transform ordinary spaces into extraordinary experiences for our clients."
    },
    {
      icon: Star,
      title: "Quality",
      description: "We never compromise on quality, using premium materials and proven techniques in every project we undertake."
    }
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Lead Interior Designer",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer with 12 years of experience in luxury residential and commercial spaces."
    },
    {
      name: "Rajesh Kumar",
      role: "Senior Architect",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=face",
      bio: "Specialist in modern architecture and sustainable design solutions for contemporary living."
    },
    {
      name: "Meera Patel",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
      bio: "Ensures seamless project execution from concept to completion with meticulous attention to detail."
    }
  ];

  const services = [
    { icon: Home, title: "Residential Design", description: "Complete home makeovers" },
    { icon: Coffee, title: "Commercial Spaces", description: "Office and retail design" },
    { icon: Palette, title: "Color Consultation", description: "Perfect color schemes" },
    { icon: Ruler, title: "Space Planning", description: "Optimal layout solutions" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-blue-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              About Blue Taare
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transforming spaces into stunning works of art. We are passionate interior designers 
              committed to creating beautiful, functional environments that reflect your unique style and personality.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Blue Taare, we believe that great design has the power to transform lives. 
                Our mission is to create spaces that are not just beautiful, but also functional, 
                sustainable, and deeply personal to each client.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We work closely with homeowners, architects, and contractors to bring visions to life, 
                ensuring every project reflects our commitment to excellence and innovation in interior design.
              </p>
              
              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <service.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{service.title}</div>
                      <div className="text-gray-600 text-xs">{service.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" 
                  alt="Beautiful interior design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-gray-600 font-medium">Client Rating</div>
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every design we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary to-blue-700 rounded-2xl shadow-lg">
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of designers and architects bring creativity, expertise, and passion to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full ring-4 ring-primary/20"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 font-medium px-4 py-1">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let's work together to create the interior of your dreams. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              View Our Portfolio
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
