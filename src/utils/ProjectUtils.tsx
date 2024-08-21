import { Github, LinkedIn, PDF } from "../components/Icon";
import { LinkWithIcon } from "../components/Link";
import WorkInProgress from "../assets/ImageWorkInProgress.PNG";
import { Fragment } from "react/jsx-runtime";
//
import PortfolioOriginal1 from "../assets/ImageOriginalPortfolio1.webp";
import PortfolioOriginal2 from "../assets/ImageOriginalPortfolio2.webp";
//
import ApolloHospital1 from "../assets/ImageApolloHospital1.webp";
import ApolloHospital2 from "../assets/ImageApolloHospital2.webp";
import ApolloHospitalReport from "../assets/FileApolloHospital.PDF";
//
import CircuitCentral1 from "../assets/ImageCircuitCentral1.webp";
import CircuitCentral2 from "../assets/ImageCircuitCentral2.webp";
import CircuitCentralImplementationReport from "../assets/FileCircuitCentralImplementation.PDF";
import CircuitCentralProposalReport from "../assets/FileCircuitCentralProposal.PDF";
//
import PlugInsDatabase1 from "../assets/ImagePlugInsDatabase1.webp";
import PlugInsDatabase2 from "../assets/ImagePlugInsDatabase2.webp";
import PlugInsDatabaseReport from "../assets/FilePlugInsDatabase.PDF";
//
import Funculator1 from "../assets/ImageFunCulator1.webp";
import Funculator2 from "../assets/ImageFunCulator2.webp";
import Funculator3 from "../assets/ImageFunCulator3.webp";
import FunculatorReport from "../assets/FileFunCulator.PDF";
//
import BellHospital1 from "../assets/ImageBellHospital1.webp";
import BellHospital2 from "../assets/ImageBellHospital1.webp";
import BellHospitalReport from "../assets/FileBellHospital.PDF";
//
const ApolloHospitalGithub = "https://github.com/shadowisf/ApolloHospital";
const CircuitCentralGithub = "https://github.com/shadowisf/CircuitCentral";
const PlugInsDatabaseGithub = "https://github.com/shadowisf/PlugInsDatabase";
const FunculatorGithub = "https://github.com/shadowisf/FunCulator";
const BellHospitalGithub = "https://github.com/shadowisf/BellHospital";
//
import { BiLogoTypescript, BiLogoFirebase } from "react-icons/bi";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
  FaBootstrap,
  FaRegFile,
  FaJava,
} from "react-icons/fa";
import {
  SiFlask,
  SiDjango,
  SiXampp,
  SiPhp,
  SiMicrosoftsqlserver,
  SiCsharp,
  SiDotnet,
} from "react-icons/si";
import { GoPackage, GoCommandPalette } from "react-icons/go";
//
export const architectureIcons: Record<string, JSX.Element> = {
  /* typescript: <BiLogoTypescript />,
  react: <FaReact />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  sass: <FaSass />,
  firebase: <IoLogoFirebase />,
  git: <FaGitAlt />,
  "c-sharp": <SiCsharp />,
  "windows forms": <SiDotnet />,
  "microsoft sql server": <SiMicrosoftsqlserver />,
  java: <FaJava />,
  flask: <SiFlask />,
  django: <SiDjango />,
  "bootstrap css": <FaBootstrap />,
  xampp: <SiXampp />,
  swing: <GoPackage />,
  cli: <AiOutlineMacCommand />,
  "file handling": <FaRegFile />,
  php: <SiPhp />, */

  typescript: <BiLogoTypescript fill="var(--accent-color)" />,
  react: <FaReact fill="var(--accent-color)" />,
  html: <FaHtml5 fill="var(--accent-color)" />,
  css: <FaCss3Alt fill="var(--accent-color)" />,
  sass: <FaSass fill="var(--accent-color)" />,
  firebase: <BiLogoFirebase fill="var(--accent-color)" />,
  git: <FaGitAlt fill="var(--accent-color)" />,
  "c-sharp": <SiCsharp fill="var(--accent-color)" />,
  "windows forms": <SiDotnet fill="var(--accent-color)" />,
  "microsoft sql server": <SiMicrosoftsqlserver fill="var(--accent-color)" />,
  java: <FaJava fill="var(--accent-color)" />,
  flask: <SiFlask fill="var(--accent-color)" />,
  django: <SiDjango fill="var(--accent-color)" />,
  "bootstrap css": <FaBootstrap fill="var(--accent-color)" />,
  xampp: <SiXampp fill="var(--accent-color)" />,
  swing: <GoPackage fill="var(--accent-color)" />,
  cli: <GoCommandPalette fill="var(--accent-color)" />,
  "file handling": <FaRegFile fill="var(--accent-color)" />,
  php: <SiPhp fill="var(--accent-color)" />,

  /* typescript: <BiLogoTypescript fill="rgb(49, 120, 198)" />,
  react: <FaReact fill="rgb(98, 213, 250)" />,
  html: <FaHtml5 fill="rgb(211, 88, 53)" />,
  css: <FaCss3Alt fill="rgb(46, 107, 180)" />,
  sass: <FaSass fill="#cc6699" />,
  firebase: <IoLogoFirebase fill="rgb(240, 170, 63)" />,
  git: <FaGitAlt fill="rgb(205, 86, 64)" />,
  "c-sharp": <SiCsharp fill="rgb(148, 111, 211)" />,
  "windows forms": <SiDotnet className="dotNet" fill="white" />,
  "microsoft sql server": <SiMicrosoftsqlserver fill="rgb(184, 54, 53)" />,
  java: <FaJava fill="rgb(223, 82, 65)" />,
  flask: <SiFlask fill="rgb(53, 107, 114)" />,
  django: <SiDjango fill="rgb(80, 157, 116)" />,
  "bootstrap css": <FaBootstrap fill="#7952b3" />,
  xampp: <SiXampp fill="rgb(234, 130, 61)" />,
  swing: <GoPackage fill="var(--faded-color)" />,
  cli: <AiOutlineMacCommand fill="var(--faded-color)" />,
  "file handling": <FaRegFile fill="var(--faded-color)" />,
  php: <SiPhp fill="#777BB4" />, */
};

//
export const architectureColors: Record<string, string> = {
  /*  typescript: "rgba(49, 120, 198, 0.8)",
  react: "rgba(98, 213, 250, 0.75)",
  html: "rgb(211, 88, 53)",
  css: "rgb(46, 107, 180)",
  sass: "#cc6699",
  firebase: "rgb(240, 170, 63)",
  git: "rgb(205, 86, 64)",
  "c-sharp": "rgb(148, 111, 211)",
  "windows forms": "rgb(98, 97, 233)",
  "microsoft sql server": "rgb(184, 54, 53)",
  java: "rgb(223, 82, 65)",
  flask: "rgb(53, 107, 114)",
  django: "rgb(80, 157, 116)",
  "bootstrap css": "#7952b3",
  xampp: "rgb(234, 130, 61)",
  swing: "var(--faded-color)",
  cli: "var(--faded-color)",
  "file handling": "var(--faded-color)",
  php: "#777BB4", */
};
//
export const projectData = [
  {
    id: 6,
    name: "portfolio v2",
    year: "2024",
    architecture: ["typescript", "*react", "*html", "*sass", "git"],
    image: [WorkInProgress],
    imageAlts: [],
    content: (
      <p>
        i decided to redesign my portfolio website when i realized that my
        initial design philosophy to minimalism in user interfaces needed
        rethinking. most of the libraries and frameworks are still the same.
        however, some were removed to make the website less resource-intensive
        and more performant. the content remains the same as v1, showing my{" "}
        <u>projects, life history, research, and all things me!</u>
        <br />
        <br />
        <b>my role:</b> this was a solo project. every tech stack was
        implemented by me.
      </p>
    ),
    links: (
      <Fragment>
        {/* medium zoom */}
        <LinkWithIcon
          img={<Github width="24" />}
          href="https://github.com/francoischalifour"
        >
          françois chalifour
        </LinkWithIcon>

        {/* gsap */}
        <LinkWithIcon
          img={<Github width="24" />}
          href="https://github.com/jackdoyle"
        >
          jack doyle
        </LinkWithIcon>

        {/* remix icons */}
        <LinkWithIcon
          img={<Github width="24" />}
          href="https://github.com/kamijin-fanta"
        >
          kamijin fanta
        </LinkWithIcon>
      </Fragment>
    ),
  },
  {
    id: 5,
    name: "portfolio v1",
    year: "2024",
    architecture: [
      "typescript",
      "*react",
      "*html",
      "*sass",
      "*firebase",
      "git",
    ],
    image: [PortfolioOriginal1, PortfolioOriginal2],
    imageAlts: [
      "image of the about section in my portfolio project. it has a cartoon illustration of me and and text introducing myself.",
      "image of the project section in my portfolio project. it is currently viewing the circuitcentral project, displaying a short description and its tech stack. additionally, there's links to its github repository and technical report.",
    ],
    content: (
      <p>
        the original design of my portfolio website was of cartoonish design
        inspired by a few websites i saw on the awwwards website. through this,
        i was able to{" "}
        <u>
          grasp and understand more about html, css, and javascript/typescript
        </u>{" "}
        as a baseline for web development.
        <br />
        <br />
        <b>my role:</b> this was a solo project. every tech stack was
        implemented by me.
      </p>
    ),
    links: (
      <Fragment>
        {/* typedcss */}
        <LinkWithIcon
          img={<Github width="24" />}
          href="https://github.com/brandonmcconnell"
        >
          brandon mcconnell
        </LinkWithIcon>

        {/* react-toastify */}
        <LinkWithIcon
          img={<Github width="24" />}
          href="https://github.com/fkhadra"
        >
          fadi khadra
        </LinkWithIcon>

        {/* medium zoom */}
        <LinkWithIcon
          img={<Github width="24" />}
          href="https://github.com/francoischalifour"
        >
          françois chalifour
        </LinkWithIcon>

        {/* theme engine */}
        <LinkWithIcon
          img={<LinkedIn width="24" />}
          href="https://www.linkedin.com/in/frankmyles/"
        >
          frank myles
        </LinkWithIcon>

        {/* gsap */}
        <LinkWithIcon
          img={<Github width="24" />}
          href="https://github.com/jackdoyle"
        >
          jack doyle
        </LinkWithIcon>

        {/* remix icons */}
        <LinkWithIcon
          img={<Github width="24" />}
          href="https://github.com/xiaochunjimmy"
        >
          zhang xiaochun
        </LinkWithIcon>
      </Fragment>
    ),
  },
  {
    id: 4,
    name: "circuitcentral",
    year: "2024",
    architecture: [
      "*c-sharp",
      "*windows forms",
      "*microsoft sql server",
      "git",
    ],
    image: [CircuitCentral1, CircuitCentral2],
    imageAlt: [
      "first image of the circuitcentral project; it is viewing the products section wherein it is displaying a list of tech products that a user can add to their cart. additionally, the ui has buttons for CRUD operations.",
      "second image of the circuitcentral project; it is viewing the orders section wherein it displays a list of products that are currently in a cart. additionally, the ui has buttons for CRUD operations.",
    ],
    content: (
      <p>
        circuitcentral is an <u>e-commerce management system</u> that covers
        ordering products, viewing product catalogs, handling customer, staff,
        and supplier information, etc. its system features fundamental crud
        operations: create, read, update, and delete. additionally, it features
        search filtering on all records, error handling of all user events,
        input validation, and a login system for two user types.
        <br />
        <br />
        <b>my role:</b> this was a solo project. every tech stack was
        implemented by me.
      </p>
    ),
    links: (
      <Fragment>
        <LinkWithIcon img={<Github width="24" />} href={CircuitCentralGithub}>
          repository
        </LinkWithIcon>

        <LinkWithIcon img={<PDF />} href={CircuitCentralProposalReport}>
          proposal report
        </LinkWithIcon>

        <LinkWithIcon img={<PDF />} href={CircuitCentralImplementationReport}>
          implementation report
        </LinkWithIcon>
      </Fragment>
    ),
  },
  {
    id: 3,
    name: "apollo hospital",
    year: "2023",
    architecture: ["flask", "*django", "*html", "*bootstrap css", "*xampp"],
    image: [ApolloHospital1, ApolloHospital2],
    imageAlts: [
      "first image of the apollo hospital project; it is viewing the home page wherein it displays an illustration of a doctor treating its patient, with the title of the website whch is apollo hospital.",
      "second image of the apollo hospital project; it is viewing the patient records section wherein it displays the list of patient information. additionally, the ui has buttons for CRUD operations.",
    ],
    content: (
      <p>
        apollo hospital is a <u>hospital management system</u> that covers
        handling patient and doctor information, scheduling appointments with
        patients, manage patient's prescription and payables, etc. similarly to
        circuitcentral, its system features fundamental crud operations: create,
        read, update, delete. as well as a login system, error handling, input
        validation, and search filtering of patient records.
        <br />
        <br />
        <b>my role:</b> this was a group project. i designed and implemented the
        front-end: overall theme, buttons, navbar, modals, home page, user
        pages, etc. additionally, i implemented half of the back-end: database
        schema, error handling, callouts, etc.
      </p>
    ),
    links: (
      <Fragment>
        <LinkWithIcon img={<Github width="24" />} href={ApolloHospitalGithub}>
          repository
        </LinkWithIcon>

        <LinkWithIcon img={<PDF />} href={ApolloHospitalReport}>
          report
        </LinkWithIcon>
      </Fragment>
    ),
  },
  {
    id: 2,
    name: "funculator",
    year: "2022",
    architecture: ["*java", "*swing"],
    image: [Funculator1, Funculator2, Funculator3],
    imageAlts: [
      "first image of the funculator project. it is currently viewing the index page where it is displaying a calculator with a face in pixel art form. additionally, there is buttons for start and exit on the right.",
      "second image of the funculator project. it is currently viewing the menu section where it is displaying all of the possible operations such as factorial, min&max, fibonacci, etc.",
      "first image of the funculator project. it is currently viewing the index page where it is displaying a calculator with a face in pixel art form. additionally, there is buttons for start and exit on the right.",
    ],
    content: (
      <p>
        funculator is an <u>all-in-one calculator application</u> for students.
        its system features a login system and a menu that shows all possible
        maethematical operations a student needs; arithmetics, fibonacci
        sequences, area of different shapes, etc. the design aesthetic for this
        project was heavily inspired by vibrant pixel art and sprites.
        <br />
        <br />
        <b>my role:</b> this was a group project. i designed and implemented the
        front-end; the general theme, buttons, menu, calculator avatar, etc.
        additionally, i implemented half of the back-end; factorial, fibonacci,
        average, min & max.
      </p>
    ),
    links: (
      <Fragment>
        <LinkWithIcon img={<Github width="24" />} href={FunculatorGithub}>
          repository
        </LinkWithIcon>

        <LinkWithIcon img={<PDF />} href={FunculatorReport}>
          report
        </LinkWithIcon>
      </Fragment>
    ),
  },
  {
    id: 1,
    name: "bell hospital",
    year: "2022",
    architecture: ["*java", "*cli", "*file handling"],
    image: [BellHospital1, BellHospital2],
    imageAlts: [
      "first image of the bell hospital project. it is currently viewing the starting page (note that this is a CLI project) where it is displaying all of the possible sections such as patients, doctors, appointments, etc.",
      "second image of the bell hospital project. it is currently viewing the patients records section where it is displaying all patient information (note that this is a CLI project). additionally, there are commands for CRUD operations.",
    ],
    content: (
      <p>
        bell hospital is a <u>hospital management system</u> that is intended to
        be used with a command line interface (cli), with coverage to handling
        patient and doctor information, appointment scheduling, and medical
        records. its system feature crud operations: create, read, update, and
        delete. additionally, it has error handling and persistent data
        management since it utilizes span files through file handling.
        <br />
        <br />
        <b>my role:</b> this was a solo project. every tech stack was
        implemented by me.
      </p>
    ),
    links: (
      <Fragment>
        <LinkWithIcon img={<Github width="24" />} href={BellHospitalGithub}>
          repository
        </LinkWithIcon>

        <LinkWithIcon img={<PDF />} href={BellHospitalReport}>
          report
        </LinkWithIcon>
      </Fragment>
    ),
  },
  {
    id: 0,
    name: "plug-ins database",
    year: "2022",
    architecture: ["*php", "*html", "*css", "*xampp"],
    image: [PlugInsDatabase1, PlugInsDatabase2],
    imageAlts: [
      "first image of the plug-ins project. it is currently viewing the index customer page where it is displaying input fields for basic customer information such as name, contact number, address, etc. additionally, it has buttons for inserting the customer information into the database.",
      "second image of the plug-ins project. it is currently viewing the products page where it is displaying the list of products and their respective information such as price, category, stock quantity, etc.",
    ],
    content: (
      <p>
        plug-ins is a fictitious (not real) company that required a database
        solution that utilizes forms. its system covers insertion of customer,
        product, and order information into a database. through that, search and
        display queries can be performed.
        <br />
        <br />
        <b>my role:</b> this was a solo project. every tech stack was
        implemented by me.
      </p>
    ),
    links: (
      <Fragment>
        <LinkWithIcon img={<Github width="24" />} href={PlugInsDatabaseGithub}>
          repository
        </LinkWithIcon>

        <LinkWithIcon img={<PDF />} href={PlugInsDatabaseReport}>
          report
        </LinkWithIcon>
      </Fragment>
    ),
  },
];

export const aboutSkillset = {
  architecture: [
    "typescript",
    "react",
    "html",
    "css",
    "bootstrap css",
    "sass",
    "git",
    "firebase",
    "c-sharp",
    "java",
    "python",
    "windows forms",
    "microsoft sql server",
    "django",
    "flask",
    "xampp",
    "swing",
    "file handling",
    "php",
  ],
};

export function getAboutSkillset() {
  return aboutSkillset.architecture;
}

export type ProjectProps = {
  dataID: number;
  onClick?: () => void;
};

export function getProjectName(dataID: number) {
  return projectData.find((proj) => proj.id === dataID)?.name;
}

export function getProjectYear(dataID: number) {
  const project = projectData.find((proj) => proj.id === dataID);
  return project ? project.year : [];
}

export function getProjectImage(dataID: number) {
  const project = projectData.find((proj) => proj.id === dataID);
  return project && Array.isArray(project.image) ? project.image : [];
}

export function getProjectImageAlts(dataID: number) {
  const project = projectData.find((proj) => proj.id === dataID);
  return project && Array.isArray(project.imageAlts) ? project.imageAlts : [];
}

export function getProjectContent(dataID: number) {
  const project = projectData.find((proj) => proj.id === dataID);
  return project ? project.content : [];
}

export function getProjectLinks(dataID: number) {
  const project = projectData.find((proj) => proj.id === dataID);
  return project ? project.links : [];
}

export function getProjectArchitecture(dataID: number) {
  const project = projectData.find((proj) => proj.id === dataID);
  return project ? project.architecture : [];
}

export function getProjectIDs() {
  return projectData.map((proj) => proj.id);
}

export function getAllProjectNames() {
  return projectData.map((proj) => proj.name);
}
