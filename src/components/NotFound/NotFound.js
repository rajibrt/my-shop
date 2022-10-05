import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animationData from '../lotties/spider.json';

const NotFound = () => {
    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            render: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        })

    }, [])
    return (
        <div>
            <div className='container' ref={container}></div>
        </div>
    );


};

export default NotFound;