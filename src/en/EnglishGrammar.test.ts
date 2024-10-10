import { beforeEach, describe, expect, test } from '@javarome/testscript';
import { Gender } from '@rr0/common';
import { EnglishGrammar } from './EnglishGrammar.js';

describe("English grammar", () => {
  let grammar: EnglishGrammar

  beforeEach(() => {
    grammar = new EnglishGrammar()
  })

  test("pluralizes", () => {
    expect(grammar.plural('Buddy')).toBe('Buddies')
    expect(grammar.plural('thing')).toBe('things')
  })

  test("at", () => {
    expect(grammar.at('hairdresser', Gender.male)).toBe('at the ')
  })
})
