import Footer from "components/Footer";
import Header from "components/Header";
import Main from "components/Main";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

const listMenu = [
  {
    label: "Features",
  },
  {
    label: "Pricing",
  },
  {
    label: "Resources",
  },
];

const listFeature = [
  {
    title: "Brand Recognition",
    desc: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    title: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    title: "Fully Customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export interface ResShortUrl {
  code: string;
  full_share_link: string;
  full_short_link: string;
  full_short_link2: string;
  full_short_link3: string;
  original_link: string;
  share_link: string;
  short_link: string;
  short_link2: string;
  short_link3: string;
}

function App() {
  const [isShowMenuMobile, setIsShowMenuMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isCopyCliked, setIsCopyCliked] = useState<number>(-1);
  const [url, setUrl] = useState<string>("");
  const handleClickMenu = () => {
    setIsShowMenuMobile(!isShowMenuMobile);
  };

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }

    if (isCopyCliked || isCopyCliked === 0) {
      setTimeout(() => {
        setIsCopyCliked(-1);
      }, 700);
    }
  }, [isError, isCopyCliked]);

  const [listShorten, setListShorten] = useState<Array<ResShortUrl>>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmitUrl = async () => {
    setIsLoading(true);

    const resIsValidUrl =
      /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        url
      );

    if (resIsValidUrl) {
      try {
        const res = await fetch("https://api.shrtco.de/v2/shorten?url=" + url);
        const result = await res.json();

        if (res.status === 201 && result.ok) {
          setUrl("");
          setListShorten([...listShorten, result.result]);
          setIsLoading(false);
        }
      } catch (error) {
        setUrl("");
        setIsLoading(false);
      }
    } else {
      setUrl("");
      setIsLoading(false);
      setIsError(true);
    }
  };

  const handleCopyUrlShort = (index: number, original_link: string) => {
    setIsCopyCliked(index);
    navigator.clipboard.writeText(original_link);
  };

  return (
    <main>
      <Header
        onChange={handleChange}
        isLoading={isLoading}
        url={url}
        isError={isError}
        handleSubmitUrl={handleSubmitUrl}
        isShowMenuMobile={isShowMenuMobile}
        handleClickMenu={handleClickMenu}
        listMenu={listMenu}
      />
      <Main
        isCopyCliked={isCopyCliked}
        handleCopyUrlShort={handleCopyUrlShort}
        listShorten={listShorten}
        listFeature={listFeature}
      />
      <Footer />
    </main>
  );
}

export default App;
