let valu = []
function handleCalculatorForm(form)
{
    let a = form.n1.value;
    let symbol = form.symbol.value;
    let b = form.n2.value;   
    console.log(calculate(a, symbol, b)) 
}

function handlePalindromeForm(form)
{
    let formValue = form.inputbox2.value;
    console.log(palindrome(formValue))
}

function handleAnagramForm(form)
{
    let word1 = form.inputbox3.value
    let word2 = form.inputbox4.value
    console.log(anagram(word1, word2))
}

function handleNumberForm(form)
{
    let a = form.a.value
    let b = form.b.value
    console.log(z4(a,b))
}

function calculate(a1, symbol, b1)
{
    a = parseInt(a1)
    b = parseInt(b1)
    if(symbol == "+")
    {
        return a+b
    }
    if(symbol == "-")
    {
        return a-b
    }
    if(symbol == "*")
    {
        return a*b
    }
    if(symbol == "/")
    {
        if(b==0)
        {
            return "nie można dzielić przez 0"
        }
        else
        {
            return a/b
        }       
    }
    else
    {
        return "podano niewłaściwy symbol"
    }
}
/*
function palindrome(var1)
{
    let tak = String(var1)
    let a = 0;
    if (tak.length % 2 == 0)
    {
        for(let i = 0; i <= tak.length/2; i++)
        {
            if (tak[i] == tak[tak.length-i]) 
            {
                a++
            } 
        }
        if (a==tak.length/2) 
        {
            return true
        } 
        else
        {
            return false
        }
    }
    else
    {
        for(let i = 0; i <= (tak.length-1)/2; i++)
        {
            if (tak[i] == tak[tak.length-i]) 
            {
                a++
            } 
        }
        if (a==(tak.length-1)/2) 
        {
            return "Podane słowo jest polidromem"
        } 
        else
        {
            return "Podane słowo nie jest polidromem"
        }
    }
    
    
}
*/

function palindrome(var1)
{
    let word = String(var1)
    const len = word.length
    for(let i = 0; i < len/2; i++)
    {
        if (word[i] !== word[len-1-i]) 
        {
            return false
        } 
        else
        {
            return true
        }
    }
}

function z4(a,b)
{
    let i = 0
    let all = " "
    if(a <= b)
    {
        for(i = a; i <= b; i++)
        {
            all = all + i + ", "
        }
    }
    else
    {
        for(i = b; i <= a; i++)
        {
            all = all + i + ", "
        }
    }
    return all
}


/*
function z4(a,b)
{
    if(a<=b)
    {
        valu.push(a)
        z4(a+1,b)
    }
    else
    {
        return valu
    }
}
*/

function bubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
         
            if(arr[j] > arr[j+1]){           
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function anagram(var1, var2) {
    let word1 = [];
    let word2 = [];
    let flag = true;

    word1ASCII = [];
    word2ASCII = [];

    word1 = var1.split('');
    word2 = var2.split('');

    if(word1.length == word2.length){
        for(let i = 0; i < word1.length; i++){
            word1ASCII[i] = word1[i].charCodeAt(0);
        }

        for(let i = 0; i < word2.length; i++){
            word2ASCII[i] = word2[i].charCodeAt(0);
        }

        word1ASCII = bubbleSort(word1ASCII);
        word2ASCII = bubbleSort(word2ASCII);

        for(let i = 0; i < word1ASCII.length; i++){
            if (word1ASCII[i] != word2ASCII[i]){
                flag = false;
            }
        }
    }
    else {
        return false;
    }
    return flag;
}

