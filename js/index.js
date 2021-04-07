const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(function(link){
    link.addEventListener("mouseover", function(event){
        link.style.color = "red"
    })
})

navLinks.forEach(function(link){
    link.addEventListener("click", function(event){
        event.preventDefault();
    })
})

const headerHOne = document.querySelector('.logo-heading')
document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        headerHOne.style.color = "pink"
    }
})

const ps = document.querySelectorAll('.content-section p')
const colors = ["red", "blue", "green", "pink", "black", "orange", "white"]
const totalColors = colors.length;
document.addEventListener('scroll', function(event){
    ps.forEach(function(p){
        let rand = Math.random();
        let randIndex = Math.floor(rand * totalColors)
        let randomColor = colors[randIndex]
        p.style.color = randomColor
    })
})

const image = document.querySelector('img:nth-of-type(1)')
image.addEventListener("click", function(event){
    // console.log(JSON.stringify(event));
    console.log(event);

    image.style.opacity = "0.5"
})

image.addEventListener("dblclick", function(event){
    image.style.opacity = "0.1"
})

window.addEventListener('load', function(event){
    navLinks.forEach(function(link){
        let rand = Math.random();
        let randIndex = Math.floor(rand * totalColors)
        let randomColor = colors[randIndex]
        link.style.color = randomColor
    })
})

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    image.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  image.onwheel = zoom;

  image.addEventListener('wheel', zoom);


  function logSelection(event) {
    const iH2 = document.querySelector('.intro h2');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const H2 = document.querySelector('.text-content h2');
  H2.addEventListener('select', logSelection);

  window.addEventListener('resize', function(event){
      H2.style.color = "red"
  })


  // These sign up buttons are nested inside the document 
  document.querySelectorAll('.btn').forEach(function(element) { 
    element.addEventListener('click', function(event) {

        // Modified from: https://stackoverflow.com/a/15466856
        var el = document.createElement("div");
        el.classList.add("sign-up-modal");
        el.setAttribute("style", "position:absolute; top: 0%; left: 0%; background-color:red; font-size: xx-large; z-index: 900000; width: 100%; height: 100%");
        el.innerHTML = "sign up";
        document.body.appendChild(el);

        event.stopPropagation();

      });
  })
  
  // This is attached to the document which encapsulates the sign up buttons
  document.addEventListener('click', function(event) {
    document.querySelectorAll('.sign-up-modal').forEach(function(element) { 
        element.remove();
    });
  });