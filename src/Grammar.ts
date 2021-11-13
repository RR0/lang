import {Gender} from "@rr0/common"

export interface Grammar {

  /**
   * Return the plural form of a string.
   *
   * Example: `plural("thing")` returns `"things"`, `plural("party")` returns `"parties"`.
   */
  plural(str: string): string

  /**
   * Return the translation of "at something" that may depend on (the gender of) "something"
   */
  at(str: string, gender: Gender): string
}
