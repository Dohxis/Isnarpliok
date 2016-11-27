import {autorun, observable} from 'mobx';
import Task_Data from './pages/Test/RawTasks.js';
import * as firebase from 'firebase'

class Store {
    @observable userID = "";
    @observable loggedIn = false;
    @observable user = {};
    @observable code = '';
    @observable variables = [];
    @observable vars_found = 0;

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

    foundVar(){
        this.vars_found += 1;
    }

    updateCode(...code) {
        this.code += code + '\n';
    }

    run(lvl){
        var done_variables = true;
        if(this.vars_found >= Task_Data[lvl].variables.length){
            for(var x = 0; x < Task_Data[lvl].variables.length; x++){
                if(Task_Data[lvl].variables[x] != ""){
                    if(this.variables.indexOf(Task_Data[lvl].variables[x]) < 0){
                        done_variables = false;
                        break;
                    }
                }
            }
        }
        else{
            done_variables = false;
        }
        var done_output = true;
        if(Task_Data[lvl].output != ""){
            if(String(Task_Data[lvl].output) != String(this.code).trim()){
                console.log(String(Task_Data[lvl].output), "nelygu", String(this.code).trim());
                done_output = false;
            }
        }

        if(done_output && done_variables){
            if(lvl + 1 != Task_Data.length){
                this.updateCode("\n\n Šaunu jūs susitvarkėte su užduotimi!\n Spauskite 'Užduotis' mygtuką tęsti kursą.");
                firebase.database().ref().child('/users/' + localStorage.getItem('id_auth') + '/level').set(lvl + 1);
            }
            else {
                this.updateCode("\n\n Jūs pabaigėte mūsų kursą. Dėkojame, jog naudojatės mūsų paslauga.");
            }
        }
        else{
            this.updateCode("\n\n Dar kartelį peržvelkite savo kodą. \n Ar tikrai atlikote viską kas prašoma?");
        }
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
