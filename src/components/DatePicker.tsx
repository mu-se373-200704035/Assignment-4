 //This is the DatePicker component. It is imported and used in the ExploreContainer component.
//This component receives setDate function as a prop which sets the date state in the ExploreContainer, on onIonChange event.

import { IonDatetime } from "@ionic/react";

export default function DatePicker(props: any){
    function handleDateChange(value:any){
        props.setDate(value)
    }
    return(
        <div className="date-picker">
            <IonDatetime className="datetime" onIonChange={(event)=> handleDateChange((event.detail.value))}></IonDatetime>
        </div>
    )
}