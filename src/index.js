import InputStream from './input-stream'
import Tokenizer from './tokenizer'
import Parser from './parser'
import { interpret } from './interpreter'

// const code = `=SUM(RESOURCE('https://www.offlinefirst.com', 'apples'), 10)`

// SUM, MEDIAN, MEAN, COUNT, MAX, MIN, ABS, NOW, RESOURCE
// const code = `=SUM(5, 10)`
// const code = `=MEDIAN(5, 10, 15)`
// const code = `=MEAN(5, 12, 15)`
// const code = `=COUNT(5, 12, 15)`
// const code = `=MAX(5, 12, 15)`
// const code = `=MIN(5, 12, 15)`
// const code = `=ABS(-5)`
// const code = `=NOW()`
// const code = `Hello there!`
const code = `=MULT(DIVIDE(5, 10), 100)`
// const code = `=lemon`

console.log('_CODE_', code)

const inputStream = new InputStream(code)
const tokenizer = new Tokenizer(inputStream)

const tokens = tokenizer.read()

console.log('_TOKEN_', tokens)

const parser = new Parser(tokens)

const ast = parser.parse()

console.log('_AST_', JSON.stringify(ast, null, 2))

interpret(ast).then(result => {
  console.log('_RESULT_', result)
}).catch(e => {
  console.log('_ERROR_', e)
})
