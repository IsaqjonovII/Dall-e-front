import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { CreatePost, Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
          <Link to="/">
            <img className="w-28 object-contain" src={logo} alt="logo" />
          </Link>
          <Link
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
            to="/create-post"
          >
            Create
          </Link>
        </header>

        <main className="sm:p-8 px-4  py-8 w-full bg-[#f9fafe] min-h-[calc(100vh - 73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
