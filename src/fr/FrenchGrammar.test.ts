import { FrenchGrammar } from './FrenchGrammar';
import { beforeEach, describe, expect, test } from '@javarome/testscript';
import { Gender } from '@rr0/common';

describe("French grammar", () => {
  let grammar: FrenchGrammar

  beforeEach(() => {
    grammar = new FrenchGrammar()
  })

  test("pluralizes", () => {
    expect(grammar.plural('Cheval')).toBe('Chevaux')
    expect(grammar.plural('chose')).toBe('choses')
  })

  test("at", () => {
    expect(grammar.at('coiffeur', Gender.male)).toBe('au ')
    expect(grammar.at('place', Gender.female)).toBe('à la ')
  })
})
