function calculateAngularAcceleration() {
    // 1. Obtener valores de entrada
    const w0 = parseFloat(document.getElementById('initialAngularVelocity').value); // Velocidad Inicial (rad/s)
    const wf = parseFloat(document.getElementById('finalAngularVelocity').value);   // Velocidad Final (rad/s)
    const t = parseFloat(document.getElementById('time').value);                   // Tiempo (s)

    // 2. Validación de entradas
    if (isNaN(w0) || isNaN(wf) || isNaN(t) || t <= 0) {
        alert("Por favor, introduce valores numéricos válidos. El tiempo debe ser > 0.");
        document.getElementById('angularAccelerationResult').textContent = '--';
        return;
    }

    // 3. Aplicar fórmula
    const alpha = (wf - w0) / t;

    // 4. Mostrar el resultado
    document.getElementById('angularAccelerationResult').textContent = alpha.toFixed(2);
}