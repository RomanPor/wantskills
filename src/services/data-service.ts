import {About, Social, Chat, Sponsor, Event} from "../types";

export interface IDataService {
    getEvents(): any
    getSocials(): any
    getSponsors(): any
    getAbout(): any
    getChats(): any
    getEvent(id: any): any
    postEvent(data: any): any
    postChat(data: any): any
}

export default class DataService implements IDataService {

    private _about: About | undefined;
    private _socials: Array<Social> | undefined;
    private _chats: Array<Chat> | undefined;

    events: Array<Event> = [
        {
            id: 1,
            title: 'DevFest 2020 от GDG KRD',
            short_desc: 'Краснодар - Конференция',
            date: '04 — 05.04.2020',
            price: 'от 12 800 ₽',
            view: 344,
            scope: ['UX/UI', 'Marketing', 'Backend', 'Mobile', 'Frontend'],
            promocode: 'testcode',
        },
        {
            id: 2,
            title: 'DevFest 2020 от GDG KRD',
            short_desc: 'Краснодар - Конференция',
            date: '04 — 05.04.2020',
            price: 'от 12 800 ₽',
            view: 344,
            scope: ['UX/UI', 'Marketing', 'Backend', 'Mobile', 'Frontend'],
            promocode: 'testcode',
        }
    ];

    socials: Array<Social> = [
        {
            name: 'Телеграм',
            link: 'https://telegram.org/'
        },
        {
            name: 'Инстаграм',
            link: 'https://www.instagram.com/'
        },
        {
            name: 'Фейсбук',
            link: 'https://www.facebook.com/'
        },
    ]

    sponsors: Array<Sponsor> = [
        {
            title: 'GDG Krasnodar',
            scope: ['UX/UI', 'Marketing', 'Backend', 'Mobile', 'Frontend'],
            contact: 'Петр Гуреев',
            phone: '+7 918 212-28-28',
            email: 'info@gdgkrd.ru',
            success: ['4+ мероприятий в год', '600+ человек'],
        }
    ]

    about: About = {
        short_description: `Мероприятий в IT становиться все больше, в итоге организаторы Краснодара решили составить календарь, где внесут мероприятия. Когда увидели гугл-таблицу, стало понятно, что нужно это развивать. Так и появился этот сайт.`,
        description: `<h3>Цель проекта</h3>
            <p>Объединенияем всех, не равнодушных к индустрии и развитие сообщества. Мы хотим собрать
                все анонсы и афиши мероприятий в одном месте. У нас много планов будем их реализовывать вместе. </p>`,
        name: 'Гуреев Петр',
        position: 'Главный по всем вопросам',
        phone: '+7 928 275 33 00',
        email: 'fukirlab@gmail.com',
        telegram_title: '@petrgureev',
        telegram_link: 'https://telegram.org/',
        image: '/img/about-card.png'
    }

    chats: Array<Chat> = [
        {
            id: '1',
            title: 'Yandex Practicum',
            scope: ['Design', 'Backend', 'Frontend'],
            telegram_title: '@yandex_practicum',
            telegram_link: 'https://telegram.org/',
        },
        {
            id: '2',
            title: 'GDG Krasnodar',
            scope: ['Design', 'Marketing', 'Backend', 'Mobile', 'Frontend'],
            telegram_title: '@gdgkrd',
            telegram_link: 'https://telegram.org/',
        },
        {
            id: '3',
            title: 'Krd Dev',
            scope: ['Backend', 'Mobile', 'Frontend'],
            telegram_title: '@krddevdays_chat',
            telegram_link: 'https://telegram.org/',
        },
        {
            id: '4',
            title: 'Design review',
            scope: ['Design', 'Marketing', 'Mobile'],
            telegram_title: '@creativecult',
            telegram_link: 'https://telegram.org/',
        },
    ]

    getEvents() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this.events);
                }
            }, 700);
        });
    }

    getSocials() {
        if (this._socials) {
            return this._socials
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                this._socials = this.socials
                resolve(this.socials);
            }, 700);
        });
    }

    getSponsors() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.sponsors);
            }, 700);
        });
    }

    getAbout() {
        if (this._about) {
            return this._about
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                this._about = this.about
                resolve(this.about);
            }, 700);
        });
    }

    getChats() {
        if (this._chats) {
            return this._chats
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                this._chats = this.chats
                resolve(this.chats);
            }, 700);
        });
    }

    getEvent(id: number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this._chats = this.chats
                resolve(this.events.find((el) => el.id === id));
            }, 700);
        });
    }

    postChat(data: any) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.75) {
                        reject('Something bad happened');
                    } else {
                        resolve(data);
                    }
                }, 1100);
            });
    }

    postEvent(data: any) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject('Something bad happened');
                } else {
                    resolve(data);
                }
            }, 1100);
        });
    }
}
