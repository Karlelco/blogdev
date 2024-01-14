import React, { useState } from 'react';
import { Client, Databases, ID, Storage } from 'appwrite';
import { FaHome } from 'react-icons/fa';

interface FormData {
    title: string;
    content: string;
    author: string;
   
    
}

export const Modal = () => {

    const [formData, setFormData] = useState<FormData>({
        title: '',
        content: '',
        author: '',
      
      
    });

    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('65a25981e31e3582edd7');

    const databases = new Databases(client);

    const storage = new Storage(client);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const document = await databases.createDocument(
                '65a2686f7ecaa9ecdd9f',
                '65a2687da5691bd47df6',
                ID.unique(),
                formData
            );
            console.log(document , 'document was created');
           
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleFileUpload = () => {
        const uploader = document.getElementById('uploader') as HTMLInputElement;
        if (uploader && uploader.files && uploader.files.length > 0) {
            const photo = storage.createFile(
                '65a2bb1c99d284a9445e',
                ID.unique(),
                uploader.files[0]
                
            );
            console.log(photo, 'file was created')
            // Do something with the photo
        }
        else{
            console.log('no file was created')
        }
    };


    return (
        <div className='w-full'>
            <div className='w-full items-center justify-center my-1'>
                <button
                    className="btn bg-slate-500"
                    onClick={ () => (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal() }
                >
                    New Blog
                </button>
            </div>
            <dialog id="my_modal_1" className="modal ">
                <div className="modal-box items-center">
                    <button
                        className="btn btn-clear float-right"
                        onClick={ () => (document.getElementById('my_modal_1') as HTMLDialogElement)?.close() }
                    >
                        <FaHome />
                    </button>
                    <h3 className="font-bold text-lg">Create Blog</h3>
                    <div className="modal-action justify-center">
                        <form className="space-y-4" onSubmit={ handleSubmit }>
                            <input
                                className="input border w-full"
                                type="text"
                                name="title"
                                placeholder="Enter blog title"
                                value={ formData.title }
                                onChange={ handleChange }
                            />
                            <input
                                name='image'
                                type="file"
                                placeholder='Blog image'
                                id="uploader"
                                
                                onChange={ handleChange }
                            />
                            <button onClick={ handleFileUpload }>Upload</button>
                            <textarea
                                className="textarea w-full"
                                name="content"
                                placeholder="Blog detail"
                                value={ formData.content }
                                onChange={ handleChange }
                            ></textarea>
                            <input
                                className="input w-full"
                                type="text"
                                name="author"
                                placeholder="Enter author name"
                                value={ formData.author }
                                onChange={ handleChange }
                            />
                            <button className="btn" type="submit" onClick={
                                () => (document.getElementById('my_modal_1') as HTMLDialogElement)?.close()  
                            }>
                                Submit
                            </button>
                            
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
