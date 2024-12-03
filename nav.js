const totalPages = 1079;  // Updated total pages
        let currentPage = 1;  // Start at page 1

        // Function to format numbers with commas
        function formatNumber(num) {
            return num.toLocaleString(); // Formats number with commas
        }

        // Function to update the pagination buttons
        function updatePagination() {
            const pageNumbersContainer = document.getElementById('pagination');
            pageNumbersContainer.innerHTML = ''; // Clear current buttons

            // Create Previous button if needed
            if (currentPage > 1) {
                const prevButton = document.createElement('a');
                prevButton.textContent = 'Prev';
                prevButton.classList.add('page-numbers');
                prevButton.href = `index.html?page=${currentPage - 1}`;
                pageNumbersContainer.appendChild(prevButton);
            }

            // Determine the range of page numbers to display
            const pageNumbers = [];
            for (let i = 1; i <= totalPages; i++) {
                if (
                    i === currentPage ||  // Always show the current page
                    i === currentPage - 1 || // Show the previous page if possible
                    i === currentPage + 1 || // Show the next page if possible
                    i === 1 ||               // Always show the first page
                    i === totalPages         // Always show the last page
                ) {
                    pageNumbers.push(i);
                }
            }

            // Add ellipsis where necessary
            const displayPages = [];
            for (let i = 0; i < pageNumbers.length; i++) {
                if (
                    i > 0 &&
                    pageNumbers[i] !== pageNumbers[i - 1] + 1
                ) {
                    displayPages.push('...');
                }
                displayPages.push(formatNumber(pageNumbers[i])); // Format numbers with commas
            }

            // Create page number buttons
            displayPages.forEach(page => {
                if (page === '...') {
                    const dotsButton = document.createElement('span');
                    dotsButton.textContent = '...';
                    dotsButton.classList.add('page-numbers', 'dots');
                    pageNumbersContainer.appendChild(dotsButton);
                } else {
                    const pageButton = document.createElement('a');
                    pageButton.textContent = page;
                    pageButton.classList.add('page-numbers');
                    pageButton.href = `index.html?page=${page.replace(/,/g, '')}`; // Remove commas for URL
                    if (page === formatNumber(currentPage)) {
                        pageButton.classList.add('current-pn');
                    }
                    pageNumbersContainer.appendChild(pageButton);
                }
            });

            // Create Next button if needed
            if (currentPage < totalPages) {
                const nextButton = document.createElement('a');
                nextButton.textContent = 'Next';
                nextButton.classList.add('page-numbers');
                nextButton.href = `index.html?page=${currentPage + 1}`;
                pageNumbersContainer.appendChild(nextButton);
            }
        }

        // Get the current page number from the URL query string
        function getCurrentPage() {
            const urlParams = new URLSearchParams(window.location.search);
            const page = parseInt(urlParams.get('page'), 10);
            return isNaN(page) ? 1 : page; // Default to page 1 if no valid page param
        }

        // Update the current page from the URL and refresh pagination
        function updatePageFromUrl() {
            currentPage = getCurrentPage();
            updatePagination();
        }

        // Initialize the pagination based on the current page
        updatePageFromUrl();