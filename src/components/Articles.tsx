import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ExternalLink, BookOpen } from 'lucide-react';

const Articles: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const articles = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript for better maintainability and developer experience.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Modern Authentication Patterns in Next.js',
      excerpt: 'Exploring different authentication strategies including JWT, OAuth, and session-based authentication in Next.js applications.',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Next.js',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '#',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Optimizing Database Performance in Node.js',
      excerpt: 'Best practices for database optimization, indexing strategies, and query performance in Node.js applications.',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Node.js',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Introduction to Three.js and WebGL',
      excerpt: 'Getting started with 3D graphics on the web using Three.js, covering basic concepts and practical examples.',
      date: '2023-12-20',
      readTime: '15 min read',
      category: '3D Graphics',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Latest <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge and insights about web development, programming, and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-60 mix-blend-multiply`} />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {article.category}
                  </span>
                </div>

                {/* Read More Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BookOpen size={24} className="text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Button */}
                <motion.a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ExternalLink size={16} />
                </motion.a>
              </div>

              {/* Hover Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                initial={false}
              />
            </motion.article>
          ))}
        </div>

        {/* View All Articles Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen size={20} />
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;