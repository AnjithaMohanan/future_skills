
import Header from "./components/Header";
import './App.css';
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Header/>
      <SearchBar setSearch={setSearch} />
      <Card search={search} />
      <Footer/>
    </div>
  );
}

export default App;
