class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\s'-]/g, "")
  }
  static titleize(string) {
    const staticWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newString = string[0].toUpperCase() + string.slice(1);
    let words = newString.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (!staticWords.includes(words[i])) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      }
    }
    return words.toString().replaceAll(',', ' ');
  }
}