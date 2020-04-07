import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import {inject, observer} from "mobx-react";
import ApiService from "./api-service";

const apiService = new ApiService();

@inject('store')
@observer
class Search extends Component {
    handleFormSubmit = async (e) => {
        const { store } = this.props;
        e.preventDefault();
        const resp = await apiService.getData(store.getInputValue);
        const { items } = resp.data;
        const videoList = items.map( item => {
            return {
                id: item.id.videoId,
                title: item.snippet.title,
                img: item.snippet.thumbnails.default.url
            }
        });
        store.saveVideoList(videoList);
        store.setCurrentVideo(videoList[0].id, videoList[0].title)
    };
    render() {
        const { store } = this.props;
        return (
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
                <TextField
                    fullWidth
                    value={ store.getInputValue }
                    label="Video search"
                    onChange={(e) => store.handleInputChange(e)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <SearchIcon/>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        )
    }
}

export default Search;