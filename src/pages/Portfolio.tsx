
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Apartment",
      category: "residential",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
      description: "Modern luxury apartment with contemporary design elements",
      location: "Mumbai",
      area: "1200 sq ft",
      year: "2024"
    },
    {
      id: 2,
      title: "Villa Interior",
      category: "residential",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop",
      description: "Elegant villa interior with classic and modern fusion",
      location: "Pune",
      area: "2500 sq ft",
      year: "2023"
    },
    {
      id: 3,
      title: "Corporate Office",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop",
      description: "Professional office space designed for productivity",
      location: "Bangalore",
      area: "5000 sq ft",
      year: "2024"
    },
    {
      id: 4,
      title: "Modern Kitchen",
      category: "residential",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      description: "Sleek modular kitchen with smart storage solutions",
      location: "Delhi",
      area: "300 sq ft",
      year: "2023"
    },
    {
      id: 5,
      title: "Restaurant Design",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&h=400&fit=crop",
      description: "Contemporary restaurant with warm ambiance",
      location: "Mumbai",
      area: "3000 sq ft",
      year: "2024"
    },
    {
      id: 6,
      title: "Penthouse Suite",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=400&fit=crop",
      description: "Luxurious penthouse with panoramic city views",
      location: "Mumbai",
      area: "4000 sq ft",
      year: "2023"
    },
    {
      id: 7,
      title: "Retail Store",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop",
      description: "Modern retail space with attractive product displays",
      location: "Chennai",
      area: "1500 sq ft",
      year: "2024"
    },
    {
      id: 8,
      title: "Master Bedroom",
      category: "residential",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&h=400&fit=crop",
      description: "Serene master bedroom with walk-in closet",
      location: "Hyderabad",
      area: "400 sq ft",
      year: "2023"
    }
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=600&fit=crop')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Explore our latest projects showcasing creativity, innovation, and exceptional design
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-white capitalize">
                        {project.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <span className="font-medium">{project.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Area:</span>
                          <span className="font-medium">{project.area}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Year:</span>
                          <span className="font-medium">{project.year}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="residential" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'residential').map((project) => (
                  <Card key={project.id} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-white capitalize">
                        {project.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <span className="font-medium">{project.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Area:</span>
                          <span className="font-medium">{project.area}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Year:</span>
                          <span className="font-medium">{project.year}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'commercial').map((project) => (
                  <Card key={project.id} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-white capitalize">
                        {project.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <span className="font-medium">{project.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Area:</span>
                          <span className="font-medium">{project.area}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Year:</span>
                          <span className="font-medium">{project.year}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Like What You See?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's create something amazing for your space too
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
            Start Your Project
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
