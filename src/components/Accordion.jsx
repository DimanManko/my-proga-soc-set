"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Accordion(props) {
    return (<div>
            <AccordionTitle />
            <AccordionBody />
        </div>);
}
function AccordionTitle(props) {
    return (<h3>Меню</h3>);
}
function AccordionBody(props) {
    return (<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>);
}
exports.default = Accordion;
