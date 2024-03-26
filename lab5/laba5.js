//1

var computeAreaOfARectengle = (a, b) => a * b;
var output = computeAreaOfARectengle(3, 4);
console.log(output);

//2
var computeAreaOfACircle = (n) => Math.PI * (n*n);
output = computeAreaOfACircle(4);
console.log(output);

//3
var computePower = (a, b) => a**b;
output = computePower(2, 3);
console.log(output);

//4
var computeSquareRoot = (n) => Math.sqrt(n);
output = computeSquareRoot(9);
console.log(output);


//5
let one = "some";
let two = "other";
let three = "words";
let getLengthOfThreeWords = ((one, two, three) => {
	return one.length + two.length + three.length;
})(one, two, three);

console.log(getLengthOfThreeWords);

//6
var joinArrays = (one, two) => {
	var arr = [];
	for(var i = 0; i<one.length; i++)
	{
		arr.push(one[i]);
	}
	for(var i = 0; i<two.length; i++)
	{
		arr.push(two[i]);
	}
	return arr;
}
output = joinArrays([1, 2], [3, 4]);
console.log(output);

//7
var getProductOfAllElementsAtProperty = (obj, key) => {
	if(obj[key] === undefined)
		return 0;
	if(obj[key].length === 0)
		return 0;
	if(!Array.isArray(obj[key]))
		return 0;
	var d = 1;
	for(var i = 0; i < obj[key].length; i++)
		d *= obj[key][i];
	return d;
}
var obj = {
	key : [1, 2, 3, 4] 
};
output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output);

//8
var sumDigit = (num) => {
	var snum = num.toString();
	var n = 0;
	for(var i = 0; i<snum.length; i++)
	{
		if(snum.charAt(i) === "-")
		{
			n -= Number(snum.charAt(i+1)); 
			i++;
			continue;
		}
		n += Number(snum.charAt(i));
	}
	return n;
}
output = sumDigit(-1145);
console.log(output);

//9
var findShortestWordAmongMixedElements = (arr) => {
	var word = "";
	for(var i = 0; i<arr.length; i++)
	{
		if(word.length == 0)
		{
			if(typeof arr[i] === "string")
				word = arr[i];
		}
		else
		{
			if(typeof arr[i] === "string" && arr[i].length < word.length)
				word = arr[i];
		}
	
	}
	return word;
}
output = findShortestWordAmongMixedElements([4, 'two', 2, "three"]);
console.log(output);

//10
var findSmallestNumberAmongMixedElements = (arr) => {
	var word = "";
	for(var i = 0; i<arr.length; i++)
	{
		if(word.length == 0)
		{
			if(typeof arr[i] === "number")
				word = arr[i];
		}
		else
		{
			if(typeof arr[i] === "number" && arr[i] < word)
				word = arr[i];
		}
	
	}
	return word;
}
output = findSmallestNumberAmongMixedElements([4, 'two', 2, "three"]);
console.log(output);

//11
var modulo = (num1, num2) => {
	if(num1 == 0)
		return 0;

	if(num2 == 0)
		return NaN;

	if(isNaN(num1) || isNaN(num2))
		return NaN;

	if(num1 < 0){
		var minus = true;
		num1 = -num1;
	}

	while((num1 -= num2) > num2){
	}

	return minus ? -num1 : num1;
}
output = modulo(27, 4);
console.log(output);

//12
var mirror = (input, number) => {
	var forReturn = "";
	var inputs = input;
	var numbers = number;
	var start = 0;
	while((start += number) <= input.length)
	{
		for(var i = 1; i <= number; i++)
		{
			forReturn += input.charAt(start - i);
		}
	}
	return forReturn;
}
output = mirror("a short example", 5);
console.log(output);

//13
var detectOutlierValue = (arr) => {
	let evenAmount = 0;
	let oddAmount = 0;
	let evenIndex = 0;
	let oddIndex = 0;

	for(let i = 0, j = arr.length; i < j; i++){
		if(arr[i] % 2 == 0){
			evenAmount++;
			evenIndex = i;
		}
		else {
			oddAmount++;
			oddIndex = i;
		}
	}

	if(evenAmount == 1)
		return evenIndex + 1;
	
	if(oddAmount == 1)
		return oddIndex + 1;
	
}
output = detectOutlierValue([2, 4, 7, 8, 10]);
console.log(output);

output = detectOutlierValue([1, 10, 1, 1]);
console.log(output);

//14
function findPairForSum(mas, num){
	var nums = [];	
	var chek = false;
	for(var i = 0, l = mas.length; i < l - 1; i++)
	{
		for(var j = i+1; j < l; j++)
		{
			if(mas[i] + mas[j] == num)
			{
				nums.push(mas[i]);
				nums.push(mas[j]);
				return nums;
			}
		}
	}
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);

//15
function isMirror(string1, string2)
{
	var tmp = "";
	var j = 0;
	while(j++ < string2.length)
	{
		tmp += string2.substring(j, string2.length);
		tmp += string2.substring(0, j);
		if(string1 == tmp)
			return true;
		tmp = "";
	}
	return false;
}
output = isMirror("hello world", "orldhello w");
console.log(output);

//16
function BinarySearch(mas, num)
{
	var start = 0;
	var end = mas.length;
	var i = 0;
	while(start != end)
	{
		i = parseInt(((start + end) / 2), 10);
		if(mas[i] == num)
			return i;
		if(mas[i] > num)
			end = i;
		if(mas[i] < num)
			start = i;
	}
	return false;
}
var arr = [1, 3, 16, 22, 31, 33, 34];
console.log(BinarySearch(arr, 1));

//17
function Izograma(string1){
	var obj = {};
	for(var i = 0; i < string1.length; i++)
	{
		if(obj[string1[i]])
			obj[string1[i]] += 1;
		else
			obj[string1[i]] = 1;
	}
	for(var a in obj)
		if(obj[a] > 1)
			return false;
	return true;
}
output = Izograma("abcd");
console.log(output);

//18

function Palindrom(word)
{
	for(var i = 0; i < parseInt(word.length / 2); i++)
	{
		if(word.charAt(i) != word.charAt(word.length - i - 1))
		{
			return false;
		}
	}
	return true;
}

function PalindromInSentence(string)
{
	var mas = string.split(" ");

	for(var i = 0; i < mas.length; i++)
	{
		if(Palindrom(mas[i]))
			return true;
	}
	return false;
}

output = PalindromInSentence("Hello how hellolleh are you")
console.log(output);