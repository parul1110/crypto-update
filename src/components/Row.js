export default function Row({ name, price, changePercent}){
    const priceConverted = +price;
    const changeConverted = +changePercent;

    const p = priceConverted.toFixed(2);
    const c = changeConverted.toFixed(2);
    let cn = "";
    if(c>0){
        cn="pos-green"
    } else{
        cn="neg-red"
    }
    return (
        <>
            <tr className="crydata">
                <td className="ctd">{name}</td>
                <td className="ctd">$ {p}</td>
                <td className={cn}>{c}</td>
            </tr>
        </>
    );
}
