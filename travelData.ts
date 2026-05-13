export interface TravelChallenge {
  id: string;
  sentence: string;
  translation: string;
  options: string[];
  correct: string;
  explanation: string;
  type: 'tener' | 'hay' | 'necesitar';
}

export const TRAVEL_DATA: TravelChallenge[] = [
  {
    id: "t1",
    sentence: "Para viajar a España, ___ un pasaporte.",
    translation: "Իսպանիա մեկնելու համար անձնագիր է պետք:",
    options: ["necesito", "hay que", "tenemos"],
    correct: "necesito",
    explanation: "Necesitar-ը օգտագործվում է, երբ ինչ-որ բանի կարիք ունենք (անձնագիր)։",
    type: 'necesitar'
  },
  {
    id: "t2",
    sentence: "___ llegar al aeropuerto dos horas antes.",
    translation: "Պետք է օդանավակայան հասնել երկու ժամ շուտ (ընդհանուր կանոն):",
    options: ["Hay que", "Tengo que", "Necesito"],
    correct: "Hay que",
    explanation: "Hay que-ն օգտագործվում է ընդհանուր անդեմ պարտադրանքի համար։",
    type: 'hay'
  },
  {
    id: "t3",
    sentence: "Գոռ, tú ___ comprar los billetes.",
    translation: "Գոռ, դու պետք է գնես տոմսերը:",
    options: ["tienes que", "hay que", "necesitas que"],
    correct: "tienes que",
    explanation: "Tener que-ն օգտագործվում է անձնական պարտավորության դեպքում (tú tienes)։",
    type: 'tener'
  },
  {
    id: "t4",
    sentence: "Գայանե ___ hacer la maleta hoy.",
    translation: "Գայանեն պետք է հավաքի ճամպրուկը այսօր:",
    options: ["tiene que", "hay que", "necesitamos"],
    correct: "tiene que",
    explanation: "Ella (Գայանե) tiene que. Անձնական պարտականություն:",
    type: 'tener'
  },
  {
    id: "t5",
    sentence: "___ llevar ropa cómoda para el vuelo.",
    translation: "Պետք է հարմարավետ շորեր հագնել թռիչքի համար (խորհուրդ/կանոն):",
    options: ["Hay que", "Tengo que", "Necesito"],
    correct: "Hay que",
    explanation: "Ընդհանուր խորհուրդ բոլոր ճամփորդների համար:",
    type: 'hay'
  },
  {
    id: "t6",
    sentence: "Nosotros ___ encontrar un hotel barato.",
    translation: "Մենք պետք է գտնենք էժան հյուրանոց:",
    options: ["tenemos que", "hay que", "necesita"],
    correct: "tenemos que",
    explanation: "Nosotros tenemos que. Մեր խմբային պարտականությունը:",
    type: 'tener'
  },
  {
    id: "t7",
    sentence: "En el avión, ___ abrocharse el cinturón.",
    translation: "Ինքնաթիռում պետք է ամրացնել ամրագոտին:",
    options: ["hay que", "tienes que", "necesita"],
    correct: "hay que",
    explanation: "Անվտանգության ընդհանուր կանոն:",
    type: 'hay'
  },
  {
    id: "t8",
    sentence: "Para entrar en el museo, ___ pagar la entrada.",
    translation: "Թանգարան մտնելու համար պետք է վճարել մուտքավճարը:",
    options: ["hay que", "tengo que", "necesito"],
    correct: "hay que",
    explanation: "Ընդհանուր պահանջ բոլորի համար:",
    type: 'hay'
  },
  {
    id: "t9",
    sentence: "Գոռ y Գայանե ___ hablar español en Madrid.",
    translation: "Գոռը և Գայանեն պետք է իսպաներեն խոսեն Մադրիդում:",
    options: ["tienen que", "hay que", "necesita"],
    correct: "tienen que",
    explanation: "Ellos (Գոռն ու Գայանեն) tienen que.",
    type: 'tener'
  },
  {
    id: "t10",
    sentence: "Yo ___ una cámara nueva para el viaje.",
    translation: "Ինձ նոր տեսախցիկ է պետք ճամփորդության համար:",
    options: ["necesito", "tengo que", "hay que"],
    correct: "necesito",
    explanation: "Necesitar-ը գոյականի հետ (տեսախցիկ)։",
    type: 'necesitar'
  },
  {
    id: "t11",
    sentence: "___ validar el billete de tren.",
    translation: "Պետք է վավերացնել գնացքի տոմսը:",
    options: ["Hay que", "Tienes que", "Necesitas"],
    correct: "Hay que",
    explanation: "Ընդհանուր գործողություն, որը պարտադիր է:",
    type: 'hay'
  },
  {
    id: "t12",
    sentence: "Vosotros ___ llevar el mapa.",
    translation: "Դուք պետք է վերցնեք քարտեզը:",
    options: ["tenéis que", "hay que", "necesitas"],
    correct: "tenéis que",
    explanation: "Vosotros tenéis que. Ձեր պարտականությունը:",
    type: 'tener'
  },
  {
    id: "t13",
    sentence: "Para ir a la playa, ___ toalla y protector solar.",
    translation: "Լողափ գնալու համար պետք է սրբիչ և արևապաշտպան քսուք:",
    options: ["necesito", "tengo que", "hay que"],
    correct: "necesito",
    explanation: "Իրերի կարիք ունենալ:",
    type: 'necesitar'
  },
  {
    id: "t14",
    sentence: "Գայանե, ¿___ ayuda con las fotos?",
    translation: "Գայանե, քեզ օգնություն պե՞տք է լուսանկարների հարցում:",
    options: ["necesitas", "tienes que", "hay que"],
    correct: "necesitas",
    explanation: "Necesitar ayuda (օգնության կարիք ունենալ)։",
    type: 'necesitar'
  },
  {
    id: "t15",
    sentence: "___ ser puntual para no perder el bus.",
    translation: "Պետք է լինել ճշտապահ, որպեսզի չուշանալ ավտոբուսից:",
    options: ["Hay que", "Tengo que", "Necesito"],
    correct: "Hay que",
    explanation: "Ընդհանուր խորհուրդ/կանոն:",
    type: 'hay'
  },
  {
    id: "t16",
    sentence: "Գոռ ___ cambiar dinero hoy.",
    translation: "Գոռը պետք է գումար փոխանակի այսօր:",
    options: ["tiene que", "hay que", "necesita que"],
    correct: "tiene que",
    explanation: "Él tiene que. Անհատական պարտականություն:",
    type: 'tener'
  },
  {
    id: "t17",
    sentence: "En el hotel, ___ dejar la llave en recepción.",
    translation: "Հյուրանոցում պետք է թողնել բանալին ընդունարանում:",
    options: ["hay que", "tienes que", "necesitas"],
    correct: "hay que",
    explanation: "Հյուրանոցի ընդհանուր կանոն:",
    type: 'hay'
  },
  {
    id: "t18",
    sentence: "Nosotros ___ beber mucha agua en verano.",
    translation: "Մենք պետք է շատ ջուր խմենք ամռանը:",
    options: ["tenemos que", "hay que", "necesitamos que"],
    correct: "tenemos que",
    explanation: "Անձնական/խմբային անհրաժեշտություն:",
    type: 'tener'
  },
  {
    id: "t19",
    sentence: "¿Por qué ___ tanto equipaje?",
    translation: "Ինչու՞ է ձեզ պետք այդքան ուղեբեռ:",
    options: ["necesitáis", "hay que", "tienes que"],
    correct: "necesitáis",
    explanation: "Necesitar equipaje (ուղեբեռի կարիք ունենալ)։",
    type: 'necesitar'
  },
  {
    id: "t20",
    sentence: "___ disfrutar del viaje al máximo.",
    translation: "Պետք է վայելել ճամփորդությունը մաքսիմալ:",
    options: ["Hay que", "Tengo que", "Necesito"],
    correct: "Hay que",
    explanation: "Լավագույն խորհուրդը բոլորին:",
    type: 'hay'
  }
];
