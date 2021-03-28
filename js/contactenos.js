console.log('conectada');
var userarr = [];

function dltObj() {
    if (document.getElementById("removee")) {
        document.querySelector("#removee").remove();
    }
}

function register() {
    var Id = document.getElementById("id").value;
    var PNombre = document.getElementById("pnombre").value;
    var SNombre = document.getElementById("snombre").value;
    var PApellido = document.getElementById("papellido").value;
    var SApellido = document.getElementById("sapellido").value;
    var Email = document.getElementById("email").value;
    var Cel = document.getElementById("cel").value;
    var Tel = document.getElementById("tel").value;
    var Url = document.getElementById("url").value;
    var Barrio = document.getElementById("barrio").value;
    var Hora = document.getElementById("hora").value;

    if (Id === '') {
        document.getElementById('form1').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
    } else {
        if (PNombre === "") {
            document.getElementById('form2').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
        } else {
            if (SNombre === "") {
                document.getElementById('form3').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
            } else {
                if (PApellido === "") {
                    document.getElementById('form4').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
                } else {
                    if (SApellido === "") {
                        document.getElementById('form5').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
                    } else {
                        if (Email === "") {
                            document.getElementById('form6').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
                        } else {
                            if (Cel === "") {
                                document.getElementById('form7').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
                            } else {
                                if (Tel === "") {
                                    document.getElementById('form8').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
                                } else {
                                    if (Url === "") {
                                        document.getElementById('form9').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
                                    } else {
                                        if (Barrio === "") {
                                            document.getElementById('form10').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
                                        } else {
                                            if (Hora === "") {
                                                document.getElementById('form11').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Este campo no debe estar vacio</p>");
                                            } else {
                                                var userobj = {
                                                    ID: Id,
                                                    PNOMBRE: PNombre,
                                                    SNOMBRE: SNombre,
                                                    PAPELLIDO: PApellido,
                                                    SAPELLIDO: SApellido,
                                                    EMAIL: Email,
                                                    CEL: Cel,
                                                    TEl: Tel,
                                                    URL: Url,
                                                    BARRIO: Barrio,
                                                    HORA: Hora,
                                                }
                                                userarr.push(userobj);
                                                localStorage.setItem("userList", JSON.stringify(userarr));
                                                loctable();
                                                regForm.reset();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
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

        for (var i = 0; i < userarr.length; i++) {
            var cd = userarr[i].ID;
            var pn = userarr[i].PNOMBRE;
            var sn = userarr[i].SNOMBRE;
            var pa = userarr[i].PAPELLIDO;
            var sa = userarr[i].SAPELLIDO;
            var em = userarr[i].EMAIL;
            var cl = userarr[i].CEL;
            var tl = userarr[i].TEL;
            var ur = userarr[i].URL;
            var ba = userarr[i].BARRIO;
            var hr = userarr[i].HORA;

            render = "<thead><tr><th>ID</th><td>" + cd + "</td></tr><tr><th>PNOMBRE</th><td>" + pn + "</td></tr><tr><th>SNOMBRE</th><td>" + sn + "</td></tr><tr><th>PAPELLIDO</th><td>" + pa + "</td></tr><tr><th>SAPELLIDO</th><td>" + sa + "</td></tr><tr><th>EMAIL</th><td>" + em + "</td></tr><tr><th>CEL</th><td>" + cl + "</td></tr><tr><th>TEL</th><td>" + tl + "</td></tr><tr><th>URL</th><td>" + ur + "</td></tr><tr><th>BARRIO</th><td>" + ba + "</td></tr><tr><th>HORA</th><td>" + hr + "</td></tr></thead>";
        }
        document.getElementById('table').innerHTML = render;
    }
}
