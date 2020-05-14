document.addEventListener('DOMContentLoaded', function() {
    class View {
        constructor() {
            this.wrapper = document.querySelector('div.wrapper');
            this.header = document.createElement('header');
            this.header.innerHTML = `<ul class="header_menu">
            <li class="active"><a href="#">JobUp</a></li>
            <li><a href="#">DASHBOARD</a></li>
            <li><a href="#">HISTORY</a></li>
            <li class="profile"><a href="#">Profile</a></li></ul>`;
            
        }
        renderPage() {
            this.wrapper.prepend(this.header);
        }
    }
    const view = new View();
    view.renderPage();
})