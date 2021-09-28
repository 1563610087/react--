import HotRecommend from "./hotRecommend";
import NewDisc from "./new-disc";
import "./index.scss";
function LeftBox() {
  return (
    <div className="left-box">
      <HotRecommend />
      <NewDisc />
    </div>
  );
}

export default LeftBox;
