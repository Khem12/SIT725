const clickMe = () => {
    alert("You are ready to go!")
}
const trackingForm = () => {
    let formData = {};
    formData.firstname = $('#first_name').val();
    formData.lastname = $('#last_name').val();
    formData.email = $('#email').val();
    formData.height = $('#height').val();
    formData.weight = $('#weight').val();
    
    console.log("Your tracking form is completed. Here are the details!", formData);
}
$(document).ready(function () {
    // $('.modal').modal();
    console.log("hehehnandanfan")
    $('#track').click(() => {
        trackingForm();
        clickMe();
    })
});