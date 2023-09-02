window.onload = function () {
    if (document.body.id === "index") {
        LLamada2();
    } else if (document.body.id === "departamentos") {
        LLamada1();
    }
};

var cmbUbication = document.getElementById("cmbUbication");
cmbUbication.addEventListener("change", function () {
    LLamada2();
});

var cmbUbication1 = document.getElementById("cmbUbication1");
cmbUbication1.addEventListener("change", function () {
    LLamada1();
});

function LLamada1() {
    var cmbUbication1 = document.getElementById("cmbUbication1");
console.log(cmbUbication1.value)
    var url1 = "";
    if (cmbUbication1 != null) {
        url1 =
            "https://censopoblacion.gt/indicadores/" +
            (cmbUbication1.value == "Mostrar Todos" ? "" : cmbUbication1.value)+"/999";
    } else {
        url1 = "https://censopoblacion.gt/indicadores/1/999";
    }

    fetch(url1)
        .then(response => response.json())
        .then(data1 => {
            console.log(data1);

            const tot_Hombre = document.getElementById('totH');
            const tot_Mujer = document.getElementById('totM');
            const tot_Edad_14 = document.getElementById('tot14');
            const tot_Edad_1564 = document.getElementById('tot1564');
            const tot_Edad_65 = document.getElementById('tot65');
            const tot_Sec_Rur = document.getElementById('totRur');
            const tot_Sec_Urb = document.getElementById('totUrb');

            const tot_Maya = document.getElementById('totMay');
            const tot_Gar = document.getElementById('totGar');
            const tot_Xin = document.getElementById('totXin');
            const tot_ACA = document.getElementById('totACA');
            const tot_Lad = document.getElementById('totLad');
            const tot_Ext = document.getElementById('totExt');

            tot_Hombre.innerText = data1[0].total_sexo_hombre.toLocaleString().replace(/\./g, ',');
            tot_Mujer.innerText = data1[0].total_sexo_mujeres.toLocaleString().replace(/\./g, ',');
            tot_Edad_14.innerText = data1[0].pob_edad_014.toLocaleString().replace(/\./g, ',');
            tot_Edad_1564.innerText = data1[0].pob_edad_1564.toLocaleString().replace(/\./g, ',');
            tot_Edad_65.innerText = data1[0].pob_edad_65.toLocaleString().replace(/\./g, ',');
            tot_Sec_Rur.innerText = data1[0].total_sector_rural.toLocaleString().replace(/\./g, ',');
            tot_Sec_Urb.innerText = data1[0].total_sector_urbano.toLocaleString().replace(/\./g, ',');

            tot_Maya.innerText = data1[0].pob_pueblo_maya.toLocaleString().replace(/\./g, ',');
            tot_Gar.innerText = data1[0].pob_pueblo_garifuna.toLocaleString().replace(/\./g, ',');
            tot_Xin.innerText = data1[0].pob_pueblo_xinca.toLocaleString().replace(/\./g, ',');
            tot_ACA.innerText = data1[0].pob_pueblo_afrodescendiente.toLocaleString().replace(/\./g, ',');
            tot_Lad.innerText = data1[0].pob_pueblo_ladino.toLocaleString().replace(/\./g, ',');
            tot_Ext.innerText = data1[0].pob_pueblo_extranjero.toLocaleString().replace(/\./g, ',');

            actualizarGraficaHombresMujeres(data1);

            actualizarGraficaEdades(data1);
        });
}


