import React, { FormEvent, useEffect, useReducer } from "react";
import { IO } from "../animations/observe";
import ExpressionOfInterestForm from "../forms/ExpressionOfInterestForm";
import { isEmailValid } from "@/app/utils/isEmailValid";
import { initialState, reducer } from "@/app/reducers";

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
          Discover <span>Exclusive Collections</span> <br />
          Merchables allows you to transform art into fashion. Step into the
          future of fashion.
        </p>
        <video
          data-speed=".5"
          autoPlay
          playsInline
          muted
          src="https://www.apple.com/105/media/us/ipad-pro/2018/cE249dd1_58dc_487a_880b_6a1bc197cc43/anim/ipad/medium.mp4"
        ></video>
        <p data-speed="-0.01" data-fade>
          Artists earn <span>on every creation.</span>
        </p>
      </div>
      <div className="r_vid">
        <div data-speed="0.08" className="r_vid-lcd">
          <div className="cont" data-slide-down>
            <video
              muted
              autoPlay
              playsInline
              src="https://www.apple.com/105/media/us/ipad-pro/2018/cE249dd1_58dc_487a_880b_6a1bc197cc43/anim/swipe-up-screen/medium.mp4"
            ></video>
            <img
              src="https://www.apple.com/v/ipad-pro/s/images/overview/shadow__d20u3oakeiye_large.png"
              alt=""
            />
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
          <span>Face ID</span> comes to iPad. It’s engineered for secure
          unlocking and works seamlessly whether you hold it in portrait or
          landscape.
        </p>
        <img
          data-slide-up
          data-fade
          src="https://res.cloudinary.com/dlxdkmp1b/image/upload/v1696798310/19512360_43918113_1000-removebg-preview_vos6vc.png"
          alt="BEAT Exclusive Off-White Off-White™ c/o Chicago Bulls Red Varsity"
        />
        <p data-fade>
          Use Face ID to unlock your iPad Pro, <br />
          log in to apps, and pay with a glance.
        </p>
      </div>
      <div className="r_last">
        <div className="phone">
          <img
            src="https://www.apple.com/v/ipad-pro/s/images/overview/usb_c_screen__ems2xs6v94wi_medium_2x.jpg"
            alt=""
          />
          <img
            src="https://www.apple.com/v/ipad-pro/s/images/overview/shadow__d20u3oakeiye_large.png"
            alt=""
          />
        </div>
        <div className="cam"></div>
        <p data-speed=".2" className="grey-txt">
          <span>USB-C</span> gives you a high-performance connection to
          accessories like an <br />
          external display or camera
        </p>
      </div>
      <div className="r_bot">
        <p>
          iPad Pro has <span>two great cameras</span> equipped with Smart HDR. A
          12MP camera for stunning photos, 4K video, document scanning, and AR
          experiences. And a TrueDepth camera perfect for Portrait selfies,
          FaceTime, Animoji, and Memoji.
        </p>
        <img
          data-slide-up
          data-fade
          src="https://www.apple.com/v/ipad-pro/s/images/overview/two_cameras__epctxn42bjwy_medium_2x.jpg"
          alt=""
        />
        <div className="thin">
          <p>
            At just over a pound, it’s more portable than ever. Connect on the
            go with fast Wi-Fi and Gigabit-class LTE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
