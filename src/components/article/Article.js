import React from 'react';
import './Article.css';

function Article({fieldclass,description, image, title, valuta, price,tag}) {
    return (
        <article className={fieldclass}>
            <span className="tag">{tag}</span>
            <span className="max"><img className="moved" src={image} alt={title} /></span>
            <p><span>{title}</span><span>{valuta}{price}</span></p>
        <p>{description}</p>
        </article>
    );
}

export default Article;