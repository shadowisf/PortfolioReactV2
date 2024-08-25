import {
  RiCake2Line,
  RiMapPinLine,
  RiGlasses2Line,
  RiGraduationCapLine,
  RiFilePdf2Line,
} from "react-icons/ri";
import ProfilePicture from "../assets/ImageProfile.webp";
import { TimelineRow } from "../components/Timeline";
import { useEffect } from "react";
import { useGlobalState } from "../utils/ControlUtil";
import ArchitectureTile from "../components/ArchitectureTile";
import { aboutAnimation, scrollingAnimation } from "../utils/AnimationUtils";
import { LinkWithIcon } from "../components/Link";
import CV from "../assets/FileCV.PDF";
import { getAboutSkillset, Views } from "../utils/AboutUtils";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(gsap, useGSAP, ScrollTrigger);

export default function About() {
  const { setCurrentPage, isMobile } = useGlobalState();
  const { scrollToTop } = scrollingAnimation();
  const { filterSkill, resetSkill, startup } = aboutAnimation();
  const { mobileView, desktopView } = Views();

  useEffect(() => {
    setCurrentPage("about");
    scrollToTop(0);
  }, []);

  useEffect(() => {
    if (isMobile) {
      mobileView();
    }

    return () => {
      desktopView();
    };
  }, [isMobile]);

  useGSAP(() => {
    startup();
  });

  return (
    <main className="aboutWrapper">
      <section className="bio">
        <img id="profile" src={ProfilePicture} />
        <div>
          <h1 className="extra accent bioHeader">hey, i'm les!</h1>
          <br />
          <h4>
            i'm all about creating functional, performant, scalable, and
            long-term apps.
          </h4>
          <br />
          <p className="faded">
            i primarily work with react, typescript, sass, gsap, firebase, and
            other libraries and frameworks. though i am highly flexible to
            different technologies and languages.
          </p>
          <br />
          <p className="faded">
            outside of coding, i play video games (which i rarely do nowadays
            lol), listen to music, or bingewatch tv shows/movies.
          </p>
          <br />
          <div className="links">
            <LinkWithIcon img={<RiFilePdf2Line size={24} />} href={CV}>
              download resume
            </LinkWithIcon>
          </div>
        </div>
      </section>

      <section className="timelineAndSkillset">
        <section className="timeline">
          <h1>my life's arc</h1>
          <div>
            <TimelineRow
              img={<RiCake2Line size={40} fill="var(--accent-color)" />}
              verticalLine={true}
            >
              born in davao city, philippines <br />
              <span className="faded">february 15, 2004</span>
            </TimelineRow>

            <TimelineRow
              img={<RiMapPinLine size={40} fill="var(--accent-color)" />}
              verticalLine={true}
            >
              moved to dubai, united arab emirates <br />
              <span className="faded">may 12, 2012</span>
            </TimelineRow>

            <TimelineRow
              img={<RiGlasses2Line size={40} fill="var(--accent-color)" />}
              verticalLine={true}
            >
              first pair of eyeglasses <br />
              <span className="faded">april 6, 2018</span>
            </TimelineRow>

            <TimelineRow
              img={<RiGraduationCapLine size={40} fill="var(--accent-color)" />}
              verticalLine={false}
            >
              graduated uob with bachelor in swe <br />
              <span className="faded">???</span>
            </TimelineRow>
          </div>
        </section>

        <section className="skillset">
          <div className="header">
            <h1>my skillset</h1>
            <select
              onMouseDown={(e) => resetSkill(e)}
              onChange={(e) => filterSkill(e)}
            >
              <option value={"0"}>all</option>
              <option value={"3"}>expert</option>
              <option value={"2"}>intermediate</option>
              <option value={"1"}>beginner</option>
            </select>
          </div>
          <div className="skills">
            {getAboutSkillset().map((item) => {
              return (
                <ArchitectureTile
                  architecture={item}
                  classNameContainer="item"
                  classNameIcon="icon"
                  key={item}
                  dataKey={item}
                  preview={false}
                />
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
