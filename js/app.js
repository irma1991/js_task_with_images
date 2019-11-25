const vietos = document.querySelector('ul');

const button1 = document.querySelector('#rodyti');
button1.addEventListener('click', RodykFoto)

const button2 = document.querySelector('#maisyti');
button2.addEventListener('click', MaisykFoto)

let foto = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10'];

function RodykFoto()
{
	for (let i = 0; i < foto.length; i++)
	{
		const vieta = document.createElement('li');
        const fotos = document.createElement("img");
        fotos.src='img/'+foto[i]+'.png';
        vietos.appendChild(vieta);
        vieta.appendChild(fotos);
    }
}

function displayNone()
{
    let x = document.getElementById("rodyti");
    if (x.style.display === "none")
    {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function MaisykFoto()
{
	let naujas = foto
    naujas.sort(function () {
        return 0.5 - Math.random()
});

const seni = document.querySelectorAll('img');
	for(let i=0; i<naujas.length; i++)
	{
		seni[i].src='img/'+naujas[i]+'.png'
    }

    const list = document.querySelectorAll('img');
    for(let i=0; i < list.length; i++)
    {
    	list[i].ondblclick = function (e)
    	{
    		let target = e.target
            target.src = 'img/cover.png';
        }
    }
}




