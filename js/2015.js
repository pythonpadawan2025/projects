
const year2015Pics = [
    "https://drive.google.com/file/d/1AVEyHd2BkDPr2FRBQOuJ_PHhFJtIlhKD/view?usp=drive_link",
    "https://drive.google.com/file/d/13q_bIPSHePYKqiorW2WYqwtenX8Tea3d/view?usp=drive_link",
    "https://drive.google.com/file/d/1lMgopQYbj1o1ECEatZA3unV9MQZUMFYo/view?usp=drive_link",
    "https://drive.google.com/file/d/1Cpo3wM1RoCFEBAsDfnl9eY_SNHcw9SLh/view?usp=drive_link",
    "https://drive.google.com/file/d/1Gg0NDrVuBXoETUrJQyng_8bJjccn7rV8/view?usp=drive_link",
    "https://drive.google.com/file/d/1DMPehNeKezcVuMbyDMkswJmK8cUeLRXu/view?usp=drive_link",
    "https://drive.google.com/file/d/1UbKqLMS7wcjrJdHgEaMSptYar8xkRpsj/view?usp=drive_link",
    "https://drive.google.com/file/d/1f8PbTgjAE7i6LxEaM9J4jZP4GBjhhgbX/view?usp=drive_link",
    "https://drive.google.com/file/d/1vtr6bNMbeAx94WFmUfWZnxD6n29IZgWp/view?usp=drive_link",
    "https://drive.google.com/file/d/1dwaaqiGUk-Zm_nVJ6HItrKPuj1O3YoWs/view?usp=drive_link",
    "https://drive.google.com/file/d/1u3a9diA-SrB-zzIxUA2qH7x69PrWpNYd/view?usp=drive_link",
    "https://drive.google.com/file/d/1ggF7Q_tjotTzvFysGeZVWH1-j2o2LiK4/view?usp=drive_link",
]

const divs = document.querySelectorAll('div');
const year2015Button = document.querySelector('#year2015');
const year2015PicsId = year2015Pics.map(str => str.slice(32, 65));
const year2015ImageLink = [];
const year2015Div = document.querySelector('#year2015div');

// this is the format to host google drive photos `https://drive.google.com/thumbnail?id=${year2015PicsId}&sz=s4000`

for (let i = 0; i < year2015Pics.length; i++) {
    year2015ImageLink.push(`https://drive.google.com/thumbnail?id=${year2015PicsId[i]}&sz=s4000`)
};

for (let i = 0; i < year2015Pics.length; i++) {
    const singleImageFigure = document.createElement('figure');
    singleImageFigure.classList.add('imagefigure')
    const label = document.createElement('p');
    label.innerText = `${i + 1}`;
    const newImg = document.createElement('img');
    newImg.src = year2015ImageLink[i];
    singleImageFigure.appendChild(newImg);
    singleImageFigure.appendChild(label);
    year2015Div.appendChild(singleImageFigure);
}

year2015Button.addEventListener('click', () => {
    beforeusDiv.classList.add('hide')
    year2015Div.classList.add('show')
});









