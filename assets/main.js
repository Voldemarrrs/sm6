let users = [
    {
        id : 1,
        name : 'Novost 1',
        author : 'Hector',
        date : '01.03.1909',
        text : 'лорем ипсум чета там эщкеряяяяяяяяяяяяяяяяяяяяяяяяяяя'
    },
    {
        id : 2,
        name : 'Novost 2',
        author : 'Victor',
        date : '01.03.1909',
        text : 'лорем ипсум чета там эщкеряяяяяяяяяяяяяяяяяяяяяяяяяяя'
    },
    {
        id : 3,
        name : 'Novost 3',
        author : 'Dirka',
        date : '01.03.1909',
        text : 'лорем ипсум чета там эщкеряяяяяяяяяяяяяяяяяяяяяяяяяяя'
    },
    {
        id : 4,
        name : 'Novost 4',
        author : 'Pipka',
        date : '01.03.1909',
        text : 'лорем ипсум чета там эщкеряяяяяяяяяяяяяяяяяяяяяяяяяяя'
    },
    {
        id : 5,
        name : 'Novost 5',
        author : 'Siska',
        date : '01.03.1909',
        text : 'лорем ипсум чета там эщкеряяяяяяяяяяяяяяяяяяяяяяяяяяя'
    },
]
let box_content = '<div class = "news_content"></div>';
let box = document.querySelector('.news-list');

for (let i = 0; users.length; i++){
    box.insertAdjacentHTML('beforeend',
    '<div class="news_content"><div class="content-title"><h1 class="name">'+users[i]['name']+'</h1> <p class="text">'+users[i]['date']+'</p></div> <div class="content-text">'+users[i]['text']+'</div> <div class="content-footer"><p class="subtitle">'+users[i]['author']+'</p><p class="id"> Id:'+users[i]['id']+'</p></div></div>');
}
