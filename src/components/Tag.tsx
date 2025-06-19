import React from 'react';

interface TagProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconSrc?: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ children, icon, iconSrc, className = '' }) => {
  return (
    <span className={`px-4 rounded-full py-2 border border-solid border-black text-sm font-medium flex items-center gap-2 ${className}`}>
      {iconSrc && (
        <img 
          src={iconSrc} 
          alt=""
          className="w-6 h-6 flex-shrink-0"
          role="presentation"
        />
      )}
      {icon && !iconSrc && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

export default Tag; 