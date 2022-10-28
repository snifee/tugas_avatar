class Breadcrumb extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <style>
            #breadcrumbContainer{
                padding: 0.5em;
                padding-bottom: 0;
                padding-left: 1.5em;
            }

            hr{
                margin: 0;
                padding:0;
                margin-left:0.5em;
            }
        </style>
        <div id="breadcrumbContainer">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">Menu</li>
                <li class="breadcrumb-item" id="anchorActive" aria-current="page">Rooms</li>
            </ol>
        </div>
        <hr>
        `;
        window.addEventListener("hashchange", function() {
            const anchorActive = this.document.getElementById("anchorActive");
            if (location.hash === "#rooms") {
        
                anchorActive.innerHTML="Rooms";
            
            }else if (location.hash === "#add-room") {
                
                anchorActive.innerHTML="Edit Room";
            
            }else if (location.hash === "#edit-room") {
        
                anchorActive.innerHTML="Edit Room";
            
            }
        });
    }

    
}

customElements.define('breadcrumb-component',Breadcrumb);