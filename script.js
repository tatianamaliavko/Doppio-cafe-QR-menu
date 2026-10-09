/* ==================================================
   DOPPIO — ДАННЫЕ МЕНЮ
================================================== */

const menuData = {

    /* =========================
       ☕ КОФЕ
    ========================= */

    coffee: [
        {
            title: "Классика",
            items: [
                { name: "Эспрессо", price: "4,5 р", meta: "30 мл" },
                { name: "Доппио", price: "5,5 р", description: "двойной эспрессо, вода", meta: "60 мл" },
                { name: "Американо", price: "5 / 5,5 р", description: "эспрессо, вода", meta: "200 / 320 мл" },
                { name: "Апельсиновый американо", price: "7,3 р", description: "эспрессо, апельсиновый сок, сироп", meta: "350 мл" },
                { name: "Капучино", price: "5,5 / 7 р", description: "эспрессо, молоко", meta: "200 мл" },
                { name: "Двойной капучино", price: "7 / 8,5 р", description: "эспрессо х 2, молоко х2", meta: "350 мл" },
                { name: "Флэт уайт", price: "7 / 8 р", description: "эспрессо х 2, молоко", meta: "200 мл" },
                { name: "Латте", price: "6,2 / 7,2 р", description: "эспрессо, молоко", meta: "350 мл" },
                { name: "Тыквенный латте", price: "7,5 р", description: "тыквенное пюре, сироп имбирь", meta: "350 мл" },
                { name: "Жаренный латте", price: "7,5 р", description: "латте, ореховый сироп, попкорн", meta: "350 мл" },
                { name: "Раф классический", price: "7 / 7,5 р", description: "эспрессо, сливки, молоко, сироп ванильный", meta: "250 / 350 мл" },
                { name: "Раф сырный", price: "7,5 / 8,5 р", description: "эспрессо, сливки, молоко, сироп ванильный, сливочный сыр", meta: "250 / 350 мл" },
                { name: "Раф ореховый", price: "7,5 / 8,5 р", description: "Эспрессо, сливки, молоко, сироп ванильный, ореховая паста", meta: "250 / 350 мл" },
                { name: "Раф шоколад и орех", price: "7,5 / 8,5 р", description: "эспрессо, сливки, молоко, сироп ванильный, орехово-шоколадная паста", meta: "250 / 350 мл" },
                { name: "Раф мед и специи", price: "7,5 / 8,5 р", description: "эспрессо, сливки, молоко, мед, перец, кардамон, бадьян, корица", meta: "250 / 350 мл" },
                { name: "Раф кунжутная халва", price: "7,5 / 8,5 р", description: "эспрессо, сливки, молоко, кунжутная халва", meta: "250 / 350 мл" }
            ]
        },

        {
            title: "Холодный кофе",
            items: [
                { name: "Эспрессо-тоник", price: "8 р", description: "эспрессо, тоник, лёд", meta: "350 мл" },
                { name: "Bumble", price: "8 р", description: "эспрессо, апельсиновый сок, сироп, лёд", meta: "350 мл" },
                { name: "Banana coffee", price: "8 р", description: "эспрессо, молоко, банан, протеин, лёд", meta: "400 мл" },
                { name: "Ice Latte", price: "6,5 р", description: "эспрессо, молоко, лёд", meta: "350 мл" }
            ]
        },

        {
            title: "Кофе с историей",
            items: [
                {
                    name: "Шалом, Гродно!",
                    price: "8 р",
                    description: "Дань традиции народу, в честь которого улица называлась «Еврейская с Замка на Рынок», на которой и находится наша кофейня."
                },
                {
                    name: "Три короля",
                    price: "9 р",
                    description: "В честь правителей-Князя Витовта Великого, королей Речи Посполитой Стэфана Батория и Августа 2, которые оставили память в истории нашего города."
                },
                {
                    name: "Кофе по-венски",
                    price: "8,5 р",
                    description: "В честь короля-полководца Речи Посполитой Яна Собесского, победившего турков под Веной в 1683 году, освободившего Европу и привезшего культуру пития кофейного напитка."
                }
            ]
        },

        {
            title: "Альтернативное молоко",
            items: [
                { name: "В ассортименте", price: "2,5 р", meta: "250 мл" }
            ]
        }
    ],


    /* =========================
       🍵 НЕ КОФЕ
    ========================= */

    nonCoffee: [
        {
            title: "Чай",
            groups: [
                {
                    title: "Классический",
                    items: [
                        { name: "Пу Эр Вишня", price: "7 р", description: "сочетание Пу Эра Шу и зрелой вишни" },
                        { name: "Молочный Те Гуань Инь", price: "7 р", description: "яркий молочно-сливочный вкус" },
                        { name: "Черный чай", price: "7 р", description: "крепкий и ароматный чай" },
                        { name: "Зеленый чай", price: "7 р", description: "мягкий травянистый с фруктовыми нотками" }
                    ]
                },

                {
                    title: "Фруктовый",
                    items: [
                        { name: "Ройбуш земляника", price: "7,5 р", description: "красный африканский чай, земляника со сливками" },
                        { name: "Клубничный зефир", price: "7,5 р", description: "гибискус, клубника, яблоко,шиповник" },
                        { name: "Дикий лимон", price: "7,5 р", description: "зеленый чай, лимон, роза, цедра цитрусовых, ваниль, кусочки клубники,красная смордина" },
                        { name: "Сапфировый", price: "7,5 р", description: "Анчан,кусочки яблока, изюм, черника, листья черной смородины, васильки" }
                    ]
                },

                {
                    title: "Травяной",
                    items: [
                        { name: "Энергия природы", price: "7 р", description: "шиповник, земляника, смородина, кипрей, боярышник, ромашка, мята, чабрец" },
                        { name: "Лавандовое настроение", price: "7 р", description: "черная смородина, лаванда, череда, шиповник, черника, мелисса, мята, лепестки роз" }
                    ]
                }
            ]
        },

        {
            title: "Авторские напитки",
            items: [
                { name: "Облепиха-апельсин", price: "9 р", description: "облепиха, апельсин, мед, лимон, имбирь", meta: "500 мл" },
                { name: "Клюква", price: "9 р", description: "клюква, клюквенный морс, корица, бадьян, гвоздика", meta: "500 мл" },
                { name: "Малина-розмарин", price: "9 р", description: "малина, розмарин, имбирь, мед", meta: "500 мл" }
            ]
        },

        {
            title: "Матча-латте",
            items: [
                { name: "Матча-латте", price: "6,5 / 7,5 р", meta: "250 мл" }
            ]
        },

        {
            title: "Какао",
            items: [
                { name: "Какао", price: "5 р", meta: "350 мл" },
                { name: "Сливочный какао", price: "5,5 р", meta: "350 мл" },
                { name: "Baby-чино", price: "3,5 / 4,5 р", description: "молоко, сироп на выбор", meta: "350 мл" }
            ]
        },

        {
            title: "Смузи",
            items: [
                { name: "Ореховый взрыв", price: "9,5 р", description: "молоко, арахисовая паста, финики, банан, смесь протеиновая, вода", meta: "400 мл" },
                { name: "Шоколадный орех", price: "9,5 р", description: "молоко, финики, банан, какао, арахисвоая паста, вода", meta: "400 мл" },
                { name: "Грин-детокс", price: "9,5 р", description: "банан, шпинат, яблочное пюре, киви, вода", meta: "400 мл" },
                { name: "Ванила", price: "9,5 р", description: "банан, миндаль, молоко, протеиновая смесь, вода", meta: "400 мл" },
                { name: "Манго-алое", price: "9,5 р", description: "манго, алое вода, банан, лёд", meta: "400 мл" },
                { name: "Алое-ананас", price: "9,5 р", description: "алое вода, ананасовый сок, малина, банан, лёд", meta: "400 мл" },
                { name: "Pina colada", price: "9,5 р", description: "сок ананасовый, кокосовое молоко, банан, лёд", meta: "400 мл" }
            ]
        },

        {
            title: "Смузи-боулы",
            items: [
                { name: "Черничный", price: "11 р", description: "черника, смородина, банан, орехи, сухофрукты, вода", meta: "400 мл" },
                { name: "Малиновый закат", price: "11 р", description: "малина, клубника, молоко, банан, яблоко, злёная гречка, гранола, семена чиа, молоко", meta: "400 мл" },
                { name: "Манговый рай", price: "11 р", description: "клубника, банан, пюре манго, гранола, кокосовая стружка, молоко", meta: "400 мл" }
            ]
        },

        {
            title: "Алкогольные коктейли",
            age: true,
            items: [
                { name: "Kir Royale", price: "12 р", description: "персиковый ликер,игристое", meta: "180 мл" },
                { name: "Pina Colada", price: "12 р", description: "ананасовый сок, ром, сливки, кокосовый сироп, апельсин", meta: "180 мл" },
                { name: "Апероль Spritz", price: "11 р", description: "просекко, апероль, содовая, апельсин", meta: "180 мл" },
                { name: "Лавандовый Spritz", price: "11 р", description: "лавандовый сироп, игристое, джин", meta: "180 мл" },
                { name: "Irish Cream", price: "12 р", description: "лунго, коричневый сахар, виски, сливки", meta: "200 мл" },
                { name: "Виски-кола", price: "10 р", description: "кола, виски", meta: "200 мл" }
            ]
        },

        {
            title: "Соки",
            items: [
                { name: "В ассортименте", price: "2,5 р", meta: "250 мл" }
            ]
        }
    ],


    /* =========================
       🍴 ЕДА
    ========================= */

    food: [
        {
            title: "Сладкое",
            groups: [
                {
    title: "Сырники",
    image: "images/сырники.jpg",
    items: [
        { name: "Классические", price: "9 р", meta: "200 г" },
        { name: "С кокосовой сгущёнкой", price: "9,5 р", meta: "200 г" }
    ]
},

                {
    title: "Круассаны",
    image: "images/круассанысладкие.png",
    items: [
        { name: "Классический", price: "6 р", meta: "200 г" },
        { name: "С джемом", price: "9,5 р", description: "творожный сыр, джем, лепестки миндаля", meta: "250 г" },
        { name: "С шоколадной пастой", price: "9,5 р", description: "шоколадная паста, банан, лепестки миндаля", meta: "250 г" }
    ]
},
            ]
        },

        {
            title: "Не сладкое",
            groups: [
                {
                    title: "Сырниковый бургер",
                    image: "images/бургер.jpg",
                    items: [
                        {
                            name: "Сырниковый бургер",
                            price: "15 р",
                            description: "сырники, мясо, чеддер, томат, шпинат, соус Дзаидзики",
                            meta: "250 г"
                        }
                    ]
                },

                {
                    title: "Английский завтрак",
                    image: "images/англзавтрак.jpg",
                    items: [
                        {
                            name: "Английский завтрак",
                            price: "12 / 16 р",
                            description: "Глазунья, колбаски из цыплёнка, микрозелень, крем-чиз, черри, салат, тосты",
                            meta: "180 / 300 г"
                        }
                    ]
                },

                {
                    title: "Авокадо-тост",
                    image: "images/авокадотост.jpg",
                    items: [
                        {
                            name: "Авокадо-тост",
                            price: "15 р",
                            description: "Гуакамоле, сальса с вялеными томатами, тост",
                            meta: "150 г"
                        },
                        {
                            name: "+ глазунья",
                            price: "1 р"
                        },
                        {
                            name: "+ лосось",
                            price: "2 р"
                        }
                    ]
                },

                {
                    title: "Норвежский завтрак",
                    image: "images/norvzavtr.png",
                    items: [
                        {
                            name: "Норвежский завтрак",
                            price: "17 р",
                            description: "Чиабатта, форель, гуакамоле, крем-чиз, черри, бри и груша",
                            meta: "250 г"
                        }
                    ]
                },

                {
                    title: "Хэш-браун",
                    image: "images/hshbrown.jpg",
                    items: [
                        {
                            name: "Лосось, авокадо",
                            price: "15 р",
                            meta: "250 г"
                        },
                        {
                            name: "Колбаски, черри",
                            price: "15 р",
                            meta: "250 г"
                        },
                        {
                            name: "+ глазунья",
                            price: "1 р"
                        }
                    ]
                },

                {
                    title: "Круассаны",
                    image:"images/croissant.jpg",
                    items: [
                        {
                            name: "С форелью",
                            price: "15,5 р",
                            description: "форель, творожный сыр, руккола, огурец / авокадо",
                            meta: "250 г"
                        },
                        {
                            name: "С прошутто",
                            price: "15,5 р",
                            description: "прошутто, пармезан, томат, шпинат, соус",
                            meta: "250 г"
                        },
                        {
                            name: "С копчёной курицей",
                            price: "15,5 р",
                            description: "копченая курица, чеддер, соус, свежие овощи, шпинат",
                            meta: "250 г"
                        }
                    ]
                },

                {
                    title: "Спринг роллы",
                    image: "images/springrolls.jpg",
                    items: [
                        {
                            name: "С прошутто",
                            price: "15 р",
                            description: "прошуто, помидоры, салат, перец",
                            meta: "155 г"
                        },
                        {
                            name: "С креветками",
                            price: "15 р",
                            description: "креветки, огурец, шпинат, кедровый орех",
                            meta: "120 г"
                        },
                        {
                            name: "С форелью",
                            price: "15 р",
                            description: "форель, авокадо, огурец, салат",
                            meta: "160 г"
                        },
                        {
                            name: "С нутом",
                            price: "15 р",
                            description: "нут, перец, салат, авокадо",
                            meta: "130 г"
                        }
                    ]
                },

                {
                    title: "Камамбер",
                    image: "images/kamamber.jpg",
                    items: [
                        {
                            name: "С чесноком, прованскими травами и розмарином",
                            price: "19 р",
                            description: "доп. порция гренок 1 р",
                            meta: "310 г"
                        },
                        {
                            name: "С сезонными ягодами, орехами, медом и малиновым конфи",
                            price: "19 р",
                            description: "доп. порция гренок 1 р",
                            meta: "310 г"
                        }
                    ]
                },

                {
                    title: "Салаты",
                    image: "images/salaty.jpg",
                    items: [
                        {
                            name: "Форель и творожный сыр",
                            price: "16 р",
                            description: "руккола, шпинат, форель, томаты, сыр торвожный, крем-бальзам, лимон, кунжут",
                            meta: "200 г"
                        },
                        {
                            name: "Форель и апельсин",
                            price: "16 р",
                            description: "форель, апельсин, пармезан, огурец, шпинат, французкая горчица, кунжут",
                            meta: "200 г"
                        },
                        {
                            name: "Прошутто, молодая кукуруза и вяленые томаты",
                            price: "16 р",
                            description: "шпинат, прошутто, вяленые томаты, молодая кукуруза, семена подсолнечника, орехово-кунжутный соус",
                            meta: "200 г"
                        }
                    ]
                },

                {
                    title: "Сэндвичи",
                    image: "images/sandwich.jpg",
                    items: [
                        {
                            name: "Сендвич с прошутто",
                            price: "16 р",
                            description: "прошутто, соус, свежие овощи, салат и травы",
                            meta: "300 г"
                        },
                        {
                            name: "Сендвич с форелью",
                            price: "16 р",
                            description: "форель, творожный сыр, свежие овощи, бальзамический соус",
                            meta: "300 г"
                        }
                    ]
                },

                {
                    title: "Брускетты",
                    image: "images/brusketty.jpg",
                    items: [
                        {
                            name: "Брускетта вяленые томаты, авокадо, кедровые орехи",
                            price: "15 р",
                            description: "цельнозерновая чиабатта, свежая зелень, кедровые орехи, вяленые томаты, авокадо, специи",
                            meta: "180 г"
                        },
                        {
                            name: "Брускетта авокадо с креветками и лепестками миндаля",
                            price: "15 р",
                            description: "цельнозерновая чиабатта, креветки, авокадо, специи, томаты свежие, свежая зелень, лепестки миндаля",
                            meta: "180 г"
                        },
                        {
                            name: "Брускетта форель с творожным сыром и семенами тыквы",
                            price: "15 р",
                            description: "цельнозерновая чиабатта, форель, творожный сыр, свежая зелень, огурец, семена тыквы, лимон",
                            meta: "180 г"
                        },
                        {
                            name: "Брускетта прошутто вяленые томаты и прованские травы",
                            price: "15 р",
                            description: "цельнозерновая чиабатта, прошутто, свежая зелень, вяленые томаты, прованские травы, творожный сыр, кунжут",
                            meta: "180 г"
                        }
                    ]
                },

                {
                    title: "Горячие брускетты",
                    image: "images/gorbrusketty.jpg",
                    items: [
                        {
                            name: "Брускетта с копчёной курицей, перцем, сыром и прованскими травами",
                            price: "15 р",
                            description: "цельнозерновая чиабатта, соус, перец, сыр, прованские травы",
                            meta: "205 г"
                        },
                        {
                            name: "Брускетта с прошутто, и кукурузой под сырной корочкой",
                            price: "15 р",
                            description: "цельнозерновая чиабатта, соус, кукуруза, томат, сыр",
                            meta: "235 г"
                        }
                    ]
                },

                {
                    title: "Горячие тортильи",
                    image: "images/tortillya.jpg",
                    items: [
                        {
                            name: "С копчёной курицей",
                            price: "14 р",
                            description: "копченая курица, томат, зелень, сыр, соус",
                            meta: "250 г"
                        },
                        {
                            name: "Овощная",
                            price: "14 р",
                            description: "нут, перец, огурец, зелень, соус песто",
                            meta: "200 г"
                        },
                        {
                            name: "Сырная",
                            price: "14 р",
                            description: "пармезан, чеддер, соус, томаты, салат",
                            meta: "200 г"
                        }
                    ]
                }
            ]
        }
    ]
};


/* ==================================================
   СОЗДАНИЕ ПОЗИЦИИ МЕНЮ
================================================== */

function createItem(item, age = false) {

    const wrapper = document.createElement("div");
    wrapper.className = "menu-item";

    const main = document.createElement("div");
    main.className = "menu-item-main";

    const name = document.createElement("div");

name.className = "menu-item-name";

const nameParts = item.name.split(" ");

const firstLineWords = [];
const secondLineWords = [];

let currentLength = 0;

// Для длинных названий переносим часть текста,
// чтобы точки и цена оставались на первой строке
const maxFirstLineLength = 14;

nameParts.forEach(word => {
    if (
        currentLength + word.length + (firstLineWords.length ? 1 : 0)
        <= maxFirstLineLength
    ) {
        firstLineWords.push(word);
        currentLength += word.length + (firstLineWords.length > 1 ? 1 : 0);
    } else {
        secondLineWords.push(word);
    }
});

if (secondLineWords.length) {

    const firstLine = document.createElement("span");
    firstLine.className = "menu-item-name-first";
    firstLine.textContent = firstLineWords.join(" ");

    const secondLine = document.createElement("span");
    secondLine.className = "menu-item-name-second";
    secondLine.textContent = secondLineWords.join(" ");

    name.appendChild(firstLine);
    name.appendChild(document.createElement("br"));
    name.appendChild(secondLine);

} else {

    name.textContent = item.name;

}

    if (age) {

        const mark = document.createElement("span");

        mark.className = "age-mark";
        mark.textContent = "18+";

        name.appendChild(mark);
    }

    const price = document.createElement("div");

    price.className = "menu-item-price";
    price.textContent = item.price || "";

    main.appendChild(name);
    main.appendChild(price);

    wrapper.appendChild(main);

    if (item.description) {

        const description = document.createElement("div");

        description.className = "menu-item-description";
        description.textContent = item.description;

        wrapper.appendChild(description);
    }

    if (item.meta) {

        const meta = document.createElement("div");

        meta.className = "menu-item-meta";
        meta.textContent = item.meta;

        wrapper.appendChild(meta);
    }

    return wrapper;
}


/* ==================================================
   СОЗДАНИЕ ПОДКАТЕГОРИИ
================================================== */

function createSubcategory(group, age = false) {

    const subcategory = document.createElement("div");

    subcategory.className = "subcategory";

    const button = document.createElement("button");

    button.type = "button";
    button.className = "subcategory-title";
    button.setAttribute("aria-expanded", "false");

    const title = document.createElement("span");

    title.textContent = group.title;

    const plus = document.createElement("span");

    plus.textContent = "+";
    plus.setAttribute("aria-hidden", "true");

   

if (group.image) {
    const image = document.createElement("img");

    image.className = "subcategory-image";
    image.src = group.image;
    image.alt = group.title;
    image.loading = "lazy";

    button.appendChild(image);
}

button.appendChild(title);
button.appendChild(plus);

    const content = document.createElement("div");

    content.className = "subcategory-content";

    if (group.items) {

        group.items.forEach(item => {

            content.appendChild(
                createItem(item, age)
            );

        });
    }

    if (group.groups) {

        group.groups.forEach(nestedGroup => {

            content.appendChild(
                createSubcategory(nestedGroup, age)
            );

        });
    }

    button.addEventListener("click", event => {

        event.stopPropagation();

        const isOpen =
            subcategory.classList.contains("open");

        // запоминаем, где на экране стоит нажатая строка
        const topBefore = button.getBoundingClientRect().top;
        const startedAt = Date.now();

        const keepInPlace = () => {

            const shift =
                button.getBoundingClientRect().top - topBefore;

            if (shift) {
                const root = document.documentElement;
                root.style.scrollBehavior = "auto";
                window.scrollBy(0, shift);
                root.style.scrollBehavior = "";
            }
        };

        subcategory.classList.toggle(
            "open",
            !isOpen
        );

        button.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        // нажатая строка остаётся на том же месте экрана,
        // список раскрывается вниз
        keepInPlace();

        // если внутри есть картинки, высота меняется после их загрузки
        if (!isOpen) {
            content.querySelectorAll("img").forEach(img => {
                if (!img.complete) {
                    img.addEventListener("load", () => {
                        if (Date.now() - startedAt < 1500) keepInPlace();
                    }, { once: true });
                }
            });
        }

    });

    subcategory.appendChild(button);
    subcategory.appendChild(content);

    return subcategory;
}


