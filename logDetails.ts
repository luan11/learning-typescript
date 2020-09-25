// Type Aliases (Pipe "|" => Union)
type Uid = number|string|undefined;

function logDetails(uid: Uid, item: string)
{
	console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string)
{
	console.log(`An user with ${uid} has a name as ${user}.`)
}

type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlatform(platform: Platform)
{
	return platform
}

renderPlatform('Windows')

logDetails(123, "shoes")
logDetails("123", "shoes")

logInfo(321, "Luan")
logInfo("321", "Luan")