import React from 'react';
import { Add } from './components/Add';
import { Search } from './components/Search';
import Style from './Header.module.css';
import { Theme } from './components/Theme';

export const Header = () => {
    return (
        <div className={Style.header_flex}>
            <Theme />
            <Search />
            <Add />
        </div>
    );
};
