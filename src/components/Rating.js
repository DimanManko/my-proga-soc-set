"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const react_1 = __importDefault(require("react"));
function Rating(props) {
    if (props.value === 0) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Star, { selected: false }),
            react_1.default.createElement(Star, { selected: false }),
            react_1.default.createElement(Star, { selected: false }),
            react_1.default.createElement(Star, { selected: false }),
            react_1.default.createElement(Star, { selected: false })));
    }
    if (props.value === 1) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: false }),
            react_1.default.createElement(Star, { selected: false }),
            react_1.default.createElement(Star, { selected: false }),
            react_1.default.createElement(Star, { selected: false })));
    }
    if (props.value === 2) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: false }),
            react_1.default.createElement(Star, { selected: false }),
            react_1.default.createElement(Star, { selected: false })));
    }
    if (props.value === 3) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: false }),
            react_1.default.createElement(Star, { selected: false })));
    }
    if (props.value === 4) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: false })));
    }
    if (props.value === 5) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: true }),
            react_1.default.createElement(Star, { selected: true })));
    }
}
exports.Rating = Rating;
function Star(props) {
    if (props.selected !== true) {
        return react_1.default.createElement("span", null, "star");
    }
    else {
        return react_1.default.createElement("span", null,
            react_1.default.createElement("b", null, "star"));
    }
}
