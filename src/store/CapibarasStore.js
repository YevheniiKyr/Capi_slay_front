
import {makeAutoObservable} from "mobx";


export default class CapibarasStore {
    get connectionTypes() {
        return this._connectionTypes;
    }

    setConnectionTypes(value) {
        this._connectionTypes = value;
    }
    get capibaras() {
        return this._capibaras;
    }

    setCapibaras(value) {
        this._capibaras = value;
    }


    constructor() {

        this._capibaras = []
        this._connectionTypes = []
        makeAutoObservable(this, {deep: true})
    }




}