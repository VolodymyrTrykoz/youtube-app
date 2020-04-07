import React, {Component} from 'react';
import VideoItem from './video-item';
import {inject,  observer} from 'mobx-react';
import Grid from '@material-ui/core/Grid';

@inject('store')

@observer
class VideoList extends Component{
    render(){
        const { store } = this.props;
        return (
            <>
                <Grid container spacing={2}>
                {
                    store.getVideoList.map(({id, img, title}) => {
                        return (
                            <Grid item xs={12} key={id}>
                                <VideoItem
                                    videoId={id}
                                    img={img}
                                    title={title}
                                />
                            </Grid>

                        )
                    })
                }
                </Grid>

            </>
        )
    }
};

export default VideoList