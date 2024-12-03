// post.js

// Function to generate the post article with parameters for image, content, and an optional link
export function createPost(imageSrc, postContent, postLink = '#') {
    const articleHTML = `
        <article class="post">
            <figure>
                <a href="${postLink}">
                    <img src="${imageSrc}" alt="" width="300px" height="450px">
                </a>
            </figure>
            <h3 class="entry-title">
                <a href="${postLink}">${postContent}</a>
            </h3>
        </article>
    `;
    
    // Select the element where you want to insert the generated post (e.g., main section or a specific div)
    const postContainer = document.querySelector('#posts-container');
    
    if (postContainer) {
        postContainer.insertAdjacentHTML('beforeend', articleHTML);
    }
}
