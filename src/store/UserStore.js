
import {makeAutoObservable} from "mobx";


export default class UserStore {
    get requests() {
        return this._requests;
    }

    setRequests(value) {
        this._requests = value;
    }
    get capiSpouse() {
        return this._capiSpouse;
    }

    setCapiSpouse(value) {
        this._capiSpouse = value;
    }
    get capiFriends() {
        return this._capiFriends;
    }

    setCapiFriends(value) {
        this._capiFriends = value;
    }
    get capi() {
        return this._capi;
    }

    setCapi(value) {
        this._capi = value;
    }

    constructor() {
        this._requests = []
        this._isAuth = false
        this._user = null
        this._capi = null
        this._capiFriends = []
        this._capiSpouse = null
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }



    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }



}