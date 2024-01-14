import { Client, ID, Storage } from "appwrite";
import { ChangeEvent, useState } from "react";


function upLoader() {
   
    const client = new Client();

    const storage = new Storage(client);

    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('5df5acd0d48c2') // Your project ID
        ;

        const [formData, setFormData] = useState({ image: '' });

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleFileUpload = () => {
            const uploader = document.getElementById('uploader') as HTMLInputElement;
            if (uploader && uploader.files && uploader.files.length > 0) {
                const photo = storage.createFile(
                    '65a2bb1c99d284a9445e',
                    ID.unique(),
                    uploader.files[0]
                );
                // Do something with the photo
            }
        };

        return (
            <div>
                <input
                    name='image'
                    type="file"
                    placeholder='Blog image'
                    id="uploader"
                    value={ formData.image }
                    onChange={ handleChange }
                />
                <button onClick={ handleFileUpload }>Upload</button>
            </div>
        );
    }
export default upLoader