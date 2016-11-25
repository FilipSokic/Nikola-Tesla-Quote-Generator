var quotes = [
	'From my childhood I had been intended for the clergy.This prospect hung like a dark cloud on my mind.',
	'The harness of waterfalls is the most economical method known for drawing energy from the sun.',
	'Be alone, that is the secret of invention; be alone, that is when ideas are born.',
	'If your hate could be turned into electricity, it would light up the whole world.',
	'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.',
	'The present is theirs; the future, for which I really worked, is mine.',
	'Life is and will ever remain an equation incapable of solution, but it contains certain known factors.',
	'What one man calls God, another calls the laws of physics.',
	'Great moments are born great opportunity',
	'Life is and will ever remain an equation incapable of solution, but it contains certain known factors.',
	'Most certainly, some planets are not inhabited, but others are, and among these there must exist life under all conditions and phases of development.',
	'The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.',
	'I do not think you can name many great inventions that have been made by married men.',
	'Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more',
	'We crave for new sensations but soon become indifferent to them. The wonders of yesterday are today common occurrences',
	'If you only knew the magnificence of the 3, 6 and 9, then you would have the key to the universe.',
	'The individual is ephemeral, races and nations come and pass away, but man remains.',
	'What one man calls God, another calls the laws of physics.',
	'My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists.',
	'I do not think there is any thrill that can go through the human heart like that felt by the inventor as he sees some creation of the brain unfolding to success . . . Such emotions make a man forget food, sleep, friends, love, everything.',
	'Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}