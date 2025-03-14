// JavaScript to toggle the sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    if (sidebar.style.right === '-250px') {
        sidebar.style.right = '0'; 
        mainContent.style.marginRight = '250px';
    } else {
        sidebar.style.right = '-250px'; 
        mainContent.style.marginRight = '0'; 
    }
}

function toggleDropdown() {
    const dropdown = document.getElementById('bsitDropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function toggleImage(studentId) {
    const studentImage = document.getElementById(studentId);

    if (studentImage.style.display === 'none' || studentImage.style.display === '') {
        studentImage.style.display = 'block'; 
    } else {
        studentImage.style.display = 'none'; 
    }
}
