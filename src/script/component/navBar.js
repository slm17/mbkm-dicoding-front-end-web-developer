class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <style>
            header nav {
            background-color: #FFFFFF;
            height: 100px;
            display: flex;
            }
            
            header nav h2 {
            margin: auto;
            }
        </style>

        <nav>
            <h2>Covid-19 Monitoring Data</h2>
        </nav>
        `;
    }
}
customElements.define("nav-bar", Navbar);