import {Grammar} from "./Translator";
import {KeyValue} from "@rr0/common";

export interface Language<M extends KeyValue = KeyValue> {
  messages: M,
  grammar: Grammar,
}
