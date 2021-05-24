import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/result.css'
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
    }, [id, data.genre])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5">
                <h1>{data.title}</h1>
                <div className="d-flex flex-wrap w-100">
                    <div>
                        <img style={{ width: "350px", height: "350px", borderRadius: "20px", marginRight: "50px", marginLeft: "200px"}} src={data.urlFoto} alt="" />
                    </div>
                    <table style={{fontSize: "20px"}}>
                        <tr>
                            <td>
                                <strong>Nama Game</strong>
                            </td>
                            <td>
                                {data.title}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Platform</strong>
                            </td>
                            <td>
                                {data.platform}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Genre</strong>
                            </td>
                            <td>
                                {data.genre}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Publisher</strong>
                            </td>
                            <td>
                                {data.publisher}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Developer</strong>
                            </td>
                            <td>
                                {data.developer}
                            </td>
                        </tr>
                        {/* <strong>Nama Game</strong>            <span>{data.title}</span><br></br>
                        <strong>Platform</strong>             <span>{data.platform}</span><br></br>
                        <strong>Genre</strong>                <span>{data.genre}</span><br></br>
                        <strong>Publisher</strong>            <span>{data.publisher}</span><br></br>
                        <strong>Developer</strong>            <span>{data.developer}</span><br></br> */}
                    </table>
                    {/* <div style={{ fontSize: "18px" }}>
                        <div>{data.title}</div>
                        <div>{data.platform}</div>
                        <div>{data.genre}</div>
                        <div>{data.publisher}</div>
                        <div>{data.developer}</div>
                    </div> */}
                </div>
                <h5>Game dengan Genre Serupa</h5>
                <div className="row">
                    <div className="col-12">
                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                            {
                                genre.map(e => (
                                    e.id !== data.id ?
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
                                        : null
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

