import React from "react"
import StyleGlobal from "./StyleGlobal"
import { Route } from "react-router-dom"

//Components and Pages
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <StyleGlobal />
      <Route path={["/game/:id,", "/"]}>
        <Home />
      </Route>
    </div>
  )
}

export default App
