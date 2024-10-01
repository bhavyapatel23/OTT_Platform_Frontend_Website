//background's color change in black color while scrolling
gsap.to("header,section",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"header,section",
        scroller:"body",
        start: "top 0%",
        end: "top -40%",
        scrub:1
    }
});



let left_btn=document.getElementsByClassName("bi-chevron-left")[0];
let right_btn=document.getElementsByClassName("bi-chevron-right")[0];
let left_btn1=document.getElementsByClassName("bi-chevron-left")[1];
let right_btn1=document.getElementsByClassName("bi-chevron-right")[1];
let cards=document.getElementsByClassName('cards')[0];
let cards1=document.getElementsByClassName('cards')[1];
let search=document.getElementsByClassName('search')[0];
let search_input=document.getElementById('search_input');

// js  for left-right btn 
 
left_btn.addEventListener("click", () =>{cards.scrollLeft-=140;

});
right_btn.addEventListener('click', ()=>{
    cards.scrollLeft+=140;
});

left_btn1.addEventListener("click", () =>{cards1.scrollLeft-=140;

});
right_btn1.addEventListener('click', ()=>{
    cards1.scrollLeft+=140;
});

//fetching data from movie.json file 
let json_url="movie.json";


fetch(json_url).then(Response => Response.json())//convert data in json format
    .then((data) =>{
        data.forEach((ele)=>{
            let {name,imdb,date,sposter,bposter,genre,url}=ele;
            let card=document.createElement('a');//create a tag 
            card.classList.add('card');//add class=card
            card.href=url;
            card.innerHTML=`<img src="${sposter}"class="poster" alt="${name}">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                    </div>
                </div>
            </div>`

            cards.appendChild(card);//add card in cards
        });

        //filter cards which have imdb >=9
        data.forEach((ele)=>{
            let {name,imdb,date,sposter,bposter,genre,url}=ele;
            let card=document.createElement("a");
            if(imdb>=9.0)
            {
                card.classList.add('card');
                card.href=url;
                card.innerHTML=`<img src="${sposter}"class="poster" alt="${name}">
                <div class="rest_card">
                    <img src="${bposter}" alt="">
                    <div class="cont">
                        <h4>${name}</h4>
                        <div class="sub">
                            <p>${genre}, ${date}</p>
                        </div>
                    </div>
                </div>`
                cards1.appendChild(card);//add card in card1
            }

        });
    
        //search data load
        data.forEach(element =>{
            let{name,imdb,date,sposter,genre,url}=element;
            let card=document.createElement('a');
            card.classList.add('card');
            card.href=url;
            card.innerHTML=`<img src="${sposter}" alt="">
            <div class="cont">
                <h3>${name}</h3>
                <p>${genre} , ${date} , <span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</p>
            </div>`
            search.appendChild(card);
        });

        //search filter
        
        search_input.addEventListener('keyup',()=>{
            let filter=search_input.value.toUpperCase();
            let a=search.getElementsByTagName("a");

            for (let index=0;index<a.length;index++){
                let b=a[index].getElementsByClassName("cont")[0];
                let TextValue=b.textContent || b.innerText;
                if(TextValue.toUpperCase().indexOf(filter)>-1)
                {
                    a[index].style.display="flex";
                    search.style.visibility="visible";
                    search.style.opacity=1;
                }
                else{
                    
                    a[index].style.display="none";
                }
                if(search_input.value==0){
                    search.style.visibility="hidden";
                    search.style.opacity=0;
                }
            }
            
        });

        //  js for play-pause btn
        let video=document.getElementsByTagName("video")[0];
        let play=document.getElementById('play');
        play.addEventListener('click',()=>{
            if(video.paused){
                video.play();
            play.innerHTML=`Pause <i class="bi bi-pause-fill"></i>`           
         }
         else{
            video.pause()
            play.innerHTML=`Watch <i class="bi bi-play-fill"></i>`
         }
        });

     // js for active tab
        let series = document.getElementById("series");
        let movies = document.getElementById("movies");
        let tvshow = document.getElementById('tvshow');
        tvshow.addEventListener("click",()=>{
            let ele=document.getElementById('navele');
            ele.innerHTML=`<li>
            <a href="Stream_It1.html"  id="home">Home</a>
        </li>
        <li >
            <a  href="#" id="series">Series</a>
        </li>
        <li>
            <a href="#" id="movies">Movies</a>
        </li>
        <li style="background-color: rgb(255, 255, 255,0.573);">
            <a style="color:black;" href="#">TV Show</a>
        </li>`
            
        })
        series.addEventListener("click",()=>{
            let ele=document.getElementById('navele');
            ele.innerHTML=`<li>
            <a href="Stream_It1.html"  id="home">Home</a>
        </li>
        <li style="background-color: rgb(255, 255, 255,0.573);">
            <a style="color:black;" href="#" id="series">Series</a>
        </li>
        <li>
            <a href="#" id="movies">Movies</a>
        </li>
        <li>
            <a href="#">TV Show</a>
        </li>`
           
        });
        movies.addEventListener("click",()=>{
            let ele=document.getElementById('navele');
            ele.innerHTML=`<li>
            <a href="Stream_It1.html"  id="home">Home</a>
        </li>
        <li >
            <a  href="#" id="series">Series</a>
        </li>
        <li style="background-color: rgb(255, 255, 255,0.573);">
            <a style="color:black;" href="#" id="movies">Movies</a>
        </li>
        <li>
            <a href="#">TV Show</a>
        </li>`
            
        });

    });
    
    
