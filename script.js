var movies = [
    {
        id: 1,
        title: 'Pulp Fiction',
        date: '1994',
        length: '154 min',
        director: 'Quentin Tarrantino',
        desc: 'Para złodziejaszków, dwójka wykidajłów, żona szefa przestępczego półświatka _ losy tych ludzi, nieznanych sobie wcześniej, splatają się w przedziwnych okolicznościach.',
        img: 'images/pulp.jpg',
        video: 'https://www.youtube.com/watch?v=Ptw2_M1qDEU'
	},
    {
        id: 2,
        title: 'Skazani na Shawshank ',
        date: '1994',
        length: '144 min',
        director: 'Frank Darabont',
        desc: 'Film powstał na kanwie opowiadania Stephena Kinga Rita Hayworth and Shawshank Redemption. Opowiada historię Andyego Dufresnea, bankiera, który zostaje niesłusznie skazany na karę podwójnego dożywocia za zamordowanie własnej żony i jej kochanka. Trafia do więzienia Shawshank, w którym rządzą ...',
        img: 'images/shawshank.jpg',
        video: 'https://www.youtube.com/playlist?list=PLiTzi0RMVFS1UlOQyIT8QIQs7D9hYjrjg'
	},
    {
        id: 3,
        title: 'Forrest Gump',
        date: '1994',
        length: '144 min',
        director: 'Robert Zemeckis',
        desc: 'Forrest Gump – amerykański film fabularny z 1994 roku w reżyserii Roberta Zemeckisa. Scenariusz fabuły został oparty na powieści o tym samym tytule Winstona Grooma. W tytułową rolę wcielił się tu Tom Hanks. Dochody ze sprzedaży biletów kinowych przyniosło twórcom potężne zyski finansowe. Na całym świecie film ...',
        img: 'images/forrest.jpg',
        video: 'https://www.cda.pl/video/154544963'
	}

];

var card = movies.map(function (movie) {
    return React.createElement('div', {
            className: 'side'
        },
        React.createElement('div', {
                className: 'left-side'
            },
            React.createElement('img', {
                src: movie.img
            })
        ),

        React.createElement('div', {
                className: 'right-side'
            },
            React.createElement('h2', {}, movie.title),
            React.createElement('div', {
                    className: 'details'
                },
                React.createElement('ul', {},
                    React.createElement('li', {}, movie.date),
                    React.createElement('li', {}, movie.length),
                    React.createElement('li', {}, movie.director)
                )

            ),

            React.createElement('div', {
                    className: 'right-side-opis'
                },
                React.createElement('p', {}, movie.desc)
            ),

            React.createElement('div', {
                    className: 'button'
                },
                React.createElement('a', {
                    href: movie.video,
                    target: '_blank'
                }, 'Zobacz film')
            )
        )
    )
});



var element = React.createElement('section', {},
    React.createElement('div', {
            className: 'container'
        },
        React.createElement('h1', {}, 'Najlepsze filmy, wg mnie :) :'), card
    )
);




ReactDOM.render(element, document.getElementById('app'));
