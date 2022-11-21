ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.57052106149734,26.354595894083708],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
         
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка',
           
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '111111',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemark1 = new ymaps.Placemark([53.57053696183328,26.361215809704934], {
            hintContent: '<strong>Стоянка № 1</strong>',
            iconContent: '<strong>Стоянка_№1</strong>',
        }, {
           
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
           
            // Размеры метки.
            iconImageSize: [30, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [25, 10],
            // Макет содержимого.
            
            balloonContentSize: [360, 260],
                    // Задаем макет балуна - пользовательская картинка с контентом
                    balloonLayout: "default#imageWithContent",
                    // Картинка балуна
                    balloonImageHref: 'ball.png',
                    // Смещение картинки балуна
                    balloonImageOffset: [-5, -60],
                    // Размеры картинки балуна
                    balloonImageSize: [350, 250],
                    
                    
                    
                    
            
        });
        myPlacemarkWithContent = new ymaps.Placemark([53.568396678302285,26.34648044903986], {
            hintContent: '<strong>Бюст герою СССР Царюку В.З</strong>',
            iconContent: '<strong>Бюст_герою_СССР_Царюку_В.З</strong>',
            
        }, {
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
           
            // Размеры метки.
            iconImageSize: [30, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [25, 10],
            // Макет содержимого.
                        balloonContentSize: [360, 260],
                    balloonLayout: "default#imageWithContent",
                    // Картинка балуна
                    balloonImageHref: 'bust.png',
                    // Смещение картинки балуна
                    balloonImageOffset: [-5, -60],
                    // Размеры картинки балуна
                    balloonImageSize: [300, 250],
        });
        myPlacemark2 = new ymaps.Placemark([53.573556831115795,26.36801552359785], {
            hintContent: '<strong>Стоянка №2</strong>',
            iconContent: '<strong>Стоянка_№2</strong>',
        }, {
           
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
           
            // Размеры метки.
            iconImageSize: [30, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [25, 10],
            // Макет содержимого.
            
            balloonContentSize: [360, 260],
                    // Задаем макет балуна - пользовательская картинка с контентом
                    balloonLayout: "default#imageWithContent",
                    // Картинка балуна
                    balloonImageHref: 'stoyanka2.png',
                    // Смещение картинки балуна
                    balloonImageOffset: [-5, -60],
                    // Размеры картинки балуна
                    balloonImageSize: [250, 250],
                    
                    
                    
            
        });
        myPlacemark3 = new ymaps.Placemark([53.574192015571064,26.344416778132572], {
            hintContent: '<strong>Монумент в память о 97 погибших мирных жителях </strong>',
            iconContent: '<strong>Монумент_в_память_о_97 погибших_мирных_жителях</strong>',
        }, {
           
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
           
            // Размеры метки.
            iconImageSize: [30, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [25, 10],
            // Макет содержимого.
            
            balloonContentSize: [360, 260],
                    // Задаем макет балуна - пользовательская картинка с контентом
                    balloonLayout: "default#imageWithContent",
                    // Картинка балуна
                    balloonImageHref: 'batskya.png',
                    // Смещение картинки балуна
                    balloonImageOffset: [-5, -60],
                    // Размеры картинки балуна
                    balloonImageSize: [350, 250],
                    
                    
                    
            
        });
        myPlacemark4 = new ymaps.Placemark([53.57131814355124,26.345457475230354], {
            hintContent: '<strong>Памятник погибшихв годы Советско-Польской войны </strong>',
            iconContent: '<strong>Памятник_погибших_в_годы_СоветскоПольской_войны</strong>',
        }, {
           
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
           
            // Размеры метки.
            iconImageSize: [30, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [25, 10],
            // Макет содержимого.
            
            balloonContentSize: [360, 260],
                    // Задаем макет балуна - пользовательская картинка с контентом
                    balloonLayout: "default#imageWithContent",
                    // Картинка балуна
                    balloonImageHref: 'pamyatnik1.png',
                    // Смещение картинки балуна
                    balloonImageOffset: [-5, -60],
                    // Размеры картинки балуна
                    balloonImageSize: [200, 250],
                    
                    
                    
            
        }); 
        myPlacemark5 = new ymaps.Placemark([53.57101480000813,26.346213858172558], {
            hintContent: '<strong>Церковь Вознесения Господня </strong>',
            iconContent: '<strong>Церковь_Вознесения_Господня</strong>',
        }, {
           
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
           
            // Размеры метки.
            iconImageSize: [30, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [25, 10],
            // Макет содержимого.
            
            balloonContentSize: [360, 260],
                    // Задаем макет балуна - пользовательская картинка с контентом
                    balloonLayout: "default#imageWithContent",
                    // Картинка балуна
                    balloonImageHref: 'zerkov.png',
                    // Смещение картинки балуна
                    balloonImageOffset: [-5, 60],
                    // Размеры картинки балуна
                    balloonImageSize: [350, 180],
                    
                    
                    
            
        }); 

        myPlacemark6 = new ymaps.Placemark([53.56958426625439,26.343059580371026], {
            hintContent: '<strong>Монумент в честь освобождения от немецко-фашистких захватчиков </strong>',
            iconContent: '<strong>Монумент_в_честь_освобождения_от_немецко_фашистких_захватчиков</strong>',
        }, {
           
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
           
            // Размеры метки.
            iconImageSize: [30, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [25, 10],
            // Макет содержимого.
            
            balloonContentSize: [360, 260],
                    // Задаем макет балуна - пользовательская картинка с контентом
                    balloonLayout: "default#imageWithContent",
                    // Картинка балуна
                    balloonImageHref: 'monument.png',
                    // Смещение картинки балуна
                    balloonImageOffset: [-5, -60],
                    // Размеры картинки балуна
                    balloonImageSize: [300, 200],
                    
                    
                    
            
        }); 
        myPlacemark7 = new ymaps.Placemark([53.56888953777759,26.34287115518773], {
            hintContent: '<strong>Часовня (XIX век) </strong>',
            iconContent: '<strong>Часовня_(XIX_век)</strong>',
            
        }, {
           
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
           
            // Размеры метки.
            iconImageSize: [30, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [25, 10],
            // Макет содержимого.
            
            balloonContentSize: [360, 260],
                    // Задаем макет балуна - пользовательская картинка с контентом
                    balloonLayout: "default#imageWithContent",
                    // Картинка балуна
                    balloonImageHref: 'hasovn.png',
                    // Смещение картинки балуна
                    balloonImageOffset: [-5, -60],
                    // Размеры картинки балуна
                    balloonImageSize: [300, 200],
                    balloonShadow: true
                    
                    
            
        }); 
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemarkWithContent);
        
        
});
