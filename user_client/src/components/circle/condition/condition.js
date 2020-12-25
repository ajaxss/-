import React from 'react';
import Rcontent from './rcontent'
import Topmenu from '../../topmenu'

import './condition.css';

class SearchBarExample extends React.Component {
  
  render() {
    return (
    <div>
      <Topmenu></Topmenu> 
      
     
      <Rcontent></Rcontent>
    </div>);
  }
}

export default SearchBarExample;