$("#textAnalyzer").submit(function(event) {
	event.preventDefault();
	$("dl").removeClass("hidden");
	var entry = $("#user-text").val();

// *** compute word total - ANSWER!!! **************************************
	var wordCount = $("#user-text").val().split(" ").length;
	$("#word_count").text(wordCount);

// *** compute average word length *****************************************

// create array by splitting up the words in string
	var wordsArray = entry.split(" ");

// create empty array for all word lengths
	var wordLengthsAll = [];

// read word lengths, push to array
	for (var i = 0; i < wordsArray.length; i++) {
		var wordLength = wordsArray[i].length;
		wordLengthsAll.push(wordLength);
		}

// add up total word lengths
		var totalWordLengths = 0;
	for (i = 0; i < wordLengthsAll.length; i++) {
		totalWordLengths = totalWordLengths + wordLengthsAll[i];
		}

// compute average word length - ANSWER!!!
	var wordAvg = totalWordLengths / wordLengthsAll.length;
	$("#a_word_length").text(wordAvg);

// *** compute average sentence length *****************************************

// split up sentences, and separate by | http://stackoverflow.com/questions/18914629/split-string-into-sentences-in-javascript
	var sentenceArray = entry.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
	
// create empty array for all sentence lengths
	var sentenceLengthsAll = [];

// read sentence lengths, push to array
	for (var i = 0; i < sentenceArray.length; i++) {
		var sentenceLength = sentenceArray[i].length;
		sentenceLengthsAll.push(sentenceLength);
		}

// add up total sentence lengths
	var totalSentenceLengths = 0;
	for (i = 0; i < sentenceLengthsAll.length; i++) {
		totalSentenceLengths = totalSentenceLengths + sentenceLengthsAll[i];
		}

// compute average sentence length - ANSWER!!!
	var sentenceAvg = totalSentenceLengths / sentenceLengthsAll.length;
	$("#a_sentence_length").text(sentenceAvg);


// *** find unique word count *****************************************

// force all words to lowercase & remove punctuation prior
	var lowercaseWordsNoPuncArray = [];
	for (i = 0; i < wordsArray.length; i++) {
		var word = wordsArray[i].toLowerCase().replace(/\b[-.,()&$#!\[\]{}"']+\B|\B[-.,()&$#!\[\]{}"']+\b/g, "");
		lowercaseWordsNoPuncArray.push(word);
	}

// create empty array for unique words
	var uniqueWords = [];

// run loop to push unique words into array
	for (i = 0; i < lowercaseWordsNoPuncArray.length; i++) {
		if (uniqueWords.indexOf(lowercaseWordsNoPuncArray[i]) === -1) {
			uniqueWords.push(lowercaseWordsNoPuncArray[i]);
		}
	}

// find unique word count - ANSWER!
	var uniqueTotal = uniqueWords.length;
	$("#u_word_count").text(uniqueTotal);
})



