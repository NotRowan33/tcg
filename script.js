const cards = [
    // Common Cards
    {
        name: "Goblin",
        attack: 1,
        health: 2,
        rarity: "common",
        image: "https://via.placeholder.com/200x280.png?text=Goblin"
    },
    {
        name: "Slime",
        attack: 1,
        health: 1,
        rarity: "common",
        image: "https://via.placeholder.com/200x280.png?text=Slime"
    },
    {
        name: "Rat",
        attack: 1,
        health: 1,
        rarity: "common",
        image: "https://via.placeholder.com/200x280.png?text=Rat"
    },
    // Uncommon Cards
    {
        name: "Orc",
        attack: 3,
        health: 4,
        rarity: "uncommon",
        image: "https://via.placeholder.com/200x280.png?text=Orc"
    },
    {
        name: "Knight",
        attack: 2,
        health: 3,
        rarity: "uncommon",
        image: "https://via.placeholder.com/200x280.png?text=Knight"
    },
    // Rare Cards
    {
        name: "Mage",
        attack: 4,
        health: 2,
        rarity: "rare",
        image: "https://via.placeholder.com/200x280.png?text=Mage"
    },
    {
        name: "Dragon",
        attack: 5,
        health: 5,
        rarity: "rare",
        image: "https://via.placeholder.com/200x280.png?text=Dragon"
    },
    // Legendary Card
    {
        name: "Phoenix",
        attack: 7,
        health: 7,
        rarity: "legendary",
        image: "https://via.placeholder.com/200x280.png?text=Phoenix"
    }
];

const rarityChances = {
    common: 0.7,
    uncommon: 0.2,
    rare: 0.09,
    legendary: 0.01
};

function getRandomCardByRarity(rarity) {
    const filteredCards = cards.filter(card => card.rarity === rarity);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    return filteredCards[randomIndex];
}

function openPack() {
    const pack = [];
    for (let i = 0; i < 5; i++) {
        const random = Math.random();
        let rarity;

        if (random < rarityChances.common) {
            rarity = 'common';
        } else if (random < rarityChances.common + rarityChances.uncommon) {
            rarity = 'uncommon';
        } else if (random < rarityChances.common + rarityChances.uncommon + rarityChances.rare) {
            rarity = 'rare';
        } else {
            rarity = 'legendary';
        }

        pack.push(getRandomCardByRarity(rarity));
    }
    return pack;
}

const openPackBtn = document.getElementById('open-pack-btn');
const cardContainer = document.getElementById('card-container');

function displayCards(pack) {
    cardContainer.innerHTML = '';
    pack.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', card.rarity);

        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}">
            <h2>${card.name}</h2>
            <div class="stats">
                <span>ATK: ${card.attack}</span>
                <span>HP: ${card.health}</span>
            </div>
        `;

        cardContainer.appendChild(cardElement);
    });
}

openPackBtn.addEventListener('click', () => {
    const newPack = openPack();
    displayCards(newPack);
});
