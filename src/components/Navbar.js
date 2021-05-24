import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import '../assets/css/searchpage.css'

function Navbar() {
    const [search, setSearch] = useState(null)
    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <nav
            className="navbar navbar-desktop navbar-expand"
            style={{ zIndex: "2" }}
        >
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                <ul className=" navbar-nav d-flex align-items-center">
                    <li className="nav-item mr-5">
                        <Link className="navbar-brand nav-link" to="/">
                            GGeming
                            </Link>
                    </li>
                    <li>
                        <form className="form-inline w-100 my-lg-0">
                            <div className="form-group w-100 input-group has-search">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cari Game"
                                    value={search}
                                    onChange={inputHandler}
                                    style={{ borderRadius: "40px", fontSize: "18px", padding: "20px"}}
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                                <Link to={`/result/${search}`}>
                                    <button type="submit" className="btn-search">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
