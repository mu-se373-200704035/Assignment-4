import { IonDatetime } from "@ionic/react";
import React from "react";

export default function DatePicker(props: any){
    function handleChange(value:any){
        
        props.setDate(value)
    }
    return(
        <div className="date-picker">
            <IonDatetime className="datetime" onIonChange={(event)=> handleChange((event.detail.value))}></IonDatetime>
        </div>
    )
}