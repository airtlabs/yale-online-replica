
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  Users,
  Star,
  Award
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@bluetaare.com",
      description: "Get in touch with our design team"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      description: "Speak with our design consultants"
    },
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: "Design Hub, Bandra West, Mumbai",
      description: "Our creative design studio"
    },
    {
      icon: Clock,
      title: "Studio Hours",
      details: "Mon-Sat: 10AM-7PM IST",
      description: "When we're available to help"
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Consultation",
      description: "Get instant design advice from our experts",
      action: "Book Consultation"
    },
    {
      icon: HelpCircle,
      title: "Design Gallery",
      description: "Browse our portfolio and design inspiration",
      action: "View Portfolio"
    },
    {
      icon: Users,
      title: "Client Community",
      description: "Connect with other clients and share experiences",
      action: "Join Community"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-36 -translate-x-36"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <Star className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Award-Winning Design Studio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Let's Create Your Dream Space
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your space? Our expert design team is here to bring your vision to life with personalized interior solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our design experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary to-blue-700 rounded-2xl shadow-lg">
                      <info.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-primary font-semibold mb-2 text-lg">{info.details}</p>
                  <p className="text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Support Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Design Journey</h2>
                <p className="text-lg text-gray-600">
                  Tell us about your project and let's create something beautiful together.
                </p>
              </div>
              
              <Card className="shadow-xl border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name
                        </label>
                        <Input id="firstName" type="text" placeholder="John" className="h-12" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name
                        </label>
                        <Input id="lastName" type="text" placeholder="Doe" className="h-12" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" className="h-12" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" className="h-12" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Type
                      </label>
                      <Input id="subject" type="text" placeholder="Residential Interior Design" className="h-12" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Tell us about your project
                      </label>
                      <Textarea 
                        id="message" 
                        rows={6} 
                        placeholder="Describe your space, style preferences, budget range, and timeline..."
                        className="resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary">
                      <Send className="mr-3 h-5 w-5" />
                      Send Project Details
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Support Options */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
                <p className="text-lg text-gray-600">
                  Explore different ways to get design inspiration and support.
                </p>
              </div>
              
              <div className="space-y-6">
                {supportOptions.map((option, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-gradient-to-r from-white to-gray-50">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-xl">
                        <div className="p-3 bg-gradient-to-br from-primary to-blue-700 rounded-xl mr-4 shadow-md">
                          <option.icon className="h-6 w-6 text-white" />
                        </div>
                        {option.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 mb-6 text-lg">{option.description}</p>
                      <Button variant="outline" className="w-full h-12 font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white">
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Design Process Card */}
              <Card className="mt-8 border-0 shadow-xl bg-gradient-to-br from-primary to-blue-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Award className="mr-3 h-6 w-6" />
                    Our Design Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Consultation & Planning</h4>
                        <p className="text-blue-100 text-sm">We understand your vision, space, and requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Design & Visualization</h4>
                        <p className="text-blue-100 text-sm">3D renders and detailed design proposals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Execution & Delivery</h4>
                        <p className="text-blue-100 text-sm">Professional implementation with quality assurance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Location */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Design Studio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Mumbai's creative district, our studio showcases the latest in interior design trends
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 flex items-center justify-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-700/10"></div>
            <div className="text-center relative z-10">
              <div className="p-4 bg-white rounded-2xl shadow-lg mb-6 inline-block">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Blue Taare Design Studio</h3>
              <p className="text-gray-600 mb-4">Interactive studio tour available</p>
              <p className="text-lg font-semibold text-primary">Design Hub, Bandra West, Mumbai, Maharashtra 400050</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
