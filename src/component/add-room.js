class AddRoom extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <style>

        </style>
        
        <div class="col-md-7 justify-content-md-center add-room">
            <h4 class="mb-3">Add Room</h4>
            <form class="needs-validation" id="addRoom" novalidate>
            <div class="row g-3">

            <img src="https://media.suara.com/pictures/970x544/2022/02/02/49335-ilustrasi-menyiasati-ruangan-minimalis.jpg" class="rounded d-block" 
                     style="width: 200px; height: 200px; object-fit: cover;">

                <div class="mb-3">
                    <label for="formFileSm" class="form-label">Rooms Image</label>
                    <input class="form-control form-control-sm" id="formFileSm" type="file">
                </div>

                <div class="col-12">
                    <label for="name" class="form-label">Room Name <span class="text-muted">(Optional)</span></label>
                    <input type="text" class="form-control" id="name"">
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


                <button class="w-100 btn btn-primary" type="submit">Add</button>
            </form>
        </div>
        `


    const form = document.getElementById("addRoom");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        

        const body = {
            "name": form["name"].value,
            "capacity": form["capacity"].value,
            "location": form["location"].value,
            "organizationID": 1
        }

        console.log(body);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": "12345"
            },
            body: JSON.stringify(body)
        }

        const sendResult = fetch(`/api/v1/rooms`, options)
        .then(response => response.json())
        .then(json => console.log(json));

    })
}
}


customElements.define("add-room",AddRoom);