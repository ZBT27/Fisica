function calculateAngularVelocity() {
    // 1. Obtener valores de entrada
    const theta = parseFloat(document.getElementById('angularPosition').value); // Posición Angular (rad)
    const t = parseFloat(document.getElementById('time').value);                // Tiempo (s)

    // 2. Validación de entradas
    if (isNaN(theta) || isNaN(t) || t <= 0) {
        alert("Por favor, introduce valores numéricos válidos. El tiempo debe ser > 0.");
        document.getElementById('angularVelocityResult').textContent = '--';
        return;
    }

    // 3. Aplicar fórmula
    const omega = theta / t;

    // 4. Mostrar el resultado
    document.getElementById('angularVelocityResult').textContent = omega.toFixed(2);
}