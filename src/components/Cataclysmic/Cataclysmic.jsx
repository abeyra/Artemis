import "./Cataclysmic.scss";

import React from "react";

const Cataclysmic = () => {
  return (
    <section id="cataclysmic">
      <h2 className="section-title">Cataclysmic Variables</h2>
      <div className="subsection-container">
        <p className="subsection-copy">
          Cataclysmic variables (CVs) are binary star systems that have a white
          dwarf and a normal star companion. They are typically small – the
          entire binary system is usually the size of the Earth-Moon system –
          with an orbital period of 1 to 10 hours. The white dwarf is often
          referred to as the "primary" star, and the normal star as the
          "companion" or the "secondary" star. The companion star, a star that
          is "normal," like our Sun, loses material onto the white dwarf via
          accretion. Since the white dwarf is very dense, the gravitational
          potential energy is enormous, and some of it is converted into X-rays
          during the accretion process. There are probably more than a million
          of these cataclysmic variables in the galaxy, but only those near our
          Sun (several hundreds) have been studied in X-rays so far. This is
          because CVs are fairly faint in X-rays; they are just above the
          coronal X-ray sources and far below the X-ray binaries in terms of how
          powerful their X-ray emissions are.
        </p>
        <img
          className="subsection-image"
          src="https://imagine.gsfc.nasa.gov/science/objects/images/CV.gif"
          alt="cv"
        />
      </div>
      <h3 className="subsection-title">White Dwarf Supernovae</h3>
      <div className="subsection-container">
        <p className="subsection-copy">
          Though some matter is ejected during a nova, some may also be
          retained, so the accretion/nova cycle can still allow for the dwarf's
          mass to increase. This mass gain could eventually result in the dwarf
          reaching the Chandrasekhar limit of 1.4 solar masses. As it approaches
          that limit, pressure builds and the internal temperature rises enough
          for carbon fusion to begin. The majority of white dwarfs are composed
          mostly of carbon, and when this fusion occurs, all the carbon
          undergoes fusion instantly. The result is a white dwarf supernova.
        </p>
        {/* <img className="subsection-image" src="" alt="white dwarf supernovae" /> */}
      </div>
    </section>
  );
};

export default Cataclysmic;
