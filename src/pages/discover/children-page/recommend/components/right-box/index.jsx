import { Button } from "antd";
import "./index.scss";
import Singer from "../singer";
import HotHost from "./hot-host";
function RightBox() {
  return (
    <>
      <div className="user-login-box">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <Button className="user-login" type="text">
          用户登录
        </Button>
      </div>
      <Singer />
      <HotHost />
    </>
  );
}

export default RightBox;
