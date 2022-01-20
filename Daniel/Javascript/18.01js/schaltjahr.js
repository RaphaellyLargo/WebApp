function schaltJahr(jahr) {
  let j = parseInt(jahr);
  if (j % 4 == 0) {
    if (j % 100 == 0) {
      if (j % 400 == 0) {
        return "ist Schaltjahr";
      } else {
        return "ist kein Schaltjahr";
      }
    } else {
      return "Schaltjahr";
    }
  } else {
    return "kein Schaltjahr";
  }
}
