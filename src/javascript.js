function search(){
    endpoint = ""
    token = ""
    fetch(endpoint) 
    .then((response) => response.json())

    .then((data) => {
        data.forEach(function (value) {
            const modelResults = `<div class="col-md-6 mb-4 text-center">
                                        <img class="responsive" src="${value.show.image.medium}">
                                    </div>
                                    
                                    <div class="col-md-6 summaryText">
                                        <h5>${value.show.name}</h5>
                                        <p>Rating: ${value.show.rating.average}/10</p>
                                        <p>Genre: ${value.show.genres}</p>
                                        <p>${value.show.summary}</p>
                                    </div>`;
            output.insertAdjacentHTML('beforeend', articleElement); 
            
            
        });
    });

 }
