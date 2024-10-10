import { Assert } from "@rr0/common"

export * from "./Grammar.js"
export * from "./Language.js"
export * from "./Translator.js"
export * from "./Translation.js"
export * from "./en/index.js"
export * from "./fr/index.js"

export const assert = await (async() => await Assert.getInstance())()
