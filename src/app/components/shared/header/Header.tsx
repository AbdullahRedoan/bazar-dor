import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import Marqee from './Marqee';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Marqee></Marqee>
        </div>
    );
};

export default Header;