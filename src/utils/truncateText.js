export function truncateText(text, maxLength) {
    if (!text) return ""

    // Eliminamos las etiquetas HTML
    const plainText = text.replace(/<[^>]+>/g, "")

    // Cortar el texto y agregar "..."
    return plainText.length > maxLength
     ? plainText.substring(0, maxLength) + "..."
     : plainText
}