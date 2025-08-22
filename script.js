const cards = [
    // Common Cards (1-20)
    { set_number: 1, name: "Rat", attack: 1, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Rat" },
    { set_number: 2, name: "Bat", attack: 1, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Bat" },
    { set_number: 3, name: "Slime", attack: 1, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Slime" },
    { set_number: 4, name: "Spider", attack: 1, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Spider" },
    { set_number: 5, name: "Goblin", attack: 1, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Goblin" },
    { set_number: 6, name: "Skeleton", attack: 2, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Skeleton" },
    { set_number: 7, name: "Kobold", attack: 2, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Kobold" },
    { set_number: 8, name: "Gnome", attack: 1, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Gnome" },
    { set_number: 9, name: "Wild Boar", attack: 3, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Wild+Boar" },
    { set_number: 10, name: "Zombie", attack: 2, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Zombie" },
    { set_number: 11, name: "Merman", attack: 3, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Merman" },
    { set_number: 12, name: "Scorpion", attack: 1, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Scorpion" },
    { set_number: 13, name: "Harpy", attack: 3, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Harpy" },
    { set_number: 14, name: "Wolf", attack: 4, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Wolf" },
    { set_number: 15, name: "Centaur", attack: 2, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Centaur" },
    { set_number: 16, name: "Bear", attack: 3, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Bear" },
    { set_number: 17, name: "Ogre", attack: 4, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Ogre" },
    { set_number: 18, name: "Giant", attack: 5, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Giant" },
    { set_number: 19, name: "Golem", attack: 2, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Golem" },
    { set_number: 20, name: "Troll", attack: 4, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Troll" },

    // Uncommon Cards (21-35)
    { set_number: 21, name: "Elf Archer", attack: 3, health: 2, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Elf+Archer" },
    { set_number: 22, name: "Knight", attack: 2, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Knight" },
    { set_number: 23, name: "Dwarf Warrior", attack: 2, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Dwarf+Warrior" },
    { set_number: 24, name: "Orc", attack: 3, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Orc" },
    { set_number: 25, name: "Griffin Rider", attack: 4, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Griffin+Rider" },
    { set_number: 26, name: "Sorceress", attack: 5, health: 2, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Sorceress" },
    { set_number: 27, name: "Minotaur", attack: 3, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Minotaur" },
    { set_number: 28, name: "Pegasus", attack: 4, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Pegasus" },
    { set_number: 29, name: "Unicorn", attack: 2, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Unicorn" },
    { set_number: 30, name: "Vampire", attack: 5, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Vampire" },
    { set_number: 31, name: "Wyvern", attack: 6, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Wyvern" },
    { set_number: 32, name: "Elemental", attack: 4, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Elemental" },
    { set_number: 33, name: "Djinn", attack: 5, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Djinn" },
    { set_number: 34, name: "Werewolf", attack: 6, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Werewolf" },
    { set_number: 35, name: "Gargoyle", attack: 3, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Gargoyle" },

    // Rare Cards (36-45)
    { set_number: 36, name: "Mage", attack: 4, health: 2, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Mage" },
    { set_number: 37, name: "Hydra", attack: 8, health: 4, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Hydra" },
    { set_number: 38, name: "Dragon", attack: 5, health: 5, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Dragon" },
    { set_number: 39, name: "Griffin", attack: 6, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Griffin" },
    { set_number: 40, name: "Behemoth", attack: 5, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Behemoth" },
    { set_number: 41, name: "Lich", attack: 7, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Lich" },
    { set_number: 42, name: "Kraken", attack: 8, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Kraken" },
    { set_number: 43, name: "Leviathan", attack: 7, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Leviathan" },
    { set_number: 44, name: "Titan", attack: 9, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Titan" },
    { set_number: 45, name: "Chimera", attack: 6, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Chimera" },

    // Legendary Cards (46-50)
    { set_number: 46, name: "Phoenix", attack: 7, health: 7, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Phoenix" },
    { set_number: 47, name: "Archangel", attack: 8, health: 8, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Archangel" },
    { set_number: 48, name: "Demon Lord", attack: 9, health: 9, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Demon+Lord" },
    { set_number: 49, name: "Elder Dragon", attack: 10, health: 10, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Elder+Dragon" },
    { set_number: 50, name: "Godzilla", attack: 12, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Godzilla" }
];

cards.sort((a, b) => a.set_number - b.set_number);

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
const openAnotherPackBtn = document.getElementById('open-another-pack-btn');
const gallery = document.getElementById('gallery');
const collectionModal = document.getElementById('collection-modal');
const openCollectionBtn = document.getElementById('open-collection-btn');
const closeBtn = document.querySelector('.close-btn');

let collection = [];

function loadCollection() {
    const savedCollection = localStorage.getItem('cardCollection');
    if (savedCollection) {
        collection = JSON.parse(savedCollection);
    }
}

function saveCollection() {
    localStorage.setItem('cardCollection', JSON.stringify(collection));
}

function addToCollection(pack) {
    pack.forEach(card => {
        if (!collection.find(c => c.set_number === card.set_number)) {
            collection.push(card);
        }
    });
    saveCollection();
}

function displayGallery() {
    gallery.innerHTML = '';
    cards.forEach(card => {
        const collectedCard = collection.find(c => c.set_number === card.set_number);
        const cardElement = document.createElement('div');

        if (collectedCard) {
            cardElement.classList.add('card', card.rarity);
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
        } else {
            cardElement.classList.add('card', 'locked-card');
            cardElement.innerHTML = `
                <div class="card-header">
                    <h2>???</h2>
                </div>
                <div class="locked-card-body">
                    <p>?</p>
                </div>
                <div class="card-footer">
                    <p>#${card.set_number}</p>
                </div>
            `;
        }
        gallery.appendChild(cardElement);
    });
}

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
    addToCollection(newPack);

    setTimeout(() => {
        displayCards(newPack);
        packOpener.style.display = 'none'; // Hide the pack after opening
        openAnotherPackBtn.style.display = 'block'; // Show the "Open Another" button
    }, 1000); // Wait for pack animation to finish
});

openAnotherPackBtn.addEventListener('click', () => {
    packOpener.style.display = 'block';
    packOpener.classList.remove('opening');
    cardContainer.innerHTML = '';
    openAnotherPackBtn.style.display = 'none';
});

loadCollection();
displayGallery();

openCollectionBtn.addEventListener('click', () => {
    collectionModal.style.display = 'block';
    displayGallery(); // Re-render the gallery when the modal is opened
});

closeBtn.addEventListener('click', () => {
    collectionModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == collectionModal) {
        collectionModal.style.display = 'none';
    }
});
