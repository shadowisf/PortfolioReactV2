import { ProjectTile } from "../components/ProjectTile";
import { generateTheme } from "../utils/ColorUtils";
import gsap from "gsap";
import { LinkNoIcon } from "../components/Link";
import { getProjectIDs } from "../utils/ProjectUtils";
import { useState } from "react";
import { pixelTransition } from "../components/PixelGrid";

export default function Home() {
  const [firstTime, setFirstTime] = useState(true);
  const [count, setCount] = useState(0);

  const { startTransition } = pixelTransition();

  const highlightedTexts = [".homeWrapper .name", ".projectWrapper .title"];

  const fadedTexts = [
    ".homeWrapper .year",
    ".projectWrapper .year",
    ".homeWrapper .links",
  ];

  function handleNameClick() {
    if (count === 10) {
      generateTheme();

      if (firstTime) {
        gsap.set(highlightedTexts, {
          backgroundColor: "var(--text-color)",
          color: "var(--background-color",
        });
        gsap.set(fadedTexts, {
          autoAlpha: "0.5",
        });

        setFirstTime(false);
      }
    } else {
      setCount(count + 1);
    }
  }

  return (
    <main data-key="-1" className="homeWrapper">
      <section className="left">
        {getProjectIDs().map((id) => (
          <ProjectTile
            onClick={() => startTransition(id)}
            key={id}
            dataID={id}
          />
        ))}
      </section>
      <section className="right">
        <div className="hero">
          <h1
            className="accent name noCursor"
            onClick={() => handleNameClick()}
          >
            les ranalan
            {/* ᜎ᜔ᜍ᜔ */}
            {/* ᜎᜒᜐ᜔ ᜍᜈᜎᜈ᜔ */}
          </h1>
          <h5>frontend software engineer</h5>

          <br />

          <div className="links faded noCursor">
            <LinkNoIcon className="faded">about me</LinkNoIcon>•
            <LinkNoIcon className="faded">contact me</LinkNoIcon>
          </div>
        </div>
      </section>
    </main>
  );
}
