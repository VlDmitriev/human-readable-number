module.exports = function toReadable (number) {
    if (number == 0) {return 'zero'}
    number = String(number);
    let hundredResult = ''
    let dozensResult = '';
    let unitsResult = ''
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen' ,'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number.length == 3){
        hundredResult = `${units[Number(number[0])]} hundred`
        number = number.slice(1)
    }
    if (Number(number) < 20){
        dozensResult = ` ${units[Number(number)]}`
    }else{
        dozensResult = ` ${dozens[Number(number[0])]} `
        unitsResult = `${units[Number(number[1])]}`
    }
    return (hundredResult + dozensResult + unitsResult).trim()
}
