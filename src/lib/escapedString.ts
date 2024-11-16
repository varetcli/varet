function escapeSpecialChars(input: string) {
  return input
    .replace(/\\/g, '\\\\') // Escape backslashes
    .replace(/"/g, '\\"') // Escape double quotes
    .replace(/'/g, "\\'") // Escape single quotes (if needed)
}

export default escapeSpecialChars
