var deferredPromt;

if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
        console.log('Service worker registered!')
    });
}

window.addEventListener('beforeinstallprompt', function(event){
    console.log('beforeinstallpromt fired')
    event.preventDefault();
    deferredPromt = event;
    return false
})