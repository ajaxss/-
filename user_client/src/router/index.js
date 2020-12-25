import React from "react";
import { HashRouter as Router, Route } from "react-router-dom"
import routes from "./routes";



class MyRouter extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    {routes.map((item, index) => {
                        // console.log(item.path.substr(0,10))
                        // if (item.path.substr(0,10) == '/Shop_desc') {
                        //     return (
                        //         <Route exact {...item} key={index}></Route>
                        //     )
                        // } else {
                            return (
                                <Route {...item} key={index}></Route>
                            )
                        // }

                    })}

                </Router>
            </div>
        )
    }
}


export default MyRouter;