class AddRoom extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="col-4 add-room">
            <div class="row">
                <img src="https://media.suara.com/pictures/970x544/2022/02/02/49335-ilustrasi-menyiasati-ruangan-minimalis.jpg" class="rounded mx-auto d-block" alt="..." >
            </div>
            <div class="row">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="roomName" placeholder="Nama Ruangan">
                    <label for="roomName">Nama Ruangan</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="capacity" placeholder="Kapasitas">
                    <label for="capacity">Kapasitas</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="location" placeholder="Lokasi">
                    <label for="location">Lokasi</label>
                </div>
            </div>
        </div>
        `
    }
}


customElements.define("add-room",AddRoom);