import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Download, Mail, ExternalLink } from 'lucide-react';

const AnimatedSphere: React.FC = () => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary link element for download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add the actual resume file
    link.download = 'Abi_V_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-300">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Abi V
                </span>
              </h1>
              
              <motion.div
                className="text-xl lg:text-2xl text-gray-400 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p>Aspiring Full Stack Developer</p>
                <p>& Tech Enthusiast</p>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Fresh graduate passionate about creating innovative web solutions with modern technologies. 
              Ready to contribute, learn, and grow in a dynamic development environment.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Let's Connect
              </motion.button>
              
              <motion.button
                onClick={downloadResume}
                className="px-8 py-4 bg-transparent border-2 border-purple-400 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-400/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Resume
              </motion.button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex items-center gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {[
                { name: 'LinkedIn', url: 'https://linkedin.com/in/abi-v' },
                { name: 'GitHub', url: 'https://github.com/au814721104001' },
                { name: 'Email', url: 'mailto:abiveeramani292@gmail.com' }
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                  whileHover={{ y: -2 }}
                >
                  <ExternalLink size={16} />
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Animation */}
          <motion.div
            className="h-96 lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <AnimatedSphere />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;