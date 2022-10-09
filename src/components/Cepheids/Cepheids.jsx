import "./Cepheids.scss";

import React from "react";

const Cepheids = () => {
  return (
    <section id="cepheids">
      <h2 className="section-title">Cepheids</h2>
      <div className="subsection-container">
        <p className="subsection-copy">
          Cepheids, also called Cepheid Variables, are stars which brigthen and
          dim periodically. This behavior allows them to be used as cosmic
          yardsticks out to distances of a few tens of millions of light-years.
          In 1912, Henrietta Swan Leavitt noted that 25 stars, called Cepheid
          stars, in the Magellanic cloud would brighten and dim periodically.
          Leavitt was able to measure the period of each star by measuring the
          timing of its ups and downs in brightness. What she determined was
          that the brighter the Cepheid, the longer its period. In fact,
          Cepheids are very special variable stars because their period (the
          time they take to brighten, dim and brighten again) is regular (that
          is, does not change with time), and a uniform function of their
          brightness. That is, there is relation between the period and
          brightness such that once the period is known, the brightness can be
          inferred.
        </p>

        <img
          className="subsection-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiTEvJg0guaQC9nVq7w0uWxhvRshh340mfQ&usqp=CAU"
          alt="cepheids"
        />
      </div>

      <div className="subsection-container">
        <p className="subsection-copy">
          Cepheids are reasonably abundant and very bright. Astronomers can
          identify them not only in our Galaxy, but in other nearby galaxies as
          well. If one requires the distance to a given galaxy one first locates
          the Cepheid variables in this galaxy. From these observations one
          determines the period of each of these stars. Leavitt's data states
          that a given period has a unique brightness associated to it. So from
          the period and Leavitt's plot we get the brightness at the distance of
          one light-year (see the image above). We can also measure the
          brightness on Earth. The brightness at the distance of one light-year
          will be larger than the observed brightness due to the fact that
          brightness drops like the square of the distance. From these numbers
          one can extract the distance to the stars. This method works up to 13
          million light-years when Earth-bound telescopes are used; for larger
          distances these stars become too dim to be observed. Recently,
          space-based telescopes such as the Hubble Telescope, have used these
          stars to much farther distances. Looking at a galaxy in the Virgo
          cluster called M100, astronomers used the Cepheid variables observed
          there to determine its distance - 56 million light-years.
        </p>
      </div>
    </section>
  );
};

export default Cepheids;
