
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Tag from '../components/Tag';
import data from '../data/data.json';
import { Project } from '../types';
import Button from '../components/Button';

const ProjectDetailPage: React.FC = () => {
  const { projects, techIcons } = data as { projects: Project[]; techIcons: { [key: string]: string } };
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projet non trouvé</h1>
          <Link to="/projets" className="btn-primary">
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter(p => 
    project.relatedProjects.includes(p.id)
  ).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="px-10 md:px-12 lg:px-10 py-10 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>
                    {tag}
                  </Tag>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Website Link */}
              {project.websiteUrl && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le site web de ${project.title} (s'ouvre dans un nouvel onglet)`}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white border border-black text-black focus:ring-black hover:bg-gray-50"
                  >
                    Voir le site web
                  </a>
                </div>
              )}
            </motion.div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square  overflow-hidden">
                <img 
                  src={project.mainImage} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secondary Images */}
      {project.secondaryImages && project.secondaryImages.length > 0 && (
        <section className="px-10 md:px-12 lg:px-10">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.secondaryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square overflow-hidden"
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Détail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Project Section */}
      <section className="section-padding bg-gray-100 mt-10 md:mt-12 lg:mt-16">
        <div className="container-max">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 "
          >
            À propos du projet
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Réalisations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">Réalisations</h3>
              <ul className="space-y-4">
                {project.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-600 leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Stack Technique */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">Stack technique</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Tag iconSrc={techIcons && techIcons[tech]}>
                      {tech}
                    </Tag>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div className="w-full flex flex-col gap-4 items-start md:flex-row md:justify-between md:items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Découvrir d'autres projets
            </h2>
<Button to="/projets" variant="secondary">
  Tous les projets
</Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject, index) => (
              <ProjectCard
                key={relatedProject.id}
                project={relatedProject}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage; 