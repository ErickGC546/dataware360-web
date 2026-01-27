
import { ArrowRight, Code, BarChart3, Shield, CheckCircle, Users, Zap, Mail, Instagram, Youtube, Linkedin, Star, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "DataWare360 transformó completamente nuestra startup. Su análisis de datos nos ayudó a identificar oportunidades que no veíamos antes.",
      author: "María Contreras",
      role: "CEO, TechStart Perú",
      initials: "MC",
      color: "bg-blue-500",
      bgColor: "from-blue-50 to-white",
      borderColor: "border-blue-100"
    },
    {
      id: 2,
      text: "El desarrollo de nuestra app fue impecable. Entregaron exactamente lo que necesitábamos y el soporte post-lanzamiento ha sido excepcional.",
      author: "Andrés Rojas",
      role: "Fundador, EcoSolutions",
      initials: "AR",
      color: "bg-purple-500",
      bgColor: "from-purple-50 to-white",
      borderColor: "border-purple-100"
    },
    {
      id: 3,
      text: "Su consultoría en seguridad nos salvó de potenciales problemas graves. Ahora operamos con total confianza.",
      author: "Luis Mendoza",
      role: "CTO, FinTech Lima",
      initials: "LM",
      color: "bg-green-500",
      bgColor: "from-green-50 to-white",
      borderColor: "border-green-100"
    },
    {
      id: 4,
      text: "La implementación del dashboard de datos ha mejorado nuestro proceso de toma de decisiones en un 300%. Excelente trabajo.",
      author: "Patricia González",
      role: "Directora, Marketing Pro",
      initials: "PG",
      color: "bg-pink-500",
      bgColor: "from-pink-50 to-white",
      borderColor: "border-pink-100"
    },
    {
      id: 5,
      text: "Equipo profesional y responsable. Cumplieron todos los plazos y la calidad del código es excepcional. Los recomendamos al 100%.",
      author: "Carlos Quintero",
      role: "Tech Lead, StartupHub",
      initials: "CQ",
      color: "bg-yellow-500",
      bgColor: "from-yellow-50 to-white",
      borderColor: "border-yellow-100"
    },
    {
      id: 6,
      text: "Desde la estrategia inicial hasta la implementación final, DataWare360 fue nuestro socio confiable. Superaron todas nuestras expectativas.",
      author: "Sofia Mendez",
      role: "Emprendedora, InnovaLabs",
      initials: "SM",
      color: "bg-indigo-500",
      bgColor: "from-indigo-50 to-white",
      borderColor: "border-indigo-100"
    }
  ];

  // Autoplay carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % (testimonials.length - 2));
    }, 6000); // Cambiar cada 6 segundos

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setTestimonialIndex((prev) => 
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const visibleTestimonials = testimonials.slice(testimonialIndex, testimonialIndex + 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-2 sm:space-x-3">
                <img 
                  src="/lovable-uploads/ea99b6be-2edf-4756-8673-df1367dccf93.png" 
                  alt="DataWare360 Logo" 
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  DataWare360
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
                <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">Servicios</a>
                <a href="#precios" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">Precios</a>
                <a href="#testimonios" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">Testimonios</a>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">Blog</a>
                <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">Contacto</a>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <a href="#contacto" className="hidden sm:flex">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-purple-700 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Comenzar Ahora
                </Button>
              </a>
              
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#servicios" className="text-foreground hover:text-primary transition-colors px-2 py-1" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
                <a href="#precios" className="text-foreground hover:text-primary transition-colors px-2 py-1" onClick={() => setMobileMenuOpen(false)}>Precios</a>
                <a href="#testimonios" className="text-foreground hover:text-primary transition-colors px-2 py-1" onClick={() => setMobileMenuOpen(false)}>Testimonios</a>
                <a href="#blog" className="text-foreground hover:text-primary transition-colors px-2 py-1" onClick={() => setMobileMenuOpen(false)}>Blog</a>
                <a href="#contacto" className="text-foreground hover:text-primary transition-colors px-2 py-1" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
                <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-purple-700 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 mt-2">
                    Comenzar Ahora
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Improved with background image */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="block">Tú eliges,</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                nosotros lo hacemos
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Desarrollo, datos y consultoría tecnológica para startups y negocios en crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a href="#contacto" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Comienza tu transformación
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </a>
              <Button variant="outline" size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border-white/30 text-white hover:bg-white/30 hover:border-white/70 hover:shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto font-semibold">
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Nuestros Módulos
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Soluciones tecnológicas modulares diseñadas para impulsar tu negocio
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold">Desarrollo de Software</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Aplicaciones web y móviles personalizadas para startups y pequeñas empresas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                    Desarrollo web y móvil
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                    APIs y integraciones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                    Mantenimiento continuo
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-purple-200 transition-colors">
                  <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold">Análisis de Datos</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Transformamos tus datos en insights accionables para impulsar tu crecimiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                    Dashboards interactivos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                    Análisis predictivo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                    Reportes automatizados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-green-200 transition-colors">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold">Consultoría Técnica</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Optimización de seguridad y rendimiento para tu infraestructura tecnológica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                    Auditorías de seguridad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                    Optimización de rendimiento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                    Arquitectura escalable
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Precios Transparentes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Elige el módulo que necesitas, sin compromisos a largo plazo
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Desarrollo</CardTitle>
                <CardDescription>Para startups en crecimiento</CardDescription>
                <div className="mt-3 sm:mt-4">
                  <span className="text-2xl sm:text-3xl font-bold">S/ 450</span>
                  <span className="text-muted-foreground text-sm sm:text-base">/proyecto</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    App web o móvil
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    3 meses de soporte
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Código fuente incluido
                  </li>
                </ul>
                <Button className="w-full mt-4 sm:mt-6 text-sm">Solicitar Cotización</Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-primary shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-xs sm:text-sm">Más Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Análisis de Datos</CardTitle>
                <CardDescription>Insights que impulsan decisiones</CardDescription>
                <div className="mt-3 sm:mt-4">
                  <span className="text-2xl sm:text-3xl font-bold">S/ 250</span>
                  <span className="text-muted-foreground text-sm sm:text-base">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Dashboard personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Reportes automatizados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Soporte 24/7
                  </li>
                </ul>
                <Button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-purple-700 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">Empezar Ahora</Button>
              </CardContent>
            </Card>

            <Card className="relative sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Consultoría</CardTitle>
                <CardDescription>Optimización experta</CardDescription>
                <div className="mt-3 sm:mt-4">
                  <span className="text-2xl sm:text-3xl font-bold">S/ 200</span>
                  <span className="text-muted-foreground text-sm sm:text-base">/hora</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Auditoría completa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Plan de mejoras
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Seguimiento mensual
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 sm:mt-6 text-sm">Agendar Consulta</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Testimonios reales de startups que han transformado su negocio
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleTestimonials.map((testimonial) => (
              <Card 
                key={testimonial.id}
                className={`relative bg-gradient-to-br ${testimonial.bgColor} ${testimonial.borderColor} transition-all duration-500 ease-in-out`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 ${testimonial.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-semibold text-xs sm:text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.author}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(Math.min(index, testimonials.length - 3))}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index >= testimonialIndex && index < testimonialIndex + 3
                      ? "bg-primary w-6 sm:w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir al grupo de testimonios ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                ¿Por Qué Elegir DataWare360?
              </h3>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Entrega Rápida</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Proyectos completados en tiempo récord</p>
              </div>
              
              <div className="text-center p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Equipo Experto</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Profesionales especializados</p>
              </div>
              
              <div className="text-center p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Máxima Seguridad</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Protocolos de nivel empresarial</p>
              </div>
              
              <div className="text-center p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Soporte 24/7</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Acompañamiento continuo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Blog de Tecnología
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Insights, tendencias y consejos para emprendedores tech
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop" 
                  alt="Emprendedora trabajando en startup" 
                  className="w-full h-36 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
                />
                <Badge className="w-fit text-xs">Emprendimiento</Badge>
                <CardTitle className="group-hover:text-primary transition-colors text-base sm:text-lg">
                  5 Errores que Debes Evitar al Crear tu Startup Tech
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Aprende de los errores más comunes que cometen los emprendedores y cómo evitarlos...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground">Publicado el 15 de Junio, 2024</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop" 
                  alt="Monitor mostrando análisis de datos" 
                  className="w-full h-36 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
                />
                <Badge className="w-fit text-xs">Tecnología</Badge>
                <CardTitle className="group-hover:text-primary transition-colors text-base sm:text-lg">
                  El Futuro del Análisis de Datos en Pequeñas Empresas
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Descubre cómo las herramientas de análisis están democratizando el acceso a insights...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground">Publicado el 10 de Junio, 2024</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" 
                  alt="Laptop con código de seguridad" 
                  className="w-full h-36 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
                />
                <Badge className="w-fit text-xs">Seguridad</Badge>
                <CardTitle className="group-hover:text-primary transition-colors text-base sm:text-lg">
                  Ciberseguridad para Startups: Guía Esencial
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Protege tu startup desde el día uno con estas mejores prácticas de seguridad...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground">Publicado el 5 de Junio, 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 px-4">
              Contáctanos para una asesoría personalizada y gratuita
            </p>
          </div>
          
          <Card className="backdrop-blur-md bg-blue-500/40 border-blue-300/30 shadow-2xl">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                      Nombre Completo <span>*</span>
                    </label>
                    <Input 
                      className="bg-white/15 border-white/40 text-white placeholder-white/60 focus:bg-white/25 focus:border-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" 
                      placeholder="Ingresa tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                      Email Corporativo <span>*</span>
                    </label>
                    <Input 
                      type="email"
                      className="bg-white/15 border-white/40 text-white placeholder-white/60 focus:bg-white/25 focus:border-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" 
                      placeholder="tu@empresa.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                      Teléfono
                    </label>
                    <Input 
                      type="tel"
                      className="bg-white/15 border-white/40 text-white placeholder-white/60 focus:bg-white/25 focus:border-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" 
                      placeholder="+51 999 999 999"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                      Empresa/Startup
                    </label>
                    <Input 
                      className="bg-white/15 border-white/40 text-white placeholder-white/60 focus:bg-white/25 focus:border-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" 
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                    Módulo de Interés <span className="text-red-300">*</span>
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white/15 border-white/40 text-white focus:bg-white/25 focus:border-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all">
                      <SelectValue placeholder="Selecciona el módulo que te interesa" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="desarrollo">
                        <div className="flex items-center space-x-2">
                          <Code className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">Desarrollo de Software - S/ 450</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="datos">
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">Análisis de Datos - S/ 250/mes</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="consultoria">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Consultoría Técnica - S/ 200/hora</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="paquete-completo">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-orange-600" />
                          <span className="text-sm">Paquete Completo</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                    Presupuesto Aproximado
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white/15 border-white/40 text-white focus:bg-white/25 focus:border-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all">
                      <SelectValue placeholder="Selecciona tu rango de presupuesto" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="500-1000">S/ 500 - S/ 1,000</SelectItem>
                      <SelectItem value="1000-3000">S/ 1,000 - S/ 3,000</SelectItem>
                      <SelectItem value="3000-5000">S/ 3,000 - S/ 5,000</SelectItem>
                      <SelectItem value="5000+">Más de S/ 5,000</SelectItem>
                      <SelectItem value="cotizar">Necesito cotización personalizada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                    Cuéntanos sobre tu proyecto <span className="text-red-300">*</span>
                  </label>
                  <Textarea 
                    className="bg-white/15 border-white/40 text-white placeholder-white/60 focus:bg-white/25 focus:border-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" 
                    placeholder="Describe tu proyecto, objetivos y cómo podemos ayudarte..."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    id="acepto-terminos" 
                    className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500 mt-0.5"
                    required
                  />
                  <label htmlFor="acepto-terminos" className="text-xs sm:text-sm text-white leading-tight">
                    Acepto los <span className="underline cursor-pointer">términos y condiciones</span> y 
                    la <span className="underline cursor-pointer">política de privacidad</span>
                  </label>
                </div>

                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold py-2.5 sm:py-3 text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg">
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Enviar Solicitud
                </Button>

                <div className="text-center text-white/80 text-xs sm:text-sm">
                  <p>⚡ Respuesta garantizada en menos de 24 horas</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <img 
                  src="/lovable-uploads/ea99b6be-2edf-4756-8673-df1367dccf93.png" 
                  alt="DataWare360 Logo" 
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DataWare360
                </h3>
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Impulsamos la transformación digital de startups y pequeñas empresas con soluciones tecnológicas modulares.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="https://www.instagram.com/data.ware360/" className="p-1.5 sm:p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="https://www.linkedin.com/in/data-ware360-7a42b1370/" className="p-1.5 sm:p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="https://www.tiktok.com/@dataware360" className="p-1.5 sm:p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                  <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Servicios</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm">
                <li><a href="#servicios" className="hover:text-white transition-colors">Desarrollo de Software</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Análisis de Datos</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Consultoría Técnica</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Empresa</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#testimonios" className="hover:text-white transition-colors">Casos de Éxito</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2025 DataWare360. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
