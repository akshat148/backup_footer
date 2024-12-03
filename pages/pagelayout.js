import { renderMovieDetails } from './pagefunction.js'; // Ensure import is in place

import { renderSeriesDetails } from './pagefunctions.js'; // Ensure import is in places

export function renderPageLayout(var_0 = 'movie', var_1, var_2, var_3, var_4, var_5, var_6a,var_6b,var_6c,var_6d,var_6e, var_7, var_8, var_9) {
    const pageMain = document.querySelector('.page-main');
    if (pageMain) {
        pageMain.innerHTML = pageMain;
    }

    const layoutHTML = `
        <!-- Section M1-left(up) starts here -->
        <div class="sidebar-left-outer">

            <!-- Rest of sections -->

            <div class="pm-up">

            </div>

            <!-- Rest of sections -->

            <!-- Section M1-left(up) D -->
            <hr>
            <h3 style="text-align: center;">
                <span style="color: #800080;">Winding Up ❤️</span>
            </h3>
            <p style="margin: 0; padding-top: 8px; padding-bottom: 7px;">
                Thank You For Visiting 
                <span style="color: #008000;">
                    <strong>
                        <a href="#" style="text-decoration: none; color: #eef425;">Vegamovies3.org</a>
                    </strong>
                </span>
                The Prefect Spot For HD Dual Audio (Hindi-English) Movies &amp; TV Series Download. So Please Keep Downloading &amp; Keep Sharing. Enjoy!
            </p>
            <center>
                <div class="add-banner">
                    <img src="/images/Casino_Gift_2024_hindi.jpg" alt="" style="max-width: 100%; height: auto; margin-top: 20px;" width="500" height="200">
                </div>
            </center>

            <!-- Section M1-left(up) E -->
            <div id="comments" class="comments-area">
                <div id="resppond" class="comments-respond">
                    <h3 class="cr-title">Leave a Reply</h3>
                    <form action="#" class="cr-form">
                        <p class="cr-f-notes">
                            <span>Your email address will not be published.</span>
                            <span>Required fields are marked <span>*</span></span>
                        </p>
                        <p class="cr-f-comment">
                            <label for="comment">Comment <span>*</span></label>
                            <textarea name="comment" id="comment" cols="45" rows="8" required></textarea>
                        </p>
                        <p class="cr-f-name">
                            <label for="name">Name <span>*</span></label>
                            <input type="text" name="name" id="name" required>
                        </p>
                        <p class="cr-f-email">
                            <label for="email">Email <span>*</span></label>
                            <input type="email" name="email" id="email" required>
                        </p>
                        <p class="cr-f-check">
                            <input type="checkbox" name="checkbox" id="checkbox" value="yes">
                            <label for="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
                        </p>
                        <p class="cr-f-submit">
                            <input type="submit" name="submit" id="submit" value="Post Comment">
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <!-- Section M1-left(up) ends here -->

        <!-- Section M1-right(down) starts here -->
        <div class="sidebar-outer">
            <aside>
                <!-- Section M1-right(down) A -->
                <section id="block-2" class="widget-search">
                    <form action="#" class="ws-form">
                        <label for="search" class="widget-search-l">Search Whatever You Want<br></label>
                        <div class="ws-i">
                            <input type="search" name="s" id="search" class="widget-search-i" required>
                            <button type="submit" class="widget-search-b">SEARCH</button>
                        </div>
                    </form>
                </section>

                <!-- Section M1-right(down) B -->
                <section id="block-3" class="widget-block">
                    <div class="wb-container">
                        <div class="wb-c-in">
                            <h2 class="widget-block-h">Latest Updates</h2>
                            <ul class="wb-ul">
                                <li class="wb-li">
                                    <a href="#" class="wb-li-a">Download Blue Lock (Season 1 – 2) [S02E06 Added] Multi Audio {Hindi-English-Japanese} Anime Series – 720p 1080p WEB-DL |</a>
                                </li>
                                <li class="wb-li">
                                    <a href="#" class="wb-li-a">Download Special Ops: Lioness (Season 1 – 2) [S02E07 – Added] English WEB Series 480p | 720p | 1080p WEB-DL |</a>
                                </li>
                                <li class="wb-li">
                                    <a href="#" class="wb-li-a">Download WWE Survivor Series WarGames (30th November 2024) WWE Special Show 480p [1.2GB] | 720p [2GB] | 1080p [14.4GB] WEB-DL |</a>
                                </li>
                                <li class="wb-li">
                                    <a href="#" class="wb-li-a">Download Elevation (2024) WEB-DL {English With Subtitles} Full Movie 480p [350MB] | 720p [750MB] | 1080p [1.6GB] |</a>
                                </li>
                                <li class="wb-li">
                                    <a href="#" class="wb-li-a">Download The Sex Lives Of College Girls (Season 1 – 3) [S03E02 Added] English WEB Series – 720p 1080p WEB-DL |</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
        <!-- Section M1-right(down) ends here -->
    `;

    pageMain.innerHTML = layoutHTML;

    if (var_0 == 'movie') {
    renderMovieDetails(var_1, var_2, var_3, var_4, var_5, var_6a,var_6b,var_6c,var_6d,var_6e, var_7, var_8, var_9);
    } else {
    renderSeriesDetails(var_1, var_2, var_3, var_4, var_5, var_6a,var_6b,var_6c,var_6d,var_6e, var_7, var_8, var_9);
    }
}
