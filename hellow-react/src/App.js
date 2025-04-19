// import Libraries
import React from "react";
import Header from "./Header.jsx";
import "./App.css";
import Footer from "./footer.jsx"
import List from "./list.jsx";
import Top from "./Top.js";

const App = () => {
  return (
    <div className="App">
      <h1>Hello Person</h1>
      <p>Muhamad Rifaldi</p>
      <Header list='10 Daftar Makanan'/>
      <Top />
      <List />
      <Footer judul='Halaman footer' namaMhs='Rifaldi'/>
    </div>
  );
};

export default App;
