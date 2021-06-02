import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/result.css'
import '../assets/css/paginate.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import queryString from 'query-string'
import ReactPaginate from "react-paginate";

function ResultPage(props) {
    const { search } = props.match.params
    const [find, setFind] = useState([])
    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    let path = props.location.search;
    let params = queryString.parse(path);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const pageCount = Math.ceil(data.length / usersPerPage);
    const pageCount2 = Math.ceil(find.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        if (params.query != null) {
            axios
                .get(`https://ggeming-backend.herokuapp.com/api/search?search=${params.query}`)
                .then((response) => {
                    console.log(response)
                    setFind(response.data.data)

                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            axios
                .get(`https://ggeming-backend.herokuapp.com/api/games/?title=${params.title}&genre=${params.genre}&platform=${params.platform}&publisher=${params.publisher}&developer=${params.developer}`)
                .then((response) => {
                    console.log(response)
                    setData(response.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [search])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5">
                {
                    params.query ?
                        <div>
                            <h2>Menampilkan Pencarian "{params.query}"</h2>
                            <div>
                                {find.length !== 0 ? (
                                    <div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                                    {
                                                        find
                                                            .slice(pagesVisited, pagesVisited + usersPerPage)
                                                            .map(e => (
                                                                <div class="grid mx-2 mt-5">
                                                                    <div class="grid-item">
                                                                        <Link to={`/singleresult/${e.id}`}>
                                                                            <div class="card">
                                                                                <img class="card-img" src={e.urlFoto} alt="" />
                                                                                <div class="card-content">
                                                                                    <h1 class="card-header pb-4">{e.title}</h1>
                                                                                    <p class="card-text">{e.genre}</p>
                                                                                    <p class="card-text">{e.platform}</p>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            ))
                                                    }
                                                    <ReactPaginate
                                                        previousLabel={"Previous"}
                                                        nextLabel={"Next"}
                                                        pageCount={pageCount2}
                                                        onPageChange={changePage}
                                                        containerClassName={"paginationBttns"}
                                                        previousLinkClassName={"previousBttn"}
                                                        nextLinkClassName={"nextBttn"}
                                                        disabledClassName={"paginationDisabled"}
                                                        activeClassName={"paginationActive"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <p>Data tidak ditemukan</p>
                                    </div>
                                )}

                            </div>
                        </div>
                        :
                        <div className="row">
                            <div className="col-12">
                                <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    {
                                        data
                                            .slice(pagesVisited, pagesVisited + usersPerPage)
                                            .map(e => (
                                                <div class="grid mx-2 mt-5">
                                                    <div class="grid-item">
                                                        <Link to={`/singleresult/${e.id}`}>
                                                            <div class="card">
                                                                <img class="card-img" src={e.urlFoto} alt="" />
                                                                <div class="card-content">
                                                                    <h1 class="card-header pb-4">{e.title}</h1>
                                                                    <p class="card-text">{e.genre}</p>
                                                                    <p class="card-text">{e.platform}</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                    <ReactPaginate
                                        previousLabel={"Previous"}
                                        nextLabel={"Next"}
                                        pageCount={pageCount}
                                        onPageChange={changePage}
                                        containerClassName={"paginationBttns"}
                                        previousLinkClassName={"previousBttn"}
                                        nextLinkClassName={"nextBttn"}
                                        disabledClassName={"paginationDisabled"}
                                        activeClassName={"paginationActive"}
                                    />
                                </div>
                            </div>
                        </div>
                }
            </div>

        </div>
    )
}

export default ResultPage

