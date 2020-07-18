
var sentence = prompt('Enter Sentence').toLowerCase()
var flag = true
function delete_vowels(sentence) {
    for(i in sentence) {
        console.log(sentence[i])
        if((sentence[i]=='a') || (sentence[i]=='e') || (sentence[i]=='i') || (sentence[i]=='o') || (sentence[i]=='u')){
            sentence = sentence.replace(sentence[i],'')
            flag = false
        }
    }
    return sentence;
}
var result = delete_vowels(sentence)
if(flag){
alert('No vowels => '+sentence)
}
else{
    alert(result)
}