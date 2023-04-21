"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("../../client"));
exports.default = {
    Query: {
        seeNote: function (_, _a) {
            var offset = _a.offset;
            var notes = client_1.default.note.findMany({
                orderBy: { createdAt: 'desc' },
                take: 3,
                skip: offset,
            });
            if (!notes) {
                return {
                    ok: false,
                    error: 'No Notes',
                };
            }
            return {
                ok: true,
                notes: notes,
            };
        },
    },
};
//# sourceMappingURL=seeNote.resolvers.js.map