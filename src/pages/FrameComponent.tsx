import { FunctionComponent } from "react";
import "./FrameComponent.css";
const FrameComponent: FunctionComponent = () => {
  return (
    <div className="frame-parent">
      <div className="frame">
        <div className="score-100">Score: 100</div>
        <img
          className="icons8-menu-100px-1"
          alt=""
          src="./public/icons8-menu-100px-1@2x.png"
        />

        <div className="frame-child"></div>
        <img
          className="icons8-user-48px-1"
          alt=""
          src="./public/icons8-user-48px-1@2x.png"
        />

        <div className="sol">10.5 SOL</div>
      </div>
      <div className="frame1">
        <b className="please-review-the">Please review the below dispute case</b>
        <div className="dispute-id">Dispute Id</div>
        <div className="merchant">Merchant</div>
        <div className="product-name">Product Name</div>
        <div className="buyer">Buyer</div>
        <div className="amount">Amount</div>
        <div className="dispute-at">Dispute At</div>
        <div className="purchased-at">Purchased At</div>
        <div className="delivery-at">Delivery At</div>
        <div className="div">7</div>
        <div className="huy">Huy</div>
        <div className="bicycle">Bicycle</div>
        <div className="phuong">Phuong</div>
        <div className="sol1">7 SOL</div>
        <div className="t142045">2023-05-25T14:20:45</div>
        <div className="t073045">2023-05-23T07:30:45</div>
        <div className="t0730451">2023-05-23T07:30:45</div>
        <div className="buyer-description">Buyer Description:</div>
        <button className="approve-wrapper">Approve</button>
        <button className="disapprove-wrapper">Disapprove</button>
        <div className="frame-item"></div>
      </div>
    </div>
  );
};

export default FrameComponent;
