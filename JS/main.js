

$('#myList a[href="#profile"]').tab('show') // Select tab by name
$('#myList a:first-child').tab('show') // Select first tab
$('#myList a:last-child').tab('show') // Select last tab
$('#myList a:nth-child(3)').tab('show') // Select third tab
$('#myList a:nth-child(4)').tab('show') // Select third tab

$('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})
