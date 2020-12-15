let wrapper = document.querySelector('.wrapper');

document.querySelector('button').addEventListener('click', () => {
    if(wrapper.classList == 'changeBackground') {
        wrapper.classList.remove('changeBackground');
    } else {
        wrapper.classList.add('changeBackground');
    }
});