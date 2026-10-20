// E2
const workoutForm = document.querySelector("#workoutForm")
const note = document.querySelector("#note")
const error = document.querySelector("#error")
const clearBtn = document.querySelector("#clearBtn")
const workoutList = document.querySelector("#workoutList")
const total = document.querySelector("#total")

const activityInput = document.querySelector("#activity");
const minutesInput = document.querySelector("#minutes");
const noteInput = document.querySelector("#note");




let workouts = [];

function render(){
    workoutList.textContent="";

    for(let i =0;i<workouts.length;i++){
        const li= document.createElement("li");
        const activityElement = document.createElement("h4");
        const minutesElement = document.createElement("p")
        const noteElement = document.createElement("p");

        activityElement.textContent=`Number ${i+1} workout is: ${workouts[i].activity};`
        minutesElement.textContent="Minutes: " + workouts[i].minutes + (workouts[i].minutes >29 ? " Long " : " Short");
        noteElement.textContent="Note: " + workouts[i].note;

        li.appendChild(activityElement);
        li.appendChild(minutesElement);
        li.appendChild(noteElement);

        workoutList.appendChild(li);
    }

}
render();
updateTotal();

// E3

workoutForm.addEventListener("submit", function(event){
    event.preventDefault();
//E3
    const activity = activityInput.value.trim();
    const minutesText = minutesInput.value.trim();
    const note = noteInput.value.trim();
    const minutes = Number(minutesText);

    //E4

    if (activity==="" && note===""){
        error.textContent = "Cannot be empty"
        return;
    }

    if (activity.length < 3){
        error.textContent = "cannot be shorter than 3 characters"
        return;
    }

    if(isNaN(minutes) || minutes===""){
        error.textContent = "Must be a number in the field minutes or cannot be empty"
        return;
    
    }

    if(minutes< 1 || minutes>300){
        error.textContent = "Please enter minutes between 1 and 300";
        return;

    }

    const newWorkout = {
        activity: activity,
        note: note,
        minutes: minutes
    }

    workouts.push(newWorkout);
    render();
    updateTotal();
    console.log(workouts)

    activityInput.value = "";
    minutesInput.value ="";
    noteInput.value="";


})

function updateTotal(){
      if (workouts.length===0){
        total.textContent="No workouts yet";
        return;
      }

      let sum=0;

      for (let i=0;i<workouts.length;i++){
        sum += workouts[i].minutes;
      }
      const average = sum / workouts.length;

total.textContent = `Total of workout minutes is:  ${sum}  and average of the total workouts is: ${average}`


}






