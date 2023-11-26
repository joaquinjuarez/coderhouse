function playVideo(embedUrl) {
            
    window.location.href = `reproductor.html?embedUrl=${encodeURIComponent(embedUrl)}`;
}