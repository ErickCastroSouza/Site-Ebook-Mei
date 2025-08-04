import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Play, Laptop, FileSignature, CheckCircle, Instagram, Facebook, ShoppingCart, Lock, Rocket, Percent, Users, Award, TrendingUp, Calculator, FileText } from "lucide-react";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FloatingElements = () => (
  <div className="floating-elements">
    <motion.div
      className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-20"
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-40 right-20 w-6 h-6 bg-cyan-300 rounded-full opacity-20"
      animate={{
        y: [0, -30, 0],
        x: [0, -15, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
    <motion.div
      className="absolute bottom-40 left-20 w-8 h-8 bg-cyan-500 rounded-full opacity-10"
      animate={{
        y: [0, -25, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
  </div>
);



export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="gradient-bg absolute inset-0" />
        <FloatingElements />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection>
              <motion.div
                className="inline-block mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="text-6xl md:text-8xl font-bold text-gradient">
                  MEI
                </span>
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                O guia completo para<br />
                <span className="text-gradient">Formalização do seu negócio</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Se você é um(a) empreendedor(a) que busca informações claras e objetivas sobre como formalizar seu negócio, este guia é para você!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="https://pay.hotmart.com/V84065811W?checkoutMode=10">
                <Button className="btn-primary px-12 py-6 text-xl font-semibold">
                  <Rocket className="mr-3 h-5 w-5" />
                  Torne-se um MEI de sucesso
                </Button>
                </a>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        {/* Elementos flutuantes para a seção de vídeo */}
        <motion.div
          className="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full opacity-25"
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-4 h-4 bg-cyan-300 opacity-20"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-32 right-1/4 w-2 h-2 bg-cyan-500 rounded-full opacity-30"
          animate={{
            y: [0, -12, 0],
            x: [0, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Assista ao <span className="text-gradient">Guia Completo</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Veja como transformar seu conhecimento em um negócio formalizado e próspero
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-black border-cyan-500/20 overflow-hidden card-hover">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <iframe
                      src="https://www.youtube.com/embed/10fJRAj6gi4"
                      title="MEI O guia completo para Formalização do seu negócio"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Elementos flutuantes para a seção de preços */}
        <motion.div
          className="absolute top-16 left-20 w-5 h-5 bg-cyan-300 opacity-18"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div
          className="absolute bottom-24 right-20 w-6 h-0.5 bg-cyan-400 opacity-25"
          animate={{
            y: [0, -14, 0],
            x: [0, 12, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.8
          }}
        />
        <motion.div
          className="absolute top-1/2 left-8 w-3 h-3 bg-cyan-500 rounded-full opacity-22"
          animate={{
            y: [0, -16, 0],
            x: [0, 10, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <Card className="bg-slate-800 border-cyan-500/20 p-8 card-hover">
                <CardContent className="p-0">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Compre já por apenas
                  </motion.h3>
                  
                  <div className="mb-8">
                    <motion.span
                      className="text-lg text-gray-400 line-through"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      R$57,50
                    </motion.span>
                    <motion.div
                      className="text-5xl md:text-6xl font-bold text-red-400 mb-4"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      R$37,50
                    </motion.div>
                    <motion.div
                      className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Percent className="inline-block mr-1 h-4 w-4" />
                      Economia de 35%
                    </motion.div>
                  </div>
                  <a href="https://pay.hotmart.com/V84065811W?checkoutMode=10">
                  <Button className="btn-primary w-full py-6 text-xl font-bold mb-6">
                    <ShoppingCart className="mr-3 h-5 w-5" />
                    Adquirir
                  </Button>
                  </a>
                  
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Lock className="mr-2 h-4 w-4" />
                    <span>Compra 100% segura</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-100 text-gray-800 relative overflow-hidden">
        {/* Elementos flutuantes para a seção de conteúdo */}
        <motion.div
          className="absolute top-20 left-16 w-4 h-4 bg-cyan-600 opacity-15"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 right-24 w-5 h-5 bg-cyan-500 opacity-12"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          }}
          animate={{
            y: [0, -22, 0],
            x: [0, -8, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute top-1/2 right-12 w-3 h-3 bg-cyan-400 rounded-full opacity-18"
          animate={{
            y: [0, -16, 0],
            x: [0, 12, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.2
          }}
        />
        <motion.div
          className="absolute bottom-16 left-1/4 w-6 h-0.5 bg-cyan-700 opacity-20"
          animate={{
            y: [0, -14, 0],
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.div
          className="absolute top-40 left-1/2 w-2 h-2 bg-cyan-600 rounded-full opacity-25"
          animate={{
            y: [0, -12, 0],
            x: [0, -10, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8
          }}
        />
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Conteúdo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Este guia foi escrito por um contador com anos de experiência em assessoria contábil para MEIs. Com uma linguagem simples e acessível, sem jargões técnicos, para garantir que todas as informações sejam facilmente compreendidas.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection>
              <Card className="bg-white border-gray-200 p-8 card-hover h-full">
                <CardContent className="p-0 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Laptop className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">O que é MEI</h3>
                  <p className="text-gray-600">
                    Entenda completamente o que é o Microempreendedor Individual e como funciona este regime tributário especial.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="bg-white border-gray-200 p-8 card-hover h-full">
                <CardContent className="p-0 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FileSignature className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Como se cadastrar no portal do empreendedor e se tornar um MEI</h3>
                  <p className="text-gray-600">
                    Passo a passo detalhado para realizar seu cadastro e formalizar seu negócio de forma rápida e segura.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="bg-white border-gray-200 p-8 card-hover h-full">
                <CardContent className="p-0 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Quais são as atividades permitidas para MEI?</h3>
                  <p className="text-gray-600">
                    Lista completa das atividades econômicas permitidas para MEI e orientações sobre como escolher a correta.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="bg-white border-gray-200 p-8 card-hover h-full">
                <CardContent className="p-0 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TrendingUp className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Quais são as vantagens de ser MEI?</h3>
                  <p className="text-gray-600">
                    Descubra todos os benefícios e vantagens que o regime MEI oferece para o seu negócio.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="bg-white border-gray-200 p-8 card-hover h-full">
                <CardContent className="p-0 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Calculator className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Como funciona a tributação do MEI?</h3>
                  <p className="text-gray-600">
                    Entenda o sistema tributário simplificado do MEI e como calcular seus impostos.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="bg-white border-gray-200 p-8 card-hover h-full">
                <CardContent className="p-0 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FileText className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Como emitir nota fiscal sendo MEI?</h3>
                  <p className="text-gray-600">
                    Aprenda quando e como emitir nota fiscal corretamente sendo um MEI.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="bg-white border-gray-200 p-8 card-hover h-full">
                <CardContent className="p-0 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Users className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Quais são as obrigações do MEI?</h3>
                  <p className="text-gray-600">
                    Conheça todas as obrigações e responsabilidades que você deve cumprir como MEI.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="bg-white border-gray-200 p-8 card-hover h-full">
                <CardContent className="p-0 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Conquiste o sucesso como MEI: 7 dicas infalíveis!</h3>
                  <p className="text-gray-600">
                    Estratégias e dicas práticas para fazer seu negócio MEI prosperar e alcançar o sucesso.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-12 relative overflow-hidden">
        {/* Elementos flutuantes para o footer */}
        <motion.div
          className="absolute top-8 left-12 w-3 h-3 bg-cyan-400 rounded-full opacity-20"
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-6 right-16 w-4 h-4 bg-cyan-300 opacity-15"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-4 right-1/3 w-2 h-6 bg-cyan-500 opacity-18"
          animate={{
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                nos siga nas redes sociais!
              </h3>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://www.instagram.com/goncalvesassessorias/"
                  className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/people/Gon%C3%A7alves-Assessoria/100094599639932/"
                  className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook />
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
}
