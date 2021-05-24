import React, { useState } from 'react'
import '../assets/css/searchpage.css'
import { Link } from 'react-router-dom'

function SearchPage() {
    const [search, setSearch] = useState(null)

    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div id="search-page">
            <div className="main-container">
                <h1>GGeming</h1>
                <h6>Mesin Game Pencarian Game Masa Kini</h6>
                <form className="form-inline w-100 my-lg-0">
                    <div className="form-group w-100 input-group has-search">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cari Game"
                            value={search}
                            onChange={inputHandler}
                            style={{ borderRadius: "40px", fontSize: "22px", padding: "20px", width: "800px" }}
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
            </div>
        </div>
    )
}

export default SearchPage