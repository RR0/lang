import {KeyValue} from "@rr0/common";
import {Grammar} from "./Grammar";

export interface Language<M extends KeyValue = KeyValue> {
  messages: M,
  grammar: Grammar,
}
