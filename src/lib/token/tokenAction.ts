import { TokenNames } from "@/types/auth";

export function setToken(token: string, name: TokenNames) {
    localStorage.setItem(name, token)
}