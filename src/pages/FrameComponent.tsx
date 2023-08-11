import { FunctionComponent } from "react";
import "./FrameComponent.css";
const FrameComponent: FunctionComponent = () => {
  return (
    <div className="frame-parent">
      <div className="frame">
        <div className="icons8-menu-100px-1-parent">
          <img
            className="icons8-menu-100px-1"
            alt=""
            src="/icons8-menu-100px-1@2x.png"
          />
          <div className="score-100">Score: 100</div>
        </div>
        <div className="sol-parent">
          <div className="sol">10.5 SOL</div>
          <div className="frame1">
            <img
              className="icons8-user-48px-1"
              alt=""
              src="/icons8-user-48px-1@2x.png"
            />
            <div className="frame-child" />
          </div>
        </div>
      </div>
      <div className="frame2">
        <b className="please-review-the">
          Please review the below dispute case
        </b>
        <div className="frame3">
          <div className="dispute-id-parent">
            <div className="dispute-id">Dispute Id</div>
            <div className="div">7</div>
          </div>
          <div className="huy-parent">
            <div className="huy">Huy</div>
            <div className="merchant">Merchant</div>
          </div>
        </div>
        <div className="frame4">
          <div className="dispute-id-parent">
            <div className="dispute-id">Product Name</div>
            <div className="div">Bicycle</div>
          </div>
          <div className="buyer-parent">
            <div className="dispute-id">Buyer</div>
            <div className="div">Phuong</div>
          </div>
        </div>
        <div className="frame5">
          <div className="dispute-id-parent">
            <div className="dispute-id">Amount</div>
            <div className="div">7 SOL</div>
          </div>
          <div className="dispute-at-parent">
            <div className="dispute-id">Dispute At</div>
            <div className="t142045">2023-05-25T14:20:45</div>
          </div>
        </div>
        <div className="frame6">
          <div className="purchased-at-parent">
            <div className="dispute-id">Purchased At</div>
            <div className="t073045">2023-05-23T07:30:45</div>
          </div>
          <div className="delivery-at-parent">
            <div className="dispute-id">Delivery At</div>
            <div className="t073045">2023-05-23T07:30:45</div>
          </div>
        </div>
        <div className="frame7">
          <div className="frame8">
            <div className="buyer-description">{`Buyer Description: `}</div>
          </div>
          <div className="frame-item" />
        </div>
        <div className="frame9">
          <div className="approve-wrapper">
            <div className="approve">Approve</div>
          </div>
          <div className="disapprove-wrapper">
            <div className="disapprove">Disapprove</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
