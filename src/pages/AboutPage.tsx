import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import data from '../data/data.json';
import { TimelineItem, FAQItem } from '../types';

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-4xl bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👩‍🎨</div>
                    <div className="text-lg font-medium text-gray-600">
                      Sarah-Sophie
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed">
                "Loin des templates impersonnels, je conçois des parcours pensés 
                pour convertir, raconter et évoluer."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parcours Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Mon parcours
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-16 text-center">
              Mon parcours mêle histoire de l'art, archéologie et droit — un vrai mélange 
              qui m'a donné une ouverture d'esprit et une rigueur précieuse. Cette diversité 
              m'a aidée à développer un regard à la fois créatif et analytique. Puis, je me 
              suis formée en autodidacte et lancé mon aventure freelance. Après une belle 
              expérience en alternance, je me lance en freelance en full time.
            </p>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6 bg-white rounded-2xl shadow-sm"
                >
                  <div className="md:text-right">
                    <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              FAQ
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
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
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
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