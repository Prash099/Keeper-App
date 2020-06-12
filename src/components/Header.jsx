import React, { useState } from 'react';

function Header(state) {
    const [color, setColor] = useState('white');

    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
            <a className="navbar-brand" href="#"><span className="material-icons">note_add</span><h2>Keeper</h2></a>
        </nav>
    )
};

export default Header;