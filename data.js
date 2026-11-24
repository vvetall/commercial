/* This is a review prototype. See PROTOTYPE-NOTES.txt for sourced vs illustrative values. */
window.COMMERCE = {
  purposes: ['Свободное назначение','Торговые','Офисные','Объекты общепита','Образовательные','Спортивные','Медицинские','Производственные','Коммунально-бытовые','Складские'],
  finishes: ['Без отделки','Предчистовая отделка','С отделкой'],
  propertyClasses: ['Стандарт','Комфорт','Бизнес','Элитный'],
  // Independent of the letter BC class; assign from developer data, without automatic conversion.
  projects: [
    {
      id: 'noon', name: 'БЦ «НУН»', fullName: 'Бизнес-центр «НУН»', developer: 'Dominanta', legal: 'АО «СЗ «Окская, 9»',
      region: 'Москва', district: 'Рязанский', area: 'ЮВАО', address: 'г. Москва, Окская улица, вл. 9',
      metro: 'Окская', metroMinutes: 5,
      metros: [{name:'Окская',minutes:5,lineName:'Некрасовская линия',lineColor:'#DE64A1'}], car: 'ТТК', carMinutes: 10,
      className: 'В+', propertyClass: 'Бизнес', date: 'I квартал 2027', year: '2027', commission: '3%',
      images: ['noon-1.png','noon-2.png','noon-3.png','noon-4.png','noon-5.png','noon-6.png','noon-7.png'],
      x: 72, y: 70, lat: 55.7187, lng: 37.7692,
      description: 'НУН — камерный бизнес-центр класса В+ с выразительным обликом и максимальным функционалом. Ярко-малиновый фасад и необычная треугольная форма здания не оставят объект без внимания. Бизнес-центр располагается между Волгоградским и Рязанским проспектами, где развитая городская инфраструктура дополняется отличной транспортной доступностью.',
      highlights: ['Камерный бизнес-центр','5 минут до метро','Выразительная архитектура'],
      offers: [
        {purpose:'Офисные',format:'Отдельные офисы',min:73,max:163,priceMin:25.7,priceMax:52.6,perMeter:null,finish:'Предчистовая отделка'},
        {purpose:'Торговые',format:'Помещения на первом этаже',min:90,max:140,priceMin:null,priceMax:null,perMeter:null,finish:'Без отделки',demo:true}
      ],
      extra: [{name:'Машиноместа',text:'Условия и наличие по запросу',icon:'parking'},{name:'Кладовые',text:'Условия и наличие по запросу',icon:'box'}]
    },
    {
      id: 'tech', name: 'БЦ «Технопарк Октябрьское поле»', fullName: 'Бизнес-центр «Технопарк Октябрьское поле»', developer: 'РГ-Девелопмент',legal:'ООО «СЗ «Стройэкспорт»',
      region:'Москва',district:'Щукино',area:'СЗАО',address:'г. Москва, ул. Ротмистрова, 10',
      metro:'Октябрьское поле',metroMinutes:15,
      metros:[{name:'Октябрьское поле',minutes:15,lineName:'Таганско-Краснопресненская линия',lineColor:'#943E90'}],car:'ТТК',carMinutes:11,
      className:'А',propertyClass:'Бизнес',date:'IV квартал 2026',year:'2026',commission:'3%',classDemo:true,
      images:['tech-1.jpg','tech-2.jpg'],x:24,y:23,lat:55.805,lng:37.48,
      description:'Бизнес-центр в районе Щукино, на улице Ротмистрова. До станции метро «Октябрьское поле» — 15 минут, до ТТК на автомобиле — 11 минут. В сохранённом каталоге представлены площади 1 080–1 081 м². Для демонстрации сценария в прототипе стоимость скрыта: актуальное предложение можно запросить через заявку.',
      highlights:['Офисные площади крупного формата','Район Щукино','Удобный выезд на ТТК'],
      offers:[
        {purpose:'Офисные',format:'Офисные блоки',min:1080,max:1081,priceMin:null,priceMax:null,perMeter:null,finish:'Без отделки',priceDemo:true},
        {purpose:'Объекты общепита',format:'Помещения под общепит',min:120,max:220,priceMin:null,priceMax:null,perMeter:null,finish:'Без отделки',demo:true}
      ],
      extra:[{name:'Машиноместа',text:'Условия и наличие по запросу',icon:'parking'},{name:'Кладовые',text:'Условия и наличие по запросу',icon:'box'}]
    }
  ]
};
