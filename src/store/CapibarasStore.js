
import {makeAutoObservable} from "mobx";


export default class CapibarasStore {
    get capibaras() {
        return this._capibaras;
    }

    setCapibaras(value) {
        this._capibaras = value;
    }

    constructor() {

        this._capibaras = []
        makeAutoObservable(this)
    }




}