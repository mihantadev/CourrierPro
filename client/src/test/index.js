

function verifierParentheses(expression) {

  const ouvrantes = ["("];
  const fermantes = [")"];
  const table = [];
  
  for (let i = 0; i < expression.length; i++) {
    const caractere = expression[i];
    if (ouvrantes.includes(caractere)) {
      table.push({ caractere });
    } else if (fermantes.includes(caractere)) {
      const indexOuvrante = fermantes.indexOf(caractere);
      const attendu = ouvrantes[indexOuvrante];
      if (table.length === 0 || table.pop().caractere !== attendu) {
        return false;
      }
    }
  }
  if (table.length > 0) {
    return false;
  }
  return true;
}
var expression1 = "(3 + 5) * (7- 2)";
var expression2 = "((a + b) * c";
var expression3 = ")(a + b)(";

console.log(verifierParentheses(expression1) ? "valide" : "non valide");
console.log(verifierParentheses(expression2) ? "valide" : "non valide");
console.log(verifierParentheses(expression3) ? "valide" : "non valide");
