"use client";
import Image from "next/image";
import React, { useReducer, FormEvent, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reducer, initialState } from "./reducers";
import styles from "./page.module.css";
import ExpressionOfInterestForm from "./components/forms/ExpressionOfInterestForm";
import Section from "./components/sections/section";
import Header from "./components/header/header";
import { IO } from "./components/animations/observe";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Get Merching With",
    "Buy Sneakers With",
    "Experience Art on",
    "Support Creatives on",
    "Legacy Trends Innovaton",
  ];
  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  React.useEffect(() => {
    const speed = document.querySelectorAll("[data-speed]");
    const elem: any = document.querySelector(".horizontal_scroll > div");
    const fadeElems = document.querySelectorAll("[data-fade]");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky_container",
        scrub: 1,
        start: "top top",
        pinSpacing: false,
        pin: "main",
        end: () => "+=" + elem.scrollWidth,
        toggleActions: "play reset none restart",
        markers: true,
      },
    });

    tl.to(elem, {
      x: () => -elem.scrollWidth,
      ease: "Power1.easeInOut",
    });

    speed.forEach((movingElem) => {
      let speedMultiplier: any = movingElem.getAttribute("data-speed");
      tl.to(
        movingElem,
        {
          ease: "Linear.easeInOut",
          x: (index, target) =>
            speedMultiplier *
            (target.scrollWidth - document.documentElement.clientWidth),
        },
        0
      );
    });

    fadeElems.forEach((fadeElem) => {
      gsap.set(fadeElem, { autoAlpha: 0 });
      IO(fadeElem).then(
        () => {
          gsap.to(fadeElem, {
            autoAlpha: 1,
            duration: 1,
          });
        }
        // {
        //     threshold: 1,
        // }
      );
    });
    const up = document.querySelectorAll("[data-slide-up]");
    up.forEach((item) => {
      IO(item).then(() => {
        gsap.from(item, {
          yPercent: 50,
          duration: 0.5,
          ease: "circ.easeOut",
        });
      });
    });
    const down = document.querySelectorAll("[data-slide-down]");
    down.forEach((item) => {
      IO(item).then(() => {
        gsap.from(item, {
          yPercent: -50,
          duration: 0.5,
          ease: "circ.easeOut",
        });
      });
    });
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isEmailValid(state.email)) {
      // Email is not valid, do not proceed
      console.error("Invalid email");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.email),
      });

      if (response.ok) {
        console.log("Email submitted successfully");
        dispatch({ type: "SUBMIT_SUCCESS" });
      } else {
        console.error("Email submission failed");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main>
        <Header />
        <section className="horizontal_scroll">
          <Section />
        </section>
      </main>

      {/* <main className={styles.main}>
          <div className={styles.description}>
            <p>
              {texts[textIndex]}
              <span> Merchables</span>
            </p>
          </div>

          <div className={styles.center}>
            <Image
              src="/logoNoBg.png"
              alt="Merchables Logo"
              width={100}
              className={styles.vercelLogo}
              height={104}
              priority
            />
            <div className={styles.formWithLabel}>
              <div>
                <p>
                  Be the first to know when we launch. Sign up to become a
                  Mercher.
                </p>
                <ExpressionOfInterestForm
                  onSubmit={handleSubmit}
                  loading={loading}
                  submitted={state.submitted}
                  email={state.email}
                  onEmailChange={(email) =>
                    dispatch({ type: "SET_EMAIL", payload: email })
                  }
                />
              </div>
            </div>
          </div>
        </main> */}
    </>
  );
}
