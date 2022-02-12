//login

function validarUsuario(usuario) {
  const nombreUsuario = "angie-moya";
  if (usuario === nombreUsuario) {
    console.log("usuario validado");
    return true;
  } else {
    console.log("usuario incorrecto");
    return false;
  }
  
}

function validarPassword(password) {
  const passwordAsignado = "1234ammu";
  if (password === passwordAsignado) {
    console.log("password validado");
    return true;
  } else {
    console.log("password incorrecto");
    return false;
  }
}

function login() {
  const user = document.getElementById("user");
  const clave = document.getElementById("clave");

  if (validarUsuario(user.value.toLowerCase()) === true && validarPassword(clave.value) === true) {
      const findFormLogin = document.getElementsByClassName("login");
      console.log(findFormLogin)
      findFormLogin[0].style.display = "none";

      const findFormSimulador = document.getElementsByClassName("simulador");
      findFormSimulador[0].style.display = "flex";

  } else {
    console.log("Usuario y/o contraseña incorrecta");
    const message = document.getElementById("message");
    message.innerText = "Usuario y/o contraseña incorrecta";
  }
}

// funcion para calcular el valor de la cuota mensual

function calcularCuotaMensual(monto, tasa, num_cuotas) {
  const aplicarTasa = (monto * tasa) / 100;
  const cuotaMensual = (num_cuotas * aplicarTasa + monto) / num_cuotas;

  return cuotaMensual;
}

// funcion para ejecutar el programa, conectamos javascript con el formulario y validamos
// que no este vacio los campos que necesitamos para realizar la operacion

function implementarSistemaDeCredito() {
  const inputMonto = document.getElementById("monto");
  const montoValue = parseInt(inputMonto.value, 10);

  const inputTasa = document.getElementById("tasa");
  const tasaValue = parseInt(inputTasa.value, 10);

  const inputN_cuotas = document.getElementById("n_cuotas");
  const n_cuotasValue = parseInt(inputN_cuotas.value, 10);

  const valorCuota_mes = document.getElementById("cuota_mes");

  if (
    Number.isNaN(montoValue) ||
    Number.isNaN(tasaValue) ||
    Number.isNaN(n_cuotasValue)
  ) {
    valorCuota_mes.value = "indefinido";
  } else {
    const realizarCalculo = calcularCuotaMensual(
      montoValue,
      tasaValue,
      n_cuotasValue
    );
    valorCuota_mes.value = realizarCalculo.toFixed(2);
  }
}
