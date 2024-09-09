function load_style()
{
   page_style = localStorage.getItem('page_stylesheet_name');
  if (page_style === null)
  {
    page_style = "style.css";
  }
  document.getElementById('page_style').setAttribute("href", page_style);
}


function switchStyle() {
    var stylesheet = document.getElementById('page_style');

    if (stylesheet.getAttribute('href') == 'style.css') { //Switching to style2
      localStorage.setItem("page_stylesheet_name", "style2.css");
      stylesheet.setAttribute('href', 'style2.css');
      document.ElementsByClassName('border-container').setAttribute('href', 'background-rectangle');
      load_style();
    } 
    else { //Switching to style1
      localStorage.setItem("page_stylesheet_name", "style.css");
      stylesheet.setAttribute('href', 'style.css');
      document.ElementsByClassName('background-rectnagle').setAttribute('href', 'border-container');
      load_style();
    }
  }

  load_style();

