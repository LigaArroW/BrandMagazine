'use client';
import { TokenNames } from "@/types/auth";

export function setToken(token: string, name: TokenNames) {
    localStorage.setItem(name, token)
}

export function getToken(name: TokenNames) {
    return localStorage.getItem(name)
}

export function removeToken(name: TokenNames) {
    localStorage.removeItem(name)
}