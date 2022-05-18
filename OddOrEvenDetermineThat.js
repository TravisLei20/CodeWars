const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";

function oddOrEven(n) 
{  
  if (n%2 === 0)
    {
      let half = n/2;
      return (half%2 === 1)?ODD:EVEN;
    }
  else
    {
      return EITHER;
    }
}