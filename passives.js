var passives = [];

function loadPassives()
{
    passives.push( //1
    {
        req: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        name: "Alacrity",
        effect: "+30 to Dexterity"
    })

    passives.push( //2
    {
        req: [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        name: "Beef",
        effect: "+30 to Strength"
    })

    passives.push(//3
    {
        req: [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        name: "Agility",
        effect: "+30 to Dexterity"
    })

    passives.push({//4
        req: [2,0,1,0,0,0,0,0,0,0,0,0],
        name: "Wisdom of the Glade",
        effect: "+30 to Intelligence"
    })

    passives.push({//5
        req: [0,3,0,0,0,0,0,0,0,0,0,0],
        name: "Expertise",
        effect: "+30 to Dexterity"
    })

    passives.push({//6
        req: [1,1,1,0,0,0,0,0,0,0,0,0],
        name: "Thief's Craft",
        effect: "+30 to Intelligence"
    })

    passives.push({//7
        req: [2,0,0,1,0,0,0,0,0,0,0,0],
        name: "Prowess",
        effect: "+30 to Strength"
    })
    passives.push({//8
        req: [0,2,1,0,0,0,0,0,0,0,0,0],
        name: "Proficiency",
        effect: "+30 to Dexterity"
    })
    passives.push({//9
        req: [1,1,0,1,0,0,0,0,0,0,0,0],
        name: "Ancestral Knowledge",
        effect: "+30 to Intelligence"
    })
    passives.push({//10
        req: [1,0,2,0,0,0,0,0,0,0,0,0],
        name: "Might",
        effect: "+30 to Strenght"
    })
    passives.push({//11
        req: [0,2,0,1,0,0,0,0,0,0,0,0],
        name: "Fending",
        effect: [
            "25% increased Knockback Distance",
            "12% chance to Knock Enemies Back on hit"
        ]
    })
}
