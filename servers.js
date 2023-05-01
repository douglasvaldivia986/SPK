function drive() {
    document.getElementById('drive').style.display = 'block'
    document.getElementById('lare').style.display = 'none'
    document.getElementById('sb').style.display = 'none'
    document.getElementById('tape').style.display = 'none'
    document.getElementById('mega').style.display = 'none'
    var sb = document.getElementById('sb');
    sb.src = sb.src;
    var send = document.getElementById('lare');
    send.src = send.src;
    var shar = document.getElementById('tape');
    shar.src = shar.src;
    var send = document.getElementById('mega');
    send.src = send.src;
}

function lare() {
    document.getElementById('lare').style.display = 'block'
    document.getElementById('drive').style.display = 'none'
    document.getElementById('sb').style.display = 'none'
    document.getElementById('tape').style.display = 'none'
    document.getElementById('mega').style.display = 'none'
    var sb = document.getElementById('drive');
    sb.src = sb.src;
    var drive = document.getElementById('sb');
    drive.src = drive.src;
    var shar = document.getElementById('tape');
    shar.src = shar.src;
    var send = document.getElementById('mega');
    send.src = send.src;
}

function sb() {
    document.getElementById('sb').style.display = 'block'
    document.getElementById('drive').style.display = 'none'
    document.getElementById('lare').style.display = 'none'
    document.getElementById('tape').style.display = 'none'
    document.getElementById('mega').style.display = 'none'
    var send = document.getElementById('drive');
    send.src = send.src;
    var drive = document.getElementById('lare');
    drive.src = drive.src;
    var shar = document.getElementById('tape');
    shar.src = shar.src;
    var send = document.getElementById('mega');
    send.src = send.src;
}

function tape() {
    document.getElementById('tape').style.display = 'block'
    document.getElementById('drive').style.display = 'none'
    document.getElementById('lare').style.display = 'none'
    document.getElementById('sb').style.display = 'none'
    document.getElementById('mega').style.display = 'none'
    var sb = document.getElementById('drive');
    sb.src = sb.src;
    var drive = document.getElementById('lare');
    drive.src = drive.src;
    var send = document.getElementById('sb');
    send.src = send.src;
    var send = document.getElementById('mega');
    send.src = send.src;
}

function mega() {
    document.getElementById('mega').style.display = 'block'
    document.getElementById('drive').style.display = 'none'
    document.getElementById('lare').style.display = 'none'
    document.getElementById('sb').style.display = 'none'
    document.getElementById('tape').style.display = 'none'
    var sb = document.getElementById('drive');
    sb.src = sb.src;
    var drive = document.getElementById('lare');
    drive.src = drive.src;
    var send = document.getElementById('sb');
    send.src = send.src;
    var send = document.getElementById('tape');
    send.src = send.src;
}