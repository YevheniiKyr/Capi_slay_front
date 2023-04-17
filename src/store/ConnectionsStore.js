
import {makeAutoObservable} from "mobx";


export default class ConnectionsStore {
    get connections() {
        return this._connections;
    }

    setConnections(value) {
        this._connections = value;
    }


    constructor() {

        this._connections = []
        makeAutoObservable(this)
    }




}