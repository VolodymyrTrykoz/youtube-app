import React from 'react';

const VideoDetail = ({currentVideo}) => {
    return (
        <>
            <p>The title is: {currentVideo.title}</p>
            <iframe src={`https://www.youtube.com/embed/${currentVideo.id}`} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={currentVideo.title}
                    width="90%"
                    height="230px"
            ></iframe>
        </>
    )
}

export default VideoDetail;