import "styles/Footer.css";
import { ReactComponent as LogoWhite } from "assets/images/logo-white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-sosmed">
        <LogoWhite />
        <div className="mt-32-mobile">
          {["Features", "Link Shortening", "Branded Links", "Analytics"].map(
            (data, index) => (
              <p
                key={index}
                className={`${
                  index === 0 ? "white font-700" : "gray font-500"
                } mb-16`}
              >
                {data}
              </p>
            )
          )}
        </div>
        <div className="mt-32-mobile">
          {["Resources", "Blog", "Developers", "Support"].map((data, index) => (
            <p
              key={index}
              className={`${
                index === 0 ? "white font-700" : "gray font-500"
              } mb-16`}
            >
              {data}
            </p>
          ))}
        </div>
        <div className="mt-32-mobile">
          {["Company", "About", "Our Team", "Careers", "Contact"].map(
            (data, index) => (
              <p
                key={index}
                className={`${
                  index === 0 ? "white font-700" : "gray font-500"
                } mb-16`}
              >
                {data}
              </p>
            )
          )}
        </div>
        <div className="mt-32-mobile">
          <img
            onClick={() =>
              window.open(
                "https://www.facebook.com/wahyu.faturrizky/",
                "_blank"
              )
            }
            alt="social"
            className="cursor-pointer"
            src="https://img.icons8.com/ios/32/FFFFFF/facebook-circled--v5.png"
          />
          <img
            onClick={() =>
              window.open("https://twitter.com/wbocahbijak1", "_blank")
            }
            className="ml-16 cursor-pointer"
            alt="social"
            src="https://img.icons8.com/ios/32/FFFFFF/twitter-circled--v4.png"
          />
          <img
            onClick={() =>
              window.open(
                "https://www.instagram.com/wahyufaturrizky/",
                "_blank"
              )
            }
            className="ml-16 cursor-pointer"
            alt="social"
            src="https://img.icons8.com/ios/32/FFFFFF/instagram-new--v1.png"
          />
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          rel="noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/wahyu-fatur-rizky"
          target="_blank"
        >
          Wahyu Fatur Rizki
        </a>
        .
      </div>{" "}
    </footer>
  );
};

export default Footer;
