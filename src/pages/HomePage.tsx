import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import data from '../data/data.json';
import { Project, Service } from '../types';

const HomePage: React.FC = () => {
  const { projects, services } = data as { projects: Project[]; services: Service[] };
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-start ">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                >
                  Sarah-Sophie
                  <br />
                  <span >Thouabtia</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
                >
                  Créatrice de sites sur-mesure, pensés pour durer dans un
                  environnement web en mouvement
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col items-start gap-4 md:flex-row md:justify-left md:items-center"
              >
                <Button to="/projets">
                  Découvrir mes projets
                </Button>
                <Button to="/contact" variant="secondary">
                  Commencer un projet
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-start pt-12 lg:justify-center md:pt-0"
            >
     
                <div className="relative w-full max-w-88 pt-12 rounded-full shadow-lg  ">
      <img src="/images/sasol.jpeg" alt="Sarah-Sophie Thouabtia" className="w-full h-full object-cover rounded-full" />
                </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div className=" w-full flex flex-col gap-4 items-start md:flex-row md:justify-between md:items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Projets
            </h2>
    <Button to="/projets" variant="secondary">Tous les projets </Button>
    </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="pb-4 w-full flex flex-col gap-4 items-start md:flex-row md:justify-between md:items-center md:pb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Prestations
              </h2>
             <Button to="/prestations" variant="secondary">En savoir plus </Button>
            </div>
            <div className=" w-full flex items-center justify-start">
            <p className=" text-xl  lg:max-w-4xl">
              J'accompagne des entreprises de toutes tailles dans la création de
              sites web et d'expériences digitales sur mesure, en combinant
              outils no-code, IA et design stratégique. Mon objectif :
              transformer vos idées en solutions performantes et esthétiques.
            </p>
            </div> 
          </motion.div>

          <div className="flex flex-col ">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="border-b border-solid border-gray-400 py-10 flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 