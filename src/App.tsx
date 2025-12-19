import { Header } from "./components/Header/Header"
import { AboutMe } from "./components/About/AboutMe"
import { Projects } from "./components/Projects/Projects"

function App() {
  return (
    <html className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-purple-50 text-gray-900 py-4 px-5 md:py-8 md:px-10">
        <Header />
        <AboutMe />
        <Projects />
        {/*
        
        */}

      </body>
    </html>
  )
}

export default App
