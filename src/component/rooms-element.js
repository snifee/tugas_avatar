class Rooms extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="col-md-7 justify-content-md-center rooms">
                <h4 class="mb-3">List Room</h4>
                <div class="row g-3">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Room</th>
                            <th scope="col">Location</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody id="listRooms">

                        </tbody>
                    </table>
                </div>
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


        
        const ul = document.getElementById("listRooms");

        data["data"].forEach(element => {
            console.log(element);

            const tr = document.createElement("tr");
            const th = document.createElement("td");
            const th1 = document.createElement("td");
            const th2 = document.createElement("td");
            const th3 = document.createElement("td");
            const button = document.createElement("button");

            th.innerHTML = element["name"];
            th1.innerHTML = element["location"];
            th2.innerHTML = element["capacity"];
            button.innerHTML = "DELETE";

            button.setAttribute("type","button");
            button.setAttribute("class","btn btn-secondary btn-sm")
            th3.appendChild(button);

            tr.appendChild(th);
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);

            ul.appendChild(tr);
        });
        
    }


}


customElements.define('rooms-element',Rooms);