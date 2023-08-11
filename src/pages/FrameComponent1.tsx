import { FunctionComponent } from "react";
import "./FrameComponent1.css";
const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="frame-parent">
      <div className="frame">
        <img className="frame-icon" alt="" src="./public/frame@2x.png" />

        <div className="frame2">
          <div className="score">Score:</div>
          <button className="connect-wallet-container">Connect wallet</button>
        </div>
      </div>
      <div className="frame3">
        <div className="frame4">
          <div className="you-should-pay-container">
            <p className="you-should-pay">
              You should pay 2 SOL to get the list dispute from the system
            </p>
            <p className="you-should-pay">
              Once you win, you will get 4 SOL from the system
            </p>
          </div>
        </div>
        <div className="frame5">
          <button className="participate-wrapper">Participate</button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
