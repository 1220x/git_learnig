var acc = document.getElementsByTagName('p');

for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle('active');
        
        var panel = document.getElementById(`p_${i+1}`);


        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    }
}