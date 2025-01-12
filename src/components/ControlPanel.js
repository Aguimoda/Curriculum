import React, { useState, useEffect } from "react";
import DesktopControlPanel from "./DesktopControlPanel";
import MobileControlPanel from "./MobileControlPanel";
import translations from "../utils/JSON/translations.json";

const ControlPanel = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const t = (key) => translations[props.language][key];

  return isMobile ? (
    <MobileControlPanel {...props} t={t} />
  ) : (
    <DesktopControlPanel {...props} t={t} />
  );
};

export default ControlPanel;