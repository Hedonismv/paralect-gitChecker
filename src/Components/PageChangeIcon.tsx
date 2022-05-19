import React, {FC} from 'react';
import NextI from '../assets/i.svg';

interface IconProps {
    className?: string
}

const PageChangeIcon:FC<IconProps> = ({className}) => {
    return (
        <img className={className} src={NextI} alt={'next-ico'}/>
    );
};

export default PageChangeIcon;