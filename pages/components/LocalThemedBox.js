import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(theme);
  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);
  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
      className={`bg-${localTheme === "light" ? "light" : "dark"} txt-${
        localTheme === "light" ? "light" : "dark"
      }`}
    >
      {/* Write code below this line */}
      Hiiii
      <button
        onClick={setLocalTheme(localTheme === "light" ? "dark" : "light")}
        className={`btn btn-${localTheme === "light" ? "light" : "dark"}`}
      >
        Toggle loacl theme to {localTheme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };
