
import { ArrowRight, Code, BarChart3, Shield, CheckCircle, Users, Zap, Mail, Instagram, Youtube, Linkedin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/ea99b6be-2edf-4756-8673-df1367dccf93.png" 
                  alt="DataWare360 Logo" 
                  className="w-8 h-8"
                />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  DataWare360
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors">Servicios</a>
                <a href="#precios" className="text-gray-600 hover:text-blue-600 transition-colors">Precios</a>
                <a href="#testimonios" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonios</a>
                <a href="#blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
                <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Tú eliges,</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                nosotros lo hacemos
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Servicios tecnológicos modulares para quienes quieren avanzar. Desde emprendedores hasta 
              negocios en crecimiento, ofrecemos desarrollo de software, análisis de datos y consultoría técnica,
              todo personalizado. Porque ningún proyecto es demasiado pequeño para transformarse con tecnología de verdad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Comienza tu transformación digital hoy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Módulos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones tecnológicas modulares diseñadas para impulsar tu negocio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold">Desarrollo de Software</CardTitle>
                <CardDescription>
                  Aplicaciones web y móviles personalizadas para startups y pequeñas empresas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Desarrollo web y móvil
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    APIs y integraciones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mantenimiento continuo
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold">Análisis de Datos</CardTitle>
                <CardDescription>
                  Transformamos tus datos en insights accionables para impulsar tu crecimiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dashboards interactivos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Análisis predictivo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reportes automatizados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold">Consultoría Técnica</CardTitle>
                <CardDescription>
                  Optimización de seguridad y rendimiento para tu infraestructura tecnológica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Auditorías de seguridad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimización de rendimiento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Arquitectura escalable
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Precios Transparentes
            </h2>
            <p className="text-xl text-gray-600">
              Elige el módulo que necesitas, sin compromisos a largo plazo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Desarrollo</CardTitle>
                <CardDescription>Para startups en crecimiento</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">S/ 450</span>
                  <span className="text-gray-600">/proyecto</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    App web o móvil
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    3 meses de soporte
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Código fuente incluido
                  </li>
                </ul>
                <Button className="w-full mt-6">Solicitar Cotización</Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-blue-500 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500">Más Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Análisis de Datos</CardTitle>
                <CardDescription>Insights que impulsan decisiones</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">S/ 250</span>
                  <span className="text-gray-600">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dashboard personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reportes automatizados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Soporte 24/7
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Empezar Ahora</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Consultoría</CardTitle>
                <CardDescription>Optimización experta</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">S/ 200</span>
                  <span className="text-gray-600">/hora</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Auditoría completa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Plan de mejoras
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Seguimiento mensual
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">Agendar Consulta</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testimonios reales de startups que han transformado su negocio con nuestros servicios
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "DataWare360 transformó completamente nuestra startup. Su análisis de datos nos ayudó a identificar oportunidades que no veíamos antes. El ROI fue inmediato."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">MC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">María Contreras</p>
                    <p className="text-sm text-gray-600">CEO, TechStart Perú</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative bg-gradient-to-br from-purple-50 to-white border-purple-100">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "El desarrollo de nuestra app fue impecable. Entregaron exactamente lo que necesitábamos y el soporte post-lanzamiento ha sido excepcional."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">AR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Andrés Rojas</p>
                    <p className="text-sm text-gray-600">Fundador, EcoSolutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative bg-gradient-to-br from-green-50 to-white border-green-100">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "Su consultoría en seguridad nos salvó de potenciales problemas graves. Ahora operamos con total confianza y nuestros datos están protegidos."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">LM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Luis Mendoza</p>
                    <p className="text-sm text-gray-600">CTO, FinTech Lima</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ¿Por Qué Elegir DataWare360?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Entrega Rápida</h4>
                <p className="text-sm text-gray-600">Proyectos completados en tiempo récord sin comprometer la calidad</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Equipo Experto</h4>
                <p className="text-sm text-gray-600">Profesionales especializados en tecnologías de vanguardia</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Máxima Seguridad</h4>
                <p className="text-sm text-gray-600">Protocolos de seguridad de nivel empresarial para tu tranquilidad</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Soporte 24/7</h4>
                <p className="text-sm text-gray-600">Acompañamiento continuo para el éxito de tu proyecto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blog de Tecnología
            </h2>
            <p className="text-xl text-gray-600">
              Insights, tendencias y consejos para emprendedores tech
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop" 
                  alt="Emprendedora trabajando en startup" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge className="w-fit">Emprendimiento</Badge>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  5 Errores que Debes Evitar al Crear tu Startup Tech
                </CardTitle>
                <CardDescription>
                  Aprende de los errores más comunes que cometen los emprendedores y cómo evitarlos...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Publicado el 15 de Junio, 2024</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop" 
                  alt="Monitor mostrando análisis de datos" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge className="w-fit">Tecnología</Badge>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  El Futuro del Análisis de Datos en Pequeñas Empresas
                </CardTitle>
                <CardDescription>
                  Descubre cómo las herramientas de análisis están democratizando el acceso a insights...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Publicado el 10 de Junio, 2024</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" 
                  alt="Laptop con código de seguridad" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge className="w-fit">Seguridad</Badge>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Ciberseguridad para Startups: Guía Esencial
                </CardTitle>
                <CardDescription>
                  Protege tu startup desde el día uno con estas mejores prácticas de seguridad...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Publicado el 5 de Junio, 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-xl text-blue-100">
              Contáctanos para una asesoría personalizada y gratuita
            </p>
          </div>
          
          <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nombre Completo <span className="text-red-300">*</span>
                    </label>
                    <Input 
                      className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white/50" 
                      placeholder="Ingresa tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Corporativo <span className="text-red-300">*</span>
                    </label>
                    <Input 
                      type="email"
                      className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white/50" 
                      placeholder="tu@empresa.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Teléfono
                    </label>
                    <Input 
                      type="tel"
                      className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white/50" 
                      placeholder="+51 999 999 999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Empresa/Startup
                    </label>
                    <Input 
                      className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white/50" 
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Módulo de Interés <span className="text-red-300">*</span>
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white focus:bg-white/30 focus:border-white/50">
                      <SelectValue placeholder="Selecciona el módulo que te interesa" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="desarrollo">
                        <div className="flex items-center space-x-2">
                          <Code className="h-4 w-4 text-blue-600" />
                          <span>Desarrollo de Software - S/ 450</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="datos">
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="h-4 w-4 text-purple-600" />
                          <span>Análisis de Datos - S/ 250/mes</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="consultoria">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-green-600" />
                          <span>Consultoría Técnica - S/ 200/hora</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="paquete-completo">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-orange-600" />
                          <span>Paquete Completo - Cotización personalizada</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Presupuesto Aproximado
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white focus:bg-white/30 focus:border-white/50">
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
                  <label className="block text-sm font-medium text-white mb-2">
                    Cuéntanos sobre tu proyecto <span className="text-red-300">*</span>
                  </label>
                  <Textarea 
                    className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white/50" 
                    placeholder="Describe tu proyecto, objetivos, desafíos actuales y cómo podemos ayudarte..."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="acepto-terminos" 
                    className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="acepto-terminos" className="text-sm text-white">
                    Acepto los <span className="underline cursor-pointer">términos y condiciones</span> y 
                    la <span className="underline cursor-pointer">política de privacidad</span>
                  </label>
                </div>

                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 text-lg transition-all duration-300 hover:shadow-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Solicitud de Cotización
                </Button>

                <div className="text-center text-white/80 text-sm">
                  <p>⚡ Respuesta garantizada en menos de 24 horas</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/ea99b6be-2edf-4756-8673-df1367dccf93.png" 
                  alt="DataWare360 Logo" 
                  className="w-8 h-8"
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DataWare360
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                Impulsamos la transformación digital de startups y pequeñas empresas con soluciones tecnológicas modulares e innovadoras.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/data.ware360/" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="www.linkedin.com/in/data-ware360-7a42b1370" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@dataware360" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Desarrollo de Software</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Análisis de Datos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultoría Técnica</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DataWare360. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
