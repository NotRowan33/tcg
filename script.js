const cardSets = {
    medieval: [
        // --- Common Cards (40) ---
        { set_number: 1, name: "Peasant", attack: 1, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Peasant" },
        { set_number: 2, name: "Village Dog", attack: 1, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Village+Dog" },
        { set_number: 3, name: "Farmhand", attack: 2, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Farmhand" },
        { set_number: 4, name: "Sewer Rat", attack: 2, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Sewer+Rat" },
        { set_number: 5, name: "Goblin Scout", attack: 3, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Goblin+Scout" },
        { set_number: 6, name: "Militia Recruit", attack: 2, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Militia+Recruit" },
        { set_number: 7, name: "Town Guard", attack: 3, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Town+Guard" },
        { set_number: 8, name: "Poacher", attack: 4, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Poacher" },
        { set_number: 9, name: "Orc Grunt", attack: 3, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Orc+Grunt" },
        { set_number: 10, name: "Lookout", attack: 1, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Lookout" },
        { set_number: 11, name: "Militia Spearman", attack: 3, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Spearman" },
        { set_number: 12, name: "Crossbowman", attack: 4, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Crossbowman" },
        { set_number: 13, name: "War Hound", attack: 5, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=War+Hound" },
        { set_number: 14, name: "Bandit", attack: 4, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Bandit" },
        { set_number: 15, name: "Armored Squire", attack: 2, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Squire" },
        { set_number: 16, name: "Wild Bear", attack: 5, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Wild+Bear" },
        { set_number: 17, name: "Ogre Brute", attack: 4, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Ogre+Brute" },
        { set_number: 18, name: "Giant Spider", attack: 6, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Giant+Spider" },
        { set_number: 19, name: "Swamp Hag", attack: 5, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Swamp+Hag" },
        { set_number: 20, name: "Rock Golem", attack: 3, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Rock+Golem" },
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
        { set_number: 41, name: "Squire", attack: 3, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Squire" },
        { set_number: 42, name: "Foot Knight", attack: 4, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Foot+Knight" },
        { set_number: 43, name: "Hedge Mage", attack: 4, health: 2, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Hedge+Mage" },
        { set_number: 44, name: "Forest Troll", attack: 3, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Forest+Troll" },
        { set_number: 45, name: "Elven Archer", attack: 5, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Elven+Archer" },
        { set_number: 46, name: "Dwarven Warrior", attack: 4, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Dwarven+Warrior" },
        { set_number: 47, name: "Priestess of Light", attack: 3, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Priestess", ability: { type: 'heal', amount: 5, target: 'player' } },
        { set_number: 48, name: "Orc Warlord", attack: 6, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Orc+Warlord" },
        { set_number: 49, name: "Royal Guard", attack: 5, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Royal+Guard" },
        { set_number: 50, name: "Assassin", attack: 7, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Assassin" },
        { set_number: 51, name: "Necromancer", attack: 4, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Necromancer" },
        { set_number: 52, name: "Pegasus Knight", attack: 6, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Pegasus+Knight" },
        { set_number: 53, name: "Minotaur Guardian", attack: 5, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Minotaur" },
        { set_number: 54, name: "Wyvern Rider", attack: 7, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Wyvern+Rider" },
        { set_number: 55, name: "Ice Elemental", attack: 6, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Ice+Elemental" },
        { set_number: 56, name: "Fire Mage", attack: 8, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Fire+Mage", ability: { type: 'damage', amount: 3, target: 'opponent' } },
        { set_number: 57, name: "Earth Giant", attack: 4, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Earth+Giant" },
        { set_number: 58, name: "Storm Djinn", attack: 7, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Storm+Djinn" },
        { set_number: 59, "name": "Vampire Lord", "attack": 6, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Vampire+Lord" },
        { set_number: 60, "name": "Werewolf Alpha", "attack": 8, "health": 5, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Werewolf+Alpha" },
        { set_number: 61, "name": "Obsidian Gargoyle", "attack": 5, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Obsidian+Gargoyle" },
        { set_number: 62, "name": "Captain of the Guard", "attack": 6, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Captain" },
        { set_number: 63, "name": "Master Thief", "attack": 7, "health": 5, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Master+Thief", "ability": { "type": "draw", "count": 1 } },
        { set_number: 64, "name": "King's Champion", "attack": 8, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=King's+Champion" },
        { set_number: 65, "name": "Siege Golem", "attack": 5, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Siege+Golem" },
        { set_number: 66, "name": "High Priest", "attack": 4, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=High+Priest" },
        { set_number: 67, "name": "Royal Griffon", "attack": 9, "health": 5, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Royal+Griffon" },
        { set_number: 68, "name": "Hydra Hatchling", "attack": 7, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Hydra+Hatchling" },
        { set_number: 69, "name": "Lava Elemental", "attack": 8, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Lava+Elemental" },
        { set_number: 70, "name": "Ancient Treant", "attack": 6, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Ancient+Treant" },
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
    ],
    western: [
        // --- Common Cards (20) ---
        { set_number: 101, name: "Prospector", attack: 2, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Prospector" },
        { set_number: 102, name: "Coyote", attack: 1, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Coyote" },
        { set_number: 103, name: "Saloon Patron", attack: 1, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Saloon+Patron" },
        { set_number: 104, name: "Rattlesnake", attack: 3, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Rattlesnake" },
        { set_number: 105, name: "Ranch Hand", attack: 2, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Ranch+Hand" },
        { set_number: 106, name: "Desperado", attack: 3, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Desperado" },
        { set_number: 107, name: "Traveling Salesman", attack: 1, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Salesman" },
        { set_number: 108, name: "Vulture", attack: 4, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Vulture" },
        { set_number: 109, name: "Town Drunk", attack: 2, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Town+Drunk" },
        { set_number: 110, name: "Scorpion", attack: 3, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Scorpion" },
        { set_number: 111, name: "Gold Panner", attack: 2, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Gold+Panner" },
        { set_number: 112, name: "Bandit", attack: 4, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Bandit" },
        { set_number: 113, name: "Mustang", attack: 3, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Mustang" },
        { set_number: 114, name: "Barback", attack: 2, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Barback" },
        { set_number: 115, name: "Grizzly Bear", attack: 5, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Grizzly+Bear" },
        { set_number: 116, name: "Stagecoach Driver", attack: 3, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Stagecoach+Driver" },
        { set_number: 117, name: "Outlaw Lookout", attack: 4, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Outlaw+Lookout" },
        { set_number: 118, name: "Buffalo Calf", attack: 2, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Buffalo+Calf" },
        { set_number: 119, name: "Train Robber", attack: 6, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Train+Robber" },
        { set_number: 120, name: "Mining Foreman", attack: 4, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Mining+Foreman" },
        // --- Uncommon Cards (15) ---
        { set_number: 121, name: "Deputy", attack: 4, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Deputy" },
        { set_number: 122, name: "Gunslinger", attack: 5, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Gunslinger" },
        { set_number: 123, name: "Card Sharp", attack: 3, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Card+Sharp", ability: { type: 'draw', count: 1 } },
        { set_number: 124, name: "Bounty Hunter", attack: 6, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Bounty+Hunter" },
        { set_number: 125, name: "Native Scout", attack: 5, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Native+Scout" },
        { set_number: 126, name: "Snake Oil Salesman", attack: 4, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Salesman", ability: { type: 'heal', amount: 3, target: 'player' } },
        { set_number: 127, name: "Sheriff", attack: 5, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Sheriff" },
        { set_number: 128, name: "Pinkerton Agent", attack: 6, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Pinkerton" },
        { set_number: 129, name: "Demolitionist", attack: 4, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Demolitionist", ability: { type: 'damage', amount: 2, target: 'opponent' } },
        { set_number: 130, name: "Veteran Prospector", attack: 5, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Veteran+Prospector" },
        { set_number: 131, name: "Saloon Owner", attack: 3, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Saloon+Owner" },
        { set_number: 132, name: "Gatling Gunner", attack: 8, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Gatling+Gunner" },
        { set_number: 133, name: "Native Warrior", attack: 6, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Native+Warrior" },
        { set_number: 134, name: "Bank Manager", attack: 5, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Bank+Manager" },
        { set_number: 135, name: "Old Ephraim", attack: 7, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Old+Ephraim" },
        // --- Rare Cards (10) ---
        { set_number: 136, name: "U.S. Marshal", attack: 6, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=U.S.+Marshal" },
        { set_number: 137, name: "Legendary Gunslinger", attack: 8, health: 5, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Legendary+Gunslinger" },
        { set_number: 138, name: "Outlaw Gang Leader", attack: 7, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Gang+Leader" },
        { set_number: 139, name: "Ghost Rider", attack: 9, health: 4, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Ghost+Rider" },
        { set_number: 140, name: "Spirit Walker", attack: 5, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Spirit+Walker", ability: { type: 'heal', amount: 8, target: 'player' } },
        { set_number: 141, name: "Railroad Baron", attack: 6, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Railroad+Baron" },
        { set_number: 142, name: "Great Horned Owl", attack: 8, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Great+Horned+Owl" },
        { set_number: 143, name: "Thunderbird", attack: 9, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Thunderbird" },
        { set_number: 144, name: "Wendigo", attack: 10, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Wendigo" },
        { set_number: 145, name: "The Pecos Kid", attack: 7, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=The+Pecos+Kid" },
        // --- Legendary Cards (5) ---
        { set_number: 146, name: "The Man With No Name", attack: 10, health: 8, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=No+Name" },
        { set_number: 147, name: "The Phantom Rider", attack: 9, health: 9, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Phantom+Rider", ability: { type: 'damage', amount: 5, target: 'opponent' } },
        { set_number: 148, name: "The Railroad Tycoon", attack: 8, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Railroad+Tycoon" },
        { set_number: 149, name: "The Spirit of the West", attack: 12, health: 10, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Spirit+of+West" },
        { set_number: 150, name: "The Gunslinging President", attack: 15, health: 15, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=President" },
        // --- Expansion Commons (20) ---
        { set_number: 151, name: "Greenhorn", attack: 1, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Greenhorn" },
        { set_number: 152, name: "Tumbleweed", attack: 0, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Tumbleweed" },
        { set_number: 153, name: "Blacksmith", attack: 2, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Blacksmith" },
        { set_number: 154, name: "Barber", attack: 2, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Barber" },
        { set_number: 155, name: "Wild Horse", attack: 4, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Wild+Horse" },
        { set_number: 156, name: "Claim Jumper", attack: 3, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Claim+Jumper" },
        { set_number: 157, name: "Telegraph Operator", attack: 1, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Operator" },
        { set_number: 158, name: "Pony Express Rider", attack: 5, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Pony+Express" },
        { set_number: 159, name: "Buffalo Herd", attack: 6, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Buffalo+Herd" },
        { set_number: 160, name: "Dust Devil", attack: 3, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Dust+Devil" },
        { set_number: 161, name: "Road Agent", attack: 5, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Road+Agent" },
        { set_number: 162, name: "Sidewinder", attack: 4, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Sidewinder" },
        { set_number: 163, name: "Frontier Doctor", attack: 3, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Doctor" },
        { set_number: 164, name: "Homesteaders", attack: 4, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Homesteaders" },
        { set_number: 165, name: "Oil Prospector", attack: 2, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Oil+Prospector" },
        { set_number: 166, name: "Cavalry Scout", attack: 6, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Cavalry+Scout" },
        { set_number: 167, name: "Chuckwagon Cook", attack: 4, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Cook" },
        { set_number: 168, name: "Texas Ranger", attack: 7, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Texas+Ranger" },
        { set_number: 169, name: "Riverboat Captain", attack: 5, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Captain" },
        { set_number: 170, name: "Mountain Man", attack: 6, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Mountain+Man" },
        // --- Expansion Uncommons (15) ---
        { set_number: 171, name: "Trick Roper", attack: 5, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Trick+Roper" },
        { set_number: 172, name: "Sharpshooter", attack: 7, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Sharpshooter" },
        { set_number: 173, name: "Hanging Judge", attack: 4, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Judge" },
        { set_number: 174, name: "Medicine Man", attack: 5, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Medicine+Man", ability: { type: 'heal', amount: 5, target: 'player' } },
        { set_number: 175, name: "Legendary Lawman", attack: 6, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Lawman" },
        { set_number: 176, name: "Notorious Outlaw", attack: 8, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Outlaw" },
        { set_number: 177, name: "Union Soldier", attack: 6, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Union+Soldier" },
        { set_number: 178, name: "Confederate Soldier", attack: 7, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Confederate+Soldier" },
        { set_number: 179, name: "War Chief", attack: 8, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=War+Chief" },
        { set_number: 180, name: "Rainmaker", attack: 6, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Rainmaker", ability: { type: 'draw', count: 2 } },
        { set_number: 181, name: "Cattle Baron", attack: 7, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Cattle+Baron" },
        { set_number: 182, name: "Jackalope", attack: 5, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Jackalope" },
        { set_number: 183, name: "Golden Stallion", attack: 9, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Golden+Stallion" },
        { set_number: 184, name: "Dynamite Fisherman", attack: 8, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Fisherman", ability: { type: 'damage', amount: 3, target: 'opponent' } },
        { set_number: 185, name: "The Lone Sheriff", attack: 7, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Lone+Sheriff" },
        // --- Expansion Rares (10) ---
        { set_number: 186, name: "Billy the Kid", attack: 9, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Billy+the+Kid" },
        { set_number: 187, name: "Wyatt Earp", attack: 8, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Wyatt+Earp" },
        { set_number: 188, name: "Geronimo", attack: 10, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Geronimo" },
        { set_number: 189, name: "The Iron Horse", attack: 7, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Iron+Horse" },
        { set_number: 190, name: "Stampede", attack: 11, health: 5, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Stampede" },
        { set_number: 191, name: "Skin-walker", attack: 9, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Skin-walker" },
        { set_number: 192, name: "The Alamo Defender", attack: 5, health: 12, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Alamo+Defender" },
        { set_number: 193, name: "Jesse James", attack: 10, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Jesse+James" },
        { set_number: 194, name: "The Gold Rush", attack: 8, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Gold+Rush", ability: { type: 'draw', count: 3 } },
        { set_number: 195, name: "The Sun Dance", attack: 6, health: 12, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Sun+Dance", ability: { type: 'heal', amount: 10, target: 'player' } },
        // --- Expansion Legendaries (5) ---
        { set_number: 196, name: "Annie Oakley", attack: 12, health: 10, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Annie+Oakley" },
        { set_number: 197, name: "Sitting Bull", attack: 10, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Sitting+Bull" },
        { set_number: 198, name: "Paul Bunyan", attack: 14, health: 14, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Paul+Bunyan" },
        { set_number: 199, name: "Manifest Destiny", attack: 13, health: 15, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Manifest+Destiny" },
        { set_number: 200, name: "The American Eagle", attack: 16, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=American+Eagle" }
    ],
    scifi: [
        // --- Common Cards (40) ---
        { set_number: 201, name: "Maintenance Bot", attack: 1, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Maint.+Bot" },
        { set_number: 202, name: "Star-rat", attack: 2, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Star-rat" },
        { set_number: 203, name: "Asteroid Miner", attack: 2, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Miner" },
        { set_number: 204, name: "Xenomorph Drone", attack: 3, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Xeno+Drone" },
        { set_number: 205, name: "Colonial Settler", attack: 2, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Settler" },
        { set_number: 206, name: "Space Pirate Grunt", attack: 4, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Pirate" },
        { set_number: 207, name: "Cargo Hauler Pilot", attack: 3, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Pilot" },
        { set_number: 208, name: "Security Droid", attack: 4, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Security+Droid" },
        { set_number: 209, name: "Alien Fungus", attack: 1, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Fungus" },
        { set_number: 210, name: "Scrap Scavenger", attack: 3, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Scavenger" },
        { set_number: 211, name: "Lab Assistant", attack: 2, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Lab+Asst." },
        { set_number: 212, name: "Cryo-sleep Colonist", attack: 1, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Colonist" },
        { set_number: 213, name: "Shuttle Mechanic", attack: 3, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Mechanic" },
        { set_number: 214, name: "Spaceport Guard", attack: 4, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Guard" },
        { set_number: 215, name: "Nebula Gas Cloud", attack: 0, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Gas+Cloud" },
        { set_number: 216, name: "Zero-G Welder", attack: 4, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Welder" },
        { set_number: 217, name: "Mutated Vermin", attack: 5, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Mutant" },
        { set_number: 218, name: "Cybernetic Courier", attack: 3, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Courier" },
        { set_number: 219, name: "Terraforming Drone", attack: 2, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Terraformer" },
        { set_number: 220, name: "Galactic Federation Recruit", attack: 5, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Recruit" },
        { set_number: 221, name: "Stowaway", attack: 2, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Stowaway" },
        { set_number: 222, name: "Holographic Entertainer", attack: 1, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Hologram" },
        { set_number: 223, name: "Mining Guild Enforcer", attack: 6, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Enforcer" },
        { set_number: 224, name: "Android Butler", attack: 3, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Butler" },
        { set_number: 225, name: "Space Slug", attack: 4, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Space+Slug" },
        { set_number: 226, name: "Orion Smuggler", attack: 5, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Smuggler" },
        { set_number: 227, name: "Ice Planet Nomad", attack: 4, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Nomad" },
        { set_number: 228, name: "Desert Planet Scavenger", attack: 7, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Scavenger" },
        { set_number: 229, name: "Crystaline Entity", attack: 6, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Crystal" },
        { set_number: 230, name: "Fusion Core Technician", attack: 5, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Technician" },
        { set_number: 231, name: "Black Market Merchant", attack: 4, health: 8, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Merchant" },
        { set_number: 232, name: "Rebel Sympathizer", attack: 6, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Sympathizer" },
        { set_number: 233, name: "Corporate Spy", attack: 8, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Spy" },
        { set_number: 234, name: "Asteroid Field Drifter", attack: 7, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Drifter" },
        { set_number: 235, name: "Xeno-biologist", attack: 5, health: 8, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Biologist" },
        { set_number: 236, name: "Starship Navigator", attack: 6, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Navigator" },
        { set_number: 237, name: "Rogue Planet Colonist", attack: 7, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Colonist" },
        { set_number: 238, name: "Gravity Well Anomaly", attack: 8, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Anomaly" },
        { set_number: 239, name: "Stellar Nursery Attendant", attack: 6, health: 8, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Attendant" },
        { set_number: 240, name: "Galactic Peacekeeper", attack: 7, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Peacekeeper" },
        // --- Uncommon Cards (30) ---
        { set_number: 241, name: "Elite Trooper", attack: 5, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Elite+Trooper" },
        { set_number: 242, name: "Rogue Android", attack: 6, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Rogue+Android" },
        { set_number: 243, name: "Med-bot", attack: 4, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Med-bot", ability: { type: 'heal', amount: 4, target: 'player' } },
        { set_number: 244, name: "Starship Pilot", attack: 5, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Pilot" },
        { set_number: 245, name: "Alien Bounty Hunter", attack: 7, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Bounty+Hunter" },
        { set_number: 246, name: "Xenomorph Warrior", attack: 6, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Xeno+Warrior" },
        { set_number: 247, name: "Laser Turret", attack: 8, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Turret" },
        { set_number: 248, name: "Smuggler's Freighter", attack: 4, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Freighter" },
        { set_number: 249, name: "Telepathic Ambassador", attack: 5, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Ambassador" },
        { set_number: 250, name: "Gene-spliced Soldier", attack: 7, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Gene-spliced" },
        { set_number: 251, name: "Starfighter Ace", attack: 8, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Starfighter+Ace" },
        { set_number: 252, name: "Cyber Ninja", attack: 9, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Cyber+Ninja" },
        { set_number: 253, name: "Hacker", attack: 6, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Hacker", ability: { type: 'draw', count: 1 } },
        { set_number: 254, name: "Black Hole Researcher", attack: 5, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Researcher" },
        { set_number: 255, name: "Android Assassin", attack: 8, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Assassin+Bot" },
        { set_number: 256, name: "Rebel Leader", attack: 7, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Rebel+Leader" },
        { set_number: 257, name: "Planetary Governor", attack: 6, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Governor" },
        { set_number: 258, name: "Psychic Warrior", attack: 8, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Psychic" },
        { set_number: 259, name: "Time Traveler", attack: 7, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Time+Traveler" },
        { set_number: 260, name: "Void Creature", attack: 9, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Void+Creature" },
        { set_number: 261, name: "Galactic Diplomat", attack: 5, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Diplomat" },
        { set_number: 262, name: "Android Uprising Leader", attack: 8, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Uprising" },
        { set_number: 263, name: "Cloning Facility Chief", attack: 6, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Cloning+Chief" },
        { set_number: 264, name: "Dyson Sphere Engineer", attack: 7, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Engineer" },
        { set_number: 265, name: "Alien Artifact Hunter", attack: 9, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Artifact+Hunter" },
        { set_number: 266, name: "Starship Captain", attack: 8, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Captain" },
        { set_number: 267, name: "Wormhole Navigator", attack: 7, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Navigator" },
        { set_number: 268, name: "Cyborg Gladiator", attack: 10, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Gladiator" },
        { set_number: 269, name: "Exo-suit Brawler", attack: 9, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Exo-suit" },
        { set_number: 270, name: "Galactic Federation Senator", attack: 6, health: 10, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Senator" },
        // --- Rare Cards (20) ---
        { set_number: 271, name: "Heavy Mech Suit", attack: 8, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Heavy+Mech" },
        { set_number: 272, name: "Psionic Adept", attack: 6, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Psionic+Adept", ability: { type: 'damage', amount: 4, target: 'opponent' } },
        { set_number: 273, name: "Fleet Commander", attack: 7, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Fleet+Commander" },
        { set_number: 274, name: "Alien Queen", attack: 9, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Alien+Queen" },
        { set_number: 275, name: "Sentient Planet", attack: 5, health: 12, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Sentient+Planet" },
        { set_number: 276, name: "Dreadnought", attack: 10, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Dreadnought" },
        { set_number: 277, name: "Master of Espionage", attack: 8, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Master+Spy" },
        { set_number: 278, name: "AI Overlord", attack: 9, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=AI+Overlord" },
        { set_number: 279, name: "The Last Human", attack: 7, health: 11, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Last+Human" },
        { set_number: 280, name: "Ringworld Engineer", attack: 8, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Ringworld" },
        { set_number: 281, name: "Cosmic Horror", attack: 12, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Cosmic+Horror" },
        { set_number: 282, name: "Galactic Librarian", attack: 6, health: 12, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Librarian", ability: { type: 'draw', count: 2 } },
        { set_number: 283, name: "Living Starship", attack: 10, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Living+Starship" },
        { set_number: 284, name: "Supernova Remnant", attack: 11, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Supernova" },
        { set_number: 285, name: "The Singularity", attack: 9, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Singularity" },
        { set_number: 286, name: "Empress of the Void", attack: 10, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Empress" },
        { set_number: 287, name: "The First Android", attack: 8, health: 12, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=First+Android" },
        { set_number: 288, "name": "Guardian of the Nexus", "attack": 9, "health": 11, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Guardian" },
        { set_number: 289, "name": "The Star-Eater", "attack": 13, "health": 8, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Star-Eater" },
        { set_number: 290, "name": "Architect of Worlds", "attack": 7, "health": 14, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Architect" },
        // --- Legendary Cards (10) ---
        { set_number: 291, name: "The Last Starfighter", attack: 10, health: 10, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Starfighter" },
        { set_number: 292, name: "Sentient AI Core", attack: 8, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=AI+Core", ability: { type: 'draw', count: 3 } },
        { set_number: 293, name: "Galactic Emperor", attack: 12, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Emperor" },
        { set_number: 294, name: "The Wormhole Anomaly", attack: 15, health: 10, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Wormhole" },
        { set_number: 295, name: "The Last Terran", attack: 11, health: 14, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Last+Terran" },
        { set_number: 296, name: "The Celestial Forge", attack: 10, health: 16, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Forge" },
        { set_number: 297, name: "The Chronos Paradox", attack: 14, health: 13, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Paradox" },
        { set_number: 298, name: "The Hive Mind", attack: 13, health: 15, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Hive+Mind" },
        { set_number: 299, name: "The Omega Weapon", attack: 18, health: 10, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Omega+Weapon" },
        { set_number: 300, name: "The Progenitor", attack: 20, health: 20, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Progenitor" }
    ],
    pirate: [
        // --- Common Cards (40) ---
        { set_number: 301, name: "Ship Rat", attack: 1, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Ship+Rat" },
        { set_number: 302, name: "Swabbie", attack: 1, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Swabbie" },
        { set_number: 303, name: "Cabin Boy", attack: 2, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Cabin+Boy" },
        { set_number: 304, name: "Lookout", attack: 2, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Lookout" },
        { set_number: 305, name: "Parrot", attack: 3, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Parrot" },
        { set_number: 306, name: "Deckhand", attack: 3, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Deckhand" },
        { set_number: 307, name: "Sea Shark", attack: 4, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Shark" },
        { set_number: 308, name: "Island Native", attack: 3, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Islander" },
        { set_number: 309, name: "Marooned Sailor", attack: 2, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Marooned" },
        { set_number: 310, name: "Powder Monkey", attack: 4, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Powder+Monkey" },
        { set_number: 311, name: "Buccaneer", attack: 5, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Buccaneer" },
        { set_number: 312, name: "Merchant Sailor", attack: 3, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Merchant" },
        { set_number: 313, name: "Harpooner", attack: 6, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Harpooner" },
        { set_number: 314, name: "Scurvy Dog", attack: 4, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Scurvy+Dog" },
        { set_number: 315, name: "Undead Pirate", attack: 5, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Undead" },
        { set_number: 316, name: "Grog Drinker", attack: 4, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Grog+Drinker" },
        { set_number: 317, name: "Sea Turtle", attack: 2, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Sea+Turtle" },
        { set_number: 318, name: "Royal Marine", attack: 5, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Marine" },
        { set_number: 319, name: "Cargo Master", attack: 3, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Cargo+Master" },
        { set_number: 320, name: "Siren", attack: 6, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Siren" },
        { set_number: 321, name: "Old Salt", attack: 5, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Old+Salt" },
        { set_number: 322, name: "Coral Golem", attack: 4, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Coral+Golem" },
        { set_number: 323, name: "Giant Crab", attack: 7, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Giant+Crab" },
        { set_number: 324, name: "Master Gunner", attack: 6, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Master+Gunner" },
        { set_number: 325, name: "Navigator", attack: 5, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Navigator" },
        { set_number: 326, name: "Ship's Carpenter", attack: 4, health: 8, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Carpenter" },
        { set_number: 327, name: "Mutineer", attack: 7, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Mutineer" },
        { set_number: 328, name: "Treasure Hunter", attack: 6, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Treasure+Hunter" },
        { set_number: 329, name: "Ferryman", attack: 5, health: 8, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Ferryman" },
        { set_number: 330, name: "Sea Serpent Hatchling", attack: 8, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Hatchling" },
        { set_number: 331, name: "Port Town Guard", attack: 6, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Guard" },
        { set_number: 332, name: "Smuggler", attack: 7, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Smuggler" },
        { set_number: 333, name: "Davy Jones' Locker", attack: 0, health: 10, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Locker" },
        { set_number: 334, name: "Message in a Bottle", attack: 1, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Bottle" },
        { set_number: 335, name: "Ghostly Apparition", attack: 5, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Apparition" },
        { set_number: 336, name: "The Black Spot", attack: 3, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Black+Spot" },
        { set_number: 337, name: "Boarding Party", attack: 8, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Boarding+Party" },
        { set_number: 338, name: "Ship's Doctor", attack: 4, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Doctor" },
        { set_number: 339, name: "Lost Explorer", attack: 6, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Explorer" },
        { set_number: 340, name: "Volcano", attack: 7, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Volcano" },
        // --- Uncommon Cards (30) ---
        { set_number: 341, name: "First Mate", attack: 5, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=First+Mate" },
        { set_number: 342, name: "Cannoneer", attack: 6, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Cannoneer", ability: { type: 'damage', amount: 2, target: 'opponent' } },
        { set_number: 343, name: "Quartermaster", attack: 4, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Quartermaster" },
        { set_number: 344, name: "Master-at-Arms", attack: 5, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Master-at-Arms" },
        { set_number: 345, name: "Voodoo Priestess", attack: 7, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Voodoo" },
        { set_number: 346, name: "Skeleton Crew", attack: 6, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Skeletons" },
        { set_number: 347, name: "Naval Officer", attack: 8, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Officer" },
        { set_number: 348, name: "Treasure Map", attack: 0, health: 2, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Map", ability: { type: 'draw', count: 1 } },
        { set_number: 349, name: "Sea Witch", attack: 5, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Sea+Witch" },
        { set_number: 350, name: "Pirate Lord", attack: 7, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Pirate+Lord" },
        { set_number: 351, name: "The Governor's Daughter", attack: 4, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Governor's+Daughter" },
        { set_number: 352, name: "Cursed Doubloon", attack: 3, health: 3, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Doubloon" },
        { set_number: 353, name: "Swashbuckler", attack: 8, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Swashbuckler" },
        { set_number: 354, name: "Shipwright", attack: 5, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Shipwright", ability: { type: 'heal', amount: 5, target: 'player' } },
        { set_number: 355, name: "Kraken's Spawn", attack: 9, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Kraken+Spawn" },
        { set_number: 356, name: "Captain's Log", attack: 1, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Captain's+Log" },
        { set_number: 357, name: "Sunken Treasure", attack: 0, health: 10, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Sunken+Treasure" },
        { set_number: 358, name: "Whirlpool", attack: 6, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Whirlpool" },
        { set_number: 359, name: "The Plank", attack: 5, health: 2, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=The+Plank" },
        { set_number: 360, name: "Cannon Barrage", attack: 8, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Barrage", ability: { type: 'damage', amount: 4, target: 'opponent' } },
        { set_number: 361, name: "Ancient Mariner", attack: 7, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Mariner" },
        { set_number: 362, name: "Maelstrom", attack: 9, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Maelstrom" },
        { set_number: 363, name: "Isle of the Dead", attack: 6, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Isle+of+Dead" },
        { set_number: 364, name: "The Red Fleet", attack: 8, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Red+Fleet" },
        { set_number: 365, name: "The Brethren Court", attack: 5, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Brethren+Court" },
        { set_number: 366, name: "Mermaid Queen", attack: 7, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Mermaid+Queen" },
        { set_number: 367, name: "Triton's Horn", attack: 6, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Triton's+Horn" },
        { set_number: 368, name: "The Bermuda Triangle", attack: 10, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Bermuda" },
        { set_number: 369, name: "The Fountain of Youth", attack: 4, health: 12, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Fountain", ability: { type: 'heal', amount: 10, target: 'player' } },
        { set_number: 370, name: "The Cursed Crew", attack: 9, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Cursed+Crew" },
        // --- Rare Cards (20) ---
        { set_number: 371, name: "Pirate Captain", attack: 8, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Captain" },
        { set_number: 372, name: "Ghost Ship", attack: 7, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Ghost+Ship" },
        { set_number: 373, name: "Kraken's Tentacle", attack: 10, health: 6, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Tentacle" },
        { set_number: 374, name: "Naval Fleet", attack: 9, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Fleet" },
        { set_number: 375, name: "The Governor", attack: 5, health: 12, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Governor" },
        { set_number: 376, name: "Davy Jones", attack: 10, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Davy+Jones" },
        { set_number: 377, name: "The Sea's Fury", attack: 8, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Sea's+Fury" },
        { set_number: 378, name: "The Treasure Fleet", attack: 9, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Treasure+Fleet" },
        { set_number: 379, name: "The Pirate Code", attack: 7, health: 11, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Pirate+Code", ability: { type: 'draw', count: 2 } },
        { set_number: 380, name: "The Leviathan", attack: 11, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Leviathan" },
        { set_number: 381, name: "Calypso", attack: 8, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Calypso" },
        { set_number: 382, name: "The World's End", attack: 12, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=World's+End" },
        { set_number: 383, name: "The East India Company", attack: 9, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=EIC" },
        { set_number: 384, name: "The Cursed Treasure of Cortez", attack: 10, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Cursed+Treasure" },
        { set_number: 385, name: "The Spanish Armada", attack: 11, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Armada" },
        { set_number: 386, name: "The Pirate King's Crown", attack: 8, health: 12, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Crown" },
        { set_number: 387, name: "The Sunken City", attack: 7, health: 14, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Sunken+City" },
        { set_number: 388, name: "The Sea God's Trident", attack: 13, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Trident" },
        { set_number: 389, name: "The Last Buccaneer", attack: 10, health: 11, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Last+Buccaneer" },
        { set_number: 390, name: "The Hurricane", attack: 14, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Hurricane" },
        // --- Legendary Cards (10) ---
        { set_number: 391, name: "Blackbeard", attack: 12, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Blackbeard" },
        { set_number: 392, name: "The Flying Dutchman", attack: 10, health: 14, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Dutchman" },
        { set_number: 393, name: "The Kraken", attack: 15, health: 15, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=The+Kraken" },
        { set_number: 394, name: "Captain Kidd's Treasure", attack: 8, health: 18, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Kidd's+Treasure", ability: { type: 'draw', count: 4 } },
        { set_number: 395, name: "The Pirate Republic", attack: 11, health: 14, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Pirate+Republic" },
        { set_number: 396, name: "Poseidon's Wrath", attack: 16, health: 10, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Poseidon's+Wrath" },
        { set_number: 397, name: "Anne Bonny & Mary Read", attack: 14, health: 13, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Bonny+&+Read" },
        { set_number: 398, name: "The Heart of the Ocean", attack: 10, health: 20, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Heart+of+Ocean", ability: { type: 'heal', amount: 20, target: 'player' } },
        { set_number: 399, name: "The End of the Golden Age", attack: 18, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=End+of+Age" },
        { set_number: 400, name: "King of the Pirates", attack: 20, health: 20, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Pirate+King" }
    ],
    fantasy: [
        // --- Common Cards (40) ---
        { set_number: 401, name: "Goblin Spearman", attack: 2, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Goblin" },
        { set_number: 402, name: "Elven Initiate", attack: 1, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Elf+Initiate" },
        { set_number: 403, name: "Dwarven Shieldbearer", attack: 2, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Dwarf" },
        { set_number: 404, name: "Orc Raider", attack: 4, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Orc+Raider" },
        { set_number: 405, name: "Forest Sprite", attack: 3, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Sprite" },
        { set_number: 406, name: "Kobold Tunneler", attack: 2, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Kobold" },
        { set_number: 407, name: "Giant Wolf", attack: 5, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Giant+Wolf" },
        { set_number: 408, name: "Enchanted Tree", attack: 1, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Tree" },
        { set_number: 409, name: "Slime", attack: 3, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Slime" },
        { set_number: 410, name: "Apprentice Mage", attack: 4, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Apprentice" },
        { set_number: 411, name: "Human Soldier", attack: 3, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Soldier" },
        { set_number: 412, name: "Centaur Archer", attack: 5, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Centaur" },
        { set_number: 413, name: "Gnome Inventor", attack: 2, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Gnome" },
        { set_number: 414, name: "Harpy", attack: 4, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Harpy" },
        { set_number: 415, name: "Troll Brawler", attack: 6, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Troll" },
        { set_number: 416, name: "Mystic River", attack: 0, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=River" },
        { set_number: 417, name: "Dungeon Guard", attack: 5, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Dungeon+Guard" },
        { set_number: 418, name: "Fire Beetle", attack: 7, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Fire+Beetle" },
        { set_number: 419, name: "Shadow Stalker", attack: 6, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Shadow+Stalker" },
        { set_number: 420, name: "Crystal Golem", attack: 4, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Crystal+Golem" },
        { set_number: 421, name: "Goblin Shaman", attack: 3, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Goblin+Shaman" },
        { set_number: 422, name: "Elven Scout", attack: 5, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Elven+Scout" },
        { set_number: 423, name: "Dwarven Berserker", attack: 7, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Dwarf+Berserker" },
        { set_number: 424, name: "Orc Warband", attack: 6, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Orc+Warband" },
        { set_number: 425, name: "Faerie Dragon", attack: 5, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Faerie+Dragon" },
        { set_number: 426, name: "Minotaur", attack: 7, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Minotaur" },
        { set_number: 427, name: "Satyr Piper", attack: 4, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Satyr" },
        { set_number: 428, name: "Stone Giant", attack: 5, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Stone+Giant" },
        { set_number: 429, name: "Basilisk", attack: 6, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Basilisk" },
        { set_number: 430, name: "Wyrmling", attack: 8, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Wyrmling" },
        { set_number: 431, name: "Lizardfolk Warrior", attack: 7, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Lizardfolk" },
        { set_number: 432, name: "Owlbear", attack: 6, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Owlbear" },
        { set_number: 433, name: "Dryad", attack: 5, health: 8, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Dryad" },
        { set_number: 434, name: "Griffin", attack: 8, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Griffin" },
        { set_number: 435, name: "Worg Rider", attack: 7, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Worg+Rider" },
        { set_number: 436, name: "Elemental Spirit", attack: 6, health: 8, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Elemental" },
        { set_number: 437, name: "Hobgoblin Sergeant", attack: 8, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Hobgoblin" },
        { set_number: 438, name: "Gargoyle", attack: 5, health: 9, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Gargoyle" },
        { set_number: 439, name: "Cockatrice", attack: 9, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Cockatrice" },
        { set_number: 440, name: "Ogre Mage", attack: 7, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Ogre+Mage" },
        // --- Uncommon Cards (30) ---
        { set_number: 441, name: "Elven Archer Captain", attack: 5, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Elf+Captain" },
        { set_number: 442, name: "Dwarven Axe Lord", attack: 6, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Dwarf+Lord" },
        { set_number: 443, name: "Orc Shaman", attack: 5, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Orc+Shaman", ability: { type: 'heal', amount: 3, target: 'player' } },
        { set_number: 444, name: "Human Knight", attack: 6, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Knight" },
        { set_number: 445, name: "Wizard of the Tower", attack: 7, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Wizard" },
        { set_number: 446, name: "Ranger of the Woods", attack: 6, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Ranger" },
        { set_number: 447, name: "Cleric of Light", attack: 5, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Cleric" },
        { set_number: 448, name: "Thief of the Guild", attack: 8, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Thief" },
        { set_number: 449, name: "Barbarian Chieftain", attack: 9, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Barbarian" },
        { set_number: 450, name: "Sorcerer of the Elements", attack: 7, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Sorcerer" },
        { set_number: 451, name: "Paladin of the Order", attack: 6, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Paladin" },
        { set_number: 452, name: "Druid of the Wild", attack: 5, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Druid" },
        { set_number: 453, name: "Necromancer's Acolyte", attack: 8, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Acolyte" },
        { set_number: 454, name: "Bard of the College", attack: 6, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Bard", ability: { type: 'draw', count: 1 } },
        { set_number: 455, name: "Monk of the Monastery", attack: 9, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Monk" },
        { set_number: 456, name: "Beholderkin", attack: 7, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Beholderkin" },
        { set_number: 457, name: "Displacer Beast", attack: 8, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Displacer" },
        { set_number: 458, name: "Phase Spider", attack: 9, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Phase+Spider" },
        { set_number: 459, name: "Ettin", attack: 7, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Ettin" },
        { set_number: 460, name: "Chimera", attack: 10, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Chimera" },
        { set_number: 461, name: "Manticore", attack: 9, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Manticore" },
        { set_number: 462, name: "Hydra", attack: 8, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Hydra" },
        { set_number: 463, name: "Gorgon", attack: 6, health: 10, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Gorgon" },
        { set_number: 464, name: "Dragonnel", attack: 10, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Dragonnel" },
        { set_number: 465, name: "Roc", attack: 9, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Roc" },
        { set_number: 466, name: "Bulette", attack: 11, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Bulette" },
        { set_number: 467, name: "Umber Hulk", attack: 8, health: 10, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Umber+Hulk" },
        { set_number: 468, name: "Yeti", attack: 9, health: 10, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Yeti" },
        { set_number: 469, name: "Remorhaz", attack: 10, health: 9, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Remorhaz" },
        { set_number: 470, name: "Purple Worm", attack: 12, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Purple+Worm" },
        // --- Rare Cards (20) ---
        { set_number: 471, name: "High Elf Sorceress", attack: 7, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Sorceress", ability: { type: 'damage', amount: 5, target: 'opponent' } },
        { set_number: 472, name: "Dwarven King", attack: 8, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Dwarf+King" },
        { set_number: 473, name: "Orc Warchief", attack: 10, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Warchief" },
        { set_number: 474, name: "Human King", attack: 9, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Human+King" },
        { set_number: 475, name: "Archdruid", attack: 8, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Archdruid" },
        { set_number: 476, name: "Lich", attack: 10, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Lich" },
        { set_number: 477, name: "Mind Flayer", attack: 9, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Mind+Flayer" },
        { set_number: 478, name: "Beholder", attack: 11, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Beholder" },
        { set_number: 479, name: "Young Red Dragon", attack: 10, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Red+Dragon" },
        { set_number: 480, name: "Storm Giant King", attack: 9, health: 12, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Storm+Giant" },
        { set_number: 481, name: "The Phoenix", attack: 12, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Phoenix" },
        { set_number: 482, name: "The World-Eater Serpent", attack: 14, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Serpent" },
        { set_number: 483, name: "The Council of Mages", attack: 10, health: 11, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Council" },
        { set_number: 484, name: "The Forgotten God", attack: 13, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Forgotten+God" },
        { set_number: 485, name: "The Last Guardian", attack: 11, health: 11, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Guardian" },
        { set_number: 486, name: "The Sword in the Stone", attack: 8, health: 14, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Sword" },
        { set_number: 487, name: "The Gates of Avalon", attack: 7, health: 15, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Avalon" },
        { set_number: 488, name: "The Dragon's Hoard", attack: 10, health: 13, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Hoard", ability: { type: 'draw', count: 3 } },
        { set_number: 489, name: "The Fountain of Life", attack: 6, health: 16, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Fountain", ability: { type: 'heal', amount: 15, target: 'player' } },
        { set_number: 490, name: "The End of an Era", attack: 15, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=End+of+Era" },
        // --- Legendary Cards (10) ---
        { set_number: 491, name: "The Dragon of the North", attack: 14, health: 14, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Dragon" },
        { set_number: 492, name: "The Archmage", attack: 10, health: 16, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Archmage", ability: { type: 'draw', count: 3 } },
        { set_number: 493, name: "The Dark Lord", attack: 16, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Dark+Lord" },
        { set_number: 494, name: "The High Elf Queen", attack: 12, health: 15, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Elf+Queen" },
        { set_number: 495, name: "The Dwarven High King", attack: 15, health: 13, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Dwarf+King" },
        { set_number: 496, name: "The Great Old One", attack: 18, health: 10, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Great+Old+One" },
        { set_number: 497, name: "The Titan", attack: 16, health: 16, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Titan" },
        { set_number: 498, name: "The Aspect of Magic", attack: 13, health: 18, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Magic+Aspect" },
        { set_number: 499, name: "The First Dragon", attack: 19, health: 19, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=First+Dragon" },
        { set_number: 500, name: "The World Tree", attack: 20, health: 20, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=World+Tree" }
    ],
    mythology: [
        // --- Common Cards (40) ---
        { set_number: 501, name: "Satyr", attack: 2, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Satyr" },
        { set_number: 502, name: "Valkyrie Initiate", attack: 3, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Valkyrie" },
        { set_number: 503, name: "Egyptian Priest", attack: 2, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Priest" },
        { set_number: 504, "name": "Nymph", "attack": 1, "health": 4, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Nymph" },
        { set_number: 505, "name": "Frost Jotun", "attack": 4, "health": 3, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Jotun" },
        { set_number: 506, "name": "Mummy", "attack": 3, "health": 4, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Mummy" },
        { set_number: 507, "name": "Centaur", "attack": 5, "health": 3, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Centaur" },
        { set_number: 508, "name": "Einherjar", "attack": 4, "health": 4, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Einherjar" },
        { set_number: 509, "name": "Scarab Beetle", "attack": 2, "health": 1, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Scarab" },
        { set_number: 510, "name": "Harpy", "attack": 3, "health": 5, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Harpy" },
        { set_number: 511, "name": "Draugr", "attack": 5, "health": 4, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Draugr" },
        { set_number: 512, "name": "Servant of Anubis", "attack": 4, "health": 5, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Servant" },
        { set_number: 513, "name": "Gorgon", "attack": 6, "health": 3, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Gorgon" },
        { set_number: 514, "name": "Norse Raider", "attack": 5, "health": 5, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Raider" },
        { set_number: 515, "name": "Pharaoh's Guard", "attack": 4, "health": 6, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Guard" },
        { set_number: 516, "name": "Minotaur", "attack": 7, "health": 4, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Minotaur" },
        { set_number: 517, "name": "Fenrir's Pup", "attack": 6, "health": 5, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Pup" },
        { set_number: 518, "name": "Sphinx's Riddle", "attack": 2, "health": 8, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Riddle" },
        { set_number: 519, "name": "Cyclops", "attack": 8, "health": 4, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Cyclops" },
        { set_number: 520, "name": "Jormungandr's Scale", "attack": 5, "health": 7, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Scale" },
        { set_number: 521, "name": "Apep's Shadow", "attack": 7, "health": 5, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Shadow" },
        { set_number: 522, "name": "Hoplite", "attack": 6, "health": 6, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Hoplite" },
        { set_number: 523, "name": "Viking Berserker", "attack": 8, "health": 5, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Berserker" },
        { set_number: 524, "name": "Charioteer", "attack": 7, "health": 6, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Charioteer" },
        { set_number: 525, "name": "Siren", "attack": 5, "health": 8, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Siren" },
        { set_number: 526, "name": "Dwarf Smith", "attack": 6, "health": 7, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Smith" },
        { set_number: 527, "name": "Mummy Lord's Attendant", "attack": 7, "health": 7, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Attendant" },
        { set_number: 528, "name": "Athenian Scholar", "attack": 4, "health": 9, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Scholar" },
        { set_number: 529, "name": "Norse Seer", "attack": 5, "health": 9, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Seer" },
        { set_number: 530, "name": "Oracle of Delphi", "attack": 3, "health": 10, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Oracle" },
        { set_number: 531, "name": "Spartan Warrior", "attack": 8, "health": 6, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Spartan" },
        { set_number: 532, "name": "Viking Longship", "attack": 7, "health": 8, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Longship" },
        { set_number: 533, "name": "Pyramid Architect", "attack": 6, "health": 9, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Architect" },
        { set_number: 534, "name": "Trojan Horse", "attack": 5, "health": 10, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Trojan+Horse" },
        { set_number: 535, "name": "Yggdrasil Sapling", "attack": 4, "health": 11, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Sapling" },
        { set_number: 536, "name": "Gift of the Nile", "attack": 2, "health": 12, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Nile" },
        { set_number: 537, "name": "Amazonian Archer", "attack": 9, "health": 6, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Amazon" },
        { set_number: 538, "name": "Jotunheim Giant", "attack": 8, "health": 8, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Giant" },
        { set_number: 539, "name": "Servant of Ra", "attack": 7, "health": 9, "rarity": "common", "image": "https://via.placeholder.com/200x280.png?text=Servant+of+Ra" },
        { set_number: 540, name: "Hero of Thermopylae", attack: 10, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Hero" },
        // --- Uncommon Cards (30) ---
        { set_number: 541, name: "Hercules", attack: 7, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Hercules" },
        { set_number: 542, name: "Thor", attack: 8, health: 6, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Thor", ability: { type: 'damage', amount: 3, target: 'opponent' } },
        { set_number: 543, name: "Anubis, Judge of the Dead", attack: 6, health: 8, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Anubis" },
        { set_number: 544, "name": "Achilles", "attack": 9, "health": 5, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Achilles" },
        { set_number: 545, "name": "Freya", "attack": 7, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Freya" },
        { set_number: 546, "name": "Horus, the Avenger", "attack": 8, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Horus" },
        { set_number: 547, "name": "Odysseus", "attack": 6, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Odysseus" },
        { set_number: 548, "name": "Heimdall, the Watchman", "attack": 7, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Heimdall" },
        { set_number: 549, "name": "Set, God of Chaos", "attack": 9, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Set" },
        { set_number: 550, "name": "Perseus", "attack": 8, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Perseus" },
        { set_number: 551, "name": "Tyr, the One-Handed", "attack": 10, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Tyr" },
        { set_number: 552, "name": "Thoth, Scribe of the Gods", "attack": 5, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Thoth", ability: { type: 'draw', count: 2 } },
        { set_number: 553, "name": "Theseus", "attack": 9, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Theseus" },
        { set_number: 554, "name": "Baldur, the Shining", "attack": 7, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Baldur" },
        { set_number: 555, "name": "Sobek, the Crocodile God", "attack": 10, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Sobek" },
        { set_number: 556, "name": "Jason and the Argonauts", "attack": 8, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Argonauts" },
        { set_number: 557, "name": "Vidar, the Silent", "attack": 9, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Vidar" },
        { set_number: 558, "name": "Bastet, the Cat Goddess", "attack": 7, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Bastet" },
        { set_number: 559, "name": "Bellerophon on Pegasus", "attack": 10, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Bellerophon" },
        { set_number: 560, "name": "Ullr, the Hunter", "attack": 9, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Ullr" },
        { set_number: 561, "name": "Isis, the Magician", "attack": 8, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Isis" },
        { set_number: 562, "name": "Orpheus, the Musician", "attack": 6, "health": 11, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Orpheus" },
        { set_number: 563, "name": "Skadi, the Huntress", "attack": 10, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Skadi" },
        { set_number: 564, "name": "Osiris, Lord of the Underworld", "attack": 9, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Osiris" },
        { set_number: 565, "name": "Atalanta, the Huntress", "attack": 11, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Atalanta" },
        { set_number: 566, "name": "Hel, Queen of the Underworld", "attack": 8, "health": 11, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Hel" },
        { set_number: 567, "name": "Ptah, the Creator", "attack": 7, "health": 12, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Ptah" },
        { set_number: 568, "name": "Prometheus, the Titan", "attack": 10, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Prometheus" },
        { set_number: 569, "name": "Surtr, the Fire Giant", "attack": 12, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Surtr" },
        { set_number: 570, "name": "The Sphinx", "attack": 9, "health": 11, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Sphinx" },
        // --- Rare Cards (20) ---
        { set_number: 571, name: "Medusa", attack: 9, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Medusa" },
        { set_number: 572, name: "Loki, the Trickster", attack: 8, health: 10, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Loki", ability: { type: 'draw', count: 2 } },
        { set_number: 573, name: "Ra, the Sun God", attack: 10, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Ra" },
        { set_number: 574, "name": "Ares, God of War", "attack": 12, "health": 7, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Ares" },
        { set_number: 575, "name": "Fenrir, the Wolf", "attack": 11, "health": 9, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Fenrir" },
        { set_number: 576, "name": "Apophis, the Serpent", "attack": 10, "health": 10, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Apophis" },
        { set_number: 577, "name": "Hades, Lord of the Underworld", "attack": 9, "health": 11, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Hades" },
        { set_number: 578, "name": "Jormungandr, the World Serpent", "attack": 13, "health": 8, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Jormungandr" },
        { set_number: 579, "name": "Ammit, the Devourer", "attack": 12, "health": 9, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Ammit" },
        { set_number: 580, "name": "Poseidon, God of the Sea", "attack": 11, "health": 10, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Poseidon" },
        { set_number: 581, "name": "The Norns", "attack": 8, "health": 13, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Norns" },
        { set_number: 582, "name": "The Phoenix", "attack": 10, "health": 12, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Phoenix" },
        { set_number: 583, "name": "Artemis, Goddess of the Hunt", "attack": 13, "health": 9, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Artemis" },
        { set_number: 584, "name": "The Frost Giants", "attack": 12, "health": 10, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Frost+Giants" },
        { set_number: 585, "name": "The Great Sphinx", "attack": 10, "health": 13, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Great+Sphinx" },
        { set_number: 586, "name": "Athena, Goddess of Wisdom", "attack": 9, "health": 14, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Athena" },
        { set_number: 587, "name": "The Valkyries", "attack": 14, "health": 9, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Valkyries" },
        { set_number: 588, "name": "The Book of the Dead", "attack": 7, "health": 15, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Book+of+Dead" },
        { set_number: 589, "name": "The Labyrinth", "attack": 8, "health": 15, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Labyrinth" },
        { set_number: 590, "name": "The Bifrost Bridge", "attack": 10, "health": 14, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Bifrost" },
        // --- Legendary Cards (10) ---
        { set_number: 591, name: "Zeus, King of Gods", attack: 15, health: 15, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Zeus" },
        { set_number: 592, name: "Odin, the Allfather", attack: 14, health: 16, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Odin" },
        { set_number: 593, name: "Amun-Ra, King of Gods", attack: 16, health: 14, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Amun-Ra" },
        { set_number: 594, "name": "Cronus, the Titan King", "attack": 17, "health": 13, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Cronus" },
        { set_number: 595, "name": "Ymir, the First Giant", "attack": 16, "health": 15, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Ymir" },
        { set_number: 596, "name": "The Great Deluge", "attack": 13, "health": 18, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Deluge" },
        { set_number: 597, "name": "The Pantheon", "attack": 12, "health": 20, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Pantheon" },
        { set_number: 598, "name": "The Gungnir Spear", "attack": 19, "health": 12, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Gungnir" },
        { set_number: 599, "name": "The Ankh of Life", "attack": 10, "health": 22, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Ankh", ability: { type: 'heal', amount: 25, target: 'player' } },
        { set_number: 600, name: "Ragnarok", attack: 20, health: 20, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Ragnarok" }
    ],
    horror: [
        // --- Common Cards (40) ---
        { set_number: 601, name: "Zombie Shambler", attack: 2, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Zombie" },
        { set_number: 602, name: "Giant Rat", attack: 3, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Giant+Rat" },
        { set_number: 603, name: "Ghostly Spirit", attack: 1, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Ghost" },
        { set_number: 604, name: "Cultist", attack: 2, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Cultist" },
        { set_number: 605, name: "Grave Digger", attack: 3, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Grave+Digger" },
        { set_number: 606, name: "Black Cat", attack: 4, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Black+Cat" },
        { set_number: 607, name: "Haunted Armor", attack: 3, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Haunted+Armor" },
        { set_number: 608, name: "Screaming Banshee", attack: 5, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Banshee" },
        { set_number: 609, name: "Igor", attack: 2, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Igor" },
        { set_number: 610, name: "Gargoyle", attack: 4, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Gargoyle" },
        { set_number: 611, name: "Swarm of Bats", attack: 6, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Bats" },
        { set_number: 612, name: "Man-eating Plant", attack: 5, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Plant" },
        { set_number: 613, name: "Will-o'-the-Wisp", attack: 1, health: 8, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Wisp" },
        { set_number: 614, name: "The Blob", attack: 4, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Blob" },
        { set_number: 615, name: "Scarecrow", attack: 5, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Scarecrow" },
        { set_number: 616, name: "Ghoul", attack: 6, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Ghoul" },
        { set_number: 617, name: "Shadow", attack: 7, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Shadow" },
        { set_number: 618, name: "Doppelganger", attack: 5, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Doppelganger" },
        { set_number: 619, name: "Living Doll", attack: 4, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Doll" },
        { set_number: 620, name: "The Thing", attack: 6, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=The+Thing" },
        { set_number: 621, name: "Raven", attack: 3, health: 2, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Raven" },
        { set_number: 622, name: "Black Dog", attack: 5, health: 3, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Black+Dog" },
        { set_number: 623, name: "The Fly", attack: 4, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=The+Fly" },
        { set_number: 624, name: "The Mummy's Curse", attack: 2, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Curse" },
        { set_number: 625, name: "The Fog", attack: 1, health: 9, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Fog" },
        { set_number: 626, name: "The Hills Have Eyes", attack: 6, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Hills" },
        { set_number: 627, name: "The Children of the Corn", attack: 5, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Children" },
        { set_number: 628, name: "The Creature from the Black Lagoon", attack: 7, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Creature" },
        { set_number: 629, name: "The Invisible Hand", attack: 8, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Hand" },
        { set_number: 630, name: "The Wendigo", attack: 7, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Wendigo" },
        { set_number: 631, name: "The Jersey Devil", attack: 6, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Jersey+Devil" },
        { set_number: 632, name: "The Mothman", attack: 5, health: 8, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Mothman" },
        { set_number: 633, name: "The Chupacabra", attack: 8, health: 5, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Chupacabra" },
        { set_number: 634, name: "The Rake", attack: 9, health: 4, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Rake" },
        { set_number: 635, name: "The Slender Man", attack: 7, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Slender+Man" },
        { set_number: 636, name: "The Boogeyman", attack: 6, health: 8, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Boogeyman" },
        { set_number: 637, name: "The Grim Reaper", attack: 10, health: 1, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Reaper" },
        { set_number: 638, name: "The Headless Horseman's Steed", attack: 8, health: 7, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Steed" },
        { set_number: 639, name: "The Haunted Tree", attack: 4, health: 10, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Tree" },
        { set_number: 640, name: "The Cursed Doll", attack: 9, health: 6, rarity: "common", image: "https://via.placeholder.com/200x280.png?text=Cursed+Doll" },
        // --- Uncommon Cards (30) ---
        { set_number: 641, name: "Vampire Spawn", attack: 6, health: 5, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Vampire+Spawn" },
        { set_number: 642, name: "Werewolf Pack", attack: 7, health: 4, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Werewolf+Pack" },
        { set_number: 643, name: "Mad Scientist", attack: 5, health: 7, rarity: "uncommon", image: "https://via.placeholder.com/200x280.png?text=Mad+Scientist", ability: { type: 'draw', count: 1 } },
        { set_number: 644, "name": "Witch", "attack": 6, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Witch" },
        { set_number: 645, "name": "The Invisible Man", "attack": 8, "health": 5, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Invisible" },
        { set_number: 646, "name": "The Headless Horseman", "attack": 9, "health": 4, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Horseman" },
        { set_number: 647, "name": "Frankenstein's Monster", "attack": 7, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Frankenstein" },
        { set_number: 648, "name": "The Mummy", "attack": 6, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Mummy" },
        { set_number: 649, "name": "The Gill-man", "attack": 8, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Gill-man" },
        { set_number: 650, "name": "The Phantom of the Opera", "attack": 5, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Phantom" },
        { set_number: 651, "name": "The Wolf Man", "attack": 10, "health": 5, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Wolf+Man" },
        { set_number: 652, "name": "The Bride of Frankenstein", "attack": 7, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Bride" },
        { set_number: 653, "name": "The Hunchback of Notre Dame", "attack": 6, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Hunchback" },
        { set_number: 654, "name": "The Fly", "attack": 9, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=The+Fly" },
        { set_number: 655, "name": "The Thing", "attack": 8, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=The+Thing" },
        { set_number: 656, "name": "The Blob", "attack": 5, "health": 11, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=The+Blob" },
        { set_number: 657, "name": "The Children of the Night", "attack": 10, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Children" },
        { set_number: 658, "name": "The Ancient One", "attack": 7, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Ancient+One" },
        { set_number: 659, "name": "The Elder Thing", "attack": 9, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Elder+Thing" },
        { set_number: 660, "name": "The Shoggoth", "attack": 11, "health": 7, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Shoggoth" },
        { set_number: 661, "name": "The Deep One", "attack": 8, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Deep+One" },
        { set_number: 662, "name": "The Mi-Go", "attack": 10, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Mi-Go" },
        { set_number: 663, "name": "The Yithian", "attack": 7, "health": 11, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Yithian" },
        { set_number: 664, "name": "The Hound of Tindalos", "attack": 12, "health": 6, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Hound" },
        { set_number: 665, "name": "The Colour Out of Space", "attack": 9, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Colour" },
        { set_number: 666, "name": "The Dunwich Horror", "attack": 11, "health": 9, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Dunwich" },
        { set_number: 667, "name": "The Shadow over Innsmouth", "attack": 8, "health": 12, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Innsmouth" },
        { set_number: 668, "name": "The Call of Cthulhu", "attack": 10, "health": 10, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Call" },
        { set_number: 669, "name": "The Whisperer in Darkness", "attack": 9, "health": 11, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Whisperer" },
        { set_number: 670, "name": "The Haunter of the Dark", "attack": 12, "health": 8, "rarity": "uncommon", "image": "https://via.placeholder.com/200x280.png?text=Haunter" },
        // --- Rare Cards (20) ---
        { set_number: 671, name: "The Headless Horseman", attack: 10, health: 7, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Headless+Horseman" },
        { set_number: 672, name: "The Invisible Man", attack: 8, health: 8, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=The+Invisible+Man" },
        { set_number: 673, name: "Frankenstein's Monster", attack: 9, health: 9, rarity: "rare", image: "https://via.placeholder.com/200x280.png?text=Frankenstein" },
        { set_number: 674, "name": "Dr. Jekyll and Mr. Hyde", "attack": 11, "health": 7, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Jekyll+Hyde" },
        { set_number: 675, "name": "The Mummy Lord", "attack": 10, "health": 9, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Mummy+Lord" },
        { set_number: 676, "name": "The Wolf Man", "attack": 12, "health": 8, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Wolf+Man" },
        { set_number: 677, "name": "The Phantom of the Opera", "attack": 9, "health": 11, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Phantom" },
        { set_number: 678, "name": "The Creature from the Black Lagoon", "attack": 11, "health": 9, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Creature" },
        { set_number: 679, "name": "The Fly", "attack": 10, "health": 10, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=The+Fly" },
        { set_number: 680, "name": "The Thing", "attack": 9, "health": 12, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=The+Thing" },
        { set_number: 681, "name": "The Blob", "attack": 8, "health": 13, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=The+Blob" },
        { set_number: 682, "name": "The Children of the Night", "attack": 13, "health": 8, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Children" },
        { set_number: 683, "name": "The Ancient One", "attack": 10, "health": 12, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Ancient+One" },
        { set_number: 684, "name": "The Elder Thing", "attack": 12, "health": 10, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Elder+Thing" },
        { set_number: 685, "name": "The Shoggoth", "attack": 14, "health": 8, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Shoggoth" },
        { set_number: 686, "name": "The Deep One", "attack": 11, "health": 12, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Deep+One" },
        { set_number: 687, "name": "The Mi-Go", "attack": 13, "health": 10, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Mi-Go" },
        { set_number: 688, "name": "The Yithian", "attack": 10, "health": 14, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Yithian" },
        { set_number: 689, "name": "The Hound of Tindalos", "attack": 15, "health": 8, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Hound" },
        { set_number: 690, "name": "The Colour Out of Space", "attack": 12, "health": 12, "rarity": "rare", "image": "https://via.placeholder.com/200x280.png?text=Colour" },
        // --- Legendary Cards (10) ---
        { set_number: 691, name: "Dracula", attack: 14, health: 14, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Dracula" },
        { set_number: 692, name: "The Wolf Man", attack: 15, health: 13, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=The+Wolf+Man" },
        { set_number: 693, name: "Cthulhu's Herald", attack: 16, health: 12, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Cthulhu's+Herald" },
        { set_number: 694, "name": "Nyarlathotep", "attack": 15, "health": 15, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Nyarlathotep" },
        { set_number: 695, "name": "Azathoth", "attack": 18, "health": 12, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Azathoth" },
        { set_number: 696, "name": "Yog-Sothoth", "attack": 16, "health": 16, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Yog-Sothoth" },
        { set_number: 697, "name": "Shub-Niggurath", "attack": 14, "health": 18, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Shub-Niggurath" },
        { set_number: 698, "name": "Hastur", "attack": 17, "health": 15, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=Hastur" },
        { set_number: 699, "name": "The King in Yellow", "attack": 15, "health": 17, "rarity": "legendary", "image": "https://via.placeholder.com/200x280.png?text=King+in+Yellow" },
        { set_number: 700, name: "The Great Old One", attack: 20, health: 20, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=Great+Old+One" }
    ]
};

// Dynamically add setId to each card object
for (const setName in cardSets) {
    cardSets[setName].forEach(card => {
        card.setId = setName;
    });
}

// This function needs to be updated to get all cards from all sets
function getAllCards() {
    return Object.values(cardSets).flat();
}

getAllCards().sort((a, b) => a.set_number - b.set_number);

const rarityChances = {
    common: 0.7,
    uncommon: 0.2,
    rare: 0.09,
    legendary: 0.01
};

function getRandomCardByRarity(rarity, packTheme) {
    const cardSet = cardSets[packTheme];
    const filteredCards = cardSet.filter(card => card.rarity === rarity);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    return filteredCards[randomIndex];
}

function openPack(packTheme) {
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

        pack.push(getRandomCardByRarity(rarity, packTheme));
    }
    return pack;
}

const packSelectionContainer = document.getElementById('pack-selection-container');
const cardContainer = document.getElementById('card-container');
const openAnotherPackBtn = document.getElementById('open-another-pack-btn');
const gallery = document.getElementById('gallery');
const collectionModal = document.getElementById('collection-modal');
const openCollectionBtn = document.getElementById('open-collection-btn');
const closeBtn = document.querySelector('.close-btn');
const settingsModal = document.getElementById('settings-modal');
const settingsBtn = document.getElementById('settings-btn');
const closeSettingsBtn = settingsModal.querySelector('.close-btn');
const deckBuilderModal = document.getElementById('deck-builder-modal');
const deckBuilderBtn = document.getElementById('deck-builder-btn');
const closeDeckBuilderBtn = deckBuilderModal.querySelector('.close-btn');
const themeSwitcher = document.getElementById('theme-switcher');
const themeButtons = themeSwitcher.querySelectorAll('.theme-btn');
const resetBtn = document.getElementById('reset-btn');
const resetConfirmation = document.getElementById('reset-confirmation');
const resetYesBtn = document.getElementById('reset-yes-btn');
const resetNoBtn = document.getElementById('reset-no-btn');
const deckBuilderCollection = document.getElementById('deck-builder-collection').querySelector('.card-list');
const deckBuilderDeck = document.getElementById('deck-builder-deck').querySelector('.card-list');
const deckCount = document.getElementById('deck-count');
const saveDeckBtn = document.getElementById('save-deck-btn');
const battleBtn = document.getElementById('battle-btn');
const battleScreen = document.getElementById('battle-screen');
const collectionSetFilter = document.getElementById('collection-set-filter');
const deckBuilderSetFilter = document.getElementById('deck-builder-set-filter');
const secretUnlockBtn = document.getElementById('secret-unlock-btn');

let collection = {};
let deck = [];

// Battle State
let playerHealth, opponentHealth;
let playerDeck, opponentDeck;
let playerHand, opponentHand;
let playerBench, opponentBench;
let isPlayerTurn;
let selectedAttackerIndex = null;
let playerFatigue = 1;
let opponentFatigue = 1;

function loadCollection() {
    const savedCollection = localStorage.getItem('cardCollection');
    if (savedCollection) {
        collection = JSON.parse(savedCollection);
    } else {
        collection = {}; // Initialize as empty
    }
}

function loadDeck() {
    const savedDeck = localStorage.getItem('playerDeck');
    if (savedDeck) {
        deck = JSON.parse(savedDeck);
    } else {
        deck = [];
    }
}

function saveDeck() {
    localStorage.setItem('playerDeck', JSON.stringify(deck));
    alert('Deck saved!');
}

function displayDeckBuilder(filterTheme = 'all') {
    deckBuilderCollection.innerHTML = '';
    deckBuilderDeck.innerHTML = '';
    deckCount.textContent = deck.length;

    const allCards = getAllCards();
    let collectedCards = [];
    for (const setId in collection) {
        for (const set_number in collection[setId]) {
            if (collection[setId][set_number] > 0) {
                const card = allCards.find(c => c.set_number == set_number && c.setId === setId);
                if (card) {
                    if (!collectedCards.some(cc => cc.set_number === card.set_number && cc.setId === card.setId)) {
                        collectedCards.push(card);
                    }
                }
            }
        }
    }

    if (filterTheme !== 'all') {
        collectedCards = collectedCards.filter(card => card.setId === filterTheme);
    }

    collectedCards.sort((a, b) => a.set_number - b.set_number);

    collectedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', card.rarity);

        const ownedCount = collection[card.setId][card.set_number];
        const inDeckCount = deck.filter(deckCardId => deckCardId === card.set_number).length;
        const canAdd = deck.length < 20 && inDeckCount < ownedCount;

        cardElement.innerHTML = `
            <div class="quantity-tag">x${ownedCount}</div>
            <div class="card-header">
                <h2>${card.name}</h2>
            </div>
            <img class="card-image" src="${card.image}" alt="${card.name}">
            <button class="add-to-deck-btn" data-set-number="${card.set_number}" ${canAdd ? '' : 'disabled'}>Add</button>
        `;
        deckBuilderCollection.appendChild(cardElement);
    });

    deck.forEach((cardId, index) => {
        const card = getAllCards().find(c => c.set_number === cardId);
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', card.rarity);
        cardElement.innerHTML = `
            <div class="card-header">
                <h2>${card.name}</h2>
            </div>
            <img class="card-image" src="${card.image}" alt="${card.name}">
            <button class="remove-from-deck-btn" data-deck-index="${index}">Remove</button>
        `;
        deckBuilderDeck.appendChild(cardElement);
    });

    addDeckBuilderEventListeners();
}

function saveCollection() {
    localStorage.setItem('cardCollection', JSON.stringify(collection));
}

function addToCollection(pack, packTheme) {
    const newlyAdded = [];
    if (!collection[packTheme]) {
        collection[packTheme] = {};
    }
    pack.forEach(card => {
        const setNum = card.set_number;
        if (!collection[packTheme][setNum]) {
            collection[packTheme][setNum] = 0;
            newlyAdded.push(card);
        }
        collection[packTheme][setNum]++;
    });
    saveCollection();
    return newlyAdded;
}

function displayGallery(filterTheme = 'all') {
    gallery.innerHTML = '';
    let cardsToShow = getAllCards();

    if (filterTheme !== 'all') {
        cardsToShow = cardsToShow.filter(card => card.setId === filterTheme);
    }

    cardsToShow.sort((a, b) => a.set_number - b.set_number).forEach(card => {
        const collectionForSet = collection[card.setId] || {};
        const quantity = collectionForSet[card.set_number] || 0;
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
                    ${card.ability ? `<p class="card-ability">${getAbilityDescription(card.ability)}</p>` : ''}
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
                ${card.ability ? `<p class="card-ability">${getAbilityDescription(card.ability)}</p>` : ''}
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

function displayPackSelection() {
    packSelectionContainer.innerHTML = '<h2>Choose Your Pack</h2>';
    const packList = document.createElement('div');
    packList.className = 'pack-list';

    for (const theme in cardSets) {
        const packElement = document.createElement('div');
        packElement.className = 'pack-item';
        packElement.dataset.packTheme = theme;

        // Add a class for specific pack styling
        packElement.classList.add(`pack-item--${theme}`);

        packElement.innerHTML = `
            <div class="pack-item-art"></div>
            <div class="pack-item-title">${theme.charAt(0).toUpperCase() + theme.slice(1)}</div>
        `;
        packList.appendChild(packElement);
    }
    packSelectionContainer.appendChild(packList);
}

packSelectionContainer.addEventListener('click', (event) => {
    const packElement = event.target.closest('.pack-item');
    if (!packElement) return;

    const packTheme = packElement.dataset.packTheme;
    packElement.classList.add('opening');

    const newPack = openPack(packTheme);
    const newlyCollected = addToCollection(newPack, packTheme);

    setTimeout(() => {
        displayCards(newPack, newlyCollected);
        packSelectionContainer.style.display = 'none';
        openAnotherPackBtn.style.display = 'block';
    }, 1000);
});

openAnotherPackBtn.addEventListener('click', () => {
    packSelectionContainer.style.display = 'flex';
    cardContainer.innerHTML = '';
    openAnotherPackBtn.style.display = 'none';
    // Redisplay packs in case new ones were added, and remove 'opening' class
    displayPackSelection();
});

function populateSetFilters() {
    const themes = Object.keys(cardSets);

    collectionSetFilter.innerHTML = '<option value="all">All</option>';
    deckBuilderSetFilter.innerHTML = '<option value="all">All</option>';

    themes.forEach(theme => {
        const option = `<option value="${theme}">${theme.charAt(0).toUpperCase() + theme.slice(1)}</option>`;
        collectionSetFilter.innerHTML += option;
        deckBuilderSetFilter.innerHTML += option;
    });
}

loadCollection();
displayGallery();
displayPackSelection();
populateSetFilters();

openCollectionBtn.addEventListener('click', () => {
    collectionModal.style.display = 'block';
    collectionSetFilter.value = 'all'; // Reset filter
    displayGallery();
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
    if (event.target == deckBuilderModal) {
        deckBuilderModal.style.display = 'none';
    }
});

deckBuilderBtn.addEventListener('click', () => {
    deckBuilderModal.style.display = 'block';
    deckBuilderSetFilter.value = 'all'; // Reset filter
    displayDeckBuilder();
});

collectionSetFilter.addEventListener('change', (e) => {
    displayGallery(e.target.value);
});

deckBuilderSetFilter.addEventListener('change', (e) => {
    displayDeckBuilder(e.target.value);
});

saveDeckBtn.addEventListener('click', saveDeck);

closeDeckBuilderBtn.addEventListener('click', () => {
    deckBuilderModal.style.display = 'none';
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

function addDeckBuilderEventListeners() {
    document.querySelectorAll('.add-to-deck-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const setNumber = parseInt(e.target.dataset.setNumber);
            deck.push(setNumber);
            displayDeckBuilder();
        });
    });

    document.querySelectorAll('.remove-from-deck-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const deckIndex = parseInt(e.target.dataset.deckIndex);
            deck.splice(deckIndex, 1);
            displayDeckBuilder();
        });
    });
}

loadTheme();
loadDeck();

resetBtn.addEventListener('click', () => {
    resetConfirmation.classList.remove('hidden');
});

resetNoBtn.addEventListener('click', () => {
    resetConfirmation.classList.add('hidden');
});

resetYesBtn.addEventListener('click', () => {
    localStorage.removeItem('cardCollection');
    localStorage.removeItem('playerDeck'); // Also clear the deck
    collection = {};
    deck = [];
    resetConfirmation.classList.add('hidden');
    settingsModal.style.display = 'none';
    // Re-render the gallery and deck builder to show they are empty
    displayGallery();
    if (deckBuilderModal.style.display === 'block') {
        displayDeckBuilder();
    }
});

function updateBattleUI() {
    const allCards = getAllCards();
    document.getElementById('player-health').textContent = playerHealth;
    document.getElementById('opponent-health').textContent = opponentHealth;
    document.getElementById('player-deck-count').textContent = playerDeck.length;
    document.getElementById('opponent-deck-count').textContent = opponentDeck.length;
    document.getElementById('turn-indicator').textContent = isPlayerTurn ? "Player's Turn" : "Opponent's Turn";

    const playerHandContainer = document.querySelector('#player-zone .hand-container');
    playerHandContainer.innerHTML = '';
    playerHand.forEach((cardId, index) => {
        const card = allCards.find(c => c.set_number === cardId);
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'in-hand', card.rarity);
        cardElement.dataset.handIndex = index;
        cardElement.innerHTML = `<div class="card-header"><h2>${card.name}</h2></div>`;
        playerHandContainer.appendChild(cardElement);
    });

    const playerBenchContainer = document.querySelector('#player-zone .bench-container');
    playerBenchContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const card = playerBench[i];
        const benchSlot = document.createElement('div');
        benchSlot.classList.add('bench-slot');
        if (card) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card', card.rarity);
            cardElement.innerHTML = `
                <div class="card-header"><h2>${card.name}</h2></div>
                <div class="card-footer"><div class="stats"><span>ATK: ${card.attack}</span><span>HP: ${card.currentHealth}/${card.health}</span></div></div>
            `;
            benchSlot.appendChild(cardElement);
        }
        playerBenchContainer.appendChild(benchSlot);
    }

    const opponentBenchContainer = document.querySelector('#opponent-zone .bench-container');
    opponentBenchContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const card = opponentBench[i];
        const benchSlot = document.createElement('div');
        benchSlot.classList.add('bench-slot');
        if (card) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card', card.rarity);
            cardElement.innerHTML = `
                <div class="card-header"><h2>${card.name}</h2></div>
                <div class="card-footer"><div class="stats"><span>ATK: ${card.attack}</span><span>HP: ${card.currentHealth}/${card.health}</span></div></div>
            `;
            benchSlot.appendChild(cardElement);
        }
        opponentBenchContainer.appendChild(benchSlot);
    }

    addBattleEventListeners();
}

function startBattle() {
    battleScreen.classList.add('active');
    playerHealth = 100;
    opponentHealth = 100;
    playerFatigue = 1;
    opponentFatigue = 1;

    const allCards = getAllCards();
    playerDeck = deck.map(id => allCards.find(c => c.set_number === id)).sort(() => Math.random() - 0.5);

    const aiDeckIds = cardSets.medieval.filter(c => c.rarity === 'common').slice(0, 20).map(c => c.set_number);
    opponentDeck = [...aiDeckIds].sort(() => Math.random() - 0.5);

    playerHand = playerDeck.splice(0, 5).map(c => c.set_number);
    opponentHand = opponentDeck.splice(0, 5);

    playerBench = [null, null, null];
    opponentBench = [null, null, null];

    isPlayerTurn = true;
    updateBattleUI();
}

secretUnlockBtn.addEventListener('click', () => {
    const password = prompt("Enter the secret password:");
    if (password === "unlockall") {
        console.log("Unlocking all cards...");
        for (const setName in cardSets) {
            if (!collection[setName]) {
                collection[setName] = {};
            }
            cardSets[setName].forEach(card => {
                collection[setName][card.set_number] = 99;
            });
        }
        saveCollection();
        alert("All cards have been unlocked! You have 99 of each card.");

        // Refresh views if they are open
        if (collectionModal.style.display === 'block') {
            displayGallery(collectionSetFilter.value);
        }
        if (deckBuilderModal.style.display === 'block') {
            displayDeckBuilder(deckBuilderSetFilter.value);
        }
    } else if (password !== null) {
        alert("Incorrect password.");
    }
});

battleBtn.addEventListener('click', () => {
    if (deck.length < 20) {
        alert("You need 20 cards in your deck to battle!");
        return;
    }
    startBattle();
});

function addBattleEventListeners() {
    document.querySelectorAll('#player-zone .hand-container .card').forEach(cardElement => {
        cardElement.addEventListener('click', () => {
            if (!isPlayerTurn) return;
            const handIndex = parseInt(cardElement.dataset.handIndex);
            const emptyBenchSlot = playerBench.findIndex(slot => slot === null);
            if (emptyBenchSlot !== -1) {
                const cardId = playerHand.splice(handIndex, 1)[0];
                const cardData = getAllCards().find(c => c.set_number === cardId);
                playerBench[emptyBenchSlot] = { ...cardData, currentHealth: cardData.health };
                triggerAbility(cardData, true);
                updateBattleUI();
            } else {
                alert("Your bench is full!");
            }
        });
    });

    document.querySelectorAll('#player-zone .bench-container .card').forEach((cardElement, index) => {
        cardElement.addEventListener('click', () => {
            if (!isPlayerTurn || !playerBench[index]) return;
            document.querySelectorAll('#player-zone .bench-container .card').forEach(c => c.classList.remove('selected'));
            cardElement.classList.add('selected');
            selectedAttackerIndex = index;
        });
    });

    document.querySelectorAll('#opponent-zone .bench-container .card').forEach((cardElement, index) => {
        cardElement.addEventListener('click', async () => {
            if (!isPlayerTurn || selectedAttackerIndex === null || !opponentBench[index]) return;

            const attacker = playerBench[selectedAttackerIndex];
            const target = opponentBench[index];
            const attackerElement = document.querySelector(`#player-zone .bench-slot:nth-child(${selectedAttackerIndex + 1}) .card`);
            const targetElement = document.querySelector(`#opponent-zone .bench-slot:nth-child(${index + 1}) .card`);

            await playAnimation(attackerElement, 'attacking');
            await playAnimation(targetElement, 'damaged', 300);

            target.currentHealth -= attacker.attack;

            if (target.currentHealth <= 0) {
                await playAnimation(targetElement, 'defeated');
                opponentBench[index] = null;
            }

            if (checkGameOver()) return;

            selectedAttackerIndex = null;
            isPlayerTurn = false;
            updateBattleUI();
            setTimeout(aiTurn, 1000);
        });
    });

    document.querySelector('#opponent-zone .player-info').addEventListener('click', async () => {
        if (!isPlayerTurn || selectedAttackerIndex === null) return;
        const opponentBenchIsEmpty = opponentBench.every(card => card === null);
        if (opponentBenchIsEmpty) {
            const attacker = playerBench[selectedAttackerIndex];
            const attackerElement = document.querySelector(`#player-zone .bench-slot:nth-child(${selectedAttackerIndex + 1}) .card`);
            const opponentInfo = document.querySelector('#opponent-zone .player-info');
            await playAnimation(attackerElement, 'attacking');
            opponentHealth -= attacker.attack;
            await playAnimation(opponentInfo, 'damaged');

            if (checkGameOver()) return;

            selectedAttackerIndex = null;
            isPlayerTurn = false;
            updateBattleUI();
            setTimeout(aiTurn, 1000);
        }
    });

    document.getElementById('end-turn-btn').addEventListener('click', () => {
        if (isPlayerTurn) {
            if (playerDeck.length > 0) {
                playerHand.push(playerDeck.pop().set_number);
            } else {
                playerHealth -= playerFatigue;
                playerFatigue++;
            }
            if (checkGameOver()) return;

            isPlayerTurn = false;
            updateBattleUI();
            setTimeout(aiTurn, 1000);
        }
    });
}

function checkGameOver() {
    const gameOverModal = document.getElementById('game-over-modal');
    const gameOverMessage = document.getElementById('game-over-message');
    const gameOverOkBtn = document.getElementById('game-over-ok-btn');

    let winner = null;
    if (playerHealth <= 0) {
        winner = 'Opponent';
        playerHealth = 0;
    }
    if (opponentHealth <= 0) {
        winner = 'Player';
        opponentHealth = 0;
    }

    if (winner) {
        gameOverMessage.textContent = `${winner} wins!`;
        gameOverModal.style.display = 'block';
        gameOverOkBtn.onclick = () => {
            gameOverModal.style.display = 'none';
            battleScreen.classList.remove('active');
        };
        return true;
    }
    return false;
}

function triggerAbility(card, isPlayer) {
    if (!card.ability) return;

    switch (card.ability.type) {
        case 'heal':
            if (isPlayer) {
                playerHealth += card.ability.amount;
                showFloatingText(`+${card.ability.amount}`, 'heal', document.getElementById('player-health'));
            } else {
                opponentHealth += card.ability.amount;
                showFloatingText(`+${card.ability.amount}`, 'heal', document.getElementById('opponent-health'));
            }
            break;
        case 'damage':
            if (isPlayer) {
                opponentHealth -= card.ability.amount;
                showFloatingText(`-${card.ability.amount}`, 'damage', document.getElementById('opponent-health'));
                playAnimation(document.querySelector('#opponent-zone .player-info'), 'damaged');
            } else {
                playerHealth -= card.ability.amount;
                showFloatingText(`-${card.ability.amount}`, 'damage', document.getElementById('player-health'));
                playAnimation(document.querySelector('#player-zone .player-info'), 'damaged');
            }
            break;
        case 'draw':
            const deckToDrawFrom = isPlayer ? playerDeck : opponentDeck;
            const handToDrawTo = isPlayer ? playerHand : opponentHand;
            for (let i = 0; i < card.ability.count; i++) {
                if (deckToDrawFrom.length > 0) {
                    handToDrawTo.push(deckToDrawFrom.pop().set_number);
                }
            }
            break;
    }
}

function showFloatingText(text, type, targetElement) {
    const textElement = document.createElement('div');
    textElement.textContent = text;
    textElement.className = type === 'damage' ? 'damage-text' : 'heal-text';
    const rect = targetElement.getBoundingClientRect();
    textElement.style.position = 'absolute';
    textElement.style.left = `${rect.left + rect.width / 2 - 20}px`;
    textElement.style.top = `${rect.top - 30}px`;
    document.body.appendChild(textElement);
    setTimeout(() => textElement.remove(), 1000);
}

function playAnimation(element, animationClass, duration = 500) {
    return new Promise((resolve) => {
        if (!element) {
            resolve();
            return;
        }
        element.classList.add(animationClass);
        setTimeout(() => {
            element.classList.remove(animationClass);
            resolve();
        }, duration);
    });
}

function getAbilityDescription(ability) {
    switch (ability.type) {
        case 'heal':
            return `Heal ${ability.target} for ${ability.amount}.`;
        case 'damage':
            return `Deal ${ability.amount} damage to ${ability.target}.`;
        case 'draw':
            return `Draw ${ability.count} card(s).`;
        default:
            return '';
    }
}

function aiTurn() {
    if (isPlayerTurn) return;

    // 1. Play a card (smarter)
    opponentHand.sort((a, b) => {
        const cardA = getAllCards().find(c => c.set_number === a);
        const cardB = getAllCards().find(c => c.set_number === b);
        return cardB.attack - cardA.attack;
    });
    const cardToPlayId = opponentHand.pop();
    if (cardToPlayId) {
        const emptyBenchSlot = opponentBench.findIndex(slot => slot === null);
        if (emptyBenchSlot !== -1) {
            const cardData = getAllCards().find(c => c.set_number === cardToPlayId);
            opponentBench[emptyBenchSlot] = { ...cardData, currentHealth: cardData.health };
            triggerAbility(cardData, false); // AI uses ability
        } else {
            opponentHand.push(cardToPlayId);
        }
    }

    // 2. Attack (smarter)
    const availableAiCards = opponentBench.map((card, index) => ({ card, index })).filter(item => item.card !== null);
    let availablePlayerCards = playerBench.map((card, index) => ({ card, index })).filter(item => item.card !== null);

    if (availableAiCards.length > 0) {
        availableAiCards.sort((a, b) => b.card.attack - a.card.attack);
        const attacker = availableAiCards[0];

        if (availablePlayerCards.length > 0) {
            availablePlayerCards.sort((a, b) => {
                if (b.card.attack !== a.card.attack) {
                    return b.card.attack - a.card.attack;
                }
                return a.card.currentHealth - b.card.currentHealth;
            });
            const target = availablePlayerCards[0];

            target.card.currentHealth -= attacker.card.attack;
            if (target.card.currentHealth <= 0) {
                playerBench[target.index] = null;
            }
        } else {
            const playerInfo = document.querySelector('#player-zone .player-info');
            playerHealth -= attacker.card.attack;
            playAnimation(playerInfo, 'damaged');
        }
    }

    // 3. Draw a card
    if (opponentDeck.length > 0) {
        opponentHand.push(opponentDeck.pop());
    } else {
        opponentHealth -= opponentFatigue;
        opponentFatigue++;
    }

    if (checkGameOver()) return;

    // 4. End AI turn
    isPlayerTurn = true;
    updateBattleUI();
}
