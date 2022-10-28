

class SideNavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <style>
            body {
                min-height: 100vh;
                min-height: -webkit-fill-available;
              }
              
              html {
                height: -webkit-fill-available;
              }
              
              main {
                height: 100vh;
                height: -webkit-fill-available;
                max-height: 100vh;
                overflow-x: auto;
                overflow-y: hidden;
              }
              
              .dropdown-toggle { outline: 0; }
              
              .btn-toggle {
                padding: .25rem .5rem;
                font-weight: 600;
                color: rgba(0, 0, 0, .65);
                background-color: transparent;
              }
              .btn-toggle:hover,
              .btn-toggle:focus {
                color: rgba(0, 0, 0, .85);
                background-color: #d2f4ea;
              }
              
              .btn-toggle::before {
                width: 1.25em;
                line-height: 0;
                content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
                transition: transform .35s ease;
                transform-origin: .5em 50%;
              }
              
              .btn-toggle[aria-expanded="true"] {
                color: rgba(0, 0, 0, .85);
              }
              .btn-toggle[aria-expanded="true"]::before {
                transform: rotate(90deg);
              }
              
              .btn-toggle-nav a {
                padding: .1875rem .5rem;
                margin-top: .125rem;
                margin-left: 1.25rem;
              }
              .btn-toggle-nav a:hover,
              .btn-toggle-nav a:focus {
                background-color: #d2f4ea;
              }
              
              .scrollarea {
                overflow-y: auto;
              }

              .sideNav{
                height: 50em;
              }
              
            </style>
            <div class="flex-shrink-0 p-3 shadow-sm p-3 mb-5 bg-white rounded sideNav">
                <span class="fs-5 fw-semibold">Menu</span>
                <ul class="list-unstyled ps-0">
                <li class="mb-1">
                    <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                    Dashboard
                    </button>
                    <div class="collapse" id="home-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Dashboard</a></li>
                    </ul>
                    </div>
                </li>
                <li class="mb-1">
                    <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                    Rooms
                    </button>
                    <div class="collapse" id="dashboard-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="#rooms" class="link-dark d-inline-flex text-decoration-none rounded">Ruangan</a></li>
                        <li><a href="#add-room" class="link-dark d-inline-flex text-decoration-none rounded">Tambah Ruangan</a></li>
                        <li><a href="#edit-room" class="link-dark d-inline-flex text-decoration-none rounded">Edit Ruangan</a></li>
                    </ul>
                    </div>
                </li>
                <li class="mb-1">
                    <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                    Schedules
                    </button>
                    <div class="collapse" id="orders-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Jadwal</a></li>
                        <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Approve Jadwal</a></li>
                    </ul>
                    </div>
                </li>
                <li class="border-top my-3"></li>
                </ul>
            </div>
        `
    }
}

customElements.define("side-navbar",SideNavbar);