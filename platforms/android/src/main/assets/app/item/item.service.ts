import { Injectable } from "@angular/core";

import { Item } from "./item";
import { Session, Speaker } from "../shared/interfaces";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
        { id: 3, name: "Piqué", role: "Defender" },
        { id: 4, name: "I. Rakitic", role: "Midfielder" },
        { id: 5, name: "Sergio", role: "Midfielder" },
        { id: 6, name: "Denis Suárez", role: "Midfielder" },
        { id: 7, name: "Arda", role: "Midfielder" },
        { id: 8, name: "A. Iniesta", role: "Midfielder" },
        { id: 9, name: "Suárez", role: "Forward" },
        { id: 10, name: "Messi", role: "Forward" },
        { id: 11, name: "Neymar", role: "Forward" },
        { id: 12, name: "Rafinha", role: "Midfielder" },
        { id: 13, name: "Cillessen", role: "Goalkeeper" },
        { id: 14, name: "Mascherano", role: "Defender" },
        { id: 17, name: "Paco Alcácer", role: "Forward" },
        { id: 18, name: "Jordi Alba", role: "Defender" },
        { id: 19, name: "Digne", role: "Defender" },
        { id: 20, name: "Sergi Roberto", role: "Midfielder" },
        { id: 21, name: "André Gomes", role: "Midfielder" },
        { id: 22, name: "Aleix Vidal", role: "Midfielder" },
        { id: 23, name: "Umtiti", role: "Defender" },
        { id: 24, name: "Mathieu", role: "Defender" },
        { id: 25, name: "Masip", role: "Goalkeeper" },
    );

    private speakers = new Array<Speaker>(
        {
            id: 1,
            name: 'Stephen Metz',
            title: 'Customer Mobility Technician',
            compagny: 'compagny',
            picture: undefined,
            twitterName: '@Stephen_Metz'
        },
        {
            id: 2,
            name: 'Jayce Mayer',
            title: 'Senior Communications Manager',
            compagny: 'compagny',
            picture: undefined,
            twitterName: '@Jayce57'
        }
    );

    private sessions = new Array<Session>(
        {
            id: 1,
            title: 'session 1',
            start: '2016-10-03T12:00:00Z',
            end: '2016-10-03T13:00:00Z',
            room: 'room 1',
            roomInfo: {
                roomId:'room1',
                name: 'myroom1',
                url: '',
                theme: ''
            },
            speakers: this.speakers,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum ante aliquet, molestie dui et, semper dui. Nunc aliquam vestibulum imperdiet. Donec sit amet dui posuere.',
            descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent int...',
            calendarEventId: '',
            isBreak: false,
            favorite: false
        },
        {
            id: 2,
            title: 'session 2',
            start: '2016-10-03T13:00:00Z',
            end: '2016-10-03T14:00:00Z',
            room: undefined,
            roomInfo: {
                roomId:'room2',
                name: 'myroom2',
                url: '',
                theme: ''
            },
            speakers: this.speakers,
            description: 'session 2 desc',
            descriptionShort: 'session 2 short desc',
            calendarEventId: '',
            isBreak: true,
            favorite: false
        },
        {
            id: 3,
            title: 'session 3',
            start: '2016-10-03T14:00:00Z',
            end: '2016-10-03T15:00:00Z',
            room: 'room 3',
            roomInfo: {
                roomId:'room3',
                name: 'myroom3',
                url: '',
                theme: ''
            },
            speakers: this.speakers,
            description: 'session 3 desc',
            descriptionShort: 'session 3 short desc',
            calendarEventId: '',
            isBreak: false,
            favorite: false
        }
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }

    getSessions(): Session[]{
        return this.sessions;
    }

    getSession(id: number): Session {
        return this.sessions.filter(session => session.id === id)[0];
    }
}
