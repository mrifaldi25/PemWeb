// import Libraries
import React from "react";
import Header from "./Header.jsx";
import "./App.css";
import Footer from "./footer.jsx"
import List from "./list.jsx";

const App = () => {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>Nama Saya Achmad Dhavi</p>
      <Header />
      <List />
      <Footer />
    </div>
  );
};

export default App;
