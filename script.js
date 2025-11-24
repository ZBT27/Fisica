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

    // Convertir el ángulo de grados a radianes, ya que las funciones trigonométricas de JS usan radianes
    const theta_rad = theta_deg * DEG_TO_RAD;

    // 3. Aplicar las fórmulas de Tiro Parabólico

    // Seno del ángulo (sin(θ))
    const sin_theta = Math.sin(theta_rad);
    // Coseno del ángulo (cos(θ)) - Necesario para otras fórmulas, pero no en las que usamos aquí
    // const cos_theta = Math.cos(theta_rad); 
    
    // --- Tiempo de Vuelo (tᵥ) ---
    // tᵥ = (2 * v₀ * sin(θ)) / g
    const timeOfFlight = (2 * v0 * sin_theta) / g;

    // --- Altura Máxima (hₘáₓ) ---
    // hₘáₓ = (v₀² * sin²(θ)) / (2 * g)
    const maxHeight = (v0 * v0 * sin_theta * sin_theta) / (2 * g);

    // --- Alcance Máximo (R) ---
    // Utilizamos sin(2θ), que es 2 * sin(θ) * cos(θ)
    // R = (v₀² * sin(2θ)) / g
    const sin_2theta = Math.sin(2 * theta_rad);
    const range = (v0 * v0 * sin_2theta) / g;


    // 4. Mostrar los resultados (limitado a 2 decimales para claridad)
    document.getElementById('range').textContent = range.toFixed(2);
    document.getElementById('maxHeight').textContent = maxHeight.toFixed(2);
    document.getElementById('timeOfFlight').textContent = timeOfFlight.toFixed(2);
}