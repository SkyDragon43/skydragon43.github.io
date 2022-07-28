var enchants = {
    "Aqua Affinity": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 1,
        "items": ["helmet", "turtle_helmet"],
        "curse": false,
        "weight": 2
    },
    "Bane of Arthropods": {
        "treasure": false,
        "conflicts": ["Smite", "Sharpness"],
        "maxlevel": 5,
        "items": ["sword", "axe"],
        "curse": false,
        "weight": 5
    },
    "Blast Protection": {
        "treasure": false,
        "conflicts": ["Fire Protection", "Protection", "Projectile Protection"],
        "maxlevel": 4,
        "items": ["helmet","chestplate","leggings","boots","turtle_helmet"],
        "curse": false,
        "weight": 2
    },
    "Channeling": {
        "treasure": false,
        "conflicts": ["Riptide"],
        "maxlevel": 1,
        "items": ["trident"],
        "curse": false,
        "weight": 1
    },
    "Curse of Binding": {
        "treasure": true,
        "conflicts": [],
        "maxlevel": 1,
        "items": ["helmet","chestplate","leggings","boots","elytra","pumpkin","head","turtle_helmet"],
        "curse": true,
        "weight": 1
    },
    "Curse of Vanishing": {
        "treasure": true,
        "conflicts": [],
        "maxlevel": 1,
        "items": ["helmet","chestplate","leggings","boots","pickaxe","shovel","axe","sword","hoe","fishing_rod","bow","shears","flint_and_steel","compass","recovery compass","carrot_on_a_stick","warped_fungus_on_a_stick","shield","elytra","pumpkin","head","trident","turtle_helmet","crossbow"],
        "curse": true,
        "weight": 1
    },
    "Depth Strider": {
        "treasure": false,
        "conflicts": ["Frost Walker"],
        "maxlevel": 3,
        "items": ["boots"],
        "curse": false,
        "weight": 2
    },
    "Efficiency": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 5,
        "items": ["pickaxe","shovel","axe","hoe","shears"],
        "curse": false,
        "weight": 10
    },
    "Feather Falling": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 4,
        "items": ["boots"],
        "curse": false,
        "weight": 5
    },
    "Fire Aspect": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 2,
        "items": ["sword"],
        "curse": false,
        "weight": 2
    },
    "Fire Protection": {
        "treasure": false,
        "conflicts": ["Blast Protection", "Protection", "Projectile Protection"],
        "maxlevel": 4,
        "items": ["helmet", "chestplate", "leggings", "boots","turtle_helmet"],
        "curse": false,
        "weight": 5
    },
    "Flame": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 1,
        "items": ["bow"],
        "curse": false,
        "weight": 2
    },
    "Fortune": {
        "treasure": false,
        "conflicts": ["Silk Touch"],
        "maxlevel": 3,
        "items": ["pickaxe", "shovel", "axe", "hoe"],
        "curse": false,
        "weight": 2
    },
    "Frost Walker": {
        "treasure": true,
        "conflicts": ["Depth Strider"],
        "maxlevel": 2,
        "items": ["boots"],
        "curse": false,
        "weight": 2
    },
    "Impaling": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 5,
        "items": ["trident"],
        "curse": false,
        "weight": 2
    },
    "Infinity": {
        "treasure": false,
        "conflicts": ["Mending"],
        "maxlevel": 1,
        "items": ["bow"],
        "curse": false,
        "weight": 1
    },
    "Knockback": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 2,
        "items": ["sword"],
        "curse": false,
        "weight": 5
    },
    "Looting": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 3,
        "items": ["sword"],
        "curse": false,
        "weight": 2
    },
    "Loyalty": {
        "treasure": false,
        "conflicts": ["Riptide"],
        "maxlevel": 3,
        "items": ["trident"],
        "curse": false,
        "weight": 5
    },
    "Luck of the Sea": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 3,
        "items": ["fishing_rod"],
        "curse": false,
        "weight": 2
    },
    "Lure": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 3,
        "items": ["fishing_rod"],
        "curse": false,
        "weight": 2
    },
    "Mending": {
        "treasure": true,
        "conflicts": ["Infinity"],
        "maxlevel": 1,
        "items": ["helmet","chestplate","leggings","boots","pickaxe","shovel","axe","sword","hoe","fishing_rod","bow","shears","flint_and_steel","carrot_on_a_stick","warped_fungus_on_a_stick","shield","elytra","trident","turtle_helmet","crossbow"],
        "curse": false,
        "weight": 2
    },
    "Multishot": {
        "treasure": false,
        "conflicts": ["Piercing"],
        "maxlevel": 1,
        "items": ["crossbow"],
        "curse": false,
        "weight": 2
    },
    "Piercing": {
        "treasure": false,
        "conflicts": ["Multishot"],
        "maxlevel": 4,
        "items": ["crossbow"],
        "curse": false,
        "weight": 10
    },
    "Power": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 5,
        "items": ["bow"],
        "curse": false,
        "weight": 10
    },
    "Projectile Protection": {
        "treasure": false,
        "conflicts": ["Protection", "Blast Protection", "Fire Protection"],
        "maxlevel": 4,
        "items": ["helmet","chestplate","leggings","boots","turtle_helmet"],
        "curse": false,
        "weight": 5
    },
    "Protection": {
        "treasure": false,
        "conflicts": ["Blast Protection", "Fire Protection", "Projectile Protection"],
        "maxlevel": 4,
        "items": ["helmet", "chestplate","leggings","boots","turtle_helmet"],
        "curse": false,
        "weight": 10
    },
    "Punch": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 2,
        "items": ["bow"],
        "curse": false,
        "weight": 2
    },
    "Quick Charge": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 3,
        "items": ["crossbow"],
        "curse": false,
        "weight": 5
    },
    "Respiration": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 3,
        "items": ["helmet", "turtle_helmet"],
        "curse": false,
        "weight": 2
    },
    "Riptide": {
        "treasure": false,
        "conflicts": ["Channeling", "Loyalty"],
        "maxlevel": 3,
        "items": ["trident"],
        "curse": false,
        "weight": 2
    },
    "Sharpness": {
        "treasure": false,
        "conflicts": ["Bane of Arthropods", "Smite"],
        "maxlevel": 5,
        "items": ["sword", "axe"],
        "curse": false,
        "weight": 10
    },
    "Silk Touch": {
        "treasure": false,
        "conflicts": ["fortune"],
        "maxlevel": 1,
        "items": ["pickaxe", "shovel", "axe", "hoe"],
        "curse": false,
        "weight": 1
    },
    "Smite": {
        "treasure": false,
        "conflicts": ["Bane of Arthropods", "Sharpness"],
        "maxlevel": 5,
        "items": ["sword", "axe"],
        "curse": false,
        "weight": 5
    },
    "Soul Speed": {
        "treasure": true,
        "conflicts": [],
        "maxlevel": 3,
        "items": ["boots"],
        "curse": false,
        "weight": 1
    },
    "Sweeping Edge": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 3,
        "items": ["sword"],
        "curse": false,
        "weight": 2
    },
    "Swift Sneak": {
        "treasure": true,
        "conflicts": [],
        "maxlevel": 3,
        "items": ["leggings"],
        "curse": false,
        "weight": 1
    },
    "Thorns": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 3,
        "items": ["chestplate", "helmet", "leggings", "boots", "turtle_helmet"],
        "curse": false,
        "weight": 1
    },
    "Unbreaking": {
        "treasure": false,
        "conflicts": [],
        "maxlevel": 3,
        "items": ["helmet", "chestplate","leggings","boots","pickaxe","shovel","axe","sword","hoe","fishing_rod","bow","trident","turtle_helmet","crossbow","shears","flint_and_steel","shield","carrot_on_a_stick","warped_fungus_on_a_stick","elytra"],
        "curse": false,
        "weight": 5
    }
};