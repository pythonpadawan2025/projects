
const beforeusPics = [
    "https://drive.google.com/file/d/19EpInRdwlAR8qFw5iJyoss3lSnWFu0AI/view?usp=drive_link",
    "https://drive.google.com/file/d/1fknlS6VTFR35VxkO6DtK11hFqt-T5TWO/view?usp=drive_link",
    "https://drive.google.com/file/d/1XCBRGoQofab5LMCctLDmM-9bXPh6HA9Q/view?usp=drive_link",
    "https://drive.google.com/file/d/1TeBVFnYpFe_uU1gd0Z0_Z5bVTGiH0zvB/view?usp=drive_link",
    "https://drive.google.com/file/d/1QzJJ720PTilMbhYyv-xFoNJTRJWV8vPW/view?usp=drive_link",
    "https://drive.google.com/file/d/1G6IxvlP4-s-2O82FDO_d4vpNClfPbprr/view?usp=drive_link",
    "https://drive.google.com/file/d/1fob0kJ3017OyjjpI0WXFcxtFYz9sUtlI/view?usp=drive_link",
    "https://drive.google.com/file/d/1YaDYuXpcWVTqVfgbTnvNdUq-I9oQU5Ou/view?usp=drive_link",
    "https://drive.google.com/file/d/1RUbVOvO1mr5kfs1e1cIaRlN6V91Ha-T6/view?usp=drive_link",
    "https://drive.google.com/file/d/1r2F6sJYQvWaxTcdYv4cADzk__Kagn6Bb/view?usp=drive_link",
    "https://drive.google.com/file/d/1aIovdEhUh82epk7uI5AahVyC_Myg8f90/view?usp=drive_link",
    "https://drive.google.com/file/d/1OU7lpWHLplGLGufPgNtF0mCrMpxi0qwP/view?usp=drive_link",
    "https://drive.google.com/file/d/1zKdpeOIh3LgdDaLljHyp5e4vdgdactPf/view?usp=drive_link",
    "https://drive.google.com/file/d/1Vj3zbwlNX0tmaiNmCfmqk5goLAojIgoE/view?usp=drive_link",
    "https://drive.google.com/file/d/1iqU1WP1zwgYX224p6F8oVSxMar6onrUG/view?usp=drive_link",
]

const beforeusButton = document.querySelector('#beforeus');
const beforeusPicsId = beforeusPics.map(str => str.slice(32, 65));
const beforeusImageLink = [];
const beforeusDiv = document.querySelector('#beforeusdiv');

// this is the format to host google drive photos `https://drive.google.com/thumbnail?id=${beforeUsPicsId}&sz=s4000`

for (let i = 0; i < beforeusPics.length; i++) {
    beforeusImageLink.push(`https://drive.google.com/thumbnail?id=${beforeusPicsId[i]}&sz=s4000`)
};

for (let i = 0; i < beforeusPics.length; i++) {
    const singleImageFigure = document.createElement('figure');
    singleImageFigure.classList.add('imagefigure')
    const label = document.createElement('p');
    label.innerText = `${i + 1}`;
    const newImg = document.createElement('img');
    newImg.src = beforeusImageLink[i];
    singleImageFigure.appendChild(newImg);
    singleImageFigure.appendChild(label);
    beforeusDiv.appendChild(singleImageFigure);
}

beforeusButton.addEventListener('click', () => {
    beforeusDiv.classList.remove('hide');
    beforeusDiv.classList.add('show');
    year2015Div.classList.remove('show')
    year2015Div.classList.add('hide')
});

/// 2015 code

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
    year2015Div.classList.remove('hide');
    year2015Div.classList.add('show');
    beforeusDiv.classList.remove('show')
    beforeusDiv.classList.add('hide')
});









