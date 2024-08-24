import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip, ScrollToPlugin } from "gsap/all";
import { ChangeEvent, useState } from "react";

gsap.registerPlugin(gsap, useGSAP, ScrollToPlugin, Flip);

export function pixelTransition() {
  const { contextSafe } = useGSAP();

  const startTransition = contextSafe((whenDone?: () => void) => {
    gsap.set(".pixelGrid", { display: "grid" });
    gsap.fromTo(
      ".pixelItem",
      { opacity: "0" },
      {
        opacity: "1",
        duration: "0.005",
        stagger: { amount: 0.5, from: "random" },
        onComplete: whenDone,
      }
    );
  });

  const endTransition = contextSafe(() => {
    setTimeout(() => {
      gsap.to(".pixelItem", {
        opacity: "0",
        duration: "0.005",
        stagger: { amount: 0.5, from: "random" },
        onComplete: () => {
          gsap.set(".pixelGrid", { display: "none" });
        },
      });
    }, 100);
  });

  const openMenu = contextSafe(() => {
    startTransition(() => {
      setTimeout(() => {
        gsap.to(".menu", {
          display: "flex",
          autoAlpha: "1",
          duration: "0.5",
        });
      }, 200);
    });
  });

  const closeMenu = contextSafe(() => {
    gsap.to(".menu", {
      display: "none",
      autoAlpha: "0",
      duration: "0.5",
      onComplete: () => {
        endTransition();
      },
    });
  });

  return {
    startTransition,
    endTransition,
    closeMenu,
    openMenu,
  };
}

export function projectTileAnimation(
  previewContainer: NodeListOf<Element> | null,
  heroContainer: Element | null
) {
  const { contextSafe } = useGSAP();

  const animationEnter = {
    scale: "1",
    autoAlpha: "1",
    duration: "0.1",
    ease: "power2.inOut",
  };

  const animationExit = {
    scale: "0.95",
    autoAlpha: "0",
    duration: "0.1",
    ease: "power2.inOut",
  };

  const togglePreview = contextSafe((targetID: number) => {
    previewContainer?.forEach((container) => {
      const dataKey = container.getAttribute("data-key");
      const video = container.querySelector("video");

      if (dataKey === targetID.toString()) {
        if (video) {
          video?.play();
        }

        gsap.to(container, animationEnter);
        gsap.to(heroContainer, animationExit);
      }
    });
  });

  const resetPreview = contextSafe(() => {
    previewContainer?.forEach((container) => {
      const video = container.querySelector("video");
      if (video) {
        video.currentTime = 0;
        video.pause();
      }

      gsap.to(container, animationExit);
    });
    gsap.to(heroContainer, animationEnter);
  });

  const movePreview = contextSafe(
    (targetID: number, event: React.MouseEvent) => {
      previewContainer?.forEach((container) => {
        const dataKey = container.getAttribute("data-key");

        if (dataKey === targetID.toString()) {
          const quickX = gsap.quickTo(container, "xPercent", {
            duration: 0.2,
          });
          const quickY = gsap.quickTo(container, "yPercent", {
            duration: 0.2,
          });

          quickX((event.clientX / window.innerWidth) * 10 - 2);
          quickY((event.clientY / window.innerHeight) * 10 - 2);
        }
      });
    }
  );

  return {
    togglePreview,
    resetPreview,
    movePreview,
  };
}

export function scrollingAnimation() {
  const { contextSafe } = useGSAP();

  const scrollToTop = contextSafe((duration: number) => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: duration });
  });

  return { scrollToTop };
}

export function aboutAnimation() {
  const { contextSafe } = useGSAP();
  const allSkills = gsap.utils.toArray(".skills .item") as HTMLElement[];

  const [selectedValue, setSelectedValue] = useState("-1");
  const [previousValue, setPreviousValue] = useState("-1");

  const resetSkillset = contextSafe(
    (event: React.MouseEvent<HTMLSelectElement>) => {
      if (event.button === 0) {
        const state = Flip.getState(allSkills);

        allSkills.forEach((skill) => {
          gsap.set(skill, { display: "flex" });
        });

        Flip.from(state, {
          duration: 0.7,
          ease: "power2.inOut",
          stagger: {
            each: 0.08,
            from: "start",
          },
          absolute: true,
          onEnter: (elements) =>
            gsap.fromTo(
              elements,
              { opacity: 0, scale: 0 },
              { opacity: 1, scale: 1, duration: 1 }
            ),
          onLeave: (elements) =>
            gsap.to(elements, { opacity: 0, scale: 0, duration: 1 }),
        });
      } else {
        event.preventDefault();
      }
    }
  );

  const filterSkillset = contextSafe(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const newValue = event.target.value;

      setPreviousValue(selectedValue);
      setSelectedValue(newValue);

      const state = Flip.getState(allSkills);

      if (newValue === "-1") {
        allSkills.forEach((skill) => {
          gsap.set(skill, { display: "flex" });
        });
      } else {
        allSkills.forEach((skill) => {
          const dataKey = skill.getAttribute("data-key");

          if (dataKey?.startsWith(newValue)) {
            gsap.set(skill, { display: "flex" });
          } else {
            gsap.set(skill, { display: "none" });
          }
        });
      }

      Flip.from(state, {
        duration: 0.7,
        ease: "power2.inOut",
        stagger: {
          each: 0.08,
          from: "start",
        },
        absolute: true,
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 1 }
          ),
        onLeave: (elements) =>
          gsap.to(elements, { opacity: 0, scale: 0, duration: 1 }),
      });
    }
  );

  return {
    resetSkillset,
    filterSkillset,
  };
}
