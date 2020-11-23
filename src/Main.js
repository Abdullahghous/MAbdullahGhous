import React, { useState, useEffect } from 'react'
import './main.css';
import ModalImage from "react-modal-image";
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';


function Main() {

    const fetchURL = 'https://portfolio-bk.herokuapp.com/projects';
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setLoading(true);
            setProjects(request.data.data);
            return request;
        }
        fetchData();
    }, [fetchURL])

    console.log('>>>>>', projects);

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="mysvg" viewBox="1.225 255.147 1021.508 209.815" width="1021.508pt" height="209.815pt">
                <path d=" M 1.225 342.442 Q 169.69 397.576 315.182 403.702 C 460.674 409.828 508.15 304.155 705.713 336.316 Q 903.276 368.478 1022.733 255.147 L 1022.733 464.962 L 1.225 464.962 L 1.225 342.442 Z " fill="rgb(98,0,234)">
                </path>
            </svg>
        <div class="flex-container">
        {
            loading ?
            projects.map(function (project){
                return (
                    <div key={project._id}>
                    <ModalImage
                    small={`https://portfolio-bk.herokuapp.com/${project.img}`}
                    large={`https://portfolio-bk.herokuapp.com/${project.img}`}
                    className="img_card"
                    />
                <h3 className="title_card">{project.title}</h3>
                <p className="text_card"><strong>Hosted URL: </strong><a href={project.url}>{project.url}</a></p>
                <a href={project.githubLink}><button className="card_button">GitHub Link</button></a>
            </div>
                )
            })
            :
            <ReactBootStrap.Spinner animation='grow' style={{ width: '80px' }}/>
        }
      </div>
      </>
    )
}

export default Main
