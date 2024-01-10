import { getContacts } from "../contacts";

export function loader() {
    const contacts = [
        {
            id: 101,
            first: 'Arpita',
            last: 'Tripathi',
            avatar: "https://placekitten.com/g/200/200",
        },
        {
            id: 102,
            first: 'Pourush',
            last: 'Gupta',
            avatar: "https://placekitten.com/g/200/100",
        },
        {
            id: 103,
            first: 'Abhishek',
            last: 'Tambulkar',
            avatar: "https://placekitten.com/g/200/300",
        },

    ]
    return contacts;
}