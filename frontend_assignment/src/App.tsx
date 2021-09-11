import {Switch, Route} from "react-router-dom"

import TheNavigation from "./components/TheNavigation/TheNavigation"

//views
import Form from "./views/Form"
import About from "./views/About"
import Home from "./views/Home"

import styles from "./App.module.scss"

function App() {
    return (
        <div className={styles.App}>
            <header>
                <nav>
                    <TheNavigation/>
                </nav>
            </header>
            <main className={styles.content}>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/form" component={Form}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </main>
        </div>
    )
}

export default App