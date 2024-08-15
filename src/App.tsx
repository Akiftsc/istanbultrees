import Map from "./components/Map"
import "./index.css"

function App() {
  return (
    <>
      <div className="container-xl px-4 py-6 flex flex-col gap-y-12">
        <h1 className='text-extra-dark text-5xl font-semibold text-center'>Istanbul Trees</h1>
        <Map />
        <small className="text-gray-500">Veri kaynağı: <a href="https://anitagac.istanbul" className="underline">https://anitagac.istanbul</a></small>
      </div>
    </>
  )
}

export default App
