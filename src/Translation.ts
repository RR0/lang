import {KeyValue} from "@rr0/common"
import {Grammar} from "./Grammar"
import {Translator} from "./Translator"

/**
 * A Translator that holds its messages.
 *
 * @param T the message type
 */
export class Translation<T extends KeyValue> extends Translator {

  constructor(readonly locale: string, grammar: Grammar, readonly messages: T) {
    super(locale, grammar)
  }

  add(key: string, value: any): void {
    this.messages.dict[key] = value
  }
}
