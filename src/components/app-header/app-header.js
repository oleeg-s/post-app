import React from 'react';

import './app-header.css'

const AppHeader = ({postsAmount, liked}) => {
    return (
        <div className='app-header d-flex'>
            <h1>Syhyda Oleh</h1>
            <h2>{postsAmount} записи, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader