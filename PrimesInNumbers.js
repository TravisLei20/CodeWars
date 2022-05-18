function primeFactors(n)
{
  var array = [];
  for(var i = 2; i< n; i++) 
  {
         while(n%i === 0) 
         {
            n = n/i;
            array.push(i);
         }
  }
  array.push(n);
  var list = "";
  for (var i = 0; i < array.length; )
    {
      var num = array[i];
      if (num != 1)
        {
          list = list + "(" + num;
          var factor = 1;
          i++;
          while (num === array[i] && i < array.length)
            {
              i++;
              factor++;
            }
          if (factor === 1)
            {
              list = list + ")";
            }
          else
            {
              list = list + "**" + factor + ")";
            }
        }
    }
  
  return list;
}