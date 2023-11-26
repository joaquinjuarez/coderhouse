const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const embedUrl = urlParams.get('embedUrl');

if (embedUrl) {
    console.log(embedUrl);
    const videoContainer = document.getElementById('videoContainer');
    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.width = '800'; 
    iframe.height = '450'; 
    iframe.allowfullscreen = true;

    videoContainer.appendChild(iframe);
} else {
    
    alert('No embedded video URL specified.');
}
if (embedUrl == 'https://www.youtube.com/embed/ZaRwqa2xVJg') {
    const image = document.getElementById('reproductorimage');
    var img = new Image();
    img.src = 'images/ang.png';
    img.height = '150' ;
    img.width = '150' ;
    image.appendChild(img);
    const textContainer = document.getElementById('reproductortext');
    textContainer.innerHTML = 'Un chico de 12 años y sus amigos deben usar sus poderes para salvar al mundo del maléfico Señor del Fuego y traer paz para las tres naciones.'
}
if (embedUrl == 'https://www.youtube.com/embed/fnCT7d7THpY') {
    const image = document.getElementById('reproductorimage');
    var img = new Image();
    img.src = 'images/adventuretimaicon.jpg';
    img.height = '150' ;
    img.width = '150' ;
    image.appendChild(img);
    const textContainer = document.getElementById('reproductortext');
    textContainer.innerHTML = 'Finn, que tiene doce años, lucha contra el mal en la Tierra de Ooo. Ayudado por su canino mágico, Jake.'
}
if (embedUrl == 'https://www.youtube.com/embed/o2E2wLm_LlY') {
    const image = document.getElementById('reproductorimage');
    var img = new Image();
    img.src = 'images/gravityfallsicon.jpg';
    img.height = '150' ;
    img.width = '150' ;
    image.appendChild(img);
    const textContainer = document.getElementById('reproductortext');
    textContainer.innerHTML = 'El tío Stan invita a los gemelos Dipper y Mabel Pines a pasar el verano en el misterioso pueblo de Gravity Falls, Oregón.'
}
if (embedUrl == 'https://www.youtube.com/embed/ROCIksHW2oc') {
    const image = document.getElementById('reproductorimage');
    var img = new Image();
    img.src = 'images/invencibleicon.png';
    img.height = '150' ;
    img.width = '150' ;
    image.appendChild(img);
    const textContainer = document.getElementById('reproductortext');
    textContainer.innerHTML = 'Mark Grayson, de 17 años, es como cualquier otro chico de su edad, excepto que su padre es el superhéroe más poderoso del planeta, Omni-Man.'
}
if (embedUrl == 'https://www.youtube.com/embed/mhYwcpw6yBY') {
    const image = document.getElementById('reproductorimage');
    var img = new Image();
    img.src = 'images/dariaicon.jpg';
    img.height = '150' ;
    img.width = '150' ;
    image.appendChild(img);
    const textContainer = document.getElementById('reproductortext');
    textContainer.innerHTML = 'La inteligente y sardónica, Daria Morgendorffer, trata de pasar desapercibida en la secundaria de Lawndale y ella está haciendo una excelente labor consiguiéndolo'
}
if (embedUrl == 'https://www.youtube.com/embed/M0vnBeHeuzs') {
    const image = document.getElementById('reproductorimage');
    var img = new Image();
    img.src = 'images/anastaciaicon.jpg';
    img.height = '150' ;
    img.width = '150' ;
    image.appendChild(img);
    const textContainer = document.getElementById('reproductortext');
    textContainer.innerHTML = 'Años después de haber perdido a su familia por un maleficio del malvado Rasputín, una huérfana, que desconoce su propia identidad como princesa, logra reunirse con su abuela en París.'
}
if (embedUrl == 'https://www.youtube.com/embed/qgDRjWBfmm0') {
    const image = document.getElementById('reproductorimage');
    var img = new Image();
    img.src = 'images/porcorossoicon.jpg';
    img.height = '150' ;
    img.width = '150' ;
    image.appendChild(img);
    const textContainer = document.getElementById('reproductortext');
    textContainer.innerHTML = 'Un piloto es transformado en un puerco humanoide y deja la isla sólo para rescatar a víctimas de los piratas aéreos.'
}
if (embedUrl == 'https://www.youtube.com/embed/CHCUkXUPkFM') {
    const image = document.getElementById('reproductorimage');
    var img = new Image();
    img.src = 'images/spiritedawayicon.jpg';
    img.height = '150' ;
    img.width = '150' ;
    image.appendChild(img);
    const textContainer = document.getElementById('reproductortext');
    textContainer.innerHTML = 'Chihiro es una niña caprichosa que debe adentrarse en un mundo de fantasía para poder salvar a sus padres, convertidos en cerdos.'
}
if (embedUrl == 'https://www.youtube.com/embed/sZIimDPZQwg') {
    const image = document.getElementById('reproductorimage');
    var img = new Image();
    img.src = 'images/atlantisicon.png';
    img.height = '150' ;
    img.width = '150' ;
    image.appendChild(img);
    const textContainer = document.getElementById('reproductortext');
    textContainer.innerHTML = 'El nieto de un aventurero se une a la actual expedición para encontrar la legendaria ciudad sumergida.'
}
if (embedUrl == 'https://www.youtube.com/embed/ie53R2HEZ6g') {
    const image = document.getElementById('reproductorimage');
    var img = new Image();
    img.src = 'images/tarzanicon.jpg';
    img.height = '150' ;
    img.width = '150' ;
    image.appendChild(img);
    const textContainer = document.getElementById('reproductortext');
    textContainer.innerHTML = 'Un hombre, criado por los simios en la selva de África, conoce a un profesor, a su hija y a un cazador.'
}