import { FrenchGrammar } from './FrenchGrammar';
import { beforeEach, describe, expect, test } from '@javarome/testscript';

describe("French grammar", () => {
  let grammar: FrenchGrammar

  beforeEach(() => {
    grammar = new FrenchGrammar()
  })

  test("pluralizes", () => {
    expect(grammar.plural('Cheval')).toBe('Chevaux')
  })
})
