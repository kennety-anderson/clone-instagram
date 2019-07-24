import React, { useState } from 'react';

import api from '../../services/api';

import './New.css';

function New(props) {

    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [hashtags, setHashtags] = useState('');

    async function handleSubmit(e) {

        e.preventDefault();

        const data = new FormData();

        data.append('image', image);
        data.append('author', author);
        data.append('place', place);
        data.append('description', description);
        data.append('hashtags', hashtags);

        await api.post('posts', data);

        props.history.push('/');

    };

    function handleImageChange(e) {
        setImage(e.target.files[0]);
    };


    return (
        <form id="new-post" onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={handleImageChange}
            />
            <input
                type="text"
                name="author"
                placeholder="Autor da postagem"
                onChange={e => setAuthor(e.target.value)}
                value={author}
            />
            <input
                type="text"
                name="place"
                placeholder="Local da postagem"
                onChange={e => setPlace(e.target.value)}
                value={place}
            />
            <input
                type="text"
                name="description"
                placeholder="Descrição da postagem"
                onChange={e => setDescription(e.target.value)}
                value={description}
            />
            <input
                type="text"
                name="hashtags"
                placeholder="Hashtags da postagem"
                onChange={e => setHashtags(e.target.value)}
                value={hashtags}
            />
            <button type="submit">Enviar</button>
        </form>
    );

};


export default New;
