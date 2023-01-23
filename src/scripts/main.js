import './normalize.css'
import './style.css'

// this imports all images from ./lib 

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  console.log(images)
  return images;
}

const images = importAll(require.context('./lib', false, /\.(png|jpe?g|svg)$/));

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "EST";
  
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();

  function marquee() {
    let projects = ['Couch Prints - Waterfall EP', 'Paper Magazine - Meg Superstar Princess', 'Vevo - Toy Story 6']
    let leftMarquee = document.getElementById("left-marquee")
    let rightMarquee = document.getElementById("right-marquee")

    function addProjects() {
        for (var i = 0; i < projects.length; i++) {
            leftMarquee.innerHTML = leftMarquee.innerHTML + ' , ' + projects[i] 
            rightMarquee.innerHTML = rightMarquee.innerHTML  + projects[i] + ' , '
            console.log(leftMarquee.innerHTML)
          }
    }
    for (var i = 0; i < 25; i++) {
        addProjects()
        }
}
marquee()
