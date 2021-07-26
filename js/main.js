var wow = new WOW({
    mobile: false,
});

wow.init();

$(function() {
    $('#phone').mask('7(999)-999-99-99');
    $('#phone-reg').mask('7(999)-999-99-99');
});