import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import data from '../data/data.json';
import { Project } from '../types';
import Button from '../components/Button';


const ProjectsPage: React.FC = () => {
  const { projects } = data as { projects: Project[] };
  const websiteProjects = projects.filter(p => p.category === 'Sites web');
  const brandingProjects = projects.filter(p => p.category === 'Identités graphiques');

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Mes Projets
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Une sélection de mes réalisations, alliant créativité et
              technique. Je vous accompagne toute au long de votre projet, des réflexions stratégiques aux détails interactifs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sites Web Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          >
            Sites web
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Identités Graphiques Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          >
            Identités graphiques
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-black p-12 md:p-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à créer quelque chose d'exceptionnel ?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transformons ensemble votre vision en réalité digitale.
            </p>
            <Button to="/contact" variant="secondary">
                  Commencer un projet
                </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage; 