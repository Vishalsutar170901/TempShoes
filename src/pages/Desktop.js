import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const Desktop = () => {
  const navigate = useNavigate();

  const onDesktop2Click = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        background-color: #00ff38;
        width: 100%;
        height: 511px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        cursor: pointer;
        text-align: center;
        font-size: 100px;
        color: var(--color-gainsboro);
        font-family: var(--font-coda-caption);
      `}
      onClick={onDesktop2Click}
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
                  top: 509px;
                  left: 311px;
                  width: 256px;
                  height: 150px;
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
                    left: 144px;
                    top: -44px;
                    transform: scale(3.234);
                  `}
                  alt=""
                  src="/twitter-frame@2x.png"
                />
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 537.77px;
                  left: 839.6px;
                  border-radius: 50%;
                  background: linear-gradient(
                    180deg,
                    #b9b9b9,
                    rgba(0, 0, 0, 0.81) 0.01%,
                    rgba(226, 170, 170, 0)
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
                  top: 383px;
                  left: 187px;
                  font-size: inherit;
                  line-height: 79px;
                  font-weight: 400;
                  font-family: inherit;
                  display: inline-block;
                  width: 238px;
                  height: 126px;
                  z-index: 3;
                `}
              >
                Relax, Take it Easy
              </h1>
              <img
                className={css`
                  position: absolute;
                  top: 308px;
                  left: 327px;
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
                  top: 308px;
                  left: 247px;
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
                  top: 308px;
                  left: 207px;
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
                  top: 308px;
                  left: 287px;
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
                  top: 584px;
                  left: 110px;
                  width: 225px;
                  height: 240px;
                  font-size: var(--font-size-xs);
                  font-family: var(--font-abril-fatface);
                `}
              >
                <img
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 225px;
                    height: 240px;
                    object-fit: contain;
                    z-index: 4;
                  `}
                  alt=""
                  src="/polygon-shape.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: 126px;
                    left: 97px;
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
                      z-index: 5;
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
                      z-index: 6;
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
          right: -98.8px;
          bottom: -58.71px;
          font-size: inherit;
          letter-spacing: 0.05em;
          line-height: 50px;
          font-weight: 800;
          font-family: inherit;
          display: inline-block;
          width: 423.8px;
          height: 72.3px;
          flex-shrink: 0;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          -webkit-text-stroke: 339px #fffefe;
          transform: rotate(-40deg);
          transform-origin: 0 0;
          z-index: 5;
        `}
      >
        PUMA
      </h1>
    </div>
  );
};

export default Desktop;
