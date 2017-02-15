$(document).ready(function() {

    $('#someForm').on('submit', function(e) {
        e.preventDefault();

        //get the name field value
        var name = $('#team_name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var comments = $('#icon_college_name').val();

        //pretend we don't need validation

        //send to formspree
        $.ajax({
            url:'https://formspree.io/xldwpgax',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                 email:email,
                comments:comments,
                _subject:'My Form Submission',
            },
            dataType:"json",
            success:function() {
                console.log('success');
                $('#formBlock').hide();
                $('#thankyouBlock').show();
            }

        });

    });

});
