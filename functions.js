function switchStyle() {
    var stylesheet = document.getElementById('page_style');

    if (stylesheet.getAttribute('href') == 'style.css') {
      stylesheet.setAttribute('href', 'style2.css');
      document.ElementsByClassName('border-container').setAttribute('href', 'background-rectangle');
      load_style();
    } 
    else {
      stylesheet.setAttribute('href', 'style.css');
      load_style();
    }
  }

  function load_style()
  {
     page_style = localStorage.getItem('page_style');
    if (page_style === null)
    {
    page_style = "style.css";
    }
    document.getElementById('page_style').setAttribute("href", page_style);
  }

