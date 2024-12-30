export default function getBoxShadowValue(shadows) {
  let finalStrig = "";
  shadows.forEach((shadow) => {
    if (shadow.active) {
      shadow.input.forEach((input) => {
        if (input.type === "range") {
          finalStrig += `${input.value}px `;
        } else if (input.type === "color") {
          finalStrig += `${input.value}`;
        }
      });
      if (shadow.inset) {
        finalStrig += " inset";
      }
      if (shadows.indexOf(shadow) === shadows.length - 1) {
        finalStrig += ";";
      } else {
        finalStrig += ",";
      }
    }
  });
  return finalStrig;
}
