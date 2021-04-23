const randomWords = require('random-words');

module.exports = class RandomWordKeyGenerator {

	createKey(keyLength) {
		return randomWords({
			exactly: Math.round(keyLength / 2),
			wordsPerString: 1,
			formatter: (word) => {
				return word.charAt(0).toUpperCase() + word.slice(1);
			},
			join: ''
		})
	}
	
}
