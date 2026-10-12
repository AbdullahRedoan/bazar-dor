import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://bazar-dor-one-sand.vercel.app/"
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()