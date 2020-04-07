import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Search from './search';
import VideoList from './video-list';
import VideoDetail from './video-detail';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

@inject('store')

@observer
class App extends Component {
    render(){
        const { store } = this.props;
        const currentVideo = store.getCurrentVideo;
        return(
            <Container maxWidth="md">
                <Search />
                <Grid container style={{marginTop: '30px'}}>
                    <Grid item xs={6}>
                        { currentVideo &&
                        <VideoDetail
                            currentVideo = { currentVideo }
                        />
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <VideoList />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default App;
