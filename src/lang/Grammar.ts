import {Gender} from "@rr0/common";

export interface Grammar {

  plural(s: string): string

  at(s: string, gender: Gender): string
}
