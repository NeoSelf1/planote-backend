"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Note {\n    id: Int!\n    title: String!\n    noteArray: String!\n    imgArray: String\n  }\n"], ["\n  type Note {\n    id: Int!\n    title: String!\n    noteArray: String!\n    imgArray: String\n  }\n"])));
var templateObject_1;
//isFollowing: Boolean #follow여부에 따라 front에서 생기는 변화들을 반영하고, 상황에 맞는 쿠키를 받을 수 있음
//isMe: Boolean! #editProfile 버튼 출력여부 파악기준(내가 보고 있는 프로필에 따라 변경되는 값임)
//# sourceMappingURL=note.typeDefs.js.map