import React from 'react';

interface ContentCardProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({
  id,
  title,
  icon,
  children,
  className = '',
}: ContentCardProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 mb-8 ${className}`}
    >
      <div className="bg-card rounded-lg border border-border shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4 flex items-center gap-3">
          {icon && <span className="text-white text-2xl">{icon}</span>}
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>

        {/* Content */}
        <div className="p-6 prose prose-sm max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
