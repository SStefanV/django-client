/*-------------------------------------|
* Al scripts here will extends all pages
---------------------------------------|*/

// If no client, show a message

$(document).ready(function () {
    var verify = $("#chk_td").length;
    if (verify == 0) {
        $('#no_data').text('Cliente no encontrado!! ');
    }
});

// Real time
setInterval(function () {
    var date = new Date();
    $('#clock').html(
        (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
    );
}, 500);

// Validate all inputs---------------
function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function validateAll() {

    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var age = $('#age').val();
    var gender = $('#gender').val();

    if (name == '') {
        swal('Opss', 'Campo nombre no puede estar vacio', 'error')
        return false;
    }
    else if (name == name.toUpperCase()) {
        swal('Opss', 'No permitido nombre en mayusculas', 'error')
        $('#name').val('');
        return false;
    }
    else if (name.split(' ').length < 2) {
        swal('Opss', 'Nombre y apellido, por favor!', 'info')
        return false;
    }

    else if (phone == '') {
        swal('Opss', 'Campo phone no puede estar vacio', 'error')
        return false;
    }
    else if (email == '') {
        swal('Opss', 'Campo email no puede estar vacio', 'error')
        return false;
    }
    else if (!(validateEmail(email))) {
        swal('Opss', 'Pon un email valido', 'error')
        $('#email').val("")
        return false;
    }
    else if (age == '') {
        swal('Opss', 'Campo age no puede estar vacio', 'error')
        return false;
    }
    // else if (age > 120) {
    //     swal('Venga ya', 'No puedes ser tan viejo', 'error')
    //     $('#age').val("")
    //     return false;
    // }
    // else if (age < 18) {
    //     swal('Hmmm', 'Solo con experiencia!!', 'error')
    //     $('#age').val("")
    //     return false;
    // }
    else if (gender == '') {
        swal('Opss', 'Campo gender no puede estar vacio', 'error')
        return false;
    }
    else {
        return true;
    }

}

$('#btn-add').bind('click', validateAll);

// ---------------------Only Letter allowed-----------------------------------------
$(document).ready(function () {
    jQuery("input[name='name']").keyup(function () {
        var letter = jQuery(this).val();
        var allow = letter.replace(/[^a-zA-Z _]/g, '');
        jQuery(this).val(allow);
    });

    // Prevent start with a space
    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    })

});

// Only the first and the last name------------------------------
$(document).ready(function () {
    $("#name").keyup(function () {
        var name = $("#name").val();
        if (name.split(' ').length == 4) {
            swal('Opss', 'Dos nombres y apellido, solo!!', 'info');
            $("#name").val('')
            return false
        }
    })
});
//-------Capitalized first letter----------------

$("#name").keyup(function () {
    var txt = $(this).val();
    $(this).val(txt.replace(/^(.)|\s(.)/g, function ($1) {
        return $1.toUpperCase();
    }))
});

//--------Phone mask----------------------------
$(document).ready(function () {
    $("#phone").inputmask("+99 999-999-999", {
        "onincomplete": function () {
            swal('Opss', 'Numero telefono incompleto,!!', 'info');
            return false;
        }
    });

});

// ------Lower case input email-----------------
$(document).ready(function () {
    $("#email").keyup(function () {
        this.value = this.value.toLowerCase();
    });
});

//-------------- Age control---------------

$(document).ready(function () {
    $("#age").keyup(function () {
        var age = $("#age").val();
        if (age > 120) {
            // swal('Hmm', 'Clientes entre 18 y 120 años solo!!', 'info');
            $("#age").val('');
            return false;
        }
    });
});

//---------only numbers allowed(age)---------------
$("#age").keyup(function () {
    if (!/^[0-9]*$/.test(this.value)) {
        this.value = this.value.split(/[^0-9]/).join('');
    }

});

// -------------Prevent starting with 0 in age field

$('#age').on('input', function () {
    if (/^0/.test(this.value)) {
        this.value = this.value.replace(/^0/, "");
    }


});