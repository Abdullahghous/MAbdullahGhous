import React, { useState } from 'react';
import './login.css';
import firebase from './Firebase';
import "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

function UploadProject() {
    // const history = useHistory();
    const [proName, setproName] = useState('');
    const [hostedURL, sethostedURL] = useState('');
    const [gitHubLink, setgithubLink] = useState('');
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const storage = firebase.storage();
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
            }
        );
    };

    console.log("image: ", image);


    const upload = async (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        const project = {
            proName,
            hostedURL,
            gitHubLink,
            url
        }
        // Add a new document in collection "cities" with ID 'LA'
        await db.collection('projects').doc(uuidv4()).set(project);
        // var ref = db.ref("projects");
        // // var proRef = ref.child("project");
        // const pro = {
        //     proName,
        //     hostedURL,
        //     gitHubLink,
        //     url
        // }
        // ref.push(pro);
    }

    return (
        <div className="login">
            <div className="login_container">
                <h5>Project Image</h5>
                <progress value={progress} max="100" />
                <input type="file" onChange={handleChange} />
                <button className="login_signin_button" onClick={handleUpload}>Upload Image</button>
            </div>
            <div className="login_container">
                <h1>Upload Project</h1>
                <form>
                    <h5>Project Name</h5>
                    <input
                        type="text"
                        onChange={(e) => setproName(e.target.value)}
                    />
                    <h5>Hosted URL</h5>
                    <input
                        type="text"
                        onChange={(e) => sethostedURL(e.target.value)}
                    />
                    <h5>GitHub Link</h5>
                    <input
                        type="text"
                        onChange={(e) => setgithubLink(e.target.value)}
                    />
                    <button className="login_signin_button" type="submit" onClick={upload}>Upload Project</button>
                </form>
            </div>
        </div>
    )
}

export default UploadProject
