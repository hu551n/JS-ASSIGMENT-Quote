var Qutoes=[
    {
        quote:'"Resentment is like drinking poison and waiting for your enemies to die."',  //0
        author:"--Nelson Mandela",
    },
    {
        quote:'"The best revenge is massive success."', //1
        author:"--Frank Sinatra",
    },
    {
        quote:"It's not what happens to you, but how you react to it that matters.",  //2
        author:"--Epictetus",
    },
    {
        quote:"You miss 100% of the shots you don't take.",  //3
        author:"--Wayne Gretzy",
    },
    {
        quote:'"The best revenge is massive success."',  //4
        author:"--Frank Sinatra",
    },
    {
        quote:'"Do not take life too seriously. You will not get out alive."', //5
        author:"--Elbert Hubbard",
    },
]

var newIndex;
var lastIndex;
var displayedQuotes =[];

function getQuotes() {


    if (displayedQuotes.length == Qutoes.length) {
        displayedQuotes =[];
    }

    do {
         newIndex = Math.floor(Math.random() * Qutoes.length)

    } while (newIndex == lastIndex || displayedQuotes.includes(newIndex));
    
    newIndex == lastIndex

    console.log(newIndex);

    displayedQuotes.push(newIndex);


    document.getElementById("quote").innerHTML = Qutoes[newIndex].quote

    document.getElementById("author").innerHTML = Qutoes[newIndex].author
}
