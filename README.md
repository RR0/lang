# @rr0/lang

[![RR0](https://circleci.com/gh/RR0/lang.svg?style=svg)](https://app.circleci.com/pipelines/github/RR0/lang)

A **typed**, no-dependency language and translation lib.

- Support for standard template literals as placeholders in messages, with plural support.
- Translations implement _interfaces_, so:
    - you cannot use a incorrect message, since the compiler allows only declared message keys.
    - you cannot forget a translation, since all the compiler will enforce you to implement it.

## Installation

Add `@rr0/lang` as a dependency to your project:

```
npm install @rr0/lang --save
```

so that you can

```
import * from "@rr0/lang"
```

in your code.

## Usage

1. Create a common interface for your messages in every language. :\
   `interface MyMessages extends KeyValue { hello: string; bye: string; }`
   }`
2. Create implementations of this interface with translations values:\
   `class MyFrenchMessages implements MyMessages { hello = "Bonjour ${name}"; bye = "Au revoir"}`
3. Create a Translator with a given target language and grammar: \
   `frTranslator = new Translator("fr", grammar_fr)`
4. Translate a message: `bonjour = frTranslator.translate(myFrMessages.hello, {name: "Jérôme"})`

### Plural support

You can use `${var:plural}` variant in a placeholder to force plural. The translator will then use the provided grammar
rules to render the message.

### Translations

By default, messages and translators are separated, but you can use a `Translation`, which is a `Translator` that holds
its messages.

## Example

Say we want to translate some message in two locales:

```ts
import {Translator, grammar_en, grammar_fr} from '@rr0/lang'

// #1
interface MyMessages extends KeyValue {
  key1: string
}

// #2
class EnglishMessages implements MyMessages {
  key1 = 'several ${param1:plural} and ${param2:plural} but one single ${param1} and ${param2}'
}
class FrenchMessages implements MyMessages {
  key1 = 'plusieurs ${param1:plural} et ${param2:plural} mais un seul ${param1} et ${param2}'
}

// #3
const messages_en = new EnglishMessages()
const translator_en = new Translator('en', grammar_en)

const messages_fr = new FrenchMessages()
const translator_fr = new Translator('fr', grammar_fr)

// #4
const translated_en = translator_en.translate(messages_en.key1, {
  param1: 'thing',
  param2: 'party'
})
// translated_en = "several things and parties but one single thing and party"

const translated_fr = translator_fr.translate(messages_fr.key1, {
  param1: 'cigare',
  param2: 'cheval'
})

// translated_fr = "plusieurs cigares et chevaux mais un seul cigare et cheval"
```
A `Translation` is a `Translator` that holds its messages. For instance:
```js
const messages = { dict: { key: 'value is ${param}' } }
const translation = new Translation('fr', grammar_fr, messages)
translation.add('newKey', 'new value is ${param}')
const translated = translation.translate(translation.messages.dict['newKey'], { param: 'paramValue' })
// translated = "new value is paramValue"
```
