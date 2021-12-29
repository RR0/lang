import {Translator} from "Translator"
import {Gender} from "@rr0/common"
import {grammar_fr} from "fr/FrenchGrammar"
import {grammar_en} from "en/EnglishGrammar"
import {Translation} from "Translation"


test('translate key to values', () => {
  const messages = {key: 'value'}
  const translator = new Translator('fr', grammar_fr)
  const translated = translator.translate(messages.key)
  expect(translated).toBe('value')
})


test('translate with parameters', () => {
  const messages = {key: 'value is ${param}'};
  const translator = new Translator('fr', grammar_fr)
  const translated = translator.translate(messages.key, {param: 'paramValue'})
  expect(translated).toBe('value is paramValue')
})


test('translate to plurals', () => {
  {
    const messages = {
      key: 'plusieurs ${param1:plural} et ${param2:plural} mais un seul ${param1} et ${param2}'
    };
    const translator = new Translator('fr', grammar_fr)
    const translated = translator.translate(messages.key, {
      param1: 'cigare',
      param2: 'cheval',
    })
    expect(translated).toBe('plusieurs cigares et chevaux mais un seul cigare et cheval')
  }
  {
    const messages = {
      key: 'several ${param1:plural} and ${param2:plural} but one single ${param1} and ${param2}'
    };
    const translator = new Translator('en', grammar_en)
    const translated = translator.translate(messages.key, {
      param1: 'thing',
      param2: 'party',
    })
    expect(translated).toBe('several things and parties but one single thing and party')
  }
})


test('adds new translation', () => {
  let messages = {dict: {key: 'value is ${param}'}};
  const translation = new Translation('fr', grammar_fr, messages)
  translation.add('newKey', 'new value is ${param}')
  const translated = translation.translate((translation.messages.dict as any)['newKey'], {param: 'paramValue'})
  expect(translated).toBe('new value is paramValue')
})


test('plurals', () => {
  expect(grammar_fr.plural('chose')).toBe('choses')
  expect(grammar_fr.plural('cheval')).toBe('chevaux')

  expect(grammar_en.plural('thing')).toBe('things')
  expect(grammar_en.plural('party')).toBe('parties')
})


test('join words', () => {
  expect(grammar_fr.at('lycée', Gender.male)).toBe('au ')
  expect(grammar_fr.at('école', Gender.female)).toBe(`à l'`)

  expect(grammar_en.at('high school', Gender.neutral)).toBe('at the ')
})
