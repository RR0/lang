# lang

[![RR0](https://circleci.com/gh/RR0/lang.svg?style=svg)](https://app.circleci.com/pipelines/github/RR0/lang)

Language and translation

## Installation

```
npm install @rr0/lang --save
```

## Translation
- `Translator.translate(message, values?)` returns `message` with possible values interpolated.
  - the `message` string should be referenced from a localized instance of a message interface.  
  - Interpolation uses the `${var}` pattern with the `${var:plural}` variant to force plural.

### Example
Say we want to translate some message in two locales:
```js
import {Translator, grammar_en, grammar_fr} from "@rr0/lang";

interface MyMessages extends KeyValue {
  key1: string
}

class EnglishMessages implements MyMessages {
  key1 = 'several ${param1:plural} and ${param2:plural} but one single ${param1} and ${param2}'
};
const messages_en = new EnglishMessages()
class FrenchMessages implements MyMessages {
  key1 = 'plusieurs ${param1:plural} et ${param2:plural} mais un seul ${param1} et ${param2}'
};
const messages_fr = new FrenchMessages()

const translator_en = new Translator('en', grammar_en)
const translated_en = translator_en.translate(messages_en.key1, {
  param1: 'thing',
  param2: 'party',
})
// translated_en = "several things and parties but one single thing and party"

const translator_fr = new Translator('fr', grammar_fr)
const translated_fr = translator_fr.translate(messages_fr.key1, {
  param1: 'cigare',
  param2: 'cheval',
})
// translated_en = "plusieurs cigares et chevaux mais un seul cigare et cheval"
```
