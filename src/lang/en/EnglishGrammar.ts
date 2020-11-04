import {Gender} from "@rr0/common";
import {Grammar} from "../Translator";

export class EnglishGrammar implements Grammar {

  plural(s: string) {
    return s.endsWith('y') ? s.substring(0, s.length - 1) + 'ies' : s + 's'
  }

  at(s: string, gender: Gender): string {
    return 'at the '
  }
}

export const grammar_en = new EnglishGrammar()
