function calculateFreeFall() {
    // 1. Obtener valores de entrada
    const h0 = parseFloat(document.getElementById('initialHeight').value); // Altura Inicial (m)
    const g = parseFloat(document.getElementById('gravity').value);        // Gravedad (m/s²)

    // 2. Validación de entradas
    if (isNaN(h0) || isNaN(g) || h0 < 0 || g <= 0) {
        alert("Por favor, introduce valores numéricos válidos. La altura debe ser >= 0 y la gravedad > 0.");
        
        // Limpiar resultados
        document.getElementById('timeOfFall').textContent = '--';
        document.getElementById('finalVelocity').textContent = '--';
        return;
    }

    // 3. Aplicar fórmulas (asumiendo $v_0 = 0$)
    
    // Tiempo de Caída: $t = \sqrt{2h_0/g}$
    const timeOfFall = Math.sqrt((2 * h0) / g);
    
    // Velocidad Final: $v_f = g \cdot t$
    const finalVelocity = g * timeOfFall;

    // 4. Mostrar los resultados
    document.getElementById('timeOfFall').textContent = timeOfFall.toFixed(2);
    document.getElementById('finalVelocity').textContent = finalVelocity.toFixed(2);
}