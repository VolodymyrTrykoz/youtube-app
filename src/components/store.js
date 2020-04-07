import { observable } from "mobx";

class Store {
    @observable todos = ['get milk', 'buy 2 eggs']
}

const store = new Store();

export default store;