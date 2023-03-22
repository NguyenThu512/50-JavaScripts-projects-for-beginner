const feedbackList = document.querySelectorAll('.feedback');
const button = document.getElementById('submit');
const container = document.getElementById('container');

let selectedFeedback = "";

//process to remove class 'active' for all feedback
function removeActive() {
    feedbackList.forEach((feedback) => {
        feedback.classList.remove("active");
    });
  }

feedbackList.forEach(feedback => {
    feedback.onclick = function(e){
        removeActive()
        //get Feedback's content
        selectedFeedback = e.target.innerText || e.target.parentNode.innerText;
        //console.log(selectedFeedback);
        //add class active when click feedback
        e.target.classList.add("active");
        e.target.parentNode.classList.add("active");
    }
})

//process when click button
button.onclick = function(){
    if(selectedFeedback){
        container.innerHTML = `
            <strong>Thank you!</strong>
            <br>
            <br>
            <strong>Feedback: ${selectedFeedback}</strong>
            <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
}