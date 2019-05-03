function bagOfWords(sentences) {
    var split2 = sentences.slice(0, sentences.length - 1).split('.')
    var temp = []
    for (let i = 0; i < split2.length; i++) {
        var result = {
            Sentences: split2[i],
        }
        temp.push(result)
    }
    console.log(temp)
}

const sentences = "The cat sat on the hat.The dog ate the cat and the hat."
bagOfWords(sentences)

/*

[ { Sentence: 'The cat sat on the hat',
    the: 2,
    cat: 1,
    sat: 1,
    on: 1,
    hat: 1,
    dog: 0,
    ate: 0,
    and: 0 },
  { Sentence: 'The dog ate the cat and the hat',
    the: 3,
    cat: 1,
    hat: 1,
    dog: 1,
    ate: 1,
    and: 1,
    sat: 0,
    on: 0 } ]

*/