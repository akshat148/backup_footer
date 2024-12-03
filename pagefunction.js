export function renderMovieDetails(var_1, var_2, var_3, var_4, var_5, var_6a,var_6b,var_6c,var_6d,var_6e, var_7, var_8, var_9) {
    const pmUp = document.querySelector('.pm-up');
    if (pmUp) {
        pmUp.innerHTML = pmUp;
    }

    const contentHTML = `
            <p id="var-1">
                ${var_1}
            </p>

            <!-- Leave it as it is -->
            <p>
                <span style="color: #339966;"><strong><a href="#" style="color: #339966;">Vegamovies3.org</a></strong></span> is the best online platform for downloading <span style="color: #339966;"><strong><a href="#" style="color: #339966;">Hollywood</a></strong></span> and <strong><a href="#"><span style="color: #339966;">Bollywood Movies</span></a></strong>. We provide direct <strong>G-Drive</strong> download link for fast and secure downloading. Click on the download button below and follow the steps to start download.
            </p>
            <!-- Leave it as it is -->

            <h3 style="text-align: center;">
                <span style="font-family: arial black, sans-serif; color: #00ffff;">
                    <strong>
                        <strong id="var-2">${var_2}</strong> ~ Vegamovies3.org
                    </strong>
                </span>
            </h3>
            <h3>
                <strong>
                    <span id="var-3" style="color: #ffffff;">${var_3}</span>
                </strong>
            </h3>
            <p id="var-4">
                ${var_4}
            </p>

            <!-- Leave it as it is -->
            <h3 style="text-align: center;">
                <span style="color: #00ffff;">~SYNOPSIS/PLOT~</span>
            </h3>
            <!-- Leave it as it is -->

            <p id="var-5">
                ${var_5}
            </p>

            <!-- Leave it as it is -->
            <h2 style="text-align: center;">
                <span style="color: #00ffff;">Screenshots: (Must See Before Downloading)…</span>
            </h2>
            <!-- Leave it as it is -->

            <p style="text-align: center;" id="var-6">
                <img src="${var_6a}" class="slo-img" id="var-6a"> 
                <img src="${var_6b}" class="slo-img" id="var-6b"> 
                <img src="${var_6c}" class="slo-img" id="var-6c"> 
                <img src="${var_6d}" class="slo-img" id="var-6d"> 
                <img src="${var_6e}" class="slo-img" id="var-6e">
            </p>

            <!-- Leave it as it is -->
            <p style="text-align: center;">
                <span style="font-size: 15pt;">
                    <strong>
                        <span style="color: #eef425;">** <span style="font-family: 'Open Sans';"> DOWNLOAD हिंदी Dubbed 2.0 – </span> (हिन्दी में) **</span>
                    </strong>
                </span>
            </p>
            <hr>
            <!-- Leave it as it is -->

            <h5 style="text-align: center;" id="var-7">
                ${var_7}
            </h5>

            <!-- Leave it as it is -->
            <p style="text-align: center;">
                <a href="#">
                    <button class="dwd-button">Download Now</button>
                </a>
            </p>
            <!-- Leave it as it is -->

            <h5 style="text-align: center;" id="var-7">
                ${var_8}
            </h5>

            <!-- Leave it as it is -->
            <p style="text-align: center;">
                <a href="#">
                    <button class="dwd-button">Download Now</button>
                </a>
            </p>
            <!-- Leave it as it is -->

            <h5 style="text-align: center;" id="var-7">
                ${var_9}
            </h5>

            <!-- Leave it as it is -->
            <p style="text-align: center;">
                <a href="#">
                    <button class="dwd-button">Download Now</button>
                </a>
            </p>
            <!-- Leave it as it is -->
    `;

    pmUp.innerHTML = contentHTML;
}


