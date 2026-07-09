const startBtn = document.getElementById("startBtn");

const hero = document.querySelector(".hero");
const sections = document.querySelectorAll(".hidden");


startBtn.addEventListener("click", () => {

    hero.style.display = "none";

    sections.forEach(section => {
    section.style.display = "flex";
    section.classList.remove("hidden");
});

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    createHearts();

});


/* Floating hearts */

function createHearts(){

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.bottom="-20px";
        heart.style.fontSize=(Math.random()*20+15)+"px";
        heart.style.opacity="0.8";
        heart.style.animation="floatHeart 6s linear";

        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },6000);


    },500);

}setInterval(()=>{

const star=document.createElement("div");

star.className="shooting-star";

star.style.right=Math.random()*100+"vw";

document.body.appendChild(star);


setTimeout(()=>{

star.remove();

},3000);


},4000);
// Fireworks when reaching the ending

const ending = document.querySelector(".ending");

const endingObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            createFireworks();

        }

    });

},{
    threshold:0.5
});


endingObserver.observe(ending);



function createFireworks(){

    for(let i=0;i<80;i++){

        const spark=document.createElement("div");

        spark.className="spark";

        spark.style.left=Math.random()*100+"vw";
        spark.style.top="50vh";

        spark.style.setProperty(
            "--x",
            (Math.random()*600-300)+"px"
        );

        spark.style.setProperty(
            "--y",
            (Math.random()*600-300)+"px"
        );


        document.body.appendChild(spark);


        setTimeout(()=>{

            spark.remove();

        },1500);

    }

}