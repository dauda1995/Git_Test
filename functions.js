class User{
    constructor(name){
        this._name = name;

    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    isLoggedIn(){
        let date = new Date();
        return `${date.getDay}:${date.getHours}/${date.getMinutes}/${date.getSeconds}`
    }
    isLoggedIn(){
        let date = new Date();
        return `${date.getDay}:${date.getHours}/${date.getMinutes}/${date.getSeconds}`
    }
   


    
}
class Moderator extends User{
    constructor()
    //include an object for moderator, should have the ability to delete comments 
}




