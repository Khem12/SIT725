const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#"></a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.subTitle+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.description+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

// const formSubmitted = () => {
//     let formData = {};
//     formData.title = $('#title').val();
//     formData.subTitle = $('#subTitle').val();
//     formData.path = $('#path').val();
//     formData.description = $('#description').val();

//     console.log(formData);
//     postCat(formData);
// }
const trackingForm = () => {
    let formData = {};
    formData.firstname = $('#first_name').val();
    formData.lastname = $('#last_name').val();
    formData.email = $('#email').val();
    formData.height = $('#height').val();
    formData.weight = $('#weight').val();
    
    console.log("Your tracking form is completed. Here are the details!", formData);
    postTrack(formData)
}

function postTrack(track){
    $.ajax({
        url:'/api/tracker',
        type:'POST',
        data:track,
        success: (result)=>{
            if (result.statusCode === 201) {
                console.log('step track successful');
            }
        }
    });
}

function getAllTrack(){
    $.get('/api/trackers', (response)=>{
        // response's data is in array format, so we can use it
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#track').click(()=>{
        trackingForm();
    });
    $('.modal').modal();
    getAllTrack();
});