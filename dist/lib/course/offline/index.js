"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.server = exports.document = exports.topic = exports.bookseries = exports.category = exports.class = exports.year = exports.subject = exports.grade = exports.school = void 0;
exports.school = __importStar(require("./school"));
exports.grade = __importStar(require("./grade"));
exports.subject = __importStar(require("./subject"));
exports.year = __importStar(require("./year"));
exports.class = __importStar(require("./class"));
exports.category = __importStar(require("./category"));
exports.bookseries = __importStar(require("./bookseries"));
exports.topic = __importStar(require("./topic"));
exports.document = __importStar(require("./document"));
exports.server = "prod.db";
function connect(url) {
    if (url) {
        exports.server = url;
    }
}
exports.connect = connect;
