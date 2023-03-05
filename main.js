const url = "https://openapi.programming-hero.com/api/ai/tools";

fetch(url)
	.then((res) => res.json())
	.then((data) => showData(data));

const showData = (datas) => {
	const allData = datas.data.tools;

	const div = document.getElementById("main-div");

	allData.forEach((data) => {
		console.log(data);
		const newDiv = document.createElement("div");
		newDiv.classList.add("col-md-4");
		const card = `
          
            <div class="card mb-3" style="width: 18rem;">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">
              ${
								data.description === null
									? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, tempora."
									: data.description
							}
              </p>
              <a href="#" class="btn btn-primary">${data.name}</a>
            </div>
          </div>
        
`;
		newDiv.innerHTML = card;
		div.appendChild(newDiv);
	});
};

/* 
const showData = (datas) => {
	const div = document.getElementById("main-div");
	datas.slice(0, 100).forEach((data) => {
		const newDiv = document.createElement("div");

		newDiv.innerHTML = `<p class="text-primary" style="font-size: 22px">${data.name}</p>
      <p class="text-secondary" style="font-size: 16px">${data.body}</p>
    `;
		div.appendChild(newDiv);
	});
};


 */
