import "./LightCurves.scss";
import React from "react";

const LightCurves = () => {
  return (
    <section id="lightcurves">
      <h2 className="section-title">Light Curves</h2>
      <div className="subsection-container">
        <p className="subsection-copy">
          Images show a scientist <span>where</span> in an object light is
          emitted. Another piece of information we have about light is{" "}
          <span>when</span> it reaches the detector. Astronomers use this
          "timing" information to create light curves and perform timing
          analysis.
        </p>
      </div>

      <div className="subsection-container">
        <p className="subsection-copy">
          Light curves are graphs that show the brightness of an object over a
          period of time. In the study of objects which change their brightness
          over time, such as novae, supernovae, and variable stars, the light
          curve is a simple but valuable tool to a scientist.
        </p>
      </div>

      <div className="subsection-container">
        <p className="subsection-copy">
          If we had the following information about a particular source:
        </p>
        <img
          className="light-curve-image"
          src="../../assets/light-curves-info-graph.png"
          alt="light curve data"
        />
      </div>

      <div className="subsection-container">
        <p className="subsection-copy">
          then we might make a light curve, and it would look like this:
        </p>
        <img
          className="subsection-image"
          src="https://imagine.gsfc.nasa.gov/Images/science/lightcurve_example.gif"
          alt="light curves"
        />
      </div>

      <h3 className="subsection-title">What can we learn from light curves?</h3>
      <div className="subsection-container">
        <p className="subsection-copy last-copy-item">
          The record of changes in brightness that a light curve provides can
          help astronomers understand processes at work within the object they
          are studying and identify specific categories (or classes) of stellar
          events. We know generally what light curves look like for a set of
          objects, so when we plot a new light curve, we can compare it to those
          standard light curves to possibly identify the type of object we're
          observing.
        </p>
      </div>
    </section>
  );
};

export default LightCurves;
