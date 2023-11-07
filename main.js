
const imgContainer = document.querySelector('#gifImgDiv')
const btn = document.querySelector('button');
const input = document.querySelector('#input');
const inputNumber = document.querySelector('#inputNumber');

btn.addEventListener('click', loadGIF);

function loadGIF(e) {

        const searchQuery = input.value;
        const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchQuery)}&api_key=GJnlJiNDF8KArUbC55lgfXLa46kRGqJq`;

        imgContainer.innerHTML = ""
        const numberOfImg = parseInt(inputNumber.value, 10)

        if (numberOfImg > 0) {
                fetch(apiUrl)
                    .then(function (response) {
                            return response.json();
                    })
                    .then(function (giphyData) {
                            if (giphyData.data.length > 0) {
                                    for (let i = 0; i < Math.min(numberOfImg,giphyData.data.length); i++) {
                                            const img = document.createElement("img")
                                            img.setAttribute("height", 400)
                                            img.setAttribute("width", 400)
                                            giphyData.data.sort(() => {return 0.5 - Math.random()})
                                            img.src = giphyData.data[1].images.original.url
                                            imgContainer.appendChild(img)
                                    }
                            }
                    })
        }
}
document.body.appendChild(imgContainer)
