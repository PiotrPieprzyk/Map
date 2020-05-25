import React, { Component, useRef, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";

const WrapperSvg = styled.div`
width: 100%;
  svg {
    overflow: overlay;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
  }
`;

export const Animation1 = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    console.log(elements);
    const repeaterLeft = elements.getElementById("repeaterLeft");
    const repeaterRight = elements.getElementById("repeaterRight");
    const plus = elements.getElementById("plus");
    const sum = elements.getElementById("Sum");
    const calendarWhiteDown = elements.getElementById("calendarWhiteDown");
    const calendarWhiteUp = elements.getElementById("calendarWhiteUp");
    const calendarPinkDown = elements.getElementById("calendarPinkDown");
    const calendarPinkUp = elements.getElementById("calendarPinkUp");

    const data = elements.getElementById("data");
    const time = elements.getElementById("time");

    gsap.set([data, time], { autoAlpha: 0 });
    // gsap.set([calendarWhiteUp, calendarPinkUp], { y: "+=75" });

    const duration = 0.6;
    const tl = gsap.timeline({
      defaults: { duration: duration },
    });
    tl.addLabel("start","+=1")
      .to(repeaterLeft, { xPercent: "-=100" }, "start")
      .to(repeaterRight, { xPercent: "+=100" }, "start")
      .to([data, time], { autoAlpha: 1 }, "start")
      .addLabel("calendarMove", "+=1")
      .to(calendarWhiteUp, { yPercent: "-=400"}, "calendarMove")
      .to(calendarPinkUp, { yPercent: "-=400"}, "calendarMove")
      .to(data, { yPercent: "-=360" }, "calendarMove")
      .to(time, { yPercent: "-=230" }, "calendarMove")
      .addLabel("datamove1", "+=1")
      .addLabel("datamove2", "+=1")
      .to(time, { xPercent: "+=355", duration: duration*3,  ease: "back.inOut" }, "datamove2")
      .to(data, { xPercent: "+=613", duration: duration*3,  ease: "back.inOut" }, "datamove2")
      .addLabel("datamove3", "+=2")
      .to(time, { yPercent: "+=200" }, "datamove3")
      .to(data, { yPercent: "+=350" }, "datamove3")
      .to(calendarPinkUp, { yPercent: "+=400" }, "datamove3")
      .to(calendarWhiteUp, { yPercent: "+=400" }, "datamove3")
      .to(repeaterLeft, { xPercent: "+=100" }, "datamove3")
      .to(repeaterRight, { xPercent: "-=100" }, "datamove3");
    tl.play();
  });
  return (
    <WrapperSvg ref={wrapper}>
      <svg
        width="416"
        height="74"
        viewBox="0 0 416 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Animation1">
          <g id="repeaterLeft">
            <path id="left" d="M22 7H2V67H22" stroke="black" strokeWidth="3" />
            <path
              id="Vector 42"
              d="M17 62C18.9526 63.9526 20.0474 65.0474 22 67L17 72"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <g id="repeaterRight">
            <path
              id="right"
              d="M42 7H62V67H42.5"
              stroke="black"
              strokeWidth="3"
            />
            <path
              id="Vector 41"
              d="M47 2C45.0474 3.95262 43.9526 5.04738 42 7L47 12"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <path
            id="data"
            d="M9.76727 37.88C11.1406 38.0133 12.1873 38.44 12.9073 39.16C13.6273 39.8667 13.9873 40.7733 13.9873 41.88C13.9873 42.68 13.7873 43.4067 13.3873 44.06C12.9873 44.7 12.3873 45.2133 11.5873 45.6C10.8006 45.9733 9.83393 46.16 8.68727 46.16C7.68727 46.16 6.72727 46.0133 5.80727 45.72C4.88727 45.4133 4.13393 44.9933 3.54727 44.46L4.46727 42.88C4.94727 43.3333 5.5606 43.7 6.30727 43.98C7.05393 44.2467 7.84727 44.38 8.68727 44.38C9.72727 44.38 10.5339 44.16 11.1073 43.72C11.6939 43.28 11.9873 42.6733 11.9873 41.9C11.9873 41.1267 11.7006 40.5267 11.1273 40.1C10.5539 39.6733 9.68727 39.46 8.52727 39.46H7.40727V38.06L10.9273 33.74H4.18727V32H13.4273V33.36L9.76727 37.88ZM35.3437 35.3C36.677 35.3 37.7303 35.6867 38.5037 36.46C39.2903 37.2333 39.6837 38.38 39.6837 39.9V46H37.7637V40.12C37.7637 39.0933 37.5237 38.32 37.0437 37.8C36.577 37.28 35.9037 37.02 35.0237 37.02C34.0503 37.02 33.277 37.3267 32.7037 37.94C32.1303 38.54 31.8437 39.4067 31.8437 40.54V46H29.9237V40.12C29.9237 39.0933 29.6837 38.32 29.2037 37.8C28.737 37.28 28.0637 37.02 27.1837 37.02C26.2103 37.02 25.437 37.3267 24.8637 37.94C24.2903 38.54 24.0037 39.4067 24.0037 40.54V46H22.0837V35.4H23.9237V36.98C24.3103 36.4333 24.817 36.02 25.4437 35.74C26.0703 35.4467 26.7837 35.3 27.5837 35.3C28.4103 35.3 29.1437 35.4667 29.7837 35.8C30.4237 36.1333 30.917 36.62 31.2637 37.26C31.6637 36.6467 32.217 36.1667 32.9237 35.82C33.6437 35.4733 34.4503 35.3 35.3437 35.3ZM47.0765 35.3C48.5432 35.3 49.6632 35.66 50.4365 36.38C51.2232 37.1 51.6165 38.1733 51.6165 39.6V46H49.7965V44.6C49.4765 45.0933 49.0165 45.4733 48.4165 45.74C47.8298 45.9933 47.1298 46.12 46.3165 46.12C45.1298 46.12 44.1765 45.8333 43.4565 45.26C42.7498 44.6867 42.3965 43.9333 42.3965 43C42.3965 42.0667 42.7365 41.32 43.4165 40.76C44.0965 40.1867 45.1765 39.9 46.6565 39.9H49.6965V39.52C49.6965 38.6933 49.4565 38.06 48.9765 37.62C48.4965 37.18 47.7898 36.96 46.8565 36.96C46.2298 36.96 45.6165 37.0667 45.0165 37.28C44.4165 37.48 43.9098 37.7533 43.4965 38.1L42.6965 36.66C43.2432 36.22 43.8965 35.8867 44.6565 35.66C45.4165 35.42 46.2232 35.3 47.0765 35.3ZM46.6365 44.64C47.3698 44.64 48.0032 44.48 48.5365 44.16C49.0698 43.8267 49.4565 43.36 49.6965 42.76V41.28H46.7365C45.1098 41.28 44.2965 41.8267 44.2965 42.92C44.2965 43.4533 44.5032 43.8733 44.9165 44.18C45.3298 44.4867 45.9032 44.64 46.6365 44.64ZM57.0096 37.18C57.3429 36.5667 57.8363 36.1 58.4896 35.78C59.1429 35.46 59.9363 35.3 60.8696 35.3V37.16C60.7629 37.1467 60.6163 37.14 60.4296 37.14C59.3896 37.14 58.5696 37.4533 57.9696 38.08C57.3829 38.6933 57.0896 39.5733 57.0896 40.72V46H55.1696V35.4H57.0096V37.18Z"
            fill="black"
          />
          <path
            id="plus"
            d="M112 42H120M128 42H120M120 42V34M120 42V50"
            stroke="black"
            strokeWidth="3"
          />
          <g id="Sum">
            <path
              id="Vector 17"
              d="M288 36H296H304"
              stroke="black"
              strokeWidth="3"
            />
            <path
              id="Vector 18"
              d="M288 44H296H304"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <path
            id="calendarWhiteUp"
            d="M178 11H238V26H178V11Z"
            fill="#F7F7F7"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="time"
            d="M187.321 41V55H185.341V42.74H182.181V41H187.321ZM194.924 40.84C196.804 40.84 198.25 41.4467 199.264 42.66C200.29 43.8733 200.804 45.5933 200.804 47.82C200.804 49.38 200.524 50.7133 199.964 51.82C199.417 52.9133 198.644 53.7467 197.644 54.32C196.657 54.88 195.504 55.16 194.184 55.16C193.504 55.16 192.864 55.0933 192.264 54.96C191.664 54.8133 191.144 54.6067 190.704 54.34L191.464 52.78C192.144 53.22 193.044 53.44 194.164 53.44C195.617 53.44 196.75 52.9933 197.564 52.1C198.39 51.1933 198.804 49.88 198.804 48.16V47.66C198.404 48.26 197.85 48.72 197.144 49.04C196.437 49.3467 195.644 49.5 194.764 49.5C193.844 49.5 193.017 49.3267 192.284 48.98C191.564 48.6333 190.997 48.14 190.584 47.5C190.184 46.8467 189.984 46.1 189.984 45.26C189.984 44.38 190.197 43.6067 190.624 42.94C191.064 42.2733 191.657 41.76 192.404 41.4C193.15 41.0267 193.99 40.84 194.924 40.84ZM195.104 47.88C195.73 47.88 196.29 47.76 196.784 47.52C197.277 47.28 197.657 46.9533 197.924 46.54C198.204 46.1267 198.344 45.6667 198.344 45.16C198.344 44.6667 198.21 44.22 197.944 43.82C197.69 43.4067 197.31 43.08 196.804 42.84C196.31 42.5867 195.71 42.46 195.004 42.46C194.084 42.46 193.337 42.7067 192.764 43.2C192.204 43.6933 191.924 44.3533 191.924 45.18C191.924 46.0067 192.21 46.6667 192.784 47.16C193.357 47.64 194.13 47.88 195.104 47.88ZM204.048 47.04C203.674 47.04 203.354 46.9133 203.088 46.66C202.821 46.3933 202.688 46.06 202.688 45.66C202.688 45.2733 202.821 44.9533 203.088 44.7C203.354 44.4333 203.674 44.3 204.048 44.3C204.421 44.3 204.734 44.4267 204.988 44.68C205.241 44.9333 205.368 45.26 205.368 45.66C205.368 46.06 205.234 46.3933 204.968 46.66C204.714 46.9133 204.408 47.04 204.048 47.04ZM204.048 55.12C203.674 55.12 203.354 54.9933 203.088 54.74C202.821 54.4733 202.688 54.14 202.688 53.74C202.688 53.3533 202.821 53.0333 203.088 52.78C203.354 52.5133 203.674 52.38 204.048 52.38C204.421 52.38 204.734 52.5067 204.988 52.76C205.241 53.0133 205.368 53.34 205.368 53.74C205.368 54.14 205.234 54.4733 204.968 54.74C204.714 54.9933 204.408 55.12 204.048 55.12ZM212.979 55.16C211.872 55.16 210.885 54.88 210.019 54.32C209.165 53.7467 208.492 52.92 207.999 51.84C207.505 50.76 207.259 49.48 207.259 48C207.259 46.52 207.505 45.24 207.999 44.16C208.492 43.08 209.165 42.26 210.019 41.7C210.885 41.1267 211.872 40.84 212.979 40.84C214.072 40.84 215.045 41.1267 215.899 41.7C216.765 42.26 217.445 43.08 217.939 44.16C218.432 45.24 218.679 46.52 218.679 48C218.679 49.48 218.432 50.76 217.939 51.84C217.445 52.92 216.765 53.7467 215.899 54.32C215.045 54.88 214.072 55.16 212.979 55.16ZM212.979 53.38C214.099 53.38 214.992 52.92 215.659 52C216.339 51.08 216.679 49.7467 216.679 48C216.679 46.2533 216.339 44.92 215.659 44C214.992 43.08 214.099 42.62 212.979 42.62C211.845 42.62 210.939 43.08 210.259 44C209.592 44.92 209.259 46.2533 209.259 48C209.259 49.7467 209.592 51.08 210.259 52C210.939 52.92 211.845 53.38 212.979 53.38ZM226.319 55.16C225.212 55.16 224.225 54.88 223.359 54.32C222.505 53.7467 221.832 52.92 221.339 51.84C220.845 50.76 220.599 49.48 220.599 48C220.599 46.52 220.845 45.24 221.339 44.16C221.832 43.08 222.505 42.26 223.359 41.7C224.225 41.1267 225.212 40.84 226.319 40.84C227.412 40.84 228.385 41.1267 229.239 41.7C230.105 42.26 230.785 43.08 231.279 44.16C231.772 45.24 232.019 46.52 232.019 48C232.019 49.48 231.772 50.76 231.279 51.84C230.785 52.92 230.105 53.7467 229.239 54.32C228.385 54.88 227.412 55.16 226.319 55.16ZM226.319 53.38C227.439 53.38 228.332 52.92 228.999 52C229.679 51.08 230.019 49.7467 230.019 48C230.019 46.2533 229.679 44.92 228.999 44C228.332 43.08 227.439 42.62 226.319 42.62C225.185 42.62 224.279 43.08 223.599 44C222.932 44.92 222.599 46.2533 222.599 48C222.599 49.7467 222.932 51.08 223.599 52C224.279 52.92 225.185 53.38 226.319 53.38Z"
            fill="black"
          />
          <g id="calendarWhiteDown">
            <path d="M178 66H238V31H178V66Z" fill="#F7F7F7" />
            <path d="M178 66H238V31H178V66Z" fill="#F7F7F7" />
            <path d="M178 66H238V31H178V66Z" stroke="black" strokeWidth="3" />
            <path d="M178 66H238V31H178V66Z" stroke="black" strokeWidth="3" />
          </g>
          <path
            id="calendarPinkUp"
            d="M354 11H414V26H354V11Z"
            fill="#F06767"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="calendarPinkDown"
            d="M354 66H414V31H354V66Z"
            fill="#F06767"
            stroke="black"
            strokeWidth="3.5"
          />
        </g>
      </svg>
    </WrapperSvg>
  );
};
