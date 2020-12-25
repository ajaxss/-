import React from 'react'
import { SearchBar,  WhiteSpace, } from 'antd-mobile';
import axios from 'axios'

class SearchBarExample extends React.Component {
    
  state = {
    value: '',
  };
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (
    <div style={{height:"10%"}}>
      <SearchBar
        value={this.state.value}
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        showCancelButton={false}
        onChange={this.onChange}
      />
      <WhiteSpace />
      
    
    </div>);
  }
}

export default SearchBarExample;