import React, { useState } from 'react'
import { CustomInput, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import '../assets/css/searchpage.css'
import more from '../assets/logo/more.png'

function Navbar(props) {
    const [search, setSearch] = useState(null)
    const [stitle, setStitle] = useState("");
    const [sgenre, setSgenre] = useState("");
    const [splatform, setSplatform] = useState("");
    const [sdeveloper, setSdeveloper] = useState("");
    const [spublisher, setSpublisher] = useState("");
    const {
        buttonLabel,
        className
      } = props;

    const inputHandler = (e) => {
        setSearch(e.target.value)
    }
    const searchHandler = (e) => {
        e.preventDefault()
        window.location.href = "/result?query=" + search
    }

    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) };

    const [title, setTitle] = useState(true);
    const checkboxTitle = () => { setTitle(!title) };

    const [genre, setGenre] = useState(true);
    const checkboxGenre = () => { setGenre(!genre) };

    const [platform, setPlatform] = useState(true);
    const checkboxPlatform = () => { setPlatform(!platform) };

    const [developer, setDeveloper] = useState(true);
    const checkboxDeveloper = () => { setDeveloper(!developer) };

    const [publisher, setPublisher] = useState(true);
    const checkboxPublisher = () => { setPublisher(!publisher) };

    const onSubmitHandler = () => {
        window.location.href = "/result?title=" + stitle + "&genre=" + sgenre + "&platform=" + splatform + "&publisher=" + spublisher + "&developer=" + sdeveloper
    }

    return (
        <div>
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
                                        style={{ borderRadius: "40px", fontSize: "18px", padding: "20px", paddingLeft: "50px" }}
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                        <button type="submit" className="btn-search" onClick={searchHandler}>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    <Button className="btn-more" onClick={toggle} color="">
                                        <img src={more} alt="more" width="20px" height="20px" />
                                    </Button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Pencarian Detail Game</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxTitle} id="exampleCustomCheckbox1" label="Title">
                                <Input type="text" name="Title" id="searchtitle" onChange={(e) => setStitle(e.target.value)} value={stitle} placeholder="Title Game" disabled={title} />
                            </CustomInput>
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxGenre} id="exampleCustomCheckbox2" label="Genre">
                                <Input type="text" name="Genre" id="searchgenre" onChange={(e) => setSgenre(e.target.value)} value={sgenre} placeholder="Genre Game" disabled={genre} />
                            </CustomInput>
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxPlatform} id="exampleCustomCheckbox3" label="Platform">
                                <Input type="text" name="Platform" id="searchplatform" onChange={(e) => setSplatform(e.target.value)} value={splatform} placeholder="Platform" disabled={platform} />
                            </CustomInput>
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxPublisher} id="exampleCustomCheckbox5" label="Publisher">
                                <Input type="text" name="Publisher" id="searchpublisher" onChange={(e) => setSpublisher(e.target.value)} value={spublisher} placeholder="Publisher" disabled={publisher} />
                            </CustomInput>
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxDeveloper} id="exampleCustomCheckbox4" label="Developer">
                                <Input type="text" name="Developer" id="searchdeveloper" onChange={(e) => setSdeveloper(e.target.value)} value={sdeveloper} placeholder="Developer" disabled={developer} />
                            </CustomInput>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={onSubmitHandler}>SEARCH</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default Navbar
