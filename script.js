var header = document.getElementById("header");
console.log(header);

window.onscroll=function(){
showScrollBar(header);
};


function showScrollBar(header){
    console.log("in function")
    var yScroll = window.scrollY;
    if(yScroll > window.innerHeight - 200){
        console.log("over 300")
        header.classList.toggle('fade-in');
        header.style.opacity = "1";
    } else{
        header.classList.toggle('fade-out');
        header.style.opacity = "0";
    }
}

var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  // read the link on how above code works
  
  var findMe = document.querySelectorAll('.appear');
  
  window.addEventListener('scroll', function(event) {
  // add event on scroll
  findMe.forEach(element => {
      //for each .thisisatest
      if (isInViewport(element)) {
        //if in Viewport
        element.classList.add("animate-visible");
        element.classList.remove("animate-invisible");
      } else{
        element.classList.add("animate-invisible");
        element.classList.remove("animate-visible");
      }
  });
  }, false);

  var findSection = document.querySelectorAll('section');
  
  window.addEventListener('scroll', function(event) {
  // add event on scroll
  findSection.forEach(element => {
      //for each .thisisatest
      if (isInViewport(element)) {
      var sectName = element.getAttribute("id");
      var header = this.document.getElementById("header");
      header.sectName.style.color = "red";
      }
  });
  }, false);

