// JavaScript layout for header section

export function renderHeader() {
    // Determine the image URL based on the current location
    const imageSrc = window.location.pathname.includes('/') ? '/images/logo.png' : 'images/logo.png';

    const headerHTML = `
        <!-- Section H1-A -->
        <div class="site-branding">
            <!-- Toggle Button with Dropdown -->
            <div class="toggle-btn">
                <span class="tb-icon" onclick="togglemenu()">
                    <i class="fa-solid fa-bars tb-i"></i>
                </span>
            </div>
            <a href="index.html"><img class="h-logo" src="${imageSrc}" alt="Vegamovies"></a>
        </div>
        <!-- Sidebar Menu -->
        <div class="header-mobile-menu" id="menu">
            <div class="tb-menu">
                <a href="index.html" style="padding-right: 29px;">VEGAMovies Home</a>
                <a href="index.html" style="padding-right: 96px;">Web Series</a>
                <a href="index.html" style="padding-right: 139px;">Genre</a>
                <a href="index.html" style="padding-right: 127px;">By Year</a>
                <a href="index.html" style="padding-right: 93px;">By Qualities</a>
            </div>
            <div class="tb-close">
                <i class="fa-solid fa-xmark tb-c" onclick="togglemenu()"></i>
            </div>
        </div>
        <!-- Section H1-B -->
        <div class="header-pc-menu">
            <!-- PC Menu -->
            <ul class="pc-m-main">
                <li class="pc-menu pc-m-up">
                    <a href="index.html">VEGAMovies Home</a>
                </li>
                <li class="pc-menu pc-m-sub" id="sub-list1" onmouseenter="togglesublist(id)" onmouseleave="closesublist(id)">
                    Web Series
                    <i class="fa-solid fa-angle-down"></i>
                    <ul class="pc-sub-list">
                        <li class="pc-sl-items"><a href="index.html">Web Series</a></li>
                        <li class="pc-sl-items"><a href="index.html">Biography</a></li>
                        <li class="pc-sl-items"><a href="index.html">Disney plus hotstar</a></li>
                        <li class="pc-sl-items"><a href="index.html">Amazon prime video</a></li>
                    </ul>
                </li>
                <li class="pc-menu pc-m-sub" id="sub-list2" onmouseenter="togglesublist(id)" onmouseleave="closesublist(id)">
                    Genre
                    <i class="fa-solid fa-angle-down"></i>
                    <ul class="pc-sub-list">
                        <li class="pc-sl-items"><a href="index.html">Action</a></li>
                        <li class="pc-sl-items"><a href="index.html">Animation</a></li>
                        <li class="pc-sl-items"><a href="index.html">Drama</a></li>
                        <li class="pc-sl-items"><a href="index.html">Family</a></li>
                        <li class="pc-sl-items"><a href="index.html">Comedy</a></li>
                        <li class="pc-sl-items"><a href="index.html">Crime</a></li>
                        <li class="pc-sl-items"><a href="index.html">Romance</a></li>
                        <li class="pc-sl-items"><a href="index.html">Romantic</a></li>
                        <li class="pc-sl-items"><a href="index.html">Horror</a></li>
                        <li class="pc-sl-items"><a href="index.html">Fantasy</a></li>
                        <li class="pc-sl-items"><a href="index.html">War</a></li>
                        <li class="pc-sl-items"><a href="index.html">History</a></li>
                        <li class="pc-sl-items"><a href="index.html">Mistry</a></li>
                        <li class="pc-sl-items"><a href="index.html">Documentry</a></li>
                        <li class="pc-sl-items"><a href="index.html">Erotic</a></li>
                        <li class="pc-sl-items"><a href="index.html">Musical</a></li>
                        <li class="pc-sl-items"><a href="index.html">Suspense</a></li>
                        <li class="pc-sl-items"><a href="index.html">Adults</a></li>
                        <li class="pc-sl-items"><a href="index.html">Reality Show</a></li>
                        <li class="pc-sl-items"><a href="index.html">Tv Shows</a></li>
                    </ul>
                </li>
                <li class="pc-menu pc-m-sub" id="sub-list3" onmouseenter="togglesublist(id)" onmouseleave="closesublist(id)">
                    By Year
                    <i class="fa-solid fa-angle-down"></i>
                    <ul class="pc-sub-list">
                        <li class="pc-sl-items"><a href="index.html">2024</a></li>
                        <li class="pc-sl-items"><a href="index.html">2023</a></li>
                        <li class="pc-sl-items"><a href="index.html">2022</a></li>
                        <li class="pc-sl-items"><a href="index.html">2021</a></li>
                        <li class="pc-sl-items"><a href="index.html">2020</a></li>
                        <li class="pc-sl-items"><a href="index.html">2019</a></li>
                        <li class="pc-sl-items"><a href="index.html">2018</a></li>
                        <li class="pc-sl-items"><a href="index.html">2017</a></li>
                        <li class="pc-sl-items"><a href="index.html">2016</a></li>
                        <li class="pc-sl-items"><a href="index.html">2015</a></li>
                        <li class="pc-sl-items"><a href="index.html">2014</a></li>
                        <li class="pc-sl-items"><a href="index.html">2013</a></li>
                        <li class="pc-sl-items"><a href="index.html">2012</a></li>
                        <li class="pc-sl-items"><a href="index.html">2011</a></li>
                        <li class="pc-sl-items"><a href="index.html">2010</a></li>
                        <li class="pc-sl-items"><a href="index.html">2009</a></li>
                        <li class="pc-sl-items"><a href="index.html">2008</a></li>
                        <li class="pc-sl-items"><a href="index.html">2007</a></li>
                        <li class="pc-sl-items"><a href="index.html">2006</a></li>
                        <li class="pc-sl-items"><a href="index.html">2005</a></li>
                        <li class="pc-sl-items"><a href="index.html">2004</a></li>
                        <li class="pc-sl-items"><a href="index.html">2003</a></li>
                        <li class="pc-sl-items"><a href="index.html">2002</a></li>
                        <li class="pc-sl-items"><a href="index.html">2001</a></li>
                        <li class="pc-sl-items"><a href="index.html">2000</a></li>
                    </ul>
                </li>
                <li class="pc-menu pc-m-sub" id="sub-list4" onmouseenter="togglesublist(id)" onmouseleave="closesublist(id)">
                    By Qualities
                    <i class="fa-solid fa-angle-down"></i>
                    <ul class="pc-sub-list">
                        <li class="pc-sl-items"><a href="index.html">480p</a></li>
                        <li class="pc-sl-items"><a href="index.html">720p</a></li>
                        <li class="pc-sl-items"><a href="index.html">1080p</a></li>
                        <li class="pc-sl-items"><a href="index.html">10bit</a></li>
                        <li class="pc-sl-items"><a href="index.html">2160p</a></li>
                        <li class="pc-sl-items"><a href="index.html">4k</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- Section H1-C -->
        <div class="header-search">
            <form role="search" method="get" class="search-form" action="#">
                <label>
                    <input type="search" name="search" class="search-field" placeholder="Search ..." value>
                </label>
                <input type="submit" class="search-submit" value="SEARCH">
            </form>
        </div>
        <!-- Section H1-D -->
        <div id="header-social" class="header-social-s">
            <a href="index.html">
                <span class="headbt hs1"> Hindi Movies </span>
            </a>
            <a href="index.html">
                <span class="headbt hs2"> Bollywood (New) </span>
            </a>
            <a href="index.html">
                <span class="headbt hs3">
                    <div class="adulting">
                        <img src="images/18_p.png" alt="">
                    </div>
                    Desi Junction </span>
            </a>
            <a href="index.html">
                <span class="headbt hs4"> Join Telegram </span>
            </a>
        </div>
        <!-- Section H1-E -->
        <div class="header-menu">
            <ul class="header-menu-ul">
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">Home</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">480p</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">720p</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">1080p</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">4k</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">Action</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">Animation</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">English</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">Amazon prime video</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">Disney plus hotstar</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">Mx original</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">Zee original</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">Sony liv</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">Voot original</a></li>
                <li class="header-menu-li"><a href="index.html" class="header-menu-a">Netflix</a></li>
            </ul>
        </div>
    `;
    // Find the section with the class "site-header" and insert the header inside it
    const parentPart = document.querySelector('.site-header');
    if (parentPart) {
        parentPart.insertAdjacentHTML('afterbegin', headerHTML);
    }
}

