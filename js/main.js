function setWordCategory(i)
{
  sessionStorage.clear();
  
  switch(i)
  {
    case 1:
      sessionStorage.setItem('parametr', '1');
      break;
    case 2:
      sessionStorage.setItem('parametr', '2');
      break;
    case 3:
      sessionStorage.setItem('parametr', '3');
      break;
    case 4:
      sessionStorage.setItem('parametr', '4');
      break;
    case 5:
      sessionStorage.setItem('parametr', '5');
      break;
    case 6:
      sessionStorage.setItem('parametr', '6');
      break;
    default:
      break;
  }
  window.location = "main.html"

}