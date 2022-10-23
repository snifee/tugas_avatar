

class SideNavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="left-side">
                <span>DASHBOARDS</span>
                <ul>
                    <li>
                        <a href="">Dashboard</a>
                    </li>
                </ul>

                <span>ROOMS</span>
                <ul>
                    <li>
                        <a href="">Ruangan</a>
                    </li>
                    <li>
                        <a href="">Tambah Ruangan</a>
                    </li>
                </ul>

                <span>SCHEDLUES</span>
                <ul>
                    <li>
                        <a href="">Jadwal</a>
                    </li>
                    <li>
                        <a href="">Approve Jadwal</a>
                    </li>
                </ul>
            </div>
        `
    }
}

customElements.define("side-navbar",SideNavbar);