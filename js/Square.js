'use strict'

import Figure from "./Figure.js";

export default class Square extends Figure{
    constructor(name, size){
        super(name);
        this.width = size;
        this.height = size;
    }
}