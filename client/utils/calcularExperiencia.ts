// utils/calcularExperiencia.ts
export const calcularExperiencia = (fechaInicio: Date): { años: number; meses: number } => {
    const fechaActual = new Date(); // Fecha actual

    // Calcular la diferencia en meses
    let meses =
        (fechaActual.getFullYear() - fechaInicio.getFullYear()) * 12 +
        (fechaActual.getMonth() - fechaInicio.getMonth());

    // Ajustar si el día actual es menor que el día de inicio
    if (fechaActual.getDate() < fechaInicio.getDate()) {
        meses--;
    }

    // Calcular años y meses restantes
    const años = Math.floor(meses / 12);
    const mesesRestantes = meses % 12;

    return { años, meses: mesesRestantes };
};