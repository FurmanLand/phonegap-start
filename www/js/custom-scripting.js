//local js
 $( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!
	$.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
});

/////////////////////////////////////////

$( document ).ready(function() {
	$("#myForm").validate({
        rules: {
          name: {
            required: true
          },
          jobnumber: {
            required: true,
            minlength: 6
          }
        },
        messages: {
			
          name: {
            required: "Please enter your name"
          },
          jobnumber: {
            minlength: "Must have atleast 6 digits"
          }
        },
		submitHandler: function(form) {
			$.ajax({
				data: $("#myForm").serialize(),
				type: form.method,
				crossDomain: true,
				//url: "userInfo.php",
				//Use this method when js is on seperate server from userInfo.php
				url: "http://gdipaas$gdipaas:iWwk81PvFQhnPw05FLn5rkDbyqeG1HDwpPeSppZM4NFur2wTjxjQulXxacmN@gdipaas.azurewebsites.net/userInfo.php",
				success: function(data) {
					alert("Data Save: " + data);
				}
			});
		}
	});
});

////////////////////////////////////
// $(document).ready(function () {
// $('#contributionList').sortable({
    // axis: 'y',
    // update: function (event, ui) {
        // var data = $(this).sortable('serialize');

        // // POST to server using $.post or $.ajax
        // $.ajax({
            // data: data,
            // type: 'POST',
            // url: "userInfo.php",
        // });
    // }
// });
// });