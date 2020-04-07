import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {inject, observer} from "mobx-react";

@inject('store')

@observer
class VideoItem extends Component  {
    render(){
        const {img, title, store, videoId} = this.props;
        return (
            <>
                <Grid container>
                    <Grid item xs={6}>
                        <img src={img}
                             alt={title}
                             onClick={() => store.setCurrentVideo(videoId, title)}
                             className="pointer"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <p>{title}</p>
                    </Grid>
                </Grid>
            </>
        )
    }
};

export default VideoItem;