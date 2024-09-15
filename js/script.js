$(document).ready(function () {
    // Sidebar toggle animation
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // Function to dynamically load CSS
    function loadCSS(filename) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = filename;
        document.head.appendChild(link);
    }

    // When a link is clicked, load the respective content
    $('.load-content').on('click', function (e) {
        e.preventDefault();
        const page = $(this).data('page');

        // Load the corresponding HTML page into #dynamic-content
        $('#dynamic-content').load('Pages/' + page + '/' + 'index.html', function() {
            // Dynamically load the CSS file after content is loaded
            loadCSS('/css/style.css');
        });
    });
});
