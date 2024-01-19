import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onDesktop1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        background-color: #fff500;
        width: 100%;
        height: 511px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        cursor: pointer;
        text-align: center;
        font-size: 105px;
        color: var(--color-gainsboro);
        font-family: var(--font-coda-caption);
      `}
      onClick={onDesktop1Click}
    >
      <section
        className={css`
          width: 908px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: var(--font-size-31xl);
          color: var(--color-white);
          font-family: var(--font-carter-one);
        `}
      >
        <div
          className={css`
            flex: 1;
            position: relative;
            height: 891px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: 50%;
              background: linear-gradient(
                180deg,
                #933eff,
                rgba(168, 99, 255, 0)
              );
              width: 908px;
              height: 891px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 908px;
              height: 891px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: 50%;
                background: linear-gradient(
                  180deg,
                  #00ff1a,
                  rgba(168, 99, 255, 0)
                );
                width: 908px;
                height: 891px;
                z-index: 1;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 908px;
                height: 891px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  border-radius: 50%;
                  background: linear-gradient(
                    180deg,
                    #000,
                    rgba(168, 99, 255, 0)
                  );
                  width: 908px;
                  height: 891px;
                  z-index: 2;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 425px;
                  left: 373px;
                  width: 498px;
                  height: 131px;
                  z-index: 3;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <img
                  className={css`
                    width: 100%;
                    height: 100%;
                    z-index: 3;
                    object-fit: contain;
                    position: absolute;
                    left: -16px;
                    top: 63px;
                    transform: scale(3.588);
                  `}
                  loading="eager"
                  alt=""
                  src="/frame-2@2x.png"
                />
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 551.77px;
                  left: 839.6px;
                  border-radius: 50%;
                  background: linear-gradient(
                    180deg,
                    #ff3333,
                    rgba(0, 0, 0, 0.81) 0.01%,
                    rgba(226, 170, 170, 0) 99.98%,
                    rgba(255, 224, 224, 0.67) 99.99%
                  );
                  width: 356px;
                  height: 19px;
                  transform: rotate(141deg);
                  transform-origin: 0 0;
                  z-index: 4;
                `}
              />
              <h1
                className={css`
                  margin: 0;
                  position: absolute;
                  top: 377px;
                  left: 211px;
                  font-size: inherit;
                  letter-spacing: 0.03em;
                  line-height: 78px;
                  font-weight: 400;
                  font-family: inherit;
                  display: inline-block;
                  width: 229px;
                  height: 135px;
                  z-index: 4;
                `}
              >
                Stick to your lifestyle
              </h1>
              <img
                className={css`
                  position: absolute;
                  top: 318px;
                  left: 340px;
                  width: 24px;
                  height: 24px;
                  overflow: hidden;
                  z-index: 3;
                `}
                loading="eager"
                alt=""
                src="/bxllinkedinsquaresvg.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 318px;
                  left: 260px;
                  width: 24px;
                  height: 24px;
                  overflow: hidden;
                  z-index: 3;
                `}
                loading="eager"
                alt=""
                src="/bxlfacebookcirclesvg.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 318px;
                  left: 220px;
                  width: 24px;
                  height: 24px;
                  overflow: hidden;
                  z-index: 3;
                `}
                loading="eager"
                alt=""
                src="/bxlinstagramsvg.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 318px;
                  left: 300px;
                  width: 24px;
                  height: 24px;
                  overflow: hidden;
                  z-index: 3;
                `}
                loading="eager"
                alt=""
                src="/bxltwittersvg.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 589px;
                  left: 133px;
                  width: 228px;
                  height: 227px;
                  font-size: var(--font-size-xs);
                  font-family: var(--font-abril-fatface);
                `}
              >
                <img
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 228px;
                    height: 227px;
                    object-fit: contain;
                    z-index: 3;
                  `}
                  alt=""
                  src="/triangle-shape.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: 127px;
                    left: 78px;
                    width: 118px;
                    height: 60px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      left: 0px;
                      border-radius: var(--br-30xl);
                      background-color: var(--color-black);
                      width: 118px;
                      height: 44px;
                      z-index: 4;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 4px);
                      top: 0px;
                      left: 9px;
                      letter-spacing: 0.03em;
                      line-height: 78px;
                      display: inline-block;
                      width: 94px;
                      z-index: 5;
                    `}
                  >
                    SHOP NOW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1
        className={css`
          margin: 0 !important;
          position: absolute;
          right: -51.7px;
          bottom: -45.57px;
          font-size: inherit;
          letter-spacing: 0.05em;
          line-height: 50px;
          font-weight: 800;
          font-family: inherit;
          display: inline-block;
          width: 337.7px;
          height: 84.5px;
          flex-shrink: 0;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          -webkit-text-stroke: 339px #fffefe;
          transform: rotate(-40deg);
          transform-origin: 0 0;
          z-index: 5;
        `}
      >
        NIKE
      </h1>
    </div>
  );
};

export default Desktop1;
