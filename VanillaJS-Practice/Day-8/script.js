const str = "Ultimate JavaScript / FrontEnd Guide";
const keywords = ["end", "JavaScript"];

const highlight = (str, keywords, caseInsensitive = false) => {
  if (caseInsensitive) {
    keywords = keywords.map((e) => e.toLowerCase());
  }

  const uniqueKeywords = new Set(keywords);

  const words = str.split(" ");

  const hasWord = (word) => {
    word = caseInsensitive ? word.toLowerCase() : word;
    return uniqueKeywords.has(word);
  };

  const result = words.map((word) => {
    let output = "";

    if (hasWord(word)) {
      output = `<strong>${word}</strong>`;
    } else {
      for (let i = 0; i < word.length; i++) {
        const prefix = word.slice(0, i + 1);
        const suffix = word.slice(i + 1);

        if (hasWord(prefix) && hasWord(suffix)) {
          output = `<strong>${prefix + suffix}</strong>`;
        } else if (hasWord(prefix) && !hasWord(suffix)) {
          output = `<strong>${prefix}</strong>${suffix}`;
        } else if (hasWord(suffix) && !hasWord(prefix)) {
          output = `${prefix}<strong>${suffix}</strong>`;
        }
      }
    }

    return output !== "" ? output : word;
  });

  return result.join(" ");
};

console.log(highlight(str, keywords, true));
