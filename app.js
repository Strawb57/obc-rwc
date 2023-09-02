import { getFirestore, collection, addDoc, onSnapshot} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js"
const db = getFirestore();
const dbRef = collection( db, "entries");


let entries = [];

// Get data
const getEntries = async() => {

    try {
        // const docSnap = await getDocs(dbRef);
        await onSnapshot(dbRef, docsSnap => {

            entries= [];

            docsSnap.forEach((doc) =>{
                const entry = doc.data();
                entry.id = doc.id;
                entries.push(entry);
                showEntries(entries);    
            });
            showEntries(entries);
        });

 
    } catch(err) {
        alert("Error reading DB "+ err)
    }
} 

getEntries();

// Show Entries on the left
const showEntries = (entrys) => {
    const entryList = document.getElementById("entry-list");
    entryList.innerHTML = "";
    
    entrys.forEach(entry => {
        const li = `<li class="entry-list-item">
        <div class="entry-name">
            ${entry.name}
        </div>
        <div class="entry-score">
            ${entry.score}
        </div>
        <div class="entry-paid">
            ${entry.paid}
        </div>
        <div class="action">
            <button class="edit-entry">Edit</button>
            <button class="delete-entry">Delete</button>
        </div>
    </li>`;

      entryList.innerHTML += li;

    });

} 




const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-btn")
const modalOverlay = document.getElementById("modal-overlay");

const saveBtn = document.querySelector(".save-btn");


const addButtonPressed = () => {
    modalOverlay.style.display = "flex";
}

const closeButtonPressed = () => {
    modalOverlay.style.display = "none";
} 

const hideModal = (e) => {
// Hide the Modal view when user clicks outsied Modal view
    if (e.target === e.currentTarget){
        modalOverlay.style.display = "none";
    }
}


addBtn.addEventListener("click", addButtonPressed);
closeBtn.addEventListener("click", closeButtonPressed);
// modalOverlay.addEventListener("click", hideModal);






// Form validation

const knownBy = document.getElementById("name"),
      score = document.getElementById("score"),
      paid = document.getElementById("paid");






const saveButtonPressed = async() => {
    console.log("Save button pressed");
    console.log("Name = " + knownBy.value);
    console.log("Score = " + score.value);
    console.log("PAID = " + paid.value);
    checkRequired([ knownBy, score, paid]);


    try {
        await addDoc( dbRef, {
            name: knownBy.value,
            score: score.value,
            paid: paid.value
        } );
        clearInputFields();
    } catch(err) {
        console.log(err);
    }





}

const checkRequired = (inputArray) => {
    inputArray.forEach(input => {
        if ( input.value.trim() === ""){
            console.log(input.id + " is empty");
        }
        
    });
}

function clearInputFields(){
    knownBy.value = "";
    score.value = "";
    paid.value = "";
}

saveBtn.addEventListener("click", saveButtonPressed);


