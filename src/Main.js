import React, { useState, useEffect } from 'react'
import './main.css';
import ModalImage from "react-modal-image";
import axios from 'axios';
import { Windmill } from 'react-activity';
import 'react-activity/dist/react-activity.css';

function Main() {

    const fetchURL = 'https://portfolio12-be.herokuapp.com/v1/show-project';
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setProjects(request.data.data)
            return request;
        }
        fetchData();
    }, [fetchURL])

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="mysvg" viewBox="1.225 255.147 1021.508 209.815" width="1021.508pt" height="209.815pt">
                <path d=" M 1.225 342.442 Q 169.69 397.576 315.182 403.702 C 460.674 409.828 508.15 304.155 705.713 336.316 Q 903.276 368.478 1022.733 255.147 L 1022.733 464.962 L 1.225 464.962 L 1.225 342.442 Z " fill="rgb(98,0,234)">
                </path>
            </svg>
        <div class="flex-container">
            {projects ?
                projects.map(function (project){
                    return (
                        <div key={project._id}>
                        <ModalImage
              small={`https://portfolio12-be.herokuapp.com/${project.img}`}
              large={`https://portfolio12-be.herokuapp.com/${project.img}`}
              className="img_card"
              />
          <h3 className="title_card">{project.title}</h3>
                    <p className="text_card"><strong>Hosted URL: </strong><a href={project.url}>{project.url}</a></p>
           <a href={project.githubLink}><button className="card_button">GitHub Link</button></a>
                  </div>
                    )
                })
            :
            <Windmill color="#ebebeb" size={42} speed={1} animating={true} />
            }
      </div>
      </>
    )
}

export default Main
