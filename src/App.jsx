import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, Download,
  Code, Zap, Brain, Coffee, ChevronDown, Send,
  Database, Server, Smartphone, Globe, Workflow, ArrowRight
} from 'lucide-react';
import BlogPage from './blog/pages/BlogPage';
import ArticlePage from './blog/pages/ArticlePage';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { useArticles } from './blog/hooks/useArticles';
import { getFeaturedArticles } from './blog/utils/articleUtils';

// Logo Component
const Logo = () => (
  <div className="flex items-center space-x-3">
    <img 
      src="/Portfolio/assets/MDG.png" 
      alt="MDG Logo" 
      className="w-10 h-10 object-contain"
    />
    <span className="text-xl font-bold gradient-text">Martín Di Geronimo</span>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentArticle, setCurrentArticle] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Hook para obtener artículos destacados
  const { articles } = useArticles();
  const featuredArticles = getFeaturedArticles(articles, 3);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calcular progreso de scroll
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      
      // Detectar sección activa
      const sections = ['hero', 'about', 'projects', 'automations', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset para el header
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar navegación por hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash.startsWith('#blog/')) {
        const slug = hash.split('/')[1];
        setCurrentArticle(slug);
        setCurrentPage('article');
      } else if (hash === '#blog') {
        setCurrentArticle(null);
        setCurrentPage('blog');
      } else {
        setCurrentArticle(null);
        setCurrentPage('home');
      }
    };

    // Verificar hash inicial
    handleHashChange();

    // Escuchar cambios de hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigation = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Automatizaciones', href: '#automations' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contact' }
  ];

  const technologies = [
    { name: 'React', icon: Globe },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'C#', icon: Code },
    { name: 'PHP', icon: Code },
    { name: 'n8n', icon: Workflow },
    { name: 'AWS', icon: Brain },
    { name: 'GCP', icon: Brain }
  ];

  const projects = [
    {
      title: "El Prode",
      description: "Plataforma completa de pronósticos deportivos desarrollada en 2022 con sistema de puntuación y rankings.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "BoxTaller",
      description: "Sistema de gestión para talleres mecánicos desarrollado en 2025 con funcionalidades completas de administración.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      demo: "#"
    }
  ];

  const automations = [
    {
      title: "Monitor de Cotización Dólar",
      description: "Bot automatizado que notifica 2 veces al día la cotización actual del dólar para mantenerte informado.",
      video: "/api/placeholder/400/250",
      workflow: "/api/placeholder/600/400",
      benefits: ["Información actualizada automáticamente", "Notificaciones programadas", "Sin necesidad de consultar manualmente"]
    },
    {
      title: "Tracker de Criptomonedas",
      description: "Sistema que monitorea y reporta variaciones de precios de criptomonedas seleccionadas.",
      video: "/api/placeholder/400/250",
      workflow: "/api/placeholder/600/400",
      benefits: ["Monitoreo continuo", "Alertas de variaciones", "Selección personalizada de monedas"]
    },
    {
      title: "Registro Automático de Gastos",
      description: "Automatización que procesa imágenes de tickets y facturas para registrar gastos automáticamente en Google Sheets.",
      video: "/api/placeholder/400/250",
      workflow: "/api/placeholder/600/400",
      benefits: ["Registro automático", "Procesamiento de imágenes", "Integración con Google Sheets"]
    }
  ];


  const scrollToSection = (href) => {
    if (href === '#blog') {
      // Navegar al blog
      window.location.hash = '#blog';
      setIsMenuOpen(false);
    } else {
      // Scroll suave personalizado con offset para el header
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Altura del header fijo
        const elementPosition = element.offsetTop - headerHeight;
        
        // Scroll suave con easing personalizado
        const startPosition = window.pageYOffset;
        const distance = elementPosition - startPosition;
        const duration = 800; // Duración en ms
        let start = null;

        const animation = (currentTime) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          
          // Easing function (ease-in-out)
          const ease = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
          
          window.scrollTo(0, startPosition + distance * ease);
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };
        
        requestAnimationFrame(animation);
        setIsMenuOpen(false);
      }
    }
  };

  const handleArticleClick = (slug) => {
    window.location.hash = `#blog/${slug}`;
    setIsMenuOpen(false);
  };

  const handleBackToBlog = () => {
    window.location.hash = '#blog';
  };

  const handleBackToHome = () => {
    window.location.hash = '#hero';
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-dark-950">
        <PerformanceOptimizer />
        
        {/* Sistema de Routing del Blog */}
        {currentPage === 'blog' && (
          <BlogPage onArticleClick={handleArticleClick} />
        )}
        
        {currentPage === 'article' && currentArticle && (
          <ArticlePage slug={currentArticle} onBack={handleBackToBlog} />
        )}

        {/* Portfolio Principal - Solo se muestra cuando currentPage === 'home' */}
        {currentPage === 'home' && (
          <>
            {/* Header */}
            <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
              scrolled ? 'glass-effect' : 'bg-transparent'
            }`}>
              {/* Scroll Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-800/20">
                <div 
                  className="h-full bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-150 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                ></div>
              </div>
              <div className="container-max">
                <div className="flex items-center justify-between py-4">
                  <Logo />

                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex space-x-8">
                    {navigation.map((item) => {
                      const sectionId = item.href.replace('#', '');
                      const isActive = activeSection === sectionId;
                      
                      return (
                        <button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className={`relative transition-all duration-300 font-medium ${
                            isActive 
                              ? 'text-primary-400' 
                              : 'text-gray-300 hover:text-primary-400'
                          }`}
                        >
                          {item.name}
                          {isActive && (
                            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
                          )}
                        </button>
                      );
                    })}
                  </nav>

                  {/* Mobile menu button */}
                  <button
                    className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                  <nav className="md:hidden py-4 glass-effect rounded-lg mt-2">
                    {navigation.map((item) => {
                      const sectionId = item.href.replace('#', '');
                      const isActive = activeSection === sectionId;
                      
                      return (
                        <button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className={`block w-full text-left px-4 py-2 transition-all duration-300 ${
                            isActive 
                              ? 'text-primary-400 bg-primary-500/10' 
                              : 'text-gray-300 hover:text-primary-400'
                          }`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </nav>
                )}
              </div>
            </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">Desarrollador</span>
                <br />
                <span className="text-white">de Software</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 mb-4 font-light">
                Especialista en ERP y Automatizaciones
              </p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-xl">
                Creo soluciones tecnológicas innovadoras que optimizan procesos y potencian negocios. 
                Especializado en desarrollo web full-stack y automatizaciones inteligentes.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <button 
                  onClick={() => scrollToSection('#projects')}
                  className="button-primary"
                >
                  Ver Proyectos
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="button-secondary"
                >
                  Contactar
                </button>
                <a 
                  href="#" 
                  className="button-secondary inline-flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} />
                  Descargar CV
                </a>
              </div>

              <div className="flex gap-6">
                <a href="https://github.com/marto993" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/martin-di-geronimo-29a06b17b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:martindigeronimo93@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg blur-sm"></div>
                <div className="relative glass-effect rounded-2xl p-6">
                  <div className="grid grid-cols-4 gap-4">
                    {technologies.map((tech, index) => (
                      <div 
                        key={tech.name}
                        className="flex flex-col items-center p-3 rounded-lg bg-dark-800/30 hover:bg-dark-800/50 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <tech.icon size={24} className="text-primary-400 mb-2" />
                        <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <ChevronDown 
              size={32} 
              className="mx-auto text-gray-400 animate-bounce cursor-pointer"
              onClick={() => scrollToSection('#about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Sobre mí</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Desarrollador de Software con <span className="text-primary-400 font-semibold">+10 años de experiencia</span> en TI, 
              especializado en sistemas ERP y modernización tecnológica. Combino sólidas competencias técnicas con 
              habilidades de comunicación para gestionar proyectos completos, desde el análisis de requerimientos 
              hasta la implementación, sirviendo como puente efectivo entre avance tecnológico y reglas de negocio.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-8 card-hover">
              <Code className="text-primary-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-white">Desarrollo Full-Stack</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Experiencia completa en desarrollo front-end y back-end con React, Node.js, Python, 
                C# y PHP. Manejo de bases de datos relacionales (MySQL, PostgreSQL) y NoSQL (MongoDB) 
                con despliegues en cloud (AWS, GCP, Railway).
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'MySQL', 'C#', 'PHP'].map(tech => (
                  <span key={tech} className="bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 card-hover">
              <Zap className="text-accent-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-white">Automatización de Procesos</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Especialista en crear flujos automatizados con n8n y Zapier que conectan sistemas, 
                eliminan tareas repetitivas y optimizan procesos empresariales. Experiencia en 
                integración de APIs y automatización de workflows complejos.
              </p>
              <div className="flex flex-wrap gap-2">
                {['n8n', 'APIs', 'Webhooks', 'Integrations', 'Workflows'].map(tech => (
                  <span key={tech} className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 card-hover">
              <Brain className="text-purple-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-white">Liderazgo en Migraciones</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Lideré exitosamente migraciones de sistemas complejos a plataformas de terceros. 
                Experiencia en análisis de requerimientos, gestión de proyectos y modernización 
                tecnológica que aporta valor real a los negocios.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Project Management', 'System Migration', 'Requirements Analysis', 'Business Communication'].map(skill => (
                  <span key={skill} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-dark-900/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Proyectos Destacados</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Una selección de proyectos que demuestran mis habilidades técnicas y creatividad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-effect rounded-2xl overflow-hidden card-hover">
                <div className="aspect-video bg-gray-800 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <Github size={20} />
                      Código
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations Section */}
      <section id="automations" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Automatizaciones</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Soluciones que eliminan tareas repetitivas y optimizan procesos empresariales
            </p>
          </div>

          <div className="space-y-16">
            {automations.map((automation, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-3xl font-bold mb-6 text-white">{automation.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed mb-8">
                    {automation.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {automation.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ArrowRight className="text-accent-400 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="button-primary">
                    Solicitar Automatización Similar
                  </button>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="glass-effect rounded-2xl p-4">
                    <img 
                      src={automation.video} 
                      alt={`${automation.title} demo`}
                      className="w-full rounded-lg"
                    />
                  </div>
                  
                  <div className="glass-effect rounded-2xl p-4">
                    <h4 className="text-lg font-semibold mb-3 text-white">Flujo de trabajo</h4>
                    <img 
                      src={automation.workflow} 
                      alt={`${automation.title} workflow`}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding bg-dark-900/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Blog</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Artículos destacados sobre desarrollo, tecnología y automatizaciones
            </p>
          </div>

          {featuredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredArticles.map((article, index) => (
                <article 
                  key={article.slug} 
                  className="glass-effect rounded-2xl p-8 card-hover cursor-pointer"
                  onClick={() => handleArticleClick(article.slug)}
                >
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <time>{article.date}</time>
                    {article.readTime && (
                      <>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </>
                    )}
                    {article.featured && (
                      <>
                        <span>•</span>
                        <span className="text-primary-400 font-medium">Destacado</span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white hover:text-primary-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-primary-500/20 text-primary-300 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center text-primary-400 font-medium">
                    Leer más
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">Próximamente</h3>
                <p className="text-gray-400">
                  Estoy preparando artículos destacados sobre desarrollo, tecnología y automatizaciones.
                </p>
              </div>
            </div>
          )}

          {/* Botón para ver todos los artículos */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.hash = '#blog'}
              className="button-primary"
            >
              Ver Todos los Artículos
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Contacto</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? ¿Necesitas automatizar procesos? ¡Conversemos!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white">¿En qué puedo ayudarte?</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Code className="text-primary-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Desarrollo</h4>
                      <p className="text-gray-400">Aplicaciones personalizadas, desde el concepto hasta la implementación</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Zap className="text-accent-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Automatizaciones</h4>
                      <p className="text-gray-400">Soluciones que eliminan tareas repetitivas y optimizan procesos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Coffee className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Consultoría</h4>
                      <p className="text-gray-400">Asesoría técnica y estratégica para proyectos tecnológicos</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <a 
                    href="mailto:martindigeronimo93@gmail.com" 
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Mail size={20} />
                    martindigeronimo93@gmail.com
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/martin-di-geronimo-29a06b17b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-gray-700 focus:border-primary-500 focus:outline-none text-white"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input 
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-gray-700 focus:border-primary-500 focus:outline-none text-white"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Asunto</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-gray-700 focus:border-primary-500 focus:outline-none text-white"
                      placeholder="¿En qué te puedo ayudar?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                    <textarea 
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-gray-700 focus:border-primary-500 focus:outline-none text-white resize-none"
                      placeholder="Cuéntame sobre tu proyecto o necesidad..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full button-primary inline-flex items-center justify-center gap-2">
                    <Send size={18} />
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Footer */}
            <footer className="bg-dark-900/80 border-t border-gray-800">
              <div className="container-max py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-8 md:mb-0">
                    <Logo />
                    <p className="text-gray-500 mt-4 max-w-md">
                      Desarrollador Full-Stack especializado en crear soluciones innovadoras 
                      y automatizaciones que impulsan el crecimiento empresarial.
                    </p>
                  </div>
                  
                  <div className="flex gap-6">
                    <a href="https://github.com/marto993" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                      <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/martin-di-geronimo-29a06b17b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="mailto:martindigeronimo93@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                  <p className="text-gray-500">
                    © 2025 Martín Di Geronimo. Desarrollado con amor y mucho 🧉
                  </p>
                </div>
              </div>
            </footer>
          </>
        )}

        {/* SEO dinámico */}
        <SEO 
          title={currentPage === 'article' ? 'Artículo del Blog' : currentPage === 'blog' ? 'Blog' : 'Portfolio'}
          description={currentPage === 'article' ? 'Lee el artículo completo en mi blog' : currentPage === 'blog' ? 'Reflexiones sobre desarrollo, tecnología y automatizaciones' : 'Desarrollador Full-Stack especializado en automatizaciones'}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;