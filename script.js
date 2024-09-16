$(document).ready(function () {
    // Sidebar toggle animation
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // When a link is clicked, load the respective content
    $('.load-content').on('click', function (e) {
        e.preventDefault();
        const pageUrl = $(this).data('page'); // Assuming you pass a URL in the data-page attribute

        // Load the HTML content dynamically via AJAX
        $('#dynamic-content').load(pageUrl, function(response, status, xhr) {
            if (status == "error") {
                $('#dynamic-content').html("<p>Sorry, there was an error loading the page.</p>");
            }
        });
    });
});