import {autorun, observable} from 'mobx'

class Store {
    @observable userID = "";
    @observable loggedIn = false;
    @observable user = {};

    login(user, id, first = false){
        this.userID = id;
        if(first)
            this.user.identity = user;
        else
            this.user = user;
    }

    logout(){
        this.userID = "";
        this.loggedIn = false;
        this.user = {};
        localStorage.removeItem('id_auth');
    }

}

// eslint-disable-next-line
var store = window.store = new Store;

autorun(() => {
    if(localStorage.getItem('id_auth')){
        store.loggedIn = true;
        store.userID = localStorage.getItem('id_auth');
    }
});

export default store;