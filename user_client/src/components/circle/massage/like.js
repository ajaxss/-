import React from 'react';
import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Likei from './likei'
import Likey from './likey'
import './like.css'

const likearr = [
  {
    url:"/massage/like",
    title:"我赞了谁"
  },
  {
    url:"/massage/like1",
    title:"谁赞了我"
  },
]

class Like extends React.Component {
  
  render() {
    return (
    <div style={{margin:"0 auto"}}>
      <div className="like-hed">
      <Router>
      {
        likearr.map((item,index)=>{
          if(this.props.history.location.pathname == item.url){
            return <div key={index} style={{width:"100px",height:"100%",borderBottom:"2px solid orange",textAlign:"center"}}>
              <Link to={item.url} style={{color:"orange"}}>{item.title}</Link>
            </div>
          }else{
            return <div key={index} style={{width:"100px",height:"100%",textAlign:"center"}}>
              <Link to={item.url} style={{color:"grey"}}>{item.title}</Link>
            </div>
          }
        })
      }
      </Router>
      </div>
      <Router>
      <Switch>
        <Route path="/massage/like" component={Likei}></Route>
        <Route path="/massage/like1" component={Likey}></Route>
      </Switch>
      </Router>
    </div>);
  }
}

export default Like;