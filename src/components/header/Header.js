import React from 'react';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';
import Style from './Header.module.css';
import HeadrThem from './HeaderThem';

const header = () => {
    return (
        <div className={Style.header_flex}>
            <HeadrThem></HeadrThem>
            <HeaderSearch></HeaderSearch>
            <HeaderButton></HeaderButton>
        </div>
    );
};

export default header;