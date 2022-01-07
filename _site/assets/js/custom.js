$(() => {

    // Set minimum height of container with main content
    let height = $(window).innerHeight() - $('#navbar').height() - $('#footer').height();
    if ($('#main-content').height() < height) {
        $('#main-content').height(height);
    }

    $(window).resize(() => {
        $('#main-content').height('auto');
        let height = $(window).innerHeight() - $('#navbar').height() - $('#footer').height();
        if ($('#main-content').height() < height) {
            $('#main-content').height(height);
        } else {
            $('#main-content').height('auto');
        }
    });

});
