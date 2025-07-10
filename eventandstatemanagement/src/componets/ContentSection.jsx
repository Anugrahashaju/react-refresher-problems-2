import React from 'react';

const ContentSection = ({ title, children }) => {
  return (
    <section style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1.5rem', borderRadius: '8px' }}>
      <h2 style={{ marginBottom: '0.75rem' }}>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default ContentSection;
