// Syntax
// $(selector OR object OR html string).actioin()

// Factory functions
// $() --> jQuery()

// DOM API when a page is fully loaded:
window.onload = function () {
    alert('Hello World')
}

// jQuery when a page is fully loaded:
$(document).ready(function () {
    alert('Hello World')
})

// Shortened jQuery when a page is fully loaded:
$(function () {
    alert('Hello World')
})

