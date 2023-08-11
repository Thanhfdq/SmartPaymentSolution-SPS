import { FunctionComponent } from "react";
import "./FrameComponent1.css";
const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="frame-root">
      <div className="frame10">
        <img className="frame-icon" alt="" src="/icons8-menu-100px-1@2x.png" />
        <div className="frame11">
          <div className="connect-wallet-wrapper">
            <div className="connect-wallet">Connect wallet</div>
          </div>
          <div className="frame12">
            <div className="score">Score:</div>
            <div className="score">Score:</div>
            <div className="connect-wallet-container">
              <div className="connect-wallet">Connect wallet</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame13">
        <div className="frame14">
          <div className="you-should-pay-container">
            <p className="you-should-pay">
              You should pay 2 SOL to get the list dispute from the system
            </p>
            <p className="you-should-pay">
              Once you win, you will get 4 SOL from the system
            </p>
          </div>
          <div className="you-should-pay-container1">
            <p className="you-should-pay">
              You should pay 2 SOL to get the list dispute from the system
            </p>
            <p className="you-should-pay">
              Once you win, you will get 4 SOL from the system
            </p>
          </div>
        </div>
        <div className="frame15">
          <div className="participate-wrapper">
            <div className="participate">Participate</div>
          </div>
          <div className="participate-container">
            <div className="participate">Participate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
