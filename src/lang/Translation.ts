import {KeyValue} from "@rr0/common";
import {Grammar} from "./Grammar";
import {Translator} from "./Translator";


export class Translation<T extends KeyValue> extends Translator<T> {

  constructor(locale: string, grammar: Grammar, public messages: T) {
    super(locale, grammar)
  }

  add(key: string, value: any) {
    this.messages.dict[key] = value
  }
}
