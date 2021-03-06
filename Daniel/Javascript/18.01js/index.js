function pluralizer() {
  printpluralizedNoun("cat");
  printpluralizedNoun("dog");
  printpluralizedNoun("truss");
  printpluralizedNoun("bus");
  printpluralizedNoun("marsh");
  printpluralizedNoun("lunch");
  printpluralizedNoun("tax");
  printpluralizedNoun("city");
  printpluralizedNoun("puppy");
  printpluralizedNoun("ray");
  printpluralizedNoun("boy");
}

/**
 * Returns the plural of a regular singular noun.
 * @param {*} regularNoun a regular singular noun.
 * @returns the plural of a regular singular noun.
 */
//e es-rule
function pluralizeRegularNoun(regularNoun) {
  if (
    regularNoun.endsWith("s") ||
    regularNoun.endsWith("ss") ||
    regularNoun.endsWith("sh") ||
    regularNoun.endsWith("ch") ||
    regularNoun.endsWith("x") ||
    regularNoun.endsWith("z")
  ) {
    return regularNoun + "es";
  }

  //y rule
  if (
    regularNoun.endsWith("y") &&
    !(
      regularNoun.endsWith("ay") ||
      regularNoun.endsWith("ey") ||
      regularNoun.endsWith("iy") ||
      regularNoun.endsWith("oy") ||
      regularNoun.endsWith("uy")
    )
  ) {
    return regularNoun.slice(0, -1) + "ies";
  }

  // standard rule
  return regularNoun + "s";
}

function printpluralizedNoun(regularNoun) {
  document.write(regularNoun + " --> " + pluralizeRegularNoun(regularNoun));
  document.write("<br />");
}
