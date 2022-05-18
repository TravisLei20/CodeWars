function digital_root(n) {
    var sum = 0;
    var numbers = n.toString();
    for (var i = 0; i < numbers.length; i++)
      {
        sum += (+numbers.charAt(i));
      }
    if (sum > 9)
      {
        return digital_root(sum);
      }
    else
      {
        return sum;
      }
  }