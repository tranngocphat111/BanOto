var select_main = document.querySelector('.select--Main');
var select_main_text = document.querySelector('.select--Main__content');
window.addEventListener('scroll',function() {
    if(window.pageYOffset > 600){
        Object.assign(select_main.style,{
            position : 'fixed',
            marginTop: '0',
            zIndex: '3',
            padding: '15px 15px'
        })
        select_main_text.style.display = 'none';
    }else{
        Object.assign(select_main.style,{
            position : 'relative',
            marginTop: '32px',
            zIndex: '0',
            padding: '90px 20px 50px 20px' 
        })
        select_main_text.style.display = 'block'
    }
})