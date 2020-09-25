abstract class UserAccount {
	public name: string;
	protected age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	logDetails(): void {
		console.log(`The player ${this.name} is ${this.age} years old.`);
	}
}

class CharAccount extends UserAccount {
	private nickname: string;
	/* readonly */ level: number;

	get getLevel() {
		console.log('---GET---');
		return this.level;
	}

	set setLevel(level: number) {
		this.level = level;
	}

	constructor(name: string, age: number, nickname: string, level: number) {
		super(name, age);

		this.nickname = nickname;
		this.level = level;
	}

	logCharDetails(): void {
		console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`);
	}
}

/* const luan = new UserAccount('Luan', 21);

console.log(luan);
console.log(luan.name);
luan.logDetails(); */

const novais = new CharAccount('Novais', 21, 'luanzera', 155);

console.log(novais);
novais.logDetails();
novais.logCharDetails();

novais.setLevel = 89;

console.log(novais.getLevel);