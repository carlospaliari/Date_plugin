$('.datepicker').datepicker()

$(document).off('.datepicker.data-api');

$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
})

$('.datepicker').datepicker({
    startDate: '-3d'
})

$.fn.datepicker.defaults.format = "mm/dd/yyyy";
$('.datepicker').datepicker({
    startDate: '-3d'
})

$.fn.datepicker.noConflict
var datepicker = $.fn.datepicker.noConflict();
$.fn.bootstrapDP = datepicker;

$('.datepicker').datepicker('method', arg1, arg2);

$('.datepicker').datepicker('update');
$('.datepicker').datepicker('update', '2011-03-05');
$('.datepicker').datepicker('update', new Date(2011, 2, 5));

$.fn.datepicker.dates['en'] = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    clear: "Clear"
};

$('.datepicker').datepicker({
    language: 'XX'
});