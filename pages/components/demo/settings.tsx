import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { pageThemes, pageURLs } from "./settingData";
import { IPageTheme, IPageURL } from "../../../typescript/interfaces/common.interface";
import { setThemeType } from "../../redux/reducer";
import { useRouter } from "next/router";
import { liveURL } from "../../../custom.config";

const ISSERVER = typeof window === "undefined";
interface ISettings {
  setIsLight?: (flag: boolean) => void;
}
const Settings: React.FC<ISettings> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeClass, setActiveClass] = React.useState(false);
  let [isLight, setIsLight] = React.useState(false);
  const addLayoutClass = (bodyElem: HTMLBodyElement) => {
    const layoutType = bodyElem.getAttribute("layout-type");
    if (layoutType) {
      layoutType.split(" ").forEach((cls: string) => {
        bodyElem.classList.add(cls);
      })
    }
  }
	isLight = true
  //set current page
  const currentPageIndex: IPageURL | null | undefined = React.useMemo(() => {
    const url = router.pathname.split("/");
    if (url.length > 1) {
      return pageURLs.find((item: IPageURL) => item.url === (liveURL + '/'+url[1]))
    }
    return null
  }, [router])
  
  React.useEffect(() => {
    if (router.query && router.query.hasOwnProperty('dark')) {
      const isLight = router.query.dark === "true" ? false : true;
      if(typeof window !== "undefined") {
        dayLightTheme(isLight)
      }
    }
  }, [router])

  //set layout type
  React.useEffect(() => {
    const bodyElem = document.body as HTMLBodyElement;
    addLayoutClass(bodyElem);
    if (!ISSERVER) {
      setIsLight(window.localStorage.getItem("theme-light") === 'false');
      const themeType = window.localStorage.getItem("fileName") || "blue";
      bodyElem.classList.add("theme-type-" + themeType);
    }
  }, []);

  React.useEffect(() => {
    if (!isLight) {
      document.body.classList.add('theme-dark');
    }
    else {
      document.body.classList.remove('theme-dark');
    }
    dispatch(setThemeType({ isLight }));
  }, [isLight])

  //change theme color
  const changeTheme = (name: string) => {
    resetBodyClassess(name);
    localStorage.setItem("fileName", name);
  }

  //reset classes on theme change
  const resetBodyClassess = (fileName: string) => {
    const bodyElem = document.body as HTMLBodyElement;
    if (bodyElem.classList.value.length) {
      const classList = bodyElem.classList.value.split(" ");
      classList.forEach((item: string) => {
        bodyElem.classList.remove(item);
      })
      addLayoutClass(bodyElem);
      if (!isLight) {
        bodyElem.classList.add("theme-dark");
      }
      bodyElem.classList.add("theme-type-" + fileName);
    }
  }

  //change light or dark theme
  const dayLightTheme = (isLight: boolean) => {
    setIsLight(isLight);
    localStorage.setItem("theme-light", isLight.toString());
  }

  //reset default theme
  const resetThemeColor = () => {
    const themeType = document.body.getAttribute("default-theme");
    if (themeType?.length) {
      changeTheme(themeType)
    }
  }
  return (
    <div></div>
  )
}

Settings.displayName = "Settings";
export default Settings;