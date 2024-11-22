"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
var react_1 = require("react");
function Rating() {
    return (<>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </>);
}
exports.Rating = Rating;
function Star() {
    return <div>
        star
    </div>;
}
