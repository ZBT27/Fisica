function calculateAngularPosition() {
    // 1. Obtener valores de entrada
    const theta0 = parseFloat(document.getElementById('initialAngularPosition').value); // Posición Inicial (rad)
    const omega = parseFloat(document.getElementById('angularVelocity').value);        // Velocidad Angular (rad/s)
    const t = parseFloat(document.getElementById('time').value);                       // Tiempo (s)

    // 2. Validación de entradas
    if (isNaN(theta0) || isNaN(omega) || isNaN(t) || t < 0) {
        alert("Por favor, introduce valores numéricos válidos. El tiempo debe ser >= 0.");
        document.getElementById('angularPositionResult').textContent = '--';
        return;
    }

    // 3. Aplicar fórmula (asumiendo velocidad constante)
    const thetaF = theta0 + (omega * t);

    // 4. Mostrar el resultado
    document.getElementById('angularPositionResult').textContent = thetaF.toFixed(2);
}
