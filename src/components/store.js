import {observable, computed, action} from "mobx";

class Store {
    @observable inputValue = '';
    @observable videoList = [];
    @observable currentVideo = '';

    @computed get getInputValue(){
        return this.inputValue
    }

    @computed get getCurrentVideo(){
        return this.currentVideo
    }

    @computed get getVideoList(){
        return this.videoList
    }

    @action handleInputChange(e){
        this.inputValue = e.target.value
    }

    @action saveVideoList(data){
        this.videoList = data;
    }

    @action setCurrentVideo(id, title){
        this.currentVideo = {
            id,
            title
        }
    }
}

const store = new Store();

export default store;