document.addEventListener('DOMContentLoaded', function() {

    function playsound(e) {
        console.log(e.keyCode); //pokazuje keyCode przypisany do klawisza - keyCode są oznaczone w klasach w index.html przy danym klawiszu z klawiatury
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // console.log(audio);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        // console.log(key);
        if (!audio) return // to samo co {return} - zatrzymuje funkcje
        audio.currentTime = 0; //umożliwa odtwarzanie dzwięku za każdym razem gdy naciśniemy klawisz
        audio.play();
        key.classList.add('playing'); //dodaję klasę z efektem transform
    }


    function removeTransition(e) {
        console.log(e); // po naciśnięciu klawisza w konsoli widzimy 6 eventów, po rozwinięciu eventu z nazwą  "transform" szukamy propertyName
        if (e.propertyName !== "transform") return; //pomiń jeśli nie jest to event transform
        console.log(this); //kryje się pod nim aktualnie naciskany klawisz
        this.classList.remove('playing');

    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playsound); // event śledzący klawisze;

});
