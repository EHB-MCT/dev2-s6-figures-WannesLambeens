'use strict'

import Figure from "./Figure.js";

export default class Circle extends Figure{
    constructor(name, radius){
        this.radius = radius;
        super(name);
    }
}