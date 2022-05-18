public class Maskify {
    public static String maskify(String str)
    {

      StringBuilder changedString = new StringBuilder();

      if (str == null)
      {
        throw new UnsupportedOperationException("Unimplemented");
      }

      if (str.length() <= 4)
      {
        return str;
      }
      else
      {
        for (int i=0; i < str.length()-4; i++)
        {
          changedString.append('#');
        }

        changedString.append(String.format("%s%s%s%s", 
                str.charAt(str.length()-4),
                str.charAt(str.length()-3),
                str.charAt(str.length()-2),
                str.charAt(str.length()-1)
                ));

        return changedString.toString();
      }
    }
  }