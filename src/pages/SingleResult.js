import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SingleResult(props) {
    const [data, setData] = useState(false)
    const [genre, setGenre] = useState([])
    const { id } = props.match.params

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/games/${id}`)
            .then(response => {
                setData(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error);
            })

        axios
            .get(`http://localhost:5000/api/games/?genre=${data.genre}`)
            .then((response) => {
                console.log(response)
                setGenre(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-4">
                        <img style={{ width: "350px", height: "350px", borderRadius: "20px", marginLeft: "220px" }} src={data.urlFoto} alt="" />
                    </div>
                    <div className="col-2 pt-5" style={{ fontSize: "18px" }}>
                        <strong>Nama Game</strong><br></br>
                        <strong>Platform</strong><br></br>
                        <strong>Genre</strong><br></br>
                        <strong>Publisher</strong><br></br>
                        <strong>Developer</strong><br></br>
                    </div>
                    <div className="col-6 pt-5" style={{ fontSize: "18px" }}>
                        <div>{data.title}</div>
                        <div>{data.platform}</div>
                        <div>{data.genre}</div>
                        <div>{data.publisher}</div>
                        <div>{data.developer}</div>
                    </div>
                </div>
                <p>Game dengan Genre Serupa</p>
                <div className="row">
                    <div className="col-12">
                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                            {
                                genre.map(e => (
                                    <div>
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
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleResult

