class EditRoom extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <style>

        </style>
        
        <div class="col-md-7 justify-content-md-center add-room">
            <h4 class="mb-3">Edit Room</h4>
            <form class="needs-validation" novalidate>
            <div class="row g-3">

            <img src="https://media.suara.com/pictures/970x544/2022/02/02/49335-ilustrasi-menyiasati-ruangan-minimalis.jpg" class="rounded d-block" 
                     style="width: 200px; height: 200px; object-fit: cover;">

                <div class="mb-3">
                    <label for="formFileSm" class="form-label">Rooms Image</label>
                    <input class="form-control form-control-sm" id="formFileSm" type="file">
                </div>

                <div class="col-12">
                    <label for="name" class="form-label">Room Name </label>
                    <select class="form-control" id="roomNameList">
                        <option>1</option>
                    </select>
                </div>

                <div class="col-12">
                    <label for="location" class="form-label">Location</label>
                    <input type="text" class="form-control" id="location" placeholder="1234 Main St" required>
                </div>

                <div class="col-12">
                    <label for="capacity" class="form-label">Capacity <span class="text-muted">(Optional)</span></label>
                    <input type="number" class="form-control" id="capacity" placeholder="12">
                </div>

            </div>

            <hr class="my-4">


                <button class="w-100 btn btn-primary" type="submit">Change</button>
            </form>
        </div>
        `;

        const data = {
            "code": 200,
            "message": "success",
            "data": [
                {
                    "id": 1,
                    "name": "Ruang BD 1.4",
                    "location": "Bukit Jimbaran",
                    "capacity": 20,
                    "organizationID": 1,
                    "createdAt": "2022-10-19T09:46:42Z"
                },
                {
                    "id": 2,
                    "name": "Ruang BD 1.3",
                    "location": "Bukit Jimbaran",
                    "capacity": 20,
                    "organizationID": 1,
                    "createdAt": "2022-10-19T09:47:08Z"
                },
                {
                    "id": 3,
                    "name": "Ruang BD 1.5",
                    "location": "Bukit Jimbaran",
                    "capacity": 20,
                    "organizationID": 1,
                    "createdAt": "2022-10-19T09:47:31Z"
                }
            ]
        };


        
        const select = document.getElementById("roomNameList");

        data["data"].forEach(element => {
            console.log(element);

            const option = document.createElement("option");

            option.innerHTML = element["name"];

            select.appendChild(option);
        });


    }
}


customElements.define("edit-room",EditRoom);