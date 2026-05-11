$(document).ready(function () {
    $.getJSON('https://randomuser.me/api/?results=3&nat=es,fr,gb,us', function (data) {
        var users = data.results;
        $('.testimonial-card').each(function (index) {
            var user = users[index];
            if (!user) return;

            var name = user.name.first + ' ' + user.name.last;
            var location = user.location.country;
            var photo = user.picture.medium;

            $(this).find('.author-avatar').html('<img src="' + photo + '" alt="Foto de ' + name + '" />');
            $(this).find('.author-meta strong').text(name);
            $(this).find('.author-meta span').text(location);
        });
    }).fail(function () {
        console.error('No se pudo cargar la información de randomuser.me');
    });
});