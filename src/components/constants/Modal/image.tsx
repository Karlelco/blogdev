import { Client, Storage } from "appwrite";
import { useState, useEffect } from 'react';

// Import the correct File type

function Image() {
    const [images, setImages] = useState<File[]>([]);

    const client = new Client();
    const storage = new Storage(client);

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('5df5acd0d48c2');

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await storage.listFiles('bucketId');
                setImages(response.files);
            } catch (error) {
                console.log(error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            {images.map((image) => (
                <div key={image.$id}>
                    <img src={image.$url} alt={image.name} />
                </div>
            ))}
        </div>
    );
}
export default Image;