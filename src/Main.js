import React, { useState, useEffect } from 'react'
import './main.css';
import ModalImage from "react-modal-image";
// import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
// import Banner from './Assets/Images/bannerImg.png'
import firebase from './Firebase';


function Main() {

    // const fetchURL = 'https://portfolio-bk.herokuapp.com/projects';
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);


    const abc = async () => {
        const db = firebase.firestore();
        const citiesRef = db.collection('projects');
        const snapshot = await citiesRef.get();
        const array = [];
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }
        snapshot.forEach(doc => {
            array.push(doc.data());
            setLoading(true);
        });
        setProjects(array);
    }

    useEffect(() => {
        abc();
    }, []);

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="mysvg" viewBox="1.225 255.147 1021.508 209.815" width="1021.508pt" height="209.815pt">
                <path d=" M 1.225 342.442 Q 169.69 397.576 315.182 403.702 C 460.674 409.828 508.15 304.155 705.713 336.316 Q 903.276 368.478 1022.733 255.147 L 1022.733 464.962 L 1.225 464.962 L 1.225 342.442 Z " fill="rgb(98,0,234)">
                </path>
            </svg>
            <div class="flex-container">
                {/* <div>
                    <ModalImage
                        small={Banner}
                        large={Banner}
                        className="img_card"
                    />
                    <h3 className="title_card">abc</h3>
                    <p className="text_card"><strong>Hosted URL: </strong><a href="#">abc</a></p>
                    <a href="#"><button className="card_button">GitHub Link</button></a>
                </div> */}
                {
                    loading ?
                        projects.map(function (project, index) {
                            return (
                                <div key={index}>
                                    <ModalImage
                                        small={project.url}
                                        large={project.url}
                                        className="img_card"
                                    />
                                    <h3 className="title_card">{project.proName}</h3>
                                    <p className="text_card"><strong>Hosted URL: </strong><a href={project.hostedURL}>{project.hostedURL}</a></p>
                                    <a href={project.gitHubLink}><button className="card_button">GitHub Link</button></a>
                                </div>
                            )
                        })
                        :
                        <ReactBootStrap.Spinner animation="grow" className="spinner" />
                }
            </div>
        </>
    )
}

export default Main
