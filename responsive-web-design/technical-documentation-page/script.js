// Toggle class navbar-hover according to current mouseover section 
document.querySelectorAll('section').forEach( (item) => 
item.addEventListener('mouseover', (el) => {
    document.querySelectorAll(`a`).forEach( (element) => {
        let currentElementId = element.href.substr(element.href.indexOf('#')+1);
        if (currentElementId === item.id){
            element.classList.add('navbar-hover')
        }
        else{
            element.classList.remove('navbar-hover')
        }
    });
}))


// Remove class navbar-rover when mouse is out of the sections
document.querySelectorAll('section').forEach( (item) => {
    item.addEventListener('mouseout', () => {
        document.querySelectorAll(`a`).forEach( (element) => {
            element.classList.remove('navbar-hover');
        });
    })
} )