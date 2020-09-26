// @Component
// @Selector
// @useState('abc')

// Factory
/* function Logger(prefix: string) {
	return (target: any) => console.log(`${prefix} - ${target}`);
} */

// Class decorator
/* @Logger('awesome')
class Foo {} */

function setAPIVersion(apiVersion: string) {
	return (constructor: any) => {
		return class extends constructor {
			version = apiVersion
		}
	}
}

// decorator - write the API version
@setAPIVersion('2.0.0')
class API {}

console.log(new API())

// Property decorator
function minLength(length: number) {
	return (target: any, key: string) => {
		let val = target[key];

		const getter = () => val;

		const setter = (value: string) => {
			if(value.length < length) {
				console.log(`Error: the ${key} is less than ${length}.`)
			} else {
				val = value
			}
		}

		Object.defineProperty(target, key, {
			get: getter,
			set: setter
		});
	}
}

class Movie {
	// Validate - < 5 throw error
	@minLength(5)
	title: string;

	constructor(t: string) {
		this.title = t;
	}
}

const movie = new Movie('Poderoso Chefão');

console.log(movie.title);

// Method decorator
function delay(ms: number) {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		const originalMethod = descriptor.value;

		descriptor.value = function(...args: any) {
			console.log(`Esperando ${ms}...`)

			setTimeout(() => {
				originalMethod.apply(this, args);
			}, ms);
		}

		return descriptor;
	}
}

class Greeter {
	greeting: string;

	constructor(g: string) {
		this.greeting = g
	}

	// Wait a time and run the method
	@delay(2000)
	greet() {
		console.log(`Hello! ${this.greeting}`)
	}
}

const littlePeople = new Greeter('Little people!');
littlePeople.greet();

// Parameter decorator
// Acessor decorator
