const images =["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];//

const bgImage = document.createElement("img");//javascript에서 HTML만들기
bgImage.src = `img/${chosenImage}`;//HTML: <img src=""> 
document.body.appendChild(bgImage);//body에 append시키기 /prepend(bgImage)하면 img가 html의 body부분의 상단에 위치하게된다



