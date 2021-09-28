import "./index.scss";
import { getCount } from "@/utils/utils";
function PlayList(props) {
  const { recommendPlaylist } = props;

  const handleCount = (data) => getCount(data);

  const imgItem = (item) => {
    return (
      <div className="img-box" key={item.id}>
        <div className="img-div">
          <img src={item.picUrl} alt={item.name} />
          <div className="cover-mask"></div>
          <div className="sprite_cover bottom">
            <span>
              <i className="sprite_icon headset"></i>
              <span>{handleCount(item.playCount)}</span>
            </span>
            <i className="sprite_icon play-icon"></i>
          </div>
        </div>
        <div className="text-name">{item.name}</div>
      </div>
    );
  };

  return (
    <div className="cover-wrapper">
      {recommendPlaylist &&
        recommendPlaylist.map((item, index) => imgItem(item))}
    </div>
  );
}

export default PlayList;
