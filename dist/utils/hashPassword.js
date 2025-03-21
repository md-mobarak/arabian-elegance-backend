"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
// src/utils/hashPassword.ts
const bcrypt_1 = __importDefault(require("bcrypt"));
// Function to hash a password
const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt_1.default.hash(password, saltRounds);
};
exports.hashPassword = hashPassword;
// Function to compare a password with a hashed password
const comparePassword = async (password, hash) => {
    return await bcrypt_1.default.compare(password, hash);
};
exports.comparePassword = comparePassword;
