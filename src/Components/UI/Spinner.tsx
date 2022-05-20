import React, {FC} from 'react';
interface SpinnerProp {
    className?: string
}


const Spinner:FC<SpinnerProp> = ({className}) => {
    return (
        <div className={`w-full h-full flex justify-center items-center ${className} `}>
            <div style={{borderTopColor: "transparent"}} className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"/>
        </div>
    );
};

export default Spinner;