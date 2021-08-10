/* const precioOriginal = 100;
const descuento = 15;
 */

const coupons = [
    "MetalCore",
    "JavaScript",
    "Metallica"
]

function calculaPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputCoupon = document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value;

    /* const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value; */

    let descuento;

    switch(couponValue) {
        case "MetalCore":
            descuento  = 15;
            break;
            case "JavaScript":
                descuento = 30;
                break;
                case "Metallica":
                    descuento = 25;
                    break;
    }

    const precioConDescuento = calculaPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}


/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */