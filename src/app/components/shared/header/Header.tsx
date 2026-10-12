import React, { Suspense } from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import Marqee from './Marqee';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Suspense fallback={"Loading..."}>
                <Categories></Categories>
            </Suspense>
            <Marqee></Marqee>
        </div>
    );
};

export default Header;