import {
  getProjectArchitecture,
  getProjectImage,
  getProjectName,
  getProjectVideo,
  getProjectYear,
  ProjectProps,
} from "../utils/ProjectUtils";
import { projectTileAnimation } from "../utils/AnimationUtils";
import { useEffect, useState } from "react";
import { useGlobalState } from "../utils/ControlUtil";
import ArchitectureTile from "./ArchitectureTile";
import { Link } from "react-router-dom";

export function ProjectTile({ dataID }: ProjectProps) {
  const { isMobile } = useGlobalState();
  const [previewContainer, setPreviewContainer] =
    useState<NodeListOf<Element> | null>(null);
  const [heroContainer, setHeroContainer] = useState<Element | null>(null);
  const { togglePreview, resetPreview, movePreview } = projectTileAnimation(
    previewContainer,
    heroContainer
  );
  const title = getProjectName(dataID)?.replace(/\s+/g, "-") || "";
  const { executeTransition } = useGlobalState();

  useEffect(() => {
    if (isMobile) {
      resetPreview();
    }
  }, [isMobile]);

  useEffect(() => {
    setPreviewContainer(document.querySelectorAll(".homeWrapper .preview"));
    setHeroContainer(document.querySelector(".homeWrapper .hero"));

    return () => {
      setPreviewContainer(null);
      setHeroContainer(null);
    };
  }, []);

  return (
    <Link
      to={`${title}`}
      onClick={(e) => executeTransition(e, title, false)}
      className="tile hover all"
      onMouseEnter={() => {
        isMobile ? null : togglePreview(dataID);
      }}
      onMouseLeave={() => {
        isMobile ? null : resetPreview();
      }}
      onMouseMove={(event) => {
        isMobile ? null : movePreview(dataID, event);
      }}
    >
      <h5 className="title">{getProjectName(dataID)}</h5>
      <small className="year faded">{getProjectYear(dataID)}</small>
    </Link>
  );
}

export function ProjectPreview({ dataID }: ProjectProps) {
  return (
    <div data-key={dataID} className="preview">
      {getProjectVideo(dataID) ? (
        <video loop muted src={getProjectVideo(dataID)} />
      ) : (
        <img src={getProjectImage(dataID)[0]} />
      )}
      <span className="architecture">
        {getProjectArchitecture(dataID)
          .filter((item) => item.startsWith("*"))
          .map((item, index) => {
            return (
              <ArchitectureTile
                architecture={item}
                key={index}
                classNameContainer="item"
                classNameIcon="icon"
                preview={true}
              />
            );
          })}
      </span>
    </div>
  );
}

export function ProjectTilePlaceholder() {
  return (
    <div className="tile">
      <h5 className="title">????</h5>
      <small className="faded">????</small>
    </div>
  );
}
