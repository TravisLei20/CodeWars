function howMuchWater(water, load, clothes){
    // Insert your brilliant code here
    if (load > clothes)
      {
        return "Not enough clothes";
      }
    else if ((load*2) < clothes)
      {
        return "Too much clothes";
      }
    else
      {
        return Math.round ((water*(1.1**(clothes-load))) * 100) / 100;
      }
  }