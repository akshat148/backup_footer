// footer.js

// Function to render the footer layout inside the `.site-footer` class
export function renderFooter() {
    const footerHTML = `
        <!-- Section F1-A -->
        <div style="text-align: center;" class="footer-1">
            <b>Vegamovies | VEGAMovies Nl | Vegamovies.is - Now Vegamovies3.ORG</b>
        </div>
        <br>
        <br>
        <!-- Section F1-B -->
        <div style="text-align: center;" class="footer-2">
            <p>
                <a href="#">
                    <span style="color: red;">
                        <b>VEGAMovies</b>
                    </span>
                </a>
                is the top site for free Bollywood, Hollywood movies, and web series. At Vegamovies.nu, you’ll find a huge selection of blockbuster hits, indie films, and international favorites. Vegamovies.nl stands out with its exclusive original content, featuring acclaimed dramas and historical stories. Enjoy high-quality streaming on any device with advanced technology, and get personalized recommendations to discover new favorites. Plus, download movies and shows for offline viewing anytime, anywhere.
            </p>
        </div>
        <!-- Section F1-C -->
        <div style="text-align: center;" class="footer-3">
            <p>
                <span style="color: #00ff1c;">
                    <b>
                        <a href="#" style="color: #00ff1c;">Vegamovies3</a>
                    </b>
                </span>
                offers a vast collection of movies, featuring content from popular sources like 
                <a href="#">
                    <b>
                        <span style="color: red;">Movies4u</span>
                    </b>
                </a>
                , HDHub4u, 
                <a href="#">
                    <b>
                        <span style="color: red;">MKVMoviesPoint</span>
                    </b>
                </a>
                , 
                <a href="#" style="color: #00ff1c;">
                    <b>MoviesNation</b>
                </a>
                , 
                <a href="#">
                    <b>
                        <span style="color: red;">MoviesMod</span>
                    </b>
                </a>
                , and 
                <a href="#">
                    <b>
                        <span style="color: red; font-family: inherit;">Zeefliz.one</span>
                    </b>
                </a>
                . It’s your one-stop destination for a wide range of films, from the latest blockbusters to timeless classics, all in one convenient place. Enjoy high-quality streaming and a diverse selection to satisfy any movie lover's taste!
            </p>
        </div>
        <br>
        <!-- Section F1-D -->
        <p class="default-copyright">
            Copyright © 2020. Created by ❤️ Vegamovies Team ❤️
        </p>
        <!-- Section F1-E -->
        <div class="footer-txt">
            <a href="#">Vegamovies</a>
        </div>
        <!-- Section F1-F -->
        <div class="footer-menu">
            <center>
                <a href="#" data-wpel-link="internal">🏤 Contact Us</a> |
                <a href="#" data-wpel-link="internal">⛽ Request Us</a> |
                <a href="#" data-wpel-link="internal">📔 DMCA</a> |
                <a href="#" data-wpel-link="internal">🏆 About Us</a> |
                <a href="#" data-wpel-link="internal">📰 Sitemap</a>
            </center>
        </div>
        <hr>
    `;

    // Find the element with the class "site-footer" and insert the footer content
    const siteFooter = document.querySelector('.site-footer');
    if (siteFooter) {
        siteFooter.innerHTML = footerHTML;
    }
}
