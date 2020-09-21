// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
	id: number;
	name: string;
	email?: string;
}

const account: AccountInfo = {
	id: 1,
	name: 'Luan'
}

type CharInfo = {
	nickname: string;
	level: number;
}

const char: CharInfo = {
	nickname: 'luanzera',
	level: 155
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
	id: 1,
	name: 'Luan',
	nickname: 'luanzera',
	level: 155
}