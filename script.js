// Sidebar Menu
function togglemenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Nav Sub List
function togglesublist(id) {
    // Get the clicked list item
    const listItem = document.getElementById(id);

    // Get the nested dropdown menu (ul)
    const dropdown = listItem.querySelector('.pc-sub-list');

    // Toggle visibility
    dropdown.classList.toggle('active');
}
function closesublist(id) {
    // Get the clicked list item
    const listItem = document.getElementById(id);

    // Get the nested dropdown menu (ul)
    const dropdown = listItem.querySelector('.pc-sub-list');

    // Hide the dropdown menu
    dropdown.classList.remove('active');
}