import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind or Want to Buy a Project?{" "}
        <br className="sm:block hidden" />
        Let’s connect together!
      </p>
      <Link to="/contact" className="btn">
        Let's Connect
      </Link>
    </section>
  );
};

export default CTA;
