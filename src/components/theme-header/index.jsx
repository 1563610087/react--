import "./index.scss";
import { withRouter } from "react-router-dom";
function ThemeHeader(props) {
  const { tabs, title } = props;
  const history = props.history;
  const handleClick = (data) => {
    history.push({
      pathname: "/discover/playlist",
      query: { cate: data },
    });
  };
  return (
    <div className="hot-title">
      <div>
        <a href="/discover/playlist">{title}</a>
        <span>
          {tabs &&
            tabs.map((item, index) => (
              <span key={item}>
                <span className="category" onClick={() => handleClick(item)}>
                  {item}
                </span>
                {index !== 4 ? <span>|</span> : ""}
              </span>
            ))}
        </span>
      </div>
      <div>
        更多<i></i>
      </div>
    </div>
  );
}

export default withRouter(ThemeHeader);
