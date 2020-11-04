import {Gender, KeyValue, ObjectUtils} from "@rr0/common";
import {Grammar} from "./Grammar";


export interface WordMessage {
  [gender: string]: string
}


export class Translator<T extends KeyValue> {

  constructor(readonly locale: string, readonly grammar: Grammar) {
  }

  compoundKey(subKeys: string[]): string {
    return subKeys.sort().join('_')
  }

  getGender(word: WordMessage): Gender {
    return (Gender as any)[Object.keys(word)[0]]
  }

  translateKey(obj: KeyValue, key: string, values: KeyValue = {}): string {
    if (!obj.hasOwnProperty(key)) {
      throw Error(`No key "${key}" found in ${JSON.stringify(obj)}`)
    }
    return this.translate(obj[key], values)
  }

  translate(template: string, values: KeyValue = {}): string {
    console.assert(Boolean(template), 'Translation requires a template')
    let translated = template
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        const value = values[key];
        if (ObjectUtils.isSet(value)) {
          translated = translated.replace(`\$\{${`${key}:plural`}\}`, this.grammar.plural(value) as any as string)
          translated = translated.replace(`\$\{${key}\}`, value as any as string)
        }
      }
    }
    if (translated.indexOf('${') > 0) {
      throw Error(`Parameter was not replaced in "${translated}"`)
    }
    return translated;
  }
}
