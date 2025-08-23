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
        { set_number: 150, name: "The Gunslinging President", attack: 15, health: 15, rarity: "legendary", image: "https://via.placeholder.com/200x280.png?text=President" }
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
    packSelectionContainer.innerHTML = '';
    for (const theme in cardSets) {
        const packElement = document.createElement('div');
        packElement.classList.add('pack');
        packElement.dataset.packTheme = theme;
        packElement.innerHTML = `
            <div class="pack-front">
                <p>${theme.charAt(0).toUpperCase() + theme.slice(1)} Pack</p>
            </div>
        `;
        packSelectionContainer.appendChild(packElement);
    }
}

packSelectionContainer.addEventListener('click', (event) => {
    const packElement = event.target.closest('.pack');
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
            await playAnimation(attackerElement, 'attacking');
            opponentHealth -= attacker.attack;

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
            } else {
                playerHealth -= card.ability.amount;
                showFloatingText(`-${card.ability.amount}`, 'damage', document.getElementById('player-health'));
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
            playerHealth -= attacker.card.attack;
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
