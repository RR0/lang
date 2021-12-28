import {KeyValue} from "@rr0/common"
import {Grammar} from "Grammar.js"
import {Translator} from "Translator.js"

/**
 * A Translator that holds its messages.
 *
 * @param T the message type
 */
export class Translation<T extends KeyValue> extends Translator<T> {

  constructor(locale: string, grammar: Grammar, readonly messages: T) {
    super(locale, grammar)
  }

  add(key: string, value: any): void {
    this.messages.dict[key] = value
  }
}
