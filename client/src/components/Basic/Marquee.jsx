
import Logo from "/src/assets/react.svg";
const Marquee = () => {
  return (
    <div className=" main__container mx-auto px-4 sm:px-6 lg:px-8">
      <section className="enable-animation">
        <div className="marquee">
          <ul className="marquee__content sm:text-left">
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
          </ul>

          <ul aria-hidden="true" className="marquee__content">
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={Logo} alt="" />
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Marquee;