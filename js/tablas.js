console.log('conectada');
var userarr = [];

function dltObj() {
    if (document.getElementById("removee")) {
        document.querySelector("#removee").remove();
    }
}

function register() {
    var txtNombre = document.getElementById("txtnombre").value;
    var txtCantidad = document.getElementById('txtcantidad').value;
    var txtValor = document.getElementById('txtvalor').value;


    if (txtNombre === '') {
        document.getElementById('form1').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");

    } else {
        if (txtCantidad === "") {
            document.getElementById('form2').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");

        }
        else {
            if (txtValor === "") {

                document.getElementById('form3').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
            } else {
                var total = parseInt(txtCantidad) * parseInt(txtValor);
                var userobj = {
                    Nombre: txtNombre,
                    Cantidad: txtCantidad,
                    Valor: txtValor,
                    Total: total
                }
                userarr.push(userobj);
                localStorage.setItem("userList", JSON.stringify(userarr));
                loctable();
                regForm.reset();

            }
        }
    }
    return true;
}



function loctable() {
    if (localStorage.userList) {


        userarr = JSON.parse(localStorage.userList);

        var render = document.getElementById('table').innerHTML;
        render = "";
        render = "<tr><th>Nombre</th><th>Cantidad</th><th>Valor</th><th>Total</th></tr>";


        for (var i = 0; i < userarr.length; i++) {

            var n = userarr[i].Nombre;
            var c = userarr[i].Cantidad;
            var v = userarr[i].Valor;
            var t = userarr[i].Total;

            render += "<tr> <td>" + n + "</td>";
            render += " <td>" + c + "</td>";
            render += " <td>" + v + "</td>";
            render += "<td>" + t + "</td>";

        }

        document.getElementById('table').innerHTML = render;

    }

}

