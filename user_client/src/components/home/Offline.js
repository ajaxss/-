import React from 'react';
import './Offline.css';

class Offline extends React.Component {
  constructor() {
    super()
    this.state = {
      bookarr: [{
        img: "http://img60.ddimg.cn/digital/product/78/27/1901227827_ii_cover.jpg?version=c1d7775c-9209-4cd4-b40e-0048a2dd9cd7",
        title: "超简单：用Python让Excel飞起来", author: "王秀文,郭明鑫,王宇韬", price: "¥14.99"
      }, {
        img: "http://img62.ddimg.cn/digital/product/55/73/1901215573_ii_cover.jpg?version=68e0ec84-be6f-4dd4-87b4-585c3bae637f",
        title: "超级搜索术：帮你找到99%问题的答案", author: "朱丹", price: "¥34.65"
      }, {
        img: "http://img61.ddimg.cn/digital/product/20/70/1901232070_ii_cover.jpg?version=81a7b913-3549-4d0a-9a27-2146f90bd2f2",
        title: "Python编程：从入门到实践", author: "（美）埃里克·马瑟斯（Eric Matthes）", price: "¥44.50"
      }]
    }
  }


  render() {
    return (
      <div className="offline1">
        {this.state.bookarr.map((item, index) => {
          return (
            <div className="book" key={index}>
              <img src={item.img}></img>
              <div>
                <p className="offline-title">{item.title}</p>
                <p className="author">{item.author}</p>
                <p className="price">{item.price}</p>
                {/* <p className="detail">{item.num}</p> */}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Offline;