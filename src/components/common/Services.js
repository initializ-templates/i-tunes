import React from 'react';
import servicesData from '../../data/servicesData';
import SectionsHead from './SectionsHead';
import { useTheme } from '../../contexts/themeContext';

const Services = () => {
  const { theme } = useTheme();

  // Define styles based on the theme
  const cardStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  return (
    <>
      <section id="services" className="section">
        <div className="container">
          <SectionsHead heading="Our Advantages" />
          <div className="wrapper services_wrapper">
            {
              servicesData.map((item) => {
                const { id, icon, title, info } = item;

                return (
                  <div className="services_card" style={cardStyle} key={id}>
                    <div className="services_icon">{icon}</div>
                    <div className="services_details">
                      <h4>{title}</h4>
                      <p>{info}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
