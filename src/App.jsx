import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Lessons from "./Pages/Lessons"

function App() {
  const [page, setPage] = useState("home")

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page === "home" && <Hero setPage={setPage} />}
      {page === "lessons" && <Lessons />}
      <h1>Piano App</h1>
    </>
  )
}

export default App
