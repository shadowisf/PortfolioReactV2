import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useGlobalState } from "./ControlUtil";
import { useState, useEffect } from "react";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(gsap, useGSAP, ScrollToPlugin);

export function startUpAnimation() {
  const { contextSafe } = useGSAP();

  const tileStartUp = contextSafe(() => {
    gsap.set(".homeWrapper .tile", {
      x: "-150",
      autoAlpha: "0",
      filter: "blur(8px)",
      pointerEvents: "none",
      onComplete: () => {
        gsap.to(".homeWrapper .tile", {
          x: "0",
          autoAlpha: "1",
          duration: "1",
          filter: "blur(0px)",
          stagger: 0.25,
          ease: "sine.inOut",
          onComplete: () => {
            gsap.set(".tile", { clearProps: "all" });
          },
        });
      },
    });
  });

  return { tileStartUp };
}

export function pixelTransition() {
  const { contextSafe } = useGSAP();

  const startTransition = contextSafe((onComplete: () => void) => {
    gsap.set(".pixelGrid", { display: "grid" });
    gsap.fromTo(
      ".pixelItem",
      { opacity: "0" },
      {
        opacity: "1",
        duration: "0.005",
        stagger: { amount: 0.5, from: "random" },
        onComplete: () => {
          {
            onComplete();
          }
        },
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

  const changePage = contextSafe((id: number) => {
    const allPages = document.querySelectorAll("main[data-key]");

    allPages.forEach((page) => {
      const dataKey = page.getAttribute("data-key");

      switch (dataKey) {
        case "-1": // home
          gsap.set(allPages, {
            display: "none",
          });
          gsap.set(page, { display: "flex" });

          break;
        case id.toString():
          gsap.set(allPages, { display: "none" });
          gsap.set(page, { display: "block" });
          break;
        default:
      }
    });
  });

  return { startTransition, endTransition, changePage };
}

export function scrollingAnimation() {
  const { contextSafe } = useGSAP();

  const scrollToTop = contextSafe(() => {
    gsap.to(window, { scrollTo: { x: "0", y: "0" } });
  });

  return { scrollToTop };
}

export function navBarAnimation() {
  const { startTransition, endTransition } = pixelTransition();
  const { currentPage, startTransitionGlobal } = useGlobalState();
  const { contextSafe } = useGSAP();

  const handleHamburgerClick = contextSafe(() => {
    startTransition(() => {
      gsap.to(".menu", {
        display: "flex",
        autoAlpha: "1",
        duration: "0.5",
      });
    });
  });

  const handleCloseClick = contextSafe(() => {
    gsap.to(".menu", {
      display: "none",
      autoAlpha: "0",
      duration: "0.5",
      onComplete: () => {
        endTransition();
      },
    });
  });

  const handleNavButtonClick = contextSafe((page: number) => {
    if (page === currentPage) {
      gsap.to(".menu", {
        display: "none",
        autoAlpha: "0",
        duration: "0.5",
        onComplete: () => {
          endTransition();
        },
      });
    } else {
      gsap.to(".menu", {
        display: "none",
        autoAlpha: "0",
        duration: "0.5",
        onComplete: () => {
          startTransitionGlobal(page, true);
        },
      });
    }
  });

  return {
    handleHamburgerClick,
    handleCloseClick,
    handleNavButtonClick,
  };
}

export function projectTileAnimation() {
  const { contextSafe } = useGSAP();
  const [previewContainer, setPreviewContainer] =
    useState<NodeListOf<Element> | null>(null);

  useEffect(() => {
    setPreviewContainer(document.querySelectorAll(".homeWrapper .preview"));

    return () => {
      setPreviewContainer(null);
    };
  }, []);

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

      if (dataKey === targetID.toString()) {
        gsap.to(container, animationEnter);
        gsap.to(".homeWrapper .hero", animationExit);
      }
    });
  });

  const resetPreview = contextSafe(() => {
    previewContainer?.forEach((container) => {
      gsap.to(container, animationExit);
    });
    gsap.to(".homeWrapper .hero", animationEnter);
  });

  const movePreview = contextSafe(
    (targetID: number, event: React.MouseEvent) => {
      previewContainer?.forEach((container) => {
        const dataKey = container.getAttribute("data-key");

        if (dataKey === targetID.toString()) {
          gsap.set(container, {
            xPercent: (event.clientX / window.innerWidth) * 10 - 1.5,
            yPercent: (event.clientY / window.innerHeight) * 10 - 2,
          });
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
