function showContent(tab) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(tab).classList.add('active');

    // Update navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`nav a[onclick="showContent('${tab}')"]`).classList.add('active');
}
