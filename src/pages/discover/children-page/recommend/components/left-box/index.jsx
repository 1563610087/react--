import HotRecommend from "./hotRecommend";
import NewDisc from "./new-disc";
import Rank from "./rank";
import "./index.scss";
function LeftBox() {
  return (
    <div className="left-box">
      <HotRecommend />
      <NewDisc />
      <Rank />
    </div>
  );
}

export default LeftBox;
