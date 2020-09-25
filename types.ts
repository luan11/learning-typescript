// boolean (true|false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = 'foo'

// number (int, float, hex, binary)
let total: number
total = 20.75

// array (type[])
let items: number[]
items = [1, 2, 3]

let values: Array<number> // Notation Generic
values = [1, 2, 3]

// tuple
let month: [number, string]
month = [8, "Agosto"]

// enum
enum Colors {
	white = '#FFF',
	black = '#000'
}

// any (ISN'T GOOD!)
let thing: any
thing = [1]

// void (empty)
function logger(): void
{
	console.log('foo')
}

// null|undefined
/* ... */

// never (never returns, throw a exception)
function error(): never
{
	throw new Error('error');
}

// object
let cart: object
cart = {
	key: 'foo'
}

// Type Inference
let message2 = 'defined message'
// message2 = 1 // Doesn't work

window.addEventListener('click', (e) => {
	console.log(e.target)
})