import axios from "axios";
import { useEffect, useState } from "react";
import Row from "./Row";

export default function Cryptodata({item}){
    const api="https://api.coincap.io/v2/assets";
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(api).then((response) => {
            setData(response.data.data);
        });
      }, []);

    let cdata = [];
    if(data.length>0){
        cdata = data.map((d, index)=>{
        let lname = d.name.toLowerCase();
        let litem = item.toLowerCase();
        if(item===""){
            return <Row name={d.name} price={d.priceUsd} changePercent={d.changePercent24Hr} key= {index}/>
        }else if(lname.indexOf(litem) !== -1){
            return <Row name={d.name} price={d.priceUsd} changePercent={d.changePercent24Hr} key= {index}/>
        }
        return ;
    });
    }

    return (
        <>
            <table className="ctab"><tbody>
            {cdata}
            </tbody></table>
        </>
    );

}