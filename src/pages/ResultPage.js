import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/result.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import queryString from 'query-string'

function ResultPage(props) {
    const { search } = props.match.params
    const [title, setTitle] = useState([])
    const [genre, setGenre] = useState([])
    const [platform, setPlatform] = useState([])
    const [data, setData] = useState([])
    let path = props.location.search;
    let params = queryString.parse(path);

    useEffect(() => {
        if (params.query != null) {
            axios
                .get(`http://localhost:5000/api/games/?title=${params.query}`)
                .then((response) => {
                    console.log(response)
                    setTitle(response.data.data)

                })
                .catch((err) => {
                    console.log(err)
                })

            axios
                .get(`http://localhost:5000/api/games/?genre=${params.query}`)
                .then((response) => {
                    console.log(response)
                    setGenre(response.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })

            axios
                .get(`http://localhost:5000/api/games/?platform=${params.query}`)
                .then((response) => {
                    console.log(response)
                    setPlatform(response.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            axios
                .get(`http://localhost:5000/api/games/?title=${params.title}&genre=${params.genre}&platform=${params.platform}&developer=${params.developer}&publisher=${params.publisher}`)
                .then((response) => {
                    console.log(response)
                    setData(response.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        // axios.get(`http://localhost:5000/api/games`)
        //     .then(response => {
        //         setData(response.data.data)
        //         console.log(response.data.data)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
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
                                {title.length || genre.length || platform.length !== 0 ? (
                                    <div>
                                        <div>
                                            <p>Menampilkan "{params.query}" dalam nama game</p>
                                            {title.length !== 0 ? (
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                                            {
                                                                title.map(e => (
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
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <p>Menampilkan "{params.query}" dalam genre</p>
                                            {genre.length !== 0 ? (
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                                            {
                                                                genre.map(e => (
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
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <p>Menampilkan "{params.query}" dalam platform</p>
                                            {platform.length !== 0 ? (
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                                            {
                                                                platform.map(e => (
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
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}
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
                                        data.map(e => (
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
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

export default ResultPage