function LLamada2() {
    var cmbUbication = document.getElementById("cmbUbication");

    var url = "";
    if (cmbUbication != null) {
        url =
            "https://censopoblacion.gt/indicadores/2/" +
            (cmbUbication.value == "Mostrar Todos" ? "" : cmbUbication.value);
    } else {
        url = "https://censopoblacion.gt/indicadores/2/999";
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const tot_Hombre = document.getElementById('totH');
            const tot_Mujer = document.getElementById('totM');
            const tot_Edad_14 = document.getElementById('tot14');
            const tot_Edad_1564 = document.getElementById('tot1564');
            const tot_Edad_65 = document.getElementById('tot65');
            const tot_Sec_Rur = document.getElementById('totRur');
            const tot_Sec_Urb = document.getElementById('totUrb');

            const tot_Maya = document.getElementById('totMay');
            const tot_Gar = document.getElementById('totGar');
            const tot_Xin = document.getElementById('totXin');
            const tot_ACA = document.getElementById('totACA');
            const tot_Lad = document.getElementById('totLad');
            const tot_Ext = document.getElementById('totExt');

            tot_Hombre.innerText = data[0].total_sexo_hombre.toLocaleString().replace(/\./g, ',');
            tot_Mujer.innerText = data[0].total_sexo_mujeres.toLocaleString().replace(/\./g, ',');
            tot_Edad_14.innerText = data[0].pob_edad_014.toLocaleString().replace(/\./g, ',');
            tot_Edad_1564.innerText = data[0].pob_edad_1564.toLocaleString().replace(/\./g, ',');
            tot_Edad_65.innerText = data[0].pob_edad_65.toLocaleString().replace(/\./g, ',');
            tot_Sec_Rur.innerText = data[0].total_sector_rural.toLocaleString().replace(/\./g, ',');
            tot_Sec_Urb.innerText = data[0].total_sector_urbano.toLocaleString().replace(/\./g, ',');

            tot_Maya.innerText = data[0].pob_pueblo_maya.toLocaleString().replace(/\./g, ',');
            tot_Gar.innerText = data[0].pob_pueblo_garifuna.toLocaleString().replace(/\./g, ',');
            tot_Xin.innerText = data[0].pob_pueblo_xinca.toLocaleString().replace(/\./g, ',');
            tot_ACA.innerText = data[0].pob_pueblo_afrodescendiente.toLocaleString().replace(/\./g, ',');
            tot_Lad.innerText = data[0].pob_pueblo_ladino.toLocaleString().replace(/\./g, ',');
            tot_Ext.innerText = data[0].pob_pueblo_extranjero.toLocaleString().replace(/\./g, ',');

            actualizarGraficaHombresMujeres(data);

            actualizarGraficaEdades(data);
        });
}


function actualizarGraficaHombresMujeres(data) {
    const graficaHombresMujeres = new Chart(document.getElementById("graficaHombresMujeres"), {
        type: "pie",
        data: {
            labels: ["Hombres", "Mujeres"],
            datasets: [
                {
                    data: [
                        data[0].total_sexo_hombre,
                        data[0].total_sexo_mujeres,
                    ],
                    backgroundColor: [
                        "rgba(163, 221, 203, 1)",
                        "rgba(232, 233, 161, 1)",
                    ],
                    borderColor: [
                        "rgba(163, 221, 203, 2)",
                        "rgba(232, 233, 161, 2)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
    });

    graficaHombresMujeres.data.datasets[0].data = [
        data[0].total_sexo_hombre,
        data[0].total_sexo_mujeres,
    ];
    graficaHombresMujeres.update();
}

function actualizarGraficaEdades(data) {
    const graficaEdades = new Chart(document.getElementById("graficaEdades"), {
        type: "pie",
        data: {
            labels: ["Edad 0-14", "Edad 15-64", "Edad 65 o Mayor"],
            datasets: [
                {
                    data: [
                        data[0].pob_edad_014,
                        data[0].pob_edad_1564,
                        data[0].pob_edad_65,
                    ],
                    backgroundColor: [
                        "rgba(230, 181, 102, 1)",
                        "rgba(229, 112, 126, 1)",
                        "rgba(231, 160, 115, 1)",
                    ],
                    borderColor: [
                        "rgba(230, 181, 102, 1)",
                        "rgba(229, 112, 126, 1)",
                        "rgba(231, 160, 115, 1)",
,
                    ],
                    borderWidth: 1,
                },
            ],
        },
    });

    graficaEdades.data.datasets[0].data = [
        data[0].pob_edad_014,
        data[0].pob_edad_1564,
        data[0].pob_edad_65,
    ];
    graficaEdades.update();
}