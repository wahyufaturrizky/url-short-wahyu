import { ReactComponent as IllustrationMobile } from "assets/images/illustration-working-mobile.svg";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as MenuIcon } from "assets/images/menu-gray.svg";
import { ChangeEvent } from "react";
import "styles/Header.css";
import { ButtonNormal, ButtonOutlined, ButtonRounded } from "./Button";
import Input from "./Input";

interface ListMenuInterface {
  label: string;
}

interface HeaderPropsInterface {
  listMenu: Array<ListMenuInterface>;
  handleClickMenu?: () => void;
  handleSubmitUrl?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isShowMenuMobile: boolean;
  isLoading: boolean;
  isError: boolean;
  url: string;
}

const Header = (props: HeaderPropsInterface) => {
  return (
    <header className="container-header">
      <div className="nav">
        <div className="container-logo-menu">
          <Logo />

          <div className="hide-in-mobile">
            <div className="container-menu">
              {props.listMenu.map((data, index) => (
                <p className="font-700 menu" key={index}>
                  {data.label}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div onClick={props.handleClickMenu} className="show-in-mobile">
          <MenuIcon />
        </div>

        <div className="hide-in-mobile">
          <div className="cotnainer-header-button">
            <ButtonOutlined label="Login" />
            <ButtonRounded label="Sign  Up" />
          </div>
        </div>
      </div>

      {props.isShowMenuMobile && (
        <div className="show-in-mobile mt-16">
          <div className="container-menu-nav-mobile">
            {["Features", "Pricing", "Resources"].map((data, index) => (
              <p key={index} className="white font-700 mb-16">
                {data}
              </p>
            ))}

            <div className="divider"></div>

            <div className="container-mobile-btn-header mt-16">
              <ButtonOutlined label="Login" />
              <div style={{ width: "100%" }} className="mt-16">
                <ButtonRounded width={"100%"} label="Sign  Up" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container-intro">
        <div className="show-in-mobile">
          <IllustrationMobile />
        </div>
        <h1 className="font-700 very-dark-violet font-size-intro line-height-intro text-center-mobile">
          More than just
        </h1>
        <h1 className="font-700 very-dark-violet font-size-intro text-center-mobile">
          shorter links
        </h1>
        <div className="container-desc-intro text-center-mobile">
          <h2 className="font-500 gray text-desc-mobile">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </h2>
        </div>
      </div>

      <div className="container-main-box">
        <div className="container-box">
          <div className="hide-in-mobile w-full">
            <Input
              value={props.url}
              onChange={props.onChange}
              disabled={props.isLoading}
              placeholder="Shorten a link here..."
            />
          </div>
          <div className="show-in-mobile w-full-mobile">
            <Input
              onChange={props.onChange}
              value={props.url}
              padding={16}
              disabled={props.isLoading}
              placeholder="Shorten a link here..."
            />
          </div>
          <div className="container-btn-short">
            <div className="hide-in-mobile">
              <ButtonNormal
                onClick={props.handleSubmitUrl}
                disabled={props.isLoading}
                padding={24}
                width={153}
                label={props.isLoading ? "loading..." : "Shorten it!"}
              />
            </div>
          </div>

          <div className="show-in-mobile w-full-mobile">
            <div className="mt-16">
              <ButtonNormal
                disabled={props.isLoading}
                onClick={props.handleSubmitUrl}
                padding={16}
                width={"100%"}
                label={props.isLoading ? "loading..." : "Shorten it!"}
              />
            </div>
          </div>
        </div>

        {props.isError && (
          <p className="font-500 red">Please add a link and valid link</p>
        )}
      </div>
    </header>
  );
};

export default Header;
