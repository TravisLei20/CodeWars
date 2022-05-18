function duplicateCount(text){
  
    var duplicates = [];
    var count = 0;
    
    for (var i = 0; i < text.length; i++)
      {
        for (var j = i+1; j < text.length; j++)
          {
            if ((text[i].toLowerCase() === text[j].toLowerCase()) && !duplicates.includes(text[i].toLowerCase()))
              {
                duplicates.push(text[i].toLowerCase());
                count++;
                break;
              }
          }
      }
    
    return count;
  }