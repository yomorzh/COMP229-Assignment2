
(function(){
    function start(){
        
        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons){
            button.addEventListener('click',(event)=>{
                if (!confirm("Are you sure?")){
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }
    window.addEventListener("load", start);
})();