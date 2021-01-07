export function CreaDiv(element, texte) {
    let DivCrea = document.createElement(element);
    DivCrea.innerHTML = texte;
    return DivCrea
}

export function CreaInput(element, type, id, value) {
    let inputCrea = document.createElement(element);
    inputCrea.type = type;
    inputCrea.id = id;
    inputCrea.value = value;
    return inputCrea
}

export function CreaLabel(element, texte, association) {
    let labelCrea = document.createElement(element);
    labelCrea.innerHTML = texte;
    labelCrea.htmlFor = association;
    return labelCrea;
}