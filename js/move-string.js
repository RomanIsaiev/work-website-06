let content =
  '<div class="move-sting"><p class"move-string-text" style="margin-right: 5px">ТАРИФИ</p> <img style="margin-right: 5px" src="/images/tarif-dot.svg" alt="dot" width="5" height="5" /></div>';

const mySuperMarquee = new SuperMarquee(
  document.getElementById("supermarquee"),
  {
    content: content,
  }
);
