# Assignment-4

## Date Picker App
This app serves the purpose of displaying a calendar and selecting a date. Then the selected date can be used to do anything.
In this app for demonstration purposes, the date is just displayed on the screen.

### Components
    • ExploreContainer
        This component renders all the elements displayed on the homepage.
    • DatePicker
        This component renders the date-time object and displays the calendar.

The date changes with the onIonChange event listener.
But it can easily be configured to change only when the date is accepted with a button click.
This can be achieved by creating a local state which keeps track of the selected date and then
adding a button with an onClick event listener that calls the function acceptSelectedDate as shown below.

    // DatePicker.tsx

    const [localDate,setLocalDate] = React.useState("");
    
    function handleDateChange(date:any){
        setLocalDate(date);
    }

    function acceptSelectedDate(value:any){
        props.setDate(value)
    }
    
    return(
        <div className="date-picker">
            <IonDatetime className="datetime" onIonChange={(event)=> handleDateChange((event.detail.value))}></IonDatetime>
            <IonButton onClick={event=>acceptSelectedDate(localDate)}></IonButton>
        </div>
    ) 