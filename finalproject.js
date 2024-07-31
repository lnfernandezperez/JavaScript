function gestionarPedido(cliente) {
    
    function saludarCliente(nombre) {
        console.log(`¡Hola, ${nombre}! Bienvenido(a) a nuestro restaurante.`);
    }

    function verificarEdad(edad) {
        if (edad < 18) {
            console.log("Advertencia: No puedes consumir bebidas alcohólicas.");
        }
    }

    function calcularCostoTotal(pedido) {
        return pedido.cantidad * pedido.precioUnitario;
    }

    function aplicarDescuento(costoTotal, edad) {
        if (edad > 60) {
            return costoTotal * 0.90;
        }
        return costoTotal;
    }

    function determinarMetodoPago(metodoPago, costoTotal) {
        if (metodoPago === 'Efectivo') {
            return costoTotal * 0.90;
        }
        return costoTotal;
    }

    function verificarHoraPedido(horaPedido) {
        const hora = new Date(horaPedido).getHours();
        if (hora >= 12 && hora <= 13) {
            console.log("Es hora pico, puede haber demoras en la entrega del pedido.");
        }
    }

    function calcularImpuesto(costoTotal) {
        return costoTotal * 0.05;
    }

    saludarCliente(cliente.nombre);
    verificarEdad(cliente.edad);

    let costoTotal = calcularCostoTotal(cliente.pedido);

    costoTotal = aplicarDescuento(costoTotal, cliente.edad);

    costoTotal = determinarMetodoPago(cliente.metodoPago, costoTotal);

    verificarHoraPedido(cliente.horaPedido);

    const impuesto = calcularImpuesto(costoTotal);

    const costoFinal = costoTotal + impuesto;

    console.log("Resumen del pedido:");
    console.log(`Cliente: ${cliente.nombre}`);
    console.log(`Edad: ${cliente.edad}`);
    console.log(`Cantidad: ${cliente.pedido.cantidad}`);
    console.log(`Precio unitario: $${cliente.pedido.precioUnitario}`);
    console.log(`Costo total antes del descuento: $${cliente.pedido.cantidad * cliente.pedido.precioUnitario}`);
    console.log(`Descuento aplicado: $${(cliente.pedido.cantidad * cliente.pedido.precioUnitario) - costoTotal}`);
    console.log(`Método de pago: ${cliente.metodoPago}`);
    console.log(`Impuesto del cubierto: $${impuesto.toFixed(2)}`);
    console.log(`Costo final del pedido: $${costoFinal.toFixed(2)}`);
}


const cliente = {
    nombre: 'Juan',
    edad: 65,
    pedido: {
        cantidad: 3,
        precioUnitario: 150
    },
    metodoPago: 'Efectivo',
    horaPedido: ''
};

gestionarPedido(cliente);
