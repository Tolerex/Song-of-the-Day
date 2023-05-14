var def = "https://open.spotify.com/embed/track/1SJtlNRJDeYHioymcvsqev?utm_source=generator";

document.getElementById('player').src = def;

function provider(value){
    if (value == 1){
        document.getElementById('player').src = def;
    }
    if (value == 2){
        document.getElementById('player').src = "https://www.youtube.com/embed/9VBU-1Lynho";
    }
    if (value == 3){
        document.getElementById('player').src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337048167&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
    }
}

