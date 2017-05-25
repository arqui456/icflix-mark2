"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var filme_1 = require("../models/filme");
var base_1 = require("./base");
var FilmeCtrl = (function (_super) {
    __extends(FilmeCtrl, _super);
    function FilmeCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = filme_1.default;
        return _this;
    }
    return FilmeCtrl;
}(base_1.default));
exports.default = FilmeCtrl;
//# sourceMappingURL=filme.js.map