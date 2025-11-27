// Constante para convertir grados a radianes: PI / 180
const DEG_TO_RAD = Math.PI / 180;

function calculateProjectile() {
    // 1. Obtener valores de entrada
    const v0 = parseFloat(document.getElementById('initialVelocity').value); // Velocidad Inicial
    const theta_deg = parseFloat(document.getElementById('angle').value);    // Ángulo en grados
    const g = parseFloat(document.getElementById('gravity').value);          // Gravedad

    // 2. Validación de entradas
    if (isNaN(v0) || isNaN(theta_deg) || isNaN(g) || v0 < 0 || g <= 0 || theta_deg < 0 || theta_deg > 90) {
        alert("Por favor, introduce valores numéricos válidos. La velocidad inicial debe ser >= 0, la gravedad > 0 y el ángulo debe estar entre 0 y 90 grados.");
        
        // Limpiar resultados si la entrada es inválida
        document.getElementById('range').textContent = '--';
        document.getElementById('maxHeight').textContent = '--';
        document.getElementById('timeOfFlight').textContent = '--';
        return;
    }

    // Convertir el ángulo de grados a radianes
    const theta_rad = theta_deg * DEG_TO_RAD;

    // 3. Aplicar las fórmulas de Tiro Parabólico
    const sin_theta = Math.sin(theta_rad);
    
    // Tiempo de Vuelo: $t_v = \frac{2 \cdot v_0 \cdot \sin(\theta)}{g}$
    const timeOfFlight = (2 * v0 * sin_theta) / g;

    // Altura Máxima: $h_{máx} = \frac{v_0^2 \cdot \sin^2(\theta)}{2 \cdot g}$
    const maxHeight = (v0 * v0 * sin_theta * sin_theta) / (2 * g);

    // Alcance Máximo: $R = \frac{v_0^2 \cdot \sin(2\theta)}{g}$
    const sin_2theta = Math.sin(2 * theta_rad);
    const range = (v0 * v0 * sin_2theta) / g;


    // 4. Mostrar los resultados
    document.getElementById('range').textContent = range.toFixed(2);
    document.getElementById('maxHeight').textContent = maxHeight.toFixed(2);
    document.getElementById('timeOfFlight').textContent = timeOfFlight.toFixed(2);
}