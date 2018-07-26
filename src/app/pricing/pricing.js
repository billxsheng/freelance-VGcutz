$(document).ready(function() {
    console.log(1);
    var modalOpen = $('.modal-open');
    var modal = $('#sigModal');
    modalOpen.click(function() {
        console.log('clicked')
        modal.modal('show');
    });
});