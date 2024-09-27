function ensamblarDispositivo() {
    const ensamblarParte = (parte, tiempo) => {
        return new Promise((resolve) => {
            console.log(`Ensamblando la parte ${parte}...`);
            setTimeout(() => {
                console.log(`Parte ${parte} ensamblada.`);
                resolve();
            }, tiempo); 
        });
    };

    
    ensamblarParte(1, 2000) 
        .then(() => ensamblarParte(2, 3000))
        .then(() => ensamblarParte(3, 1000))
        .then(() => {
            console.log("Todo el dispositivo ha sido ensamblado.");
        });
}

ensamblarDispositivo();