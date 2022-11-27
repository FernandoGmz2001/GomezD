$(document).ready(function () {
  const settings = {
    async: true,
    crossDomain: true,
    url: "/Grid/connect.php",
    method: "GET",
    headers: {
      Accept: "/",
    },
  };

  $.ajax(settings).done(function (response) {
    let tabla = JSON.parse(response);
    console.log(tabla);

    $("#jsGrid").jsGrid({
      width: "100%",
      height: "400px",
      inserting: true,
      editing: true,
      sorting: true,
      paging: true,
      data: tabla,
      fields: [
        {
          name: "Id",
          type: "number",
          width: 50,
        },
        { name: "Nombre", type: "text", width: 50 },
        {
          name: "ApellidoPaterno",
          type: "text",
          width: 50,
        },
        {
          name: "ApellidoMaterno",
          type: "text",
          width: 50,
        },
        {
          name: "Correo",
          type: "text",
          width: 100,
        },
        {
          name: "Ciudad",
          type: "text",
          width: 50,
        },
        {
          name: "Estado",
          type: "text",
          width: 50,
        },
        {
          name: "Direccion",
          type: "text",
          width: 50,
        },
        {
          name: "Telefono",
          type: "text",
          width: 50,
        },
        {
          name: "Password",
          type: "text",
          width: 50,
        },
        {
          name: "ConfirmPass",
          type: "text",
          width: 50,
        },
        {
          type: "control",
        },
      ],
    });
  });
});
