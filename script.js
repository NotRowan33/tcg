const cards = [
    // --- Common Cards (40) ---
    // Tier 1: Fodder
    { set_number: 1, name: "Peasant", attack: 1, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Peasant" },
    { set_number: 2, name: "Village Dog", attack: 1, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Village+Dog" },
    { set_number: 3, name: "Farmhand", attack: 2, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Farmhand" },
    { set_number: 4, name: "Sewer Rat", attack: 2, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Sewer+Rat" },
    { set_number: 5, name: "Goblin Scout", attack: 3, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Goblin+Scout" },
    // Tier 2: Basic Militia
    { set_number: 6, name: "Militia Recruit", attack: 2, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Militia+Recruit" },
    { set_number: 7, name: "Town Guard", attack: 3, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Town+Guard" },
    { set_number: 8, name: "Poacher", attack: 4, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Poacher" },
    { set_number: 9, name: "Orc Grunt", attack: 3, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Orc+Grunt" },
    { set_number: 10, name: "Lookout", attack: 1, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Lookout" },
    // Tier 3: Trained Fighters
    { set_number: 11, name: "Militia Spearman", attack: 3, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Spearman" },
    { set_number: 12, name: "Crossbowman", attack: 4, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Crossbowman" },
    { set_number: 13, name: "War Hound", attack: 5, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=War+Hound" },
    { set_number: 14, name: "Bandit", attack: 4, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Bandit" },
    { set_number: 15, name: "Armored Squire", attack: 2, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Squire" },
    // Tier 4: Tougher Creatures
    { set_number: 16, name: "Wild Bear", attack: 5, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Wild+Bear" },
    { set_number: 17, name: "Ogre Brute", attack: 4, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Ogre+Brute" },
    { set_number: 18, name: "Giant Spider", attack: 6, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Giant+Spider" },
    { set_number: 19, name: "Swamp Hag", attack: 5, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Swamp+Hag" },
    { set_number: 20, name: "Rock Golem", attack: 3, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Rock+Golem" },
    // Filler Commons
    { set_number: 21, name: "Traveling Merchant", attack: 1, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Merchant" },
    { set_number: 22, name: "Court Jester", attack: 2, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Jester" },
    { set_number: 23, name: "Scarecrow", attack: 1, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Scarecrow" },
    { set_number: 24, name: "Castle Cook", attack: 2, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Cook" },
    { set_number: 25, name: "Stable Hand", attack: 3, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Stable+Hand" },
    { set_number: 26, name: "Dire Wolf", attack: 4, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Dire+Wolf" },
    { set_number: 27, name: "Giant Bat", attack: 3, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Giant+Bat" },
    { set_number: 28, name: "Undead Soldier", attack: 4, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Undead+Soldier" },
    { set_number: 29, name: "Grave Robber", attack: 3, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Grave+Robber" },
    { set_number: 30, name: "Orc Berserker", attack: 5, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Orc+Berserker" },
    { set_number: 31, name: "Dwarven Miner", attack: 2, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Dwarven+Miner" },
    { set_number: 32, name: "Elven Scout", attack: 4, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Elven+Scout" },
    { set_number: 33, name: "Forest Spirit", attack: 3, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Forest+Spirit" },
    { set_number: 34, name: "Water Nymph", attack: 2, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Water+Nymph" },
    { set_number: 35, name: "Stone Gargoyle", attack: 4, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Gargoyle" },
    { set_number: 36, name: "Bandit Leader", attack: 5, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Bandit+Leader" },
    { set_number: 37, name: "Warhorse", attack: 3, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Warhorse" },
    { set_number: 38, name: "Hill Giant", attack: 5, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Hill+Giant" },
    { set_number: 39, name: "Sea Serpent", attack: 6, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Sea+Serpent" },
    { set_number: 40, name: "Cyclops", attack: 7, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Cyclops" },

    // --- Uncommon Cards (30) ---
    { set_number: 41, name: "Squire", attack: 3, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Squire" },
    { set_number: 42, name: "Foot Knight", attack: 4, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Foot+Knight" },
    { set_number: 43, name: "Hedge Mage", attack: 4, health: 2, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Hedge+Mage" },
    { set_number: 44, name: "Forest Troll", attack: 3, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Forest+Troll" },
    { set_number: 45, name: "Elven Archer", attack: 5, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Elven+Archer" },
    { set_number: 46, name: "Dwarven Warrior", attack: 4, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Dwarven+Warrior" },
    { set_number: 47, name: "Priestess of Light", attack: 3, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Priestess" },
    { set_number: 48, name: "Orc Warlord", attack: 6, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Orc+Warlord" },
    { set_number: 49, name: "Royal Guard", attack: 5, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Royal+Guard" },
    { set_number: 50, name: "Assassin", attack: 7, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Assassin" },
    { set_number: 51, name: "Necromancer", attack: 4, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Necromancer" },
    { set_number: 52, name: "Pegasus Knight", attack: 6, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Pegasus+Knight" },
    { set_number: 53, name: "Minotaur Guardian", attack: 5, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Minotaur" },
    { set_number: 54, name: "Wyvern Rider", attack: 7, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Wyvern+Rider" },
    { set_number: 55, name: "Ice Elemental", attack: 6, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Ice+Elemental" },
    { set_number: 56, name: "Fire Mage", attack: 8, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Fire+Mage" },
    { set_number: 57, name: "Earth Giant", attack: 4, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Earth+Giant" },
    { set_number: 58, name: "Storm Djinn", attack: 7, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Storm+Djinn" },
    { set_number: 59, "name": "Vampire Lord", "attack": 6, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Vampire+Lord" },
    { set_number: 60, "name": "Werewolf Alpha", "attack": 8, "health": 5, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Werewolf+Alpha" },
    { set_number: 61, "name": "Obsidian Gargoyle", "attack": 5, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Obsidian+Gargoyle" },
    { set_number: 62, "name": "Captain of the Guard", "attack": 6, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Captain" },
    { set_number: 63, "name": "Master Thief", "attack": 7, "health": 5, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Master+Thief" },
    { set_number: 64, "name": "King's Champion", "attack": 8, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=King's+Champion" },
    { set_number: 65, "name": "Siege Golem", "attack": 5, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Siege+Golem" },
    { set_number: 66, "name": "High Priest", "attack": 4, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=High+Priest" },
    { set_number: 67, "name": "Royal Griffon", "attack": 9, "health": 5, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Royal+Griffon" },
    { set_number: 68, "name": "Hydra Hatchling", "attack": 7, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Hydra+Hatchling" },
    { set_number: 69, "name": "Lava Elemental", "attack": 8, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Lava+Elemental" },
    { set_number: 70, "name": "Ancient Treant", "attack": 6, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Ancient+Treant" },

    // --- Rare Cards (20) ---
    { set_number: 71, name: "Questing Knight", attack: 5, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Questing+Knight" },
    { set_number: 72, name: "Griffon", attack: 6, health: 5, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Griffon" },
    { set_number: 73, name: "Battlemage", attack: 7, health: 4, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Battlemage" },
    { set_number: 74, name: "Ogre Chieftain", attack: 5, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Ogre+Chieftain" },
    { set_number: 75, name: "Paladin", attack: 6, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Paladin" },
    { set_number: 76, name: "Young Dragon", attack: 8, health: 5, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Young+Dragon" },
    { set_number: 77, name: "Lich Apprentice", attack: 7, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Lich+Apprentice" },
    { set_number: 78, name: "War Mammoth", attack: 5, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=War+Mammoth" },
    { set_number: 79, name: "Phoenix Egg", attack: 1, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Phoenix+Egg" },
    { set_number: 80, name: "Angel", attack: 8, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Angel" },
    { set_number: 81, name: "Demon", attack: 9, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Demon" },
    { set_number: 82, name: "Giant Scorpion", attack: 7, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Giant+Scorpion" },
    { set_number: 83, name: "Roc", attack: 8, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Roc" },
    { set_number: 84, name: "Colossus", attack: 6, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Colossus" },
    { set_number: 85, name: "Hydra", attack: 9, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Hydra" },
    { set_number: 86, name: "Beholder", attack: 10, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Beholder" },
    { set_number: 87, name: "Manticore", attack: 8, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Manticore" },
    { set_number: 88, name: "Frost Giant", attack: 9, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Frost+Giant" },
    { set_number: 89, name: "Fire Giant", attack: 10, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Fire+Giant" },
    { set_number: 90, name: "Storm Giant", attack: 9, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Storm+Giant" },

    // --- Legendary Cards (10) ---
    { set_number: 91, name: "King of the Realm", attack: 8, health: 8, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=King" },
    { set_number: 92, name: "Golden Dragon", attack: 9, health: 9, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Golden+Dragon" },
    { set_number: 93, name: "Archlich of the Crypt", attack: 10, health: 7, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Archlich" },
    { set_number: 94, name: "The Black Knight", attack: 7, health: 10, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Black+Knight" },
    { set_number: 95, name: "Archangel", attack: 9, health: 10, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Archangel" },
    { set_number: 96, name: "Demon Lord", attack: 10, health: 9, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Demon+Lord" },
    { set_number: 97, name: "Elder Dragon", attack: 11, health: 11, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Elder+Dragon" },
    { set_number: 98, name: "The World Serpent", attack: 12, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=World+Serpent" },
    { set_number: 99, name: "Cthulhu", attack: 15, health: 15, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Cthulhu" },
    { set_number: 100, name: "The Creator", attack: 20, health: 20, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=The+Creator" }
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
const settingsModal = document.getElementById('settings-modal');
const settingsBtn = document.getElementById('settings-btn');
const closeSettingsBtn = settingsModal.querySelector('.close-btn');
const themeSwitcher = document.getElementById('theme-switcher');
const themeButtons = themeSwitcher.querySelectorAll('.theme-btn');
const resetBtn = document.getElementById('reset-btn');
const resetConfirmation = document.getElementById('reset-confirmation');
const resetYesBtn = document.getElementById('reset-yes-btn');
const resetNoBtn = document.getElementById('reset-no-btn');

let collection = {};

function loadCollection() {
    const savedCollection = localStorage.getItem('cardCollection');
    if (savedCollection) {
        collection = JSON.parse(savedCollection);
    } else {
        collection = {};
    }
}

function saveCollection() {
    localStorage.setItem('cardCollection', JSON.stringify(collection));
}

function addToCollection(pack) {
    const newlyAdded = [];
    pack.forEach(card => {
        const setNum = card.set_number;
        if (!collection[setNum]) {
            collection[setNum] = 0;
            newlyAdded.push(card);
        }
        collection[setNum]++;
    });
    saveCollection();
    return newlyAdded;
}

function displayGallery() {
    gallery.innerHTML = '';
    cards.forEach(card => {
        const quantity = collection[card.set_number] || 0;
        const cardElement = document.createElement('div');

        if (quantity > 0) {
            cardElement.classList.add('card', card.rarity);
            cardElement.innerHTML = `
                <div class="quantity-tag">x${quantity}</div>
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

function displayCards(pack, newlyCollected = []) {
    cardContainer.innerHTML = '';
    pack.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', card.rarity);
        cardElement.style.animationDelay = `${index * 0.1}s`;

        const isNew = newlyCollected.some(newCard => newCard.set_number === card.set_number);

        cardElement.innerHTML = `
            ${isNew ? '<div class="new-tag">NEW</div>' : ''}
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
    const newlyCollected = addToCollection(newPack);

    setTimeout(() => {
        displayCards(newPack, newlyCollected);
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
    if (event.target == settingsModal) {
        settingsModal.style.display = 'none';
    }
});

settingsBtn.addEventListener('click', () => {
    settingsModal.style.display = 'block';
});

closeSettingsBtn.addEventListener('click', () => {
    settingsModal.style.display = 'none';
});

function applyTheme(theme) {
    document.body.className = '';
    if (theme !== 'green') {
        document.body.classList.add(`theme-${theme}`);
    }
    localStorage.setItem('theme', theme);
}

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.dataset.theme;
        applyTheme(theme);
    });
});

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }
}

loadTheme();

resetBtn.addEventListener('click', () => {
    resetConfirmation.classList.remove('hidden');
});

resetNoBtn.addEventListener('click', () => {
    resetConfirmation.classList.add('hidden');
});

resetYesBtn.addEventListener('click', () => {
    localStorage.removeItem('cardCollection');
    collection = {};
    resetConfirmation.classList.add('hidden');
    settingsModal.style.display = 'none';
    displayGallery();
});
