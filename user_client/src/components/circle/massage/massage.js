import React from 'react';
import { HashRouter as Router, Link ,Route,Switch} from 'react-router-dom'
import Mail from './mail'
import Review from './review'
import Like from './like'
import Likey from './likey'
import './massage.css';

const data = [
  {
    adress: "/massage",
    img: "http://localhost:8000/public/bottom/mail.png",
    des: "私信"
  },
  {
    adress: "/massage/review",
    img: "http://localhost:8000/public/bottom/review.png",
    des: "评论"
  },
  {
    adress: "/massage/like",
    img: "http://localhost:8000/public/bottom/like.png",
    des: "点赞"
  },
]



class SearchBarExample extends React.Component {
  mass() {
    this.props.history.push('/condition')
  }

  render() {
    return (
      <div>
        <div className="ma-head"><img src="http://localhost:8000/public/bottom/left.png"
          style={{ width: "12px", height: "14px", marginRight: "140px" }} onClick={this.mass.bind(this)}>
        </img>
          <span>消息</span>
        </div>
        <div className="ma-daohan">
          <Router>
            {
              data.map((item, index) => {
                let pathn = this.props.history.location.pathname
                let path = pathn.substr(0,13)
                if (path == item.adress.substr(0,13)) {
                  return <Link to={item.adress} key={index}>
                    <div style={{ borderBottom: "3px solid orange" }}>
                      <img src={item.img}></img>
                      <span style={{ color: "black" }}>{item.des}</span>
                    </div>
                  </Link>
                }else {
                  return <Link to={item.adress} key={index}>
                    <div><img
                      src={item.img}></img>
                      <span>{item.des}</span>
                    </div></Link>
                }
              })
            }
          </Router>
        </div>
        <div className="ma-content">
        <Switch>
          <Route path="/massage" exact component={Mail}></Route>
          <Route path="/massage/review" component={Review}></Route>
          <Route path="/massage/like" component={Like}></Route>
          <Route path="/massage/like1" component={Likey}></Route>
        </Switch>
        </div>

      </div>);
  }
}

export default SearchBarExample;