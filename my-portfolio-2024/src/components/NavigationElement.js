import React from "react";
import "./Navigation.css";

export const NavigationElement = () => {
  const url = window.location.href;
  return (
    <div className={"spanHeader"}>
      <div className="linkContainer">
        <a
          className={
            url.includes("projects")
              ? "navigationLinkSelected"
              : "navigationLink"
          }
          href="/projects"
        >
          projects
        </a>
        <a
          className={
            url.includes("media") ? "navigationLinkSelected" : "navigationLink"
          }
          href="/media"
        >
          media
        </a>
        <a
          className={
            url.includes("leadership")
              ? "navigationLinkSelected"
              : "navigationLink"
          }
          href="/leadership"
        >
          leadership
        </a>
        <a
          className={
            url.includes("contact")
              ? "navigationLinkSelected"
              : "navigationLink"
          }
          href="/contact"
        >
          contact
        </a>
      </div>
    </div>
  );
};