/* ==================================================
   ЗАПОЛНЕНИЕ ГЛАВНЫХ КАТЕГОРИЙ
================================================== */

function renderCategory(elementId, data) {

    const category =
        document.getElementById(elementId);

    if (!category) return;

    const content =
        category.querySelector(".menu-content");

    if (!content) return;

    data.forEach(group => {

        content.appendChild(
            createSubcategory(
                group,
                group.age === true
            )
        );

    });
}


renderCategory(
    "coffee",
    menuData.coffee
);

renderCategory(
    "non-coffee",
    menuData.nonCoffee
);

renderCategory(
    "food",
    menuData.food
);


/* ==================================================
   ГЛАВНЫЕ КАТЕГОРИИ
================================================== */

const menuCategories =
    document.querySelectorAll(".menu-category");

menuCategories.forEach(category => {

    const button =
        category.querySelector(".menu-title");

    if (!button || !category.querySelector(".menu-content")) return;

    button.addEventListener("click", () => {

        const isOpen =
            category.classList.contains("open");

        // запоминаем, где на экране стоит нажатый блок
        const topBefore = button.getBoundingClientRect().top;

        menuCategories.forEach(item => {

            item.classList.remove("open");

            // сбрасываем все раскрытые подпункты внутри категории,
            // чтобы при повторном открытии всё было свёрнуто
            item.querySelectorAll(".subcategory.open").forEach(sub => {

                sub.classList.remove("open");

                const subButton =
                    sub.querySelector(":scope > .subcategory-title");

                if (subButton) {
                    subButton.setAttribute("aria-expanded", "false");
                }
            });

            const itemButton =
                item.querySelector(".menu-title");

            if (itemButton) {

                itemButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        });

        if (!isOpen) {

            category.classList.add("open");

            button.setAttribute(
                "aria-expanded",
                "true"
            );
        }

        // возвращаем нажатый блок на то же место экрана,
        // чтобы страницу не «уводило» вниз при закрытии соседней категории
        const shift = button.getBoundingClientRect().top - topBefore;

        if (shift) {
            const root = document.documentElement;
            root.style.scrollBehavior = "auto";
            window.scrollBy(0, shift);
            root.style.scrollBehavior = "";
        }

    });

});


/* ==================================================
   ОСЕННЕЕ МЕНЮ
================================================== */

const seasonalTeaser =
    document.querySelector(".seasonal-teaser");

const seasonalMenu =
    document.querySelector("#seasonal-menu");

if (seasonalTeaser && seasonalMenu) {

    seasonalTeaser.addEventListener(
        "click",
        event => {

            event.preventDefault();

           const seasonalTop =
    seasonalMenu.getBoundingClientRect().top +
    window.scrollY -
    10;

window.scrollTo({
    top: seasonalTop,
    behavior: "smooth"
});

            setTimeout(() => {

                const title =
                    seasonalMenu.querySelector("h2");

                if (title) {

                    title.classList.add(
                        "highlight"
                    );

                    setTimeout(() => {

                        title.classList.remove(
                            "highlight"
                        );

                    }, 900);
                }

            }, 600);

        }
    );
}


/* ==================================================
   КНОПКА ↑ МЕНЮ
================================================== */

const backToMenu =
    document.querySelector(".back-to-menu");

window.addEventListener("scroll", () => {

    if (!backToMenu) return;

    if (window.scrollY > 500) {

        backToMenu.style.display = "block";

    } else {

        backToMenu.style.display = "none";

    }

});


if (backToMenu) {

    backToMenu.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );
}