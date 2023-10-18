import React from "react";
import '../App.css';
import Service1 from "../Assets/services_service1.png";
import Service2 from "../Assets/services_service2.png";
import Service3 from "../Assets/services_service3.png";
import Card from "./Card"

const Services = () => {
  return (
    <div className="services-section-container">
      <div className="services-container-tittle">
        <h1 className="services-primary-heading">
          Our Services
        </h1>
      </div>
      <Card
      title="Harvesting"
      image={Service1}
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mi at eros convallis laoreet ut nec erat.Nunc nisi tortor, vulputate at justo consequat. maximus suscipit sem."
      />
      <Card
      title="Planting"
      image={Service2}
      body="Curabitur maximus libero augue, id sagittis velit posuere vitae. 
      Pellentesque eleifend luctus metus. Sed dictum leo ut turpis sagittis, vel lacinia tellus hendrerit."
      />
      <Card
      title="Fertilize"
      image={Service3}
      body="Duis pretium tincidunt viverra. Nulla malesuada urna id libero porta, 
      ac fermentum purus luctus. Quisque justo lorem, eleifend nec accumsan nec. Fermentum ultricies magna."
      />
    </div>
  );
};

export default Services;