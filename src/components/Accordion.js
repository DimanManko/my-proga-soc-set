"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Accordion(props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(AccordionTitle, { title: props.titleValue }),
        react_1.default.createElement(AccordionBody, null)));
}
function AccordionTitle(props) {
    return (react_1.default.createElement("h3", null, props.title));
}
function AccordionBody() {
    return (react_1.default.createElement("ul", null,
        react_1.default.createElement("li", null, "1"),
        react_1.default.createElement("li", null, "2"),
        react_1.default.createElement("li", null, "3")));
}
exports.default = Accordion;
