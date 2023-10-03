"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
var Stars_1 = require("./components/Stars");
function App() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Stars_1.Stars, { count: 5 }) }));
}
exports["default"] = App;
