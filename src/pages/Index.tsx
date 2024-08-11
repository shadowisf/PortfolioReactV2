import { useState } from "react";
import { ProjectTile } from "../components/ProjectTile";
import { generateTheme } from "../utils/ColorUtils";
import gsap from "gsap";
import ApolloHospital from "../assets/ImageApolloHospital1.webp";
import CircuitCentral from "../assets/ImageCircuitCentral1.webp";
import PlugInsDatabase from "../assets/ImagePlugInsDatabase1.webp";
import PortfolioV1 from "../assets/ImagePortfolio1.webp";
import Funculator from "../assets/ImageFunCulator1.webp";
import BellHospital from "../assets/ImageBellHospital1.webp";
import { LinkNoIcon } from "../components/Link";
import ProjectPicture from "../components/ProjectPicture";
import { useGSAP } from "@gsap/react";
import ProjectPlaceholder from "../components/ProjectPlaceholder";

export const projectData = [
  {
    id: 6,
    name: "portfolio v2",
    year: "2024",
    architecture: [
      "typescript (react)",
      "html",
      "scss",
      "firebase",
      "git",
      "ui/ux",
    ],
  },
  {
    id: 5,
    name: "portfolio v1",
    year: "2024",
    architecture: [
      "typescript (react)",
      "html",
      "scss",
      "firebase",
      "git",
      "ui/ux",
    ],
    picture: PortfolioV1,
  },
  {
    id: 4,
    name: "circuitcentral",
    year: "2024",
    architecture: [
      "c#",
      "windows forms",
      "microsoft sql server",
      "git",
      "ui/ux",
      "crud",
    ],
    picture: CircuitCentral,
  },
  {
    id: 3,
    name: "apollo hospital",
    year: "2023",
    architecture: [
      "python (flask, django)",
      "html",
      "css (bootstrap)",
      "xampp",
      "ui/ux",
      "crud",
    ],
    picture: ApolloHospital,
  },
  {
    id: 2,
    name: "funculator",
    year: "2022",
    architecture: ["java", "swing", "ui/ux"],
    picture: Funculator,
  },
  {
    id: 1,
    name: "bell hospital",
    year: "2022",
    architecture: ["java", "cli", "file handling", "crud"],
    picture: BellHospital,
  },
  {
    id: 0,
    name: "plug-ins database",
    year: "2022",
    architecture: ["php", "html", "css", "xampp", "crud"],
    picture: PlugInsDatabase,
  },
];

export default function Index() {
  useGSAP(() => {
    gsap.set(".picture img", {
      scale: "0",
      autoAlpha: "0",
      display: "none",
    });
  }, []);

  const [firstTime, setFirstTime] = useState(true);
  const [count, setCount] = useState(0);

  function handleNameClick() {
    if (count === 10) {
      generateTheme();

      if (firstTime) {
        gsap.to(".name", {
          backgroundColor: "var(--text-color)",
          color: "var(--background-color",
        });
        gsap.to([".year", ".links"], { autoAlpha: "0.5" });

        setFirstTime(false);
      }
    } else {
      setCount(count + 1);
    }
  }

  return (
    <main className="wrapper">
      <section className="project">
        <ProjectTile dataID={0} />
        <ProjectTile dataID={1} />
        <ProjectTile dataID={2} />
        <ProjectTile dataID={3} />
        <ProjectTile dataID={4} />
        <ProjectTile dataID={5} />
        <ProjectPlaceholder />
        <ProjectPlaceholder />
        <ProjectPlaceholder />
        <ProjectPlaceholder />
      </section>
      <section className="personal">
        <ProjectPicture dataID={0} />
        <ProjectPicture dataID={1} />
        <ProjectPicture dataID={2} />
        <ProjectPicture dataID={3} />
        <ProjectPicture dataID={4} />
        <ProjectPicture dataID={5} />

        <div className="hero">
          <h1 className="name noCursor" onClick={() => handleNameClick()}>
            les ranalan
          </h1>
          <h5>frontend software engineer</h5>

          <br />

          <div className="links noCursor">
            <LinkNoIcon>about me</LinkNoIcon>•
            <LinkNoIcon>contact me</LinkNoIcon>•
            <LinkNoIcon>view my cv</LinkNoIcon>
          </div>
        </div>
      </section>
    </main>
  );
}
