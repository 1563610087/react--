import "./index.scss";
function Player() {
  return (
    <div className="player-wrapper ">
      <div className="w980 box">
        <span className="box-icon-play">
          <span className="sprite_player pre"></span>
          <span className="sprite_player play"></span>
          <span className="sprite_player next"></span>
        </span>
        <div className="box-middle">
          <div className="box-middle-img ">
            <img src="" alt="" />
          </div>
          <div className="box-middle-div">
            <div>
              <span className="sing-name">歌名</span>
              <span className="artist">歌词</span>
              <span className="sprite_player hyperlinks"></span>
            </div>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
