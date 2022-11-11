import '../component/navBar.js';
import '../component/articleContent.js';
import '../component/footerContent.js';

const main = () => {
    const baseUrl = 'https://covid19.mathdro.id/api/countries/Indonesia/';

    const getData = () => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(results => {
                const coronaReportElement = document.querySelector('article-content');
                coronaReportElement.coronaItem = results;
            })
            .catch(() => showMessage());
    };

    const showMessage = (message = 'Check your internet connection !') =>{
        alert(message);
    };

    getData();
};

export default main;