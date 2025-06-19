import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import data from '../data/data.json';
import { TimelineItem, FAQItem } from '../types';
import ServicesSection from '../components/ServicesSection';

const AboutPage: React.FC = () => {
  const { timeline, faqItems } = data as { timeline: TimelineItem[]; faqItems: FAQItem[] };
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Vision Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              Ma vision
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Créer des sites web, c'est penser stratégie, esthétique et fonctionnalité. 
              J'aime transformer des idées floues en interfaces claires, engageantes et 
              adaptées aux enjeux de chaque projet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo & Quote Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden w-full rounded-full ">
                <img 
                  src="/images/saso2.avif" 
                  alt="Sarah-Sophie Thouabtia" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <blockquote className=" md:text-2xl font-medium text-gray-900 leading-relaxed italic">
                Loin des templates impersonnels, je conçois des parcours pensés 
                pour convertir, raconter et évoluer.
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parcours Section */}
      <ServicesSection
        title="Mon parcours"
        description="Mon parcours mêle histoire de l'art, archéologie et droit — un vrai mélange qui m'a donné une ouverture d'esprit et une rigueur précieuse. Cette diversité m'a aidée à développer un regard à la fois créatif et analytique. Puis, je me suis formée en autodidacte et lancé mon aventure freelance. Après une belle expérience en alternance, je me lance en freelance en full time."
        timelineItems={timeline}
        className="bg-gray-50"
      />

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              FAQ
            </h2>

            <div className="space-y-4 ">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors border border-solid border-black text-lg"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-6 text-black text-lg">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 