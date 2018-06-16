
window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;
  var footer_list = document.getElementById("footer_list");
  var footer_line = document.getElementById("footer_line");
  var footer_contact = document.getElementById("footer_contact");

  //For debug
  //console.log('FOOTERJS - offset = ' + offset);
  //console.log('FOOTERJS - height = ' + height);

  if (offset === height) {
      footer_list.classList.remove("footer_small");
      footer_line.classList.remove("footer_small");
      footer_contact.classList.remove("footer_small");
  }
  else {
    footer_list.classList.add("footer_small");
    footer_line.classList.add("footer_small");
    footer_contact.classList.add("footer_small");
  }
};
