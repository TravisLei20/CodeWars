function solution(str)
{
  var array = [];
  if (str != "")
    {
      for (var i = 0; i < str.length; i+=2)
        {
          array.push(str.substr(i,2));
        }
      if (array[array.length-1].length == 1)
        {
          var letter = array[array.length-1];
          array[array.length-1] = letter + "_";
        }
    }
  return array;
}