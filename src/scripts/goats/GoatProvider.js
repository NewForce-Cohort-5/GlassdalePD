const goatCollection = [
    {
        id: 1,
        altGoat: "Laughing Goat",
        img: "imgs/laughGoat.jpg"
    },
    {
        id: 2,
        altGoat: "Two Goats",
        img: "./imgs/2Goats.jpg"
    },
    {
        id: 3,
        altGoat: "Baby Goat",
        img: "./imgs/babyGoat.jpg"
    },
    {
        id: 4,
        altGoat: "Curly Hair Goat",
        img: "./imgs/otherCurlyGoat.jpg"
    },
    {
        id: 5,
        altGoat: "Smug Goat",
        img: "./imgs/smugGoat.jpg"
    },
    {
        id: 6,
        altGoat: "Eating Goat",
        img: "./imgs/eatingGoat.jpg"
    }
]

export const useGoats = () => {
    return goatCollection.slice();
}