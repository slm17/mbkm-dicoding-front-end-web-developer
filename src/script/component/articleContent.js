class ArticleContetnt extends HTMLElement{

    set coronaItem(item){
        this._coronaItem = item;
        this.render();
    }

    render(){
        const date = new Date(this._coronaItem.lastUpdate);
        const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        this.innerHTML = `
        <style>
        article section {
            width: 90%;
            margin: auto;
            padding-top: 40px;
          }
          
          article section .h1 {
            text-align: center;
            font-size: 40px;
          }
          
          article section .p {
            text-align: center;
            font-size: 20px;
            margin-top: 20px;
          }
          
          article .last-update {
            text-align: center;
          }
          
          article section .container {
            margin: auto;
            width: 80%;
            margin-top: 60px;
            display: flex;
            justify-content: space-between;
          }
          
          article section .container .items {
            width: 32%;
            background-color: lightgreen;
            border-radius: 10px;
          }
          
          article section .container .items .container-items {
            width: 90%;
            margin: auto;
            display: flex;
            justify-content: space-between;
          }
          
          article section .container .items .container-items .keterangan {
            line-height: 40px;
            font-size: 20px;
            color: #ffffff;
          }
          
          article section .container .items .container-items .keterangan .total {
            font-size: 40px;
          }
          
          article section .container .items .container-items .emoji {
            font-size: 60px;
          }
          
          article section .container .merah {
            background-color: #f82649;
          }
          article section .container .hijau {
            background-color: #09ad95;
          }
          article section .container .ungu {
            background-color: #d43f8d;
          }

          /* Responsive NoteBook */
          @media screen and (max-width: 1168px) {
          article section .container {
            flex-wrap: wrap;
          }

          article section .container .items {
            width: 49%;
            margin-bottom: 10px;
          }
        }

        /* Responsive Mobile */
        @media screen and (max-width: 868px) {
          article section .container {
            flex-direction: column;
          }

          article section .container .items {
            width: 100%;
            margin-bottom: 10px;
          }
        }
        
        </style>

        <article>
                <section>
                    <p class="h1">Corona.id</p>
                    <p class="p">Coronavirus Indonesia Live Data</p>

                    <div class="container">
                        <div class="items merah">
                            <div class="container-items">
                                <div class="keterangan">
                                    <p>TOTAL POSITIF</p>
                                    <p class="total">${this._coronaItem.confirmed.value}</p>
                                    <p>Orang</p>
                                </div>
                                <p class="emoji">&#x1F61F</p>
                            </div>
                        </div>
                        <div class="items hijau">
                            <div class="container-items">
                                <div class="keterangan">
                                    <p>TOTAL SEMBUH</p>
                                    <p class="total">${this._coronaItem.recovered.value}</p>
                                    <p>Orang</p>
                                </div>
                                <p class="emoji">&#x1F600</p>
                            </div>
                        </div>
                        <div class="items ungu">
                            <div class="container-items">
                                <div class="keterangan">
                                    <p>TOTAL MENINGGAL</p>
                                    <p class="total">${this._coronaItem.deaths.value}</p>
                                    <p>Orang</p>
                                </div>
                                <p class="emoji">&#x1F625</p>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        <article>
                <section class="last-update">
                    <p>Last Update : ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}</p>
                </section>
        </article>
        `;
    }
}
customElements.define("article-content", ArticleContetnt);