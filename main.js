const url = "https://openapi.programming-hero.com/api/ai/tools";

fetch(url)
	.then((res) => res.json())
	.then((data) => showData(data));

const singleDataShow = (id) => {
	const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			data = data.data;
			console.log(data.pricing[0].plan);
			const modalContent = document.querySelector(".modal-dialog");
			modalContent.innerHTML = `
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">${data.tool_name}</h1>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
						<div class="d-flex justify-content-between">
							<div class="card me-4">
								<img src="..." class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Go somewhere</a>
								</div>
							</div>
							<div class="card">
								<img src="${data.image_link[0]}" class="card-img-top" alt="...">
								<div class="card-body d-flex justify-content-between">
									<div class ="w-50">
										<h5 class="card-title">Features</h5>
										<ul>
											<li style="font-size:14px">${data.features[1].feature_name}</li>
											<li style="font-size:14px">${data.features[2].feature_name}</li>
											<li style="font-size:14px">${data.features[3].feature_name}</li>
										</ul>
									</div>
									<table class="table w-50">
										<thead>
											<tr>
												<th scope="col">Plan</th>
												<th scope="col">Price</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td scope="row">${data.pricing[0].plan}</td>
												<td>${data.pricing[0].price}</td>
											</tr>
											<tr>
												<td scope="row">${data.pricing[1].plan}</td>
												<td>${data.pricing[1].price}</td>
											</tr>
											<tr>
												<td scope="row">${data.pricing[2].plan}</td>
												<td>${data.pricing[2].price}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			`;
		});
};

const showData = (datas) => {
	const allData = datas.data.tools;

	const div = document.getElementById("main-div");

	allData.forEach((data) => {
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
              <a class="btn btn-primary" data-bs-toggle="modal"
			data-bs-target="#apiModal" onclick="singleDataShow('${data.id}')">${
			data.name
		}</a>
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
