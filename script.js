$(document).ready(function () {
    // Sidebar toggle animation
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // Dynamic content loading
    const content = {
        home: '<p>This is the content for Page 3.</p>',
        page1: '<iframe src="Pages/OrbitSandbox/index.html" allowfullscreen="true" width="100%" height="800px" style="border:none;"></iframe>',
        page2: '<p>This is the content for Page 2. You can load anything here, even another iframe.</p>',
        page3: '<p>This is the content for Page 3.</p>'
    };

    // When a link is clicked, load the respective content
    $('.load-content').on('click', function (e) {
        e.preventDefault();
        const page = $(this).data('page');
        $('#dynamic-content').html(content[page]);
    });



    // Dynamic content loading with CSS
    $('.load-page').on('click', function (e) {
        e.preventDefault();
        const page = $(this).data('page');

        // Load the corresponding HTML page into #dynamic-content
        $('#dynamic-content').load('./pages/' + page + '/index.html');
    });
});
