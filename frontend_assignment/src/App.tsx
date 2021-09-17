import { Switch, Route } from "react-router";

import View1 from "./Views/View1"
import View2 from "./Views/View2"
import View3 from "./Views/View3"

function App() {

    return (

        <main>
            <Switch>
                <Route path="/" component={View1} exact/>
                <Route path="/PersonalInfo" component={View2}/>
                <Route path="/Confimation" component={View3}/>
            </Switch>
        </main>
    )
}

export default App