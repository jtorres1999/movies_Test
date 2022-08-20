const API_KEY= 'api_key=69fdf62eeaf02222c2a4c635103d5c3e';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

getMovies(API_URL);
function getMovies(url) {
    lastUrl = url;
      fetch(url).then(res => res.json()).then(data => {
          console.log(data.results)
          if(data.results.length !== 0){
              showMovies(data.results);
              currentPage = data.page;
              nextPage = currentPage + 1;
              prevPage = currentPage - 1;
              totalPages = data.total_pages;
  
              current.innerText = currentPage;
  
              if(currentPage <= 1){
                prev.classList.add('disabled');
                next.classList.remove('disabled')
              }else if(currentPage>= totalPages){
                prev.classList.remove('disabled');
                next.classList.add('disabled')
              }else{
                prev.classList.remove('disabled');
                next.classList.remove('disabled')
              }
  
              /* tagsEl.scrollIntoView({behavior : 'smooth'}) */
  
          }else{
              main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
          }
         
      })
  
  }

  function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h5 style="font-weight: bold;">${title}</h5>
                ${overview}

                <br/> 
                <button class="know-more" id="${id}">WATCH TRAILER
                <b-icon icon="play-circle-fill" animation="throb" font-scale="2"></b-icon>
                </button>
                <button class="know-more2" id="${id}">TO WATCHLIST </button>
                
            </div>
        
        `
        main.appendChild(movieEl);
        document.getElementById(id).addEventListener('click', () => {
          console.log(id)
          openNav(movie)
        })
    })
    
}

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}
