import {Gender} from "@rr0/common";
import {Grammar} from "../Grammar";

export class FrenchGrammar implements Grammar {

  plural(s: string) {
    return s.endsWith('al') ? s.substring(0, s.length - 2) + 'aux' : s + 's'
  }

  at(s: string, gender: Gender): string {
    return 'aàâäéeêèiïîoôuùûy'.includes(s.charAt(0)) ? `à l'` : gender === Gender.male ? 'au ' : gender === Gender.female ? 'à la ' : 'à l'
  }
}

export const grammar_fr = new FrenchGrammar()
