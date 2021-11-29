import React from "react";
import { BsBorderWidth } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./Table";
import Landing from "./Landing";

const Navbar = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
            </>
          }
        />
        <Route path="/users" element={<Table dataToLoad="users" />} />
        <Route path="/pets" element={<Table dataToLoad="pets" />} />
      </Routes>
      <nav className="navbar navbar-expand-lg navbar-light bg-success bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-title" to="/">
            HappyPaws
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BsBorderWidth />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/users"
                >
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pets">
                  Pets
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
