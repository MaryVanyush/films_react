"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Stars = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Star_1 = require("./Star");
require("./stars.css");
var Stars = function (props) {
    var count = props.count;
    if (count < 1 || count > 5 || isNaN(count)) {
        return null;
    }
    var stars = [];
    for (var i = 0; i < count; i++) {
        stars.push((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(Star_1.Star, {}) }, i));
    }
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("ul", __assign({ className: "card-body-stars u-clearfix" }, { children: stars.length > 0 ? stars : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) })) }));
};
exports.Stars = Stars;
