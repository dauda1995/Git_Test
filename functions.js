class User{
    constructor(name, comment){
        this._name = name;
        this._comment = comment;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get comment(){
        return `${this._name} posts :${this._comment}`;
    }
    set comment(str){
        this._comment = str;
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
    constructor(priviledge){
        super(name,comment);
        this._priviledge = priviledge;

    }

    delete_comment(arr, commentId){
        arr.splice(commentid -1, 1);
        
    }
    //include an object for moderator, should have the ability to delete comments 
}




