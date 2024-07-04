import Header from "./components/Header";
import './App.css'
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";
import { useState } from "react";


function App() {
  const [query, setQuery] = useState("")
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList setQuery={setQuery} query={query} />
      </main>
    </>
  )
}

export default App;