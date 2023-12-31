import React, { FormEvent, useEffect, useReducer } from "react";
import { IO } from "../animations/observe";
import ExpressionOfInterestForm from "../forms/ExpressionOfInterestForm";
import { isEmailValid } from "@/app/utils/isEmailValid";
import { initialState, reducer } from "@/app/reducers";
import Image from "next/image";

const Section = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = React.useState(false);
  const [textIndex, setTextIndex] = React.useState(0);
  useEffect(() => {
    const element: any = document.querySelector(".r_hero_copy .text-block");
    if (element) {
      IO(element).then(() => {
        console.log("Section is in the viewport.");
      });
    }
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
    <div className="r__sect-one">
      <div className="r_hero">
        <img
          data-speed="1"
          src="/hero.png"
          alt="merchables art work by banzy"
        />
        <div data-fade className="r_hero_txt">
          <h1>
            Create Magic <br />
            with Merchables.
          </h1>
          <div className="links">
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
        <div className="r_hero_copy">
          <video
            data-speed="1.9"
            muted
            autoPlay
            playsInline
            src="https://res.cloudinary.com/dlxdkmp1b/video/upload/v1696792429/Untitled_design_hd0q4q.mp4"
          ></video>
          <div className="text-block">
            <p>
              <span data-fade>Explore a world of couture and art.</span> Support
              your favorite artists with Merchables.
            </p>
            <span data-speed="0.8" className="small">
              Buy exclusive sneakers with Merchables.
            </span>
          </div>
        </div>
      </div>
      <div className="r_design">
        <img
          data-fade
          data-speed="0.04"
          src="https://www.apple.com/v/ipad-pro/s/images/overview/two_sizes_2__eq5zmevfgfqu_medium_2x.jpg"
          alt=""
        />
        <img
          data-speed="-0.05"
          src="https://www.apple.com/v/ipad-pro/s/images/overview/two_sizes_1__y8zl65wgpfmy_medium_2x.png"
          alt=""
        />
        <p data-fade>
          Discover <span>Exclusive Art Collections</span> <br />
          Transform art into fashion. Artists earn{" "}
          <span>on every creation.</span>
        </p>
        <img
          data-slide-up
          data-fade
          src="https://res.cloudinary.com/dlxdkmp1b/image/upload/v1696846078/21490435_51474695_1000-removebg-preview_udz1oy.png"
          alt="Represent Cherub motif-embroidered bomber jacket"
        />
        <p data-speed="-0.01" data-fade>
          Step into the future of fashion.
        </p>
      </div>
      <div className="r_vid">
        <div data-speed="0.08" className="r_vid-lcd">
          <div className="cont" data-slide-down>
            <video
              muted
              autoPlay
              playsInline
              src="https://res.cloudinary.com/dlxdkmp1b/video/upload/v1696856208/Untitled_design_ht4b5i.mp4"
            ></video>
          </div>
          <img
            data-slide-up
            src="https://www.apple.com/v/ipad-pro/s/images/overview/swipe_startframe__ekeztlf5fpaq_large.png"
            alt=""
          />
        </div>
        <div data-fade className="text">
          <p className="grey-txt">
            Wear your passion. Connect with <span> artists.</span> Redefine your
            look.
          </p>
          <span data-speed="0.4" data-fade className="small">
            You’ve got to see it — and touch it — to believe it.
          </span>
        </div>
      </div>
      <div className="r_tone">
        <div className="r_frames">
          <div data-fade data-slide-up>
            <img
              src="https://res.cloudinary.com/dlxdkmp1b/image/upload/v1696796924/Untitleddesign_62_1000x-removebg-preview_pnklo2.png"
              alt="AIR JORDAN 1 MID (GS) 'VALENTINE’S DAY' 2023"
            />
          </div>
          <div data-slide-down data-fade>
            <img
              src="https://res.cloudinary.com/dlxdkmp1b/image/upload/v1696797559/Jordan4Seafoam1_11_1000x-removebg-preview_cbidp9.png"
              alt="NIKE DUNK LOW (GS) 'ACTIVE FUCHSIA'"
            />
          </div>
        </div>
        <p data-fade>
          Elevate your style with <span>Exclusive Collections.</span> At
          Merchables, art is transformed into fashion, step into the future of
          fashion.
        </p>
        <img
          data-slide-up
          data-fade
          src="https://res.cloudinary.com/dlxdkmp1b/image/upload/v1696798310/19512360_43918113_1000-removebg-preview_vos6vc.png"
          alt="BEAT Exclusive Off-White Off-White™ c/o Chicago Bulls Red Varsity"
        />
        <p data-fade>
          Express your passion. Connect with <span>talented artists.</span>{" "}
          <br />
          Redefine your style.
        </p>
      </div>
      <div className="r_last">
        <div className="phone">
          <img
            src="https://res.cloudinary.com/dlxdkmp1b/image/upload/v1696843490/steve-johnson-3Sf_G9m0gcQ-unsplash_ptbohw.jpg"
            alt=""
          />
          <img
            src="https://www.apple.com/v/ipad-pro/s/images/overview/shadow__d20u3oakeiye_large.png"
            alt=""
          />
        </div>
        <div className="cam"></div>
        <p data-speed=".2" className="grey-txt">
          <span>Generate exclusive art</span> with AI. Art seamlessly merges
          with fashion, <br />
          taking you on a journey into the future of style.
        </p>
      </div>
      <div className="r_bot">
        <p>
          Merchables is a <span>creative hub</span> where you can connect with
          talented artists from around the world. Blend art with fashion,
          redefine your look in ways you&#39;ve never imagined. It&#39;s not
          just about what you wear; it&#39;s about expressing yourself,
          supporting artists, and making a statement.
        </p>
        <Image
          data-slide-down
          data-fade
          width={1000}
          height={550}
          src="https://res.cloudinary.com/dlxdkmp1b/image/upload/v1696857775/21392089_51650749_1000-removebg-preview_y9prtf.png"
          alt="Golden Goose Stardan multicolour leather sneakers"
        />

        <div className="thin">
          <p>Explore a world of couture and art with Merchables today.</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
