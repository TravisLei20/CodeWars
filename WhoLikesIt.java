class Solution {
    public static String whoLikesIt(String... names) {
      StringBuilder response = new StringBuilder();
      switch (names.length)
      {
        case 0:
          response.append("no one likes this");
          break;
          
        case 1:
          response.append(names[0]);
          response.append(" likes this");
          break;
        case 2:
          response.append(names[0]);
          response.append(" and ");
          response.append(names[1]);
          response.append(" like this");
          break;
        case 3:
          response.append(names[0]);
          response.append(", ");
          response.append(names[1]);
          response.append(" and ");
          response.append(names[2]);
          response.append(" like this");
          break;
        default:
          response.append(names[0]);
          response.append(", ");
          response.append(names[1]);
          response.append(" and ");
          response.append(names.length-2);
          response.append(" others like this");
          break;
      }
      return response.toString();
    }
  }