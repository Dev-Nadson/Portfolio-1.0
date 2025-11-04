import { AboutMe } from "./components/About/AboutMe"
import { Header } from "./components/Header/Header"
import { Projects } from "./components/Projects/Projects"

function App() {
  return (
    <html className="scroll-smooth">
      <body className="bg-linear-65 from-purple-50 to-purple-100 text-gray-900">
        <Header />
        <AboutMe />
        <Projects />
      </body>
    </html>
  )
}

export default App
