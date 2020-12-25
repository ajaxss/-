// FormElememt
import React from "react";
import './CirclePage.css'
import { withRouter } from 'react-router-dom'
import Condition from '../components/circle/condition/condition'


class TabExample extends React.Component {
    render() {
        return (
            <div>
                <Condition></Condition> 
            </div>
        )
    }

}

export default withRouter(TabExample);