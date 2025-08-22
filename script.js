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
    {
        name: "Skeleton",
        attack: 2,
        health: 1,
        rarity: "common",
        image: "https://via.placeholder.com/200x280.png?text=Skeleton"
    },
    {
        name: "Bat",
        attack: 1,
        health: 1,
        rarity: "common",
        image: "https://via.placeholder.com/200x280.png?text=Bat"
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
    {
        name: "Elf Archer",
        attack: 3,
        health: 2,
        rarity: "uncommon",
        image: "https://via.placeholder.com/200x280.png?text=Elf+Archer"
    },
    {
        name: "Dwarf Warrior",
        attack: 2,
        health: 4,
        rarity: "uncommon",
        image: "https://via.placeholder.com/200x280.png?text=Dwarf+Warrior"
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
    {
        name: "Griffin",
        attack: 6,
        health: 6,
        rarity: "rare",
        image: "https://via.placeholder.com/200x280.png?text=Griffin"
    },
    {
        name: "Hydra",
        attack: 8,
        health: 4,
        rarity: "rare",
        image: "https://via.placeholder.com/200x280.png?text=Hydra"
    },
    // Legendary Card
    {
        name: "Phoenix",
        attack: 7,
        health: 7,
        rarity: "legendary",
        image: "https://via.placeholder.com/200x280.png?text=Phoenix"
    },
    {
        name: "Archangel",
        attack: 8,
        health: 8,
        rarity: "legendary",
        image: "https://via.placeholder.com/200x280.png?text=Archangel"
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

const packOpener = document.getElementById('pack-opener');
const cardContainer = document.getElementById('card-container');

function displayCards(pack) {
    cardContainer.innerHTML = '';
    pack.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', card.rarity);
        cardElement.style.animationDelay = `${index * 0.1}s`;

        cardElement.innerHTML = `
            <div class="card-header">
                <h2>${card.name}</h2>
            </div>
            <img class="card-image" src="${card.image}" alt="${card.name}">
            <div class="card-body">
                <p>Rarity: ${card.rarity.charAt(0).toUpperCase() + card.rarity.slice(1)}</p>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <span>ATK: ${card.attack}</span>
                    <span>HP: ${card.health}</span>
                </div>
            </div>
        `;

        cardContainer.appendChild(cardElement);
    });
}

packOpener.addEventListener('click', () => {
    packOpener.classList.add('opening');
    const newPack = openPack();

    setTimeout(() => {
        displayCards(newPack);
        packOpener.style.display = 'none'; // Hide the pack after opening
    }, 1000); // Wait for pack animation to finish
});
