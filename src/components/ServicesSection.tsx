import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Service, TimelineItem } from '../types';

interface ServicesSectionProps {
  title: string;
  description?: string;
  services?: Service[];
  timelineItems?: TimelineItem[];
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title,
  description,
  services,
  timelineItems,
  showButton = false,
  buttonText = '',
  buttonLink = '',
  className = ''
}) => {
  return (
    <section className={`section-padding bg-gray-100 ${className}`}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="pb-4 w-full flex flex-col gap-4 items-start md:flex-row md:justify-between md:items-center md:pb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {title}
            </h2>
            {showButton && (
              <Button to={buttonLink} variant="secondary">
                {buttonText}
              </Button>
            )}
          </div>
          
          {description && (
            <div className="w-full flex items-center justify-start">
              <p className="text-xl lg:max-w-4xl lg:pb-10">
                {description}
              </p>
            </div>
          )}
        </motion.div>

        <div className="flex flex-col">
          {services && services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="border-b border-solid border-gray-400 py-10 flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}

          {timelineItems && timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="border-b border-solid border-gray-400 py-10 flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
                <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-900 ">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed max-w-lg">
                  {item.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 