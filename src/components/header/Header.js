import React from 'react';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';
import Style from './Header.module.css'

const header = () => {
    return (
        <div className={Style.header_flex}>
            <HeaderButton></HeaderButton>
            <HeaderSearch></HeaderSearch>
        </div>
    );
};

export default header;