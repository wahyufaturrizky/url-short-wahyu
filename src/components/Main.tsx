import { ResShortUrl } from "App";
import { ReactComponent as ListFeatureImage } from "assets/images/ListFeatureImage.svg";
import "styles/Main.css";
import { ButtonNormal, ButtonRounded } from "./Button";

interface ListFeature {
  title: string;
  desc: string;
}

interface PropsMainInterface {
  listFeature: Array<ListFeature>;
  listShorten: Array<ResShortUrl>;
  handleCopyUrlShort: (index: number, original_link: string) => void;
  isCopyCliked: number;
}

const Main = (props: PropsMainInterface) => {
  return (
    <>
      <div className="container-main">
        <div className="hide-in-mobile">
          {props.listShorten.map((data, index) => {
            return (
              <section key={index} className="contianer-box-link">
                <a
                  href={data.original_link}
                  rel="noreferrer"
                  target="_blank"
                  className="font-500 very-dark-violet"
                >
                  {data.original_link.substring(0, 50) + "..."}
                </a>
                <div className="container-link-btn">
                  <a
                    href={data.full_short_link}
                    rel="noreferrer"
                    target="_blank"
                    className="font-500 cyan"
                  >
                    {data.full_short_link}
                  </a>
                  <div className="container-btn-copy">
                    <ButtonNormal
                      isCopied={props.isCopyCliked === index}
                      onClick={() =>
                        props.handleCopyUrlShort(index, data.full_short_link)
                      }
                      label={props.isCopyCliked === index ? "Copied" : "Copy"}
                      width={100}
                      padding={8}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <div className="show-in-mobile">
          <div className="container-card-mobile">
            {props.listShorten.map((data, index) => (
              <section className="contianer-box-link-mobile">
                <div className="container-link-header-mobile">
                  <a
                    href={data.original_link}
                    rel="noreferrer"
                    target="_blank"
                    className="font-500 very-dark-violet"
                  >
                    {data.original_link.substring(0, 22) + "..."}
                  </a>
                </div>
                <div className="container-link-btn-mobile">
                  <a
                    href={data.full_short_link}
                    rel="noreferrer"
                    target="_blank"
                    className="font-500 cyan"
                  >
                    {data.full_short_link}
                  </a>
                  <div className="w-full-mobile mt-16">
                    <ButtonNormal
                      isCopied={props.isCopyCliked === index}
                      onClick={() =>
                        props.handleCopyUrlShort(index, data.full_short_link)
                      }
                      width={"100%"}
                      padding={8}
                      label={props.isCopyCliked === index ? "Copied" : "Copy"}
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="container-advance">
          <h1 className="font-700 very-dark-violet">
            Advanced Statistics Track
          </h1>
          <p className="font-500 gray desc-main">
            how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </section>

        <div className="hide-in-mobile">
          <section className="container-image-feature">
            <ListFeatureImage />
          </section>
        </div>

        <div className="show-in-mobile">
          <section className="container-image-feature">
            <img
              src={require("../assets/images/list-feature-mobile.png")}
              alt="list feature mobile"
            />
          </section>
        </div>
      </div>
      <section className="container-books">
        <h1 className="white font-700">Boost your links today</h1>
        <div className="container-btn-started">
          <ButtonRounded width={194} padding={16} label="Get Started" />
        </div>
      </section>
    </>
  );
};

export default Main;
