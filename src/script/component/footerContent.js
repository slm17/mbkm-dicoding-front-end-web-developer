class FooterContent extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <style>
        footer {
            margin-top: 100px;
            padding: 25px 0;
            display: flex;
            background-color: #ffffff;
            flex-direction: column;
          }
          
          footer p {
            margin-top: 10px;
            text-align: center;
          }
          
          footer .icon {
            margin: auto;
            display: flex;
            width: 150px;
            justify-content: space-between;
          }
          
          footer .icon a {
            text-decoration: none;
            color: black;
            width: 40px;
            font-size: 50px;
          }
        </style>

        <footer>
          <div class="icon">
            <a href="https://www.linkedin.com/in/sulaiman-a184a5208/"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a href="https://github.com/slm17"
              ><i class="fab fa-github-square"></i
            ></a>
          </div>
          <p>Cteated by:Sulaiman</p>
        </footer>
        `
    }
}
customElements.define("footer-content", FooterContent);