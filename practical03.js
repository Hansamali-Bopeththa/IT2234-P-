//Write a Boolean function to find the given number is prime 
function isPrime(num)
{
    if(num<= 1)
    {
        return "This is not a prime number";
    }
    for(let i = 2; i <=Math.sqrt(num); i++)
    {
        if(num % i === 0)
        {

            return "This is not a prime number";
        }
    }
    return "This is a prime number;"
}
console.log(isPrime(10));