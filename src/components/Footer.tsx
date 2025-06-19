import React from 'react';
import Button from './Button';
import data from '../data/data.json';
import { SocialLink } from '../types';

const Footer: React.FC = () => {
  const { socialLinks } = data as { socialLinks: SocialLink[] };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container-max py-8 md:px-12 lg:px-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-4">
          {/* CTA Section */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
              Et si on imaginait quelque chose d'unique ensemble ?
            </h3>
            <Button to="/contact" variant="secondary">
              Contactez-moi
            </Button>
          </div>

          {/* Links & Social */}
          <div className="space-y-8 text-right">
            {/* Social Links */}
            <div>
              <div className="flex space-x-4 justify-start flex-wrap  md:justify-end">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white "
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>


            

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white flex flex-col justify-start md:flex-row md:justify-between items-start md:items-center  md:space-y-4 space-y-0 flex-wrap gap-2">
          <div className="text-sm text-white">
            © {currentYear} Sarah-Sophie Thouabtia
          </div>
          <div className="text-sm text-white">
          Tous droits réservés
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 