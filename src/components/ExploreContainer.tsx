import React from 'react';
import { IonButton } from '@ionic/react';
import './ExploreContainer.css';
//components
import DatePicker from "./DatePicker";

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  
  const [dateShown, setDateShown] = React.useState(false) // Depending on this state, the datePicker and related elements are rendered or not.
  const [date, setDate] = React.useState(""); // This state holds the value of the date on the datePicker
  
  
  function formatDate(date : string){ // state holds an unformatted date as a string.
    let newDate = new Date(date);    // To cast it into a date object and format it,this function is used.
    return newDate.toLocaleDateString("en-US");
  }
  

  return (
    <div className="container">
      <h2 className="title">PICK A DATE</h2>
      
      {date != "" &&
        <div className="date">
          {formatDate(date)}
        </div>}

      {!dateShown &&
        <IonButton onClick={() => setDateShown(true)} expand="block">
        <h5>Date Picker</h5>
        </IonButton>}

      {dateShown &&
        <h3 className="small-text">
          The date you picked is displayed above.
        </h3>}

      <section className="datepicker">
        {dateShown && <DatePicker setDate={setDate}/>}
      </section>
        {dateShown && <IonButton onClick={()=>setDateShown(false)} ><h5>CLOSE</h5></IonButton>}

    </div>
  );
};

export default ExploreContainer;
