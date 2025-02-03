const beforeusButton = document.querySelector('#beforeus');

const beforeUsPics = [
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

const beforeUsPicsId = beforeUsPics.map(str => str.slice(32, 65));
const beforeUsImageLink = []

// this is the format to host google drive photos `https://drive.google.com/thumbnail?id=${beforeUsPicsId}&sz=s4000`

for (let i = 0; i < beforeUsPics.length; i++) {
    beforeUsImageLink.push(`https://drive.google.com/thumbnail?id=${beforeUsPicsId[i]}&sz=s4000`)
}

const beforeUsDiv = document.querySelector('#beforeusdiv');

for (let i = 0; i < beforeUsPics.length; i++) {
    const singleImageFigure = document.createElement('figure');
    singleImageFigure.classList.add('imagefigure')
    const label = document.createElement('p');
    label.innerText = `${i + 1}`;
    const newImg = document.createElement('img');
    newImg.src = beforeUsImageLink[i];
    singleImageFigure.appendChild(newImg);
    singleImageFigure.appendChild(label);
    beforeUsDiv.appendChild(singleImageFigure);
}

beforeusButton.addEventListener('click', () => {
    beforeUsDiv.classList.toggle('hide')
});









