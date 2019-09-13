var passives = [];


function loadPassives()
{
    var passivesListRaw = `Clear 	Clear 	Clear 	Alacrity	30 to Dexterity	$
Clear 	Clear 	Sepia 	Beef	30 to Strength	$
Clear 	Sepia 	Sepia 	Agility	30 to Dexterity	$
Clear 	Clear 	Amber 	Wisdom of the Glade	30 to Intelligence	$
Sepia 	Sepia 	Sepia 	Expertise	30 to Dexterity	$
Clear 	Sepia 	Amber 	Thief's Craft	30 to Intelligence	$
Clear 	Clear 	Verdant 	Prowess	30 to Strength	$
Sepia 	Sepia 	Amber 	Proficiency	30 to Dexterity	$
Clear 	Sepia 	Verdant 	Ancestral Knowledge	30 to Intelligence	$
Clear 	Amber 	Amber 	Might	30 to Strength	$
Sepia 	Sepia 	Verdant 	Fending	25% increased Knockback Distance
12% chance to Knock Enemies Back on hit	$
Sepia 	Amber 	Amber 	Hard Knocks	30 to Intelligence	$
Clear 	Clear 	Teal 	Physique	30 to Strength	$
Clear 	Amber 	Verdant 	Arcane Vision	Light Radius is based on Energy Shield instead of Life
+30 to Accuracy Rating	$
Clear 	Sepia 	Teal 	Diamond Skin	24% increased Armour
3% increased Movement Speed
+12% to all Elemental Resistances	$
Sepia 	Amber 	Verdant 	Path of the Savant	20 to Intelligence
+20 to maximum Mana
16% increased Spell Damage	$
Amber 	Amber 	Amber 	Path of the Warrior	20 to Strength
12% increased Physical Damage
+10 to Armour	$
Clear 	Verdant 	Verdant 	Path of the Hunter	20 to Dexterity
12% increased Projectile Damage
+20 to Accuracy Rating	$
Sepia 	Sepia 	Teal 	Righteous Decree	22% increased maximum Mana
6% reduced Mana Cost of Skills	$
Clear 	Amber 	Teal 	Ironwood	25% increased Totem Damage
Totems gain +16% to all Elemental Resistances
Totems have 10% additional Physical Damage Reduction	$
Sepia 	Verdant 	Verdant 	Fusillade	15% increased Attack Speed with Wands
30% increased Accuracy Rating with Wands	$
Amber 	Amber 	Verdant 	Quickstep	6% increased Attack Speed
4% increased Movement Speed	$
Sepia 	Amber 	Teal 	Weathered Hunter	15% increased Global Accuracy Rating
+20 to Dexterity
+10% to all Elemental Resistances
+100 to Accuracy Rating	$
Clear 	Clear 	Azure 	Cloth and Chain	24% increased Evasion Rating and Armour
+12% to all Elemental Resistances	$
Clear 	Verdant 	Teal 	Solidity	3% Chance to Block Attack Damage while holding a Shield
20% increased Attack Damage while holding a Shield
Attack Skills deal 20% increased Damage with Ailments while holding a Shield
+8% Elemental Resistances while holding a Shield	$
Amber 	Verdant 	Verdant 	Aspect of the Eagle	20% increased Damage with Bows
4% increased Movement Speed
12% increased Global Accuracy Rating
+10 to maximum Life
20% increased Damage Over Time with Bow Skills	$
Clear 	Sepia 	Azure 	Dynamo	5% reduced Mana Cost of Skills
16% increased maximum Mana	$
Sepia 	Verdant 	Teal 	Decay Ward	Minions have +10% Chance to Block Attack Damage
Minions have +10% Chance to Block Spell Damage
Minions Recover 2% of their Life when they Block	$
Amber 	Amber 	Teal 	Thrill Seeker	15% increased maximum Mana
0.4% of Attack Damage Leeched as Mana
+10 Mana gained on Kill	$
Sepia 	Sepia 	Azure 	Aspect of the Panther	16% increased Weapon Damage while Dual Wielding
6% increased Attack Speed while Dual Wielding
+3% Chance to Block Attack Damage while Dual Wielding
+10 to maximum Life
Attack Skills deal 16% increased Damage with Ailments while Dual Wielding	$
Verdant 	Verdant 	Verdant 	Spirit Void	20% increased total Recovery per second from Mana Leech
0.8% of Attack Damage Leeched as Mana
25% increased Maximum total Recovery per second from Mana Leech	$
Clear 	Amber 	Azure 	Poisonous Fangs	20% increased Damage with Claws
10% increased Poison Duration
10% chance to Poison on Hit with Attacks
20% increased Damage with Ailments from Attack Skills while wielding a Claw
+5% to Damage over Time Multiplier for Poison	$
Clear 	Teal 	Teal 	Saboteur	30% increased Trap Damage
30% increased Mine Damage
Can have up to 2 additional Trap placed at a time
Can have up to 2 additional Remote Mine placed at a time	$
Amber 	Verdant 	Teal 	Depth Perception	15% increased Global Accuracy Rating
+20 to Dexterity
25% increased Critical Strike Chance
+100 to Accuracy Rating	$
Sepia 	Amber 	Azure 	Elemental Focus	16% increased Elemental Damage
10% increased Duration of Elemental Ailments on Enemies
10% chance to Avoid Elemental Ailments
10% increased Effect of non-Damaging Ailments on Enemies	$
Sepia 	Teal 	Teal 	Deep Wisdom	20 to Intelligence
+20 to maximum Mana
+20 to maximum Energy Shield	$
Clear 	Verdant 	Azure 	Martial Experience	30% increased Physical Damage with Two Handed Melee Weapons
30% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon
50% increased total Recovery per second from Life Leech
0.8% of Physical Attack Damage Leeched as Life	$
Verdant 	Verdant 	Teal 	Fury Bolts	20% increased Projectile Damage
+20 to Strength
10% increased Global Accuracy Rating	$
Sepia 	Verdant 	Azure 	Battle Rouse	8% of Damage taken gained as Mana over 4 seconds when Hit
15% increased maximum Mana
+15 to maximum Mana	$
Amber 	Amber 	Azure 	Hasty Reconstruction	20% increased Trap Damage
10% increased Cooldown Recovery Speed for throwing Traps	$
Amber 	Teal 	Teal 	Sanctuary	3% Chance to Block Attack Damage while holding a Shield
+3% Chance to Block Spell Damage while holding a Shield
+12% Elemental Resistances while holding a Shield	$
Clear 	Clear 	Violet 	Practical Application	25% chance to Avoid interruption from Stuns while Casting
+20 to Strength and Dexterity	$
Clear 	Teal 	Azure 	Words of Glory	If you've Warcried Recently, you and nearby allies have 10% increased Attack, Cast and Movement Speed
30% increased Warcry Duration
Warcries cost no Mana	$
Amber 	Verdant 	Azure 	Executioner	24% increased Physical Damage with Two Handed Melee Weapons
50% increased Damage with Hits against Enemies that are on Low Life
24% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon
8% increased Area of Effect if you've Killed Recently	$
Verdant 	Teal 	Teal 	Mind Drinker	0.4% of Attack Damage Leeched as Mana
16% increased maximum Mana
Recover 2% of Mana on Kill	$
Clear 	Sepia 	Violet 	Freedom of Movement	30% increased Evasion Rating
10% increased Movement Speed while Phasing
5% chance to Dodge Attack Hits while Phasing
10% chance to gain Phasing for 4 seconds on Kill	$
Sepia 	Teal 	Azure 	Dreamer	25% increased maximum Mana
15% increased Mana Regeneration Rate	$
Sepia 	Sepia 	Violet 	Aligned Spirits	10% increased maximum Mana
Minions deal 20% increased Damage
15% reduced Mana Cost of Minion Skills	$
Verdant 	Verdant 	Azure 	Arsonist	6% to Fire Damage over Time Multiplier
24% increased Fire Damage
Regenerate 1% of Life per second	$
Clear 	Amber 	Violet 	Weapon Artistry	16% increased Attack Damage
+2% Chance to Block Attack Damage while Dual Wielding or holding a Shield
+10 to Strength and Dexterity
4% increased Attack Speed	$
Amber 	Teal 	Azure 	Unpredictable Offensive	Channelling Skills have 10% increased Attack Speed
20% chance to Avoid being Stunned while Channelling
5% chance to Dodge Attack Hits while Channelling	$
Teal 	Teal 	Teal 	Mystic Bulwark	6% Chance to Block Spell Damage
15% increased maximuim Mana
1% increased Mana Regeneration Rate per 1% Chance to Block Spell Damage	$
Sepia 	Amber 	Violet 	Shamanistic Fury	30% increased Totem Damage
15% increased Totem Placement speed	$
Clear 	Verdant 	Violet 	Deep Thoughts	20% increased maximum Mana
20% increased Mana Regeneration Rate
+20 to Intelligence	$
Clear 	Azure 	Azure 	Prodigal Perfection	10% increased Spell Damage
15% increased maximum Mana
2% increased Spell Damage per 100 Maximum Mana, up to 40%	$
Verdant 	Teal 	Azure 	Sentinel	24% increased Evasion Rating and Armour
+10% to all Elemental Resistances	$
Sepia 	Verdant 	Violet 	Heavy Draw	20% increased Physical Damage with Bows
20% increased Damage Over Time with Bow Skills
12% increased Area of Effect
10% reduced Enemy Stun Threshold with Bows
30% increased Stun Duration with Bows on Enemies	$
Sepia 	Azure 	Azure 	Claws of the Magpie	20% increased Damage with Claws
10% increased Attack Speed with Claws
25% chance to Steal Power, Frenzy, and Endurance Charges on Hit with Claws
20% increased Damage with Ailments from Attack Skills while wielding a Claw	$
Amber 	Amber 	Violet 	Harvester of Foes	20% increased Damage with Axes
20% increased Damage with Ailments from Attack Skills while wielding an Axe
12% increased Accuracy Rating with Axes
15% increased Attack Speed while Leeching	$
Clear 	Teal 	Violet 	Splitting Strikes	26% increased Physical Damage with Axes
6% increased Attack Speed with Axes
26% increased Damage with Ailments from Attack Skills while wielding an Axe
+1 to Melee range with Axes	$
Amber 	Verdant 	Violet 	Silent Steps	20% increased Evasion Rating
5% reduced Damage taken from Blinded Enemies
60% chance to Avoid Blind	$
Amber 	Azure 	Azure 	Explosive Runes	You can Cast an additional Brand
20% increased Damage with Brand Skills
10% increased Brand Attachment range	$
Teal 	Teal 	Azure 	Steelwood Stance	30% increased Damage with Staves
30% increased Damage with Ailments from Attack Skills while wielding a Staff
20% increased Armour
+600 Armour if you've Blocked Recently
+4% Chance to Block Attack Damage while wielding a Staff	$
Sepia 	Teal 	Violet 	Efficient Explosives	25% increased Mine Damage
25% increased Mine Duration
12% reduced Mana Reservation of Skills that throw Mines	$
Verdant 	Verdant 	Violet 	Totemic Zeal	30% increased Totem Placement speed
Spells Cast by Totems have 6% increased Cast Speed
Attacks used by Totems have 10% increased Attack Speed	$
Verdant 	Azure 	Azure 	Bone Breaker	30% increased Physical Damage with Maces or Sceptres
12% increased Area of Effect
30% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre
+2 to Melee range with Maces and Sceptres	$
Amber 	Teal 	Violet 	Gemini	12% increased Accuracy Rating while Dual Wielding
16% increased Weapon Damage while Dual Wielding
+4% Chance to Block Attack Damage while Dual Wielding
Attack Skills deal 16% increased Damage with Ailments while Dual Wielding
6% increased Attack Speed while Dual Wielding	$
Clear 	Azure 	Violet 	Expeditious Munitions	8% increased Trap Throwing Speed
30% increased Trap Trigger Area of Effect
20% increased Trap Damage	$
Verdant 	Teal 	Violet 	Razor's Edge	30% increased Physical Damage with Swords
Attacks have 15% chance to cause Bleeding
30% increased Damage with Ailments from Attack Skills while wielding a Sword
+10% to Damage over Time Multiplier for Bleeding	$
Teal 	Azure 	Azure 	Red Storm	Attacks have 15% chance to cause Bleeding
30% increased Physical Damage
+8% to Damage over Time Multiplier for Bleeding	$
Sepia 	Azure 	Violet 	Honed Edge	24% increased Damage with Swords
24% increased Damage with Ailments from Attack Skills while wielding a Sword
6% increased Attack Speed with Swords
+200 to Accuracy Rating with Swords
20% increased Evasion Rating	$
Amber 	Azure 	Violet 	Kinetic Impacts	24% increased Physical Damage with Two Handed Melee Weapons
24% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon
4% chance to deal Double Damage
10% chance to double Stun Duration	$
Teal 	Teal 	Violet 	Elder Power	10% increased Wand Damage per Power Charge
10% chance to gain a Power Charge on Kill	$
Clear 	Clear 	Crimson 	Successive Detonations	20% increased Critical Strike Chance for each Mine Detonated Recently, up to 100%
+8% to Critical Strike Multiplier for each Mine Detonated Recently, up to 40%	$
Verdant 	Azure 	Violet 	Forceful Skewering	15% chance to Impale Enemies on Hit with Attacks
5% increased Impale Effect
+20 to Strength	$
Azure 	Azure 	Azure 	Slaughter	25% increased Physical Damage with Axes
25% increased Damage with Ailments from Attack Skills while wielding an Axe
10% chance to gain Onslaught for 4 seconds on Kill
8% increased Attack Speed with Axes	$
Clear 	Sepia 	Crimson 	Galvanic Hammer	25% increased Elemental Damage with Maces and Sceptres
10% increased Accuracy Rating with Maces and Sceptres
Damage with Weapons Penetrates 5% Elemental Resistance	$
Sepia 	Sepia 	Crimson 	Magmatic Strikes	24% increased Fire Damage with Attack Skills
Gain 5% of Physical Damage as Extra Fire Damage	$
Clear 	Amber 	Crimson 	Toxic Strikes	10% increased Poison Duration
+8% to Damage over Time Multiplier for Poison
10% chance to Poison on Hit
30% increased Chaos Damage with Attack Skills	$
Clear 	Violet 	Violet 	Pain Forger	8% chance to gain a Power Charge when you Stun with Melee Damage
60% increased Critical Strike Chance with Maces and Sceptres
5% reduced Enemy Stun Threshold with Maces and Sceptres	$
Teal 	Azure 	Violet 	Sacrifice	Minions have +10% to all Elemental Resistances
Minions have 20% increased maximum Life
Minions Regenerate 1% of Life per second
Regenerate 1% of Life per second	$
Sepia 	Amber 	Crimson 	Entropy	27% increased Damage over Time
5% increased Skill Effect Duration	$
Sepia 	Violet 	Violet 	Grave Intentions	Minions have +15% to Chaos Resistance
Minions have 25% chance to gain Unholy Might for 4 seconds on Kill
Minions gain 10% of Maximum Life as Extra Maximum Energy Shield	$
Clear 	Verdant 	Crimson 	Blast Waves	Skills used by Mines deal 30% increased Area Damage if you Detonated a Mine Recently
Skills used by Mines have 10% increased Area of Effect
Skills used by Mines have 10% increased Area of Effect if you Detonated a Mine Recently	$
Sepia 	Verdant 	Crimson 	Master Fletcher	12% increased Damage with Bows
12% increased Attack Speed with Bows
20% increased Arrow Speed
12% increased Damage Over Time with Bow Skills
20% increased Global Accuracy Rating	$
Amber 	Amber 	Crimson 	Bladedancer	24% increased Damage with Swords
24% increased Damage with Ailments from Attack Skills while wielding a Sword
+1 to Melee range with Swords
6% increased Attack Speed with Swords	$
Amber 	Violet 	Violet 	Claws of the Pride	25% increased Damage with Claws
25% increased Damage with Ailments from Attack Skills while wielding a Claw
15% increased Attack and Cast Speed if you've used a Movement Skill Recently
+1 to Melee range with Claws	$
Clear 	Teal 	Crimson 	Ophidian Aim	12% increased Accuracy Rating with Staves
8% increased Attack Speed with Staves
+150 to Accuracy Rating with Staves
30% increased Critical Strike Chance with Staves	$
Amber 	Verdant 	Crimson 	Primal Manifestation	24% increased Totem Damage
20% increased Totem Life
20% increased Totem Duration
24% increased Damage with Brand Skills
Brand Skills have 20% increased Duration	$
Verdant 	Violet 	Violet 	Spinecruncher	28% increased Physical Damage with Maces and Sceptres
28% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre
50% increased Stun Duration against Enemies that are on Full Life
10% chance to double Stun Duration	$
Azure 	Azure 	Violet 	Smashing Strikes	30% increased Damage with Staves
10% chance to gain an Endurance Charge on Melee Critical Strike
30% increased Damage with Ailments from Attack Skills while wielding a Staff
30% increased Critical Strike Chance with Staves
+2 to Melee range with Staves	$
Sepia 	Teal 	Crimson 	Utmost Swiftness	40 to Dexterity
8% increased Dexterity	$
Verdant 	Verdant 	Crimson 	Farsight	24% increased Damage with Bows
24% increased Damage Over Time with Bow Skills
16% increased Accuracy Rating with Bows
6% increased Attack Speed with Bows	$
Amber 	Teal 	Crimson 	Whirling Barrier	6% Chance to Block Attack Damage while wielding a Staff
+6% Chance to Block Spell Damage while wielding a Staff
20% chance to gain a Power Charge when you Block	$
Teal 	Violet 	Violet 	Unstable Munitions	24% increased Trap Damage
8% increased Area of Effect
40% increased Trap Trigger Area of Effect	$
Clear 	Azure 	Crimson 	From the Shadows	15% increased Damage with Daggers
15% increased Accuracy Rating with Daggers
15% increased Damage with Ailments from Attack Skills while wielding a Dagger
6% increased Attack Speed with Daggers
10% chance to gain Phasing for 4 seconds on Kill	$
Verdant 	Teal 	Crimson 	Hatchet Master	25% increased Damage with Axes
8% increased Attack Speed with Axes
25% increased Damage with Ailments from Attack Skills while wielding an Axe
40% increased Global Evasion Rating when on Full Life	$
Sepia 	Azure 	Crimson 	Clever Construction	Traps cannot be Damaged for 5 seconds after being Thrown
Mines cannot be Damaged for 5 seconds after being Thrown
20% increased Trap Damage
20% increased Mine Damage	$
Amber 	Azure 	Crimson 	Utmost Might	40 to Strength
8% increased Strength	$
Teal 	Teal 	Crimson 	Wandslinger	16% increased Damage with Wands
8% increased Attack Speed with Wands
16% increased Damage with Ailments from Attack Skills while wielding a Wand
10% increased Accuracy Rating with Wands	$
Azure 	Violet 	Violet 	Bludgeon Blitz	18% increased Damage with Maces and Sceptres
18% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre
8% increased Attack Speed with Maces and Sceptres
+200 to Accuracy Rating with Maces and Sceptres
6% increased Movement Speed if you've Hit an Enemy Recently	$
Verdant 	Azure 	Crimson 	Flash Freeze	24% increased Cold Damage
20% increased Projectile Speed
10% increased Effect of Chill	$
Clear 	Violet 	Crimson 	Flaying	24% increased Damage with Daggers
12% increased Attack Speed with Daggers
24% increased Damage with Ailments from Attack Skills while wielding a Dagger
10% increased Accuracy Rating with Daggers
+1 to Melee range with Daggers	$
Teal 	Azure 	Crimson 	Fearsome Force	Minions deal 15% increased Damage
Minions have 10% increased Area of Effect
Minions have 10% increased Area of Effect if you used a Minion Skill Recently
+10 to Intelligence	$
Sepia 	Violet 	Crimson 	Redemption	Minions have 5% increased Attack Speed
Minions have 5% increased Cast Speed
20% increased Minion Accuracy Rating
12% increased Damage
Minions have 10% increased Movement Speed	$
Amber 	Violet 	Crimson 	Utmost Intellect	40 to Intelligence
8% increased Intelligence	$
Violet 	Violet 	Violet 	Enigmatic Defence	15% increased Spell Damage while wielding a Staff
+5% Chance to Block Attack Damage while wielding a Staff
+5% Chance to Block Spell Damage while wielding a Staff
10% chance to gain Unholy Might on block for 3 seconds	$
Verdant 	Violet 	Crimson 	Butchery	25% increased Physical Damage with Two Handed Melee Weapons
+20 to Strength
5% increased Attack Speed with Two Handed Melee Weapons
25% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon	$
Azure 	Azure 	Crimson 	Holy Dominion	12% increased Elemental Damage
+12% to all Elemental Resistances
5% chance to Freeze, Shock and Ignite
12% increased Physical Damage	$
Teal 	Violet 	Crimson 	Static Blows	20% increased Shock Duration on Enemies
30% increased Effect of Shock
30% increased Damage if you have Shocked an Enemy Recently
40% increased Critical Strike Chance against Shocked Enemies	$
Azure 	Violet 	Crimson 	Light Eater	0.8% of Spell Damage Leeched as Energy Shield
20% increased Maximum total Recovery per second from Energy Shield Leech
24% increased Damage while on Full Energy Shield	$
Clear 	Crimson 	Crimson 	Shaper	40% increased Mana Regeneration Rate
Regenerate 1% of Life per second	$
Clear 	Clear 	Black 	Annihilation	15% to Critical Strike Multiplier for Spells
50% increased Critical Strike Chance for Spells	$
Sepia 	Crimson 	Crimson 	Ash, Frost and Storm	20% increased Elemental Damage
20% reduced Reflected Elemental Damage taken
+6% to all Elemental Resistances	$
Clear 	Sepia 	Black 	Testudo	5% Chance to Block Attack Damage while holding a Shield
60% increased Block Recovery
+20 Mana gained when you Block
40% increased Defences from Equipped Shield	$
Sepia 	Sepia 	Black 	Lightning Walker	25% increased Lightning Damage
+15% to Lightning Resistance
5% increased Cast Speed with Lightning Skills	$
Amber 	Crimson 	Crimson 	Nimbleness	6% increased Cast Speed
4% increased Movement Speed
15% chance to Avoid interruption from Stuns while Casting
+12% to Critical Strike Multiplier for Spells	$
Violet 	Violet 	Crimson 	Aspect of the Lynx	16% increased Attack Damage
4% increased Movement Speed
20% increased Critical Strike Chance
+10 to Dexterity and Intelligence	$
Clear 	Amber 	Black 	Exceptional Performance	25% increased Skill Effect Duration	$
Sepia 	Amber 	Black 	Cleaving	20% increased Physical Damage with Axes
20% increased Damage with Ailments from Attack Skills while wielding an Axe
30% increased Damage with Hits and Ailments against Bleeding Enemies
Bleeding you inflict deals Damage 15% faster
+1 to Melee range with Axes	$
Verdant 	Crimson 	Crimson 	Arcane Focus	18% increased maximum Energy Shield
10% increased Energy Shield Recharge Rate	$
Clear 	Verdant 	Black 	Combat Stamina	Regenerate 1% of Life per second
20% increased Armour
5% increased maximum Life	$
Sepia 	Verdant 	Black 	Will of Blades	25% increased Physical Damage
25% increased Critical Strike Chance	$
Amber 	Amber 	Black 	Divine Fury	12% increased Elemental Damage
12% increased Physical Damage
Fire Spells have 15% of Physical Damage Converted to Fire Damage
Gain 5% of Physical Damage as Extra Fire Damage	$
Teal 	Crimson 	Crimson 	Heartseeker	30% to Critical Strike Multiplier	$
Clear 	Teal 	Black 	Arcane Guarding	60% increased Energy Shield from Equipped Shield
20% increased Spell Damage if you've Blocked Recently
15% increased Spell Damage while holding a Shield
+6% Chance to Block Spell Damage while holding a Shield	$
Amber 	Verdant 	Black 	Reflexes	30% increased Evasion Rating
+150 to Evasion Rating
15% increased Global Accuracy Rating
+150 to Accuracy Rating	$
Sepia 	Teal 	Black 	Divine Judgement	18% increased Elemental Damage
Damage Penetrates 5% Elemental Resistances
10% increased Effect of non-Damaging Ailments on Enemies
+6% to Fire Damage over Time Multiplier	$
Verdant 	Verdant 	Black 	Trickery	20% increased Critical Strike Chance
20% increased Damage
+10 to Dexterity and Intelligence	$
Amber 	Teal 	Black 	Defiance	20% increased Attack Damage while holding a Shield
+3% Chance to Block Attack Damage while holding a Shield
25% increased Defences from Equipped Shield
Attack Skills deal 20% increased Damage with Ailments while holding a Shield	$
Azure 	Crimson 	Crimson 	Harrier	5% increased Movement Speed
9% increased Attack Speed
5% increased Cast Speed	$
Clear 	Azure 	Black 	Twin Terrors	75% increased Weapon Critical Strike Chance while Dual Wielding
12% increased Accuracy Rating while Dual Wielding	$
Verdant 	Teal 	Black 	Enigmatic Reach	10% increased Area of Effect while wielding a Staff
8% increased Attack Speed with Staves
8% increased Cast Speed while wielding a Staff
3% increased Area of Effect per Power Charge	$
Sepia 	Azure 	Black 	Snowforged	25% increased Fire Damage
25% increased Cold Damage
30% increased Critical Strike Chance
+10% to Fire and Cold Resistances	$
Amber 	Azure 	Black 	Ambidexterity	50% increased Attack Damage with Main Hand
20% increased Attack Speed with Off Hand
Attack Skills deal 50% increased Damage with Ailments while Dual Wielding	$
Teal 	Teal 	Black 	Warrior's Blood	Regenerate 1.8% of Life per second
+20 to Strength
20% increased Stun Threshold	$
Verdant 	Azure 	Black 	Command of the Elements	Damage with Weapons Penetrates 4% Elemental Resistance
40% increased Defences from Equipped Shield
6% increased Attack Speed while holding a Shield
24% increased Elemental Damage with Attack Skills	$
Violet 	Crimson 	Crimson 	Light of Divinity	15% increased Spell Damage
4% increased Cast Speed
+10 to Strength and Intelligence
10% increased Light Radius
20% increased Critical Strike Chance for Spells	$
Clear 	Violet 	Black 	Acuity	15% increased Global Accuracy Rating
+20 to Dexterity
5% increased Attack Speed
+100 to Accuracy Rating	$
Teal 	Azure 	Black 	Finesse	20 to Dexterity
8% increased Attack Speed
15% increased Global Accuracy Rating	$
Sepia 	Violet 	Black 	Mental Rapidity	8% increased Cast Speed
20% increased Mana Regeneration Rate
10% increased Energy Shield Recharge Rate	$
Amber 	Violet 	Black 	Revelry	2 Mana gained for each Enemy hit by your Attacks
15% increased maximum Mana
+20 to maximum Mana	$
Verdant 	Violet 	Black 	Aggressive Bastion	30% increased Physical Attack Damage while holding a Shield
+4% Chance to Block Attack Damage while holding a Shield
Attack Skills deal 30% increased Damage with Ailments while holding a Shield
5% chance to gain an Endurance Charge on Kill while holding a Shield	$
Azure 	Azure 	Black 	Sanctity	10 to Strength and Intelligence
20% increased Armour
10% increased maximum Energy Shield
Regenerate 1% of Life per second	$
Teal 	Violet 	Black 	Essence Sap	20% increased total Recovery per second from Mana Leech
0.6% of Attack Damage Leeched as Mana
25% increased Maximum total Recovery per second from Mana Leech
+2 Mana gained for each Enemy hit by your Attacks	$
Azure 	Violet 	Black 	Adamant	20% increased Armour
10% chance when Hit for double Armour effect
+250 to Armour while affected by a Guard Skill Buff
Regenerat 0.5% of Life per second while affected by a Guard Skill Buff	$
Crimson 	Crimson 	Crimson 	Coldhearted Calculation	20% increased Mana Regeneration Rate
+20 to Intelligence
12% increased Spell Damage
12% increased Attack Damage	$
Clear 	Crimson 	Black 	Arcanist's Dominion	20 to Intelligence
5% increased Cast Speed
20% increased Spell Damage	$
Clear 	Clear 	Opalescent 	Eagle Eye	15% increased Global Accuracy Rating
30% increased Critical Strike Chance
+100 to Accuracy Rating	$
Sepia 	Crimson 	Black 	Storm Weaver	25% increased Cold Damage
25% increased Lightning Damage
20% increased Mana Regeneration Rate
10% increased Effect of non-Damaging Ailments on Enemies	$
Clear 	Sepia 	Opalescent 	Berserking	12% increased Attack Speed	$
Sepia 	Sepia 	Opalescent 	Potency of Will	25% increased Skill Effect Duration	$
Amber 	Crimson 	Black 	Coordination	12% increased Attack Speed
6% increased Cast Speed
+10 to Dexterity and Intelligence	$
Violet 	Violet 	Black 	Graceful Assault	20% increased Attack Damage
30% increased Evasion Rating during Onslaught
10% chance to gain Onslaught for 4 seconds on Kill
20% increased Onslaught Effect	$
Clear 	Amber 	Opalescent 	Brinkmanship	Melee Skills have 10% increased Area of Effect
10% increased Area of Effect if you have Stunned an Enemy Recently
5% reduced Area Damage taken from Hits
+2 to Melee Weapon and Unarmed Attack range	$
Sepia 	Amber 	Opalescent 	Fleetfoot	20% increased Evasion Rating
20% increased Cooldown Recovery Speed of Movement Skills
5% increased Movement Speed
10% increased Attack and Cast Speed if you've used a Movement Skill Recently	$
Verdant 	Crimson 	Black 	Precise Interception	3% Chance to Block Attack Damage while holding a Shield
60% increased Defences from Equipped Shield
15% increased Attack Damage while holding a Shield
Attack Skills deal 15% increased Damage with Ailments while holding a Shield
6% increased Attack Speed while holding a Shield	$
Clear 	Verdant 	Opalescent 	Blast Radius	10% increased Area of Effect
20% increased Area Damage	$
Sepia 	Verdant 	Opalescent 	Destroyer	12% increased Accuracy Rating with Two Handed Melee Weapons
25% increased Physical Damage with Two Handed Melee Weapons
5% increased Attack Speed with Two Handed Melee Weapons
25% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon	$
Amber 	Amber 	Opalescent 	Divine Wrath	12% increased Elemental Damage
12% increased Physical Damage
Lightning Spells have 15% of Physical Damage Converted to Lightning Damage
Gain 5% of Physical Damage as Extra Lightning Damage	$
Teal 	Crimson 	Black 	True Strike	12% to Critical Strike Multiplier
45% increased Critical Strike Chance	$
Clear 	Teal 	Opalescent 	Wrecking Ball	20% increased Damage with Two Handed Weapons
10% increased Attack Speed with Two Handed Melee Weapons
20% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon
20% increased Stun Duration with Two Handed Melee Weapons on Enemies	$
Amber 	Verdant 	Opalescent 	Titanic Impacts	40% increased Critical Strike Chance with Two Handed Melee Weapons
12% increased Accuracy Rating with Two Handed Melee Weapons
+20% to Critical Strike Multiplier with Two Handed Melee Weapons	$
Sepia 	Teal 	Opalescent 	Deflection	4% Chance to Block Attack Damage while holding a Shield
+4% Chance to Block Spell Damage while holding a Shield
40% increased Defences from Equipped Shield
+8% Chance to Block Projectile Attack Damage	$
Verdant 	Verdant 	Opalescent 	Versatility	10% increased Global Accuracy Rating
20% increased Critical Strike Chance
+20 to Dexterity and Intelligence
5% increased Attack Speed	$
Amber 	Teal 	Opalescent 	Juggernaut	6% increased maximum Life
16% increased Armour
20% increased Life Recovery from Flasks	$
Azure 	Crimson 	Black 	Dervish	2% Chance to Block Attack Damage while Dual Wielding
24% increased Weapon Damage while Dual Wielding
6% increased Attack Speed while Dual Wielding
Attack Skills deal 24% increased Damage with Ailments while Dual Wielding	$
Clear 	Azure 	Opalescent 	Strong Arm	20 to Strength
25% increased Physical Damage with One Handed Melee Weapons
5% increased Attack Speed with One Handed Melee Weapons
25% increased Damage with Ailments from Attack Skills while wielding a One Handed Weapon	$
Verdant 	Teal 	Opalescent 	Sleight of Hand	20% increased Damage with One Handed Weapons
8% increased Attack Speed with One Handed Melee Weapons
30% increased Damage with Ailments from Attack Skills while wielding a One Handed Weapon	$
Sepia 	Azure 	Opalescent 	Battle Cry	Using Warcries is Instant
20% increased Warcry Buff Effect
10% increased Warcry Cooldown Recovery Speed	$
Amber 	Azure 	Opalescent 	Amplify	10% increased Area of Effect
20% increased Area Damage	$
Teal 	Teal 	Opalescent 	Dazzling Strikes	10% chance to Blind Enemies on Hit with Attacks
40% increased Critical Strike Chance against Blinded Enemies
15% increased Global Accuracy Rating	$
Verdant 	Azure 	Opalescent 	Explosive Impact	25% increased Fire Damage
8% increased Area of Effect	$
Violet 	Crimson 	Black 	Fire Walker	25% increased Fire Damage
+15% to Fire Resistance
5% increased Cast Speed with Fire Skills	$
Clear 	Violet 	Opalescent 	Blade Barrier	5% Chance to Block Attack Damage while Dual Wielding
24% increased Weapon Damage while Dual Wielding
50% increased Block Recovery
Attack Skills deal 24% increased Damage with Ailments while Dual Wielding	$
Teal 	Azure 	Opalescent 	Dark Arts	5% increased Cast Speed while Dual Wielding
10% increased Attack and Cast Speed if you've used a Movement Skill Recently
30% increased Mana Regeneration if you've used a Movement Skill Recently
+10 to Dexterity and Intelligence	$
Sepia 	Violet 	Opalescent 	Melding	6% increased maximum Life
10% increased maximum Energy Shield	$
Amber 	Violet 	Opalescent 	Throatseeker	30% to Critical Strike Multiplier	$
Verdant 	Violet 	Opalescent 	Frost Walker	25% increased Cold Damage
+15% to Cold Resistance
5% increased Cast Speed with Cold Skills	$
Azure 	Azure 	Opalescent 	Steadfast	10% increased Effect of Fortify on you
10% increased Effect of Fortify on you while Stationary
30% increased Armour while you have Fortify	$
Teal 	Violet 	Opalescent 	Mysticism	16% increased Spell Damage while Dual Wielding
+4% Chance to Block Attack Damage while Dual Wielding
+4% Chance to Block Spell Damage while Dual Wielding
10% chance to gain a Power Charge when you Block Spell Damage
10% chance to gain a Frenzy Charge when you Block Attack Damage	$
Azure 	Violet 	Opalescent 	Ballistic Mastery	15% increased Projectile Damage
+20 to Dexterity
20% increased Projectile Speed	$
Crimson 	Crimson 	Black 	Essence Extraction	15% increased Mana Regeneration Rate
15% increased Flask Charges gained
Mana Flasks gain 1 Charge every 3 seconds
Remove a random Elemental Ailment when you use a Mana Flask	$
Clear 	Crimson 	Opalescent 	Retribution	10 to Strength and Intelligence
14% increased Damage
5% increased Attack and Cast Speed
Minions deal 10% increased Damage	$
Clear 	Black 	Black 	Lethal Assault	18% increased Damage
10% increased Projectile Speed
10% increased Area of Effect	$
Sepia 	Crimson 	Opalescent 	Soul Thief	12% increased maximum Energy Shield
18% increased Evasion Rating
0.3% of Spell Damage Leeched as Energy Shield	$
Sepia 	Black 	Black 	Sanctum of Thought	You take 20% reduced Extra Damage from Critical Strikes
30% increased Armour
20% reduced Effect of Curses on you	$
Amber 	Crimson 	Opalescent 	Command of Steel	3% Chance to Block Attack Damage while holding a Shield
25% increased Attack Damage while holding a Shield
Attack Skills deal 25% increased Damage with Ailments while holding a Shield
6% increased Attack Speed while holding a Shield	$
Amber 	Black 	Black 	Precision	20 to Dexterity
10% increased Global Accuracy Rating
4% increased Movement Speed
5% increased Attack and Cast Speed	$
Violet 	Violet 	Opalescent 	Hired Killer	10 Life gained on Kill
6% increased maximum Life	$
Verdant 	Crimson 	Opalescent 	Retaliation	20% increased Attack Damage while holding a Shield
40% increased Defences from Equipped Shield
8% increased Attack Speed while holding a Shield
Attack Skills deal 20% increased Damage with Ailments while holding a Shield	$
Verdant 	Black 	Black 	Righteous Army	Minions deal 20% increased Damage
Minions have 20% increased maximum Life
Minions Regenerate 1% Life per second
Regenerate 1% of Life per second	$
Teal 	Crimson 	Opalescent 	Longshot	20% increased Projectile Attack Damage
Projectiles gain Damage as they travel farther, dealing up
to 40% increased Damage with Hits to targets
20% increased Projectile Speed	$
Teal 	Black 	Black 	Ribcage Crusher	18% increased Damage with Maces and Sceptres
6% increased Attack Speed with Maces and Sceptres
18% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre
15% increased Area of Effect if you have Stunned an Enemy Recently	$
Azure 	Crimson 	Opalescent 	Dire Torment	20% to Damage over Time Multiplier for Ailments from Critical Strikes
30% increased Critical Strike Chance	$
Azure 	Black 	Black 	Gravepact	Minions deal 15% increased Damage
Minions have 8% increased Attack Speed
30% increased Minion Accuracy Rating
Minions have 5% chance to deal Double Damage	$
Clear 	Clear 	Silver 	Arcing Blows	30% increased Lightning Damage with Attack Skills
Damage with Weapons Penetrates 8% Lightning Resistance
10% increased Effect of Shock	$
Violet 	Crimson 	Opalescent 	Disciple of the Unyielding	1 to Minimum Endurance Charges
5% chance to gain an Endurance Charge on Kill
5% increased Damage per Endurance Charge	$
Violet 	Black 	Black 	Disintegration	60% increased Critical Strike Chance with Wands
+30% to Critical Strike Multiplier with Wands
+20 to Intelligence	$
Clear 	Sepia 	Silver 	Blade Master	20% increased Physical Damage with Swords
8% increased Attack Speed with Swords
+200 to Accuracy Rating with Swords
20% increased Damage with Ailments from Attack Skills while wielding a Sword
+1 to Melee range with Swords	$
Sepia 	Sepia 	Silver 	Fangs of Frost	30% increased Cold Damage with Attack Skills
Damage with Weapons Penetrates 8% Cold Resistance
10% increased Effect of Chill	$
Clear 	Amber 	Silver 	Counterweight	60% increased Global Critical Strike Chance while wielding a Staff
+30% to Global Critical Strike Multiplier while wielding a Staff	$
Sepia 	Amber 	Silver 	Destructive Apparatus	20% increased Mine Damage
40% increased Mine Duration
10% increased Mine Throwing Speed
Each Mine applies 2% reduced Damage dealt to Enemies near it, up to 10%	$
Clear 	Verdant 	Silver 	Hunter's Gambit	24% increased Damage with Bows
24% increased Damage Over Time with Bow Skills
10% increased Skill Effect Duration
Poisons you inflict deal Damage 10% faster
+10% to Chaos Damage over Time Multiplier	$
Sepia 	Verdant 	Silver 	Soul Raker	20% increased Damage with Claws
1.2% of Attack Damage Leeched as Life
0.8% of Attack Damage Leeched as Mana
50% increased total Recovery per second from Life Leech
20% increased Damage with Ailments from Attack Skills while wielding a Claw	$
Amber 	Amber 	Silver 	Dirty Techniques	20% increased Poison Duration
20% increased Bleeding Duration
+10% to Damage over Time Multiplier
Poisons you inflict deal Damage 5% faster
Bleeding you inflict deals Damage 5% faster	$
Clear 	Teal 	Silver 	Backstabbing	40% increased Critical Strike Chance with Daggers
+30% to Critical Strike Multiplier with Daggers
+40% to Critical Strike Multiplier against Enemies that are on Full Life
30% increased Critical Strike Chance against Enemies on Full Life	$
Amber 	Verdant 	Silver 	Tempest Blast	Gain 20% of Wand Physical Damage as Extra Lightning Damage	$
Sepia 	Teal 	Silver 	Winter Spirit	16% increased Cold Damage with Attack Skills
20% of Physical Damage Converted to Cold Damage	$
Verdant 	Verdant 	Silver 	High Explosives	Trap Damage Penetrates 10% Elemental Resistances
Mine Damage Penetrates 10% Elemental Resistances
30% increased Mine Duration
30% increased Trap Trigger Area of Effect	$
Amber 	Teal 	Silver 	Holy Fire	12% to Fire Damage over Time Muiltiplier
20% increased Fire Damage
15% chance to Ignite	$
Clear 	Azure 	Silver 	Shaman's Dominion	20% to Critical Strike Multiplier with Totem Skills
100% increased Global Critical Strike Chance if you've Summoned a Totem Recently
+20% to Critical Strike Multiplier with Brand Skills
50% increased Critical Strike Chance with Brand Skills	$
Verdant 	Teal 	Silver 	Method to the Madness	8% to Chaos Resistance
22% increased Chaos Damage
+8% to Chaos Damage over Time Multiplier	$
Sepia 	Azure 	Silver 	Blade of Cunning	20% increased Physical Damage with Swords
20% increased Damage with Ailments from Attack Skills while wielding a Sword
40% increased Critical Strike Chance with Swords
+15% to Critical Strike Multiplier with Swords	$
Amber 	Azure 	Silver 	Searing Heat	20% to Damage over Time Multiplier for Ignite from Critical Strikes
45% increased Critical Strike Chance for Spells
+20% to Critical Strike Multiplier against Burning Enemies	$
Teal 	Teal 	Silver 	Devastating Devices	50% increased Critical Strike Chance with Traps
50% increased Critical Strike Chance with Mines
+30% to Critical Strike Multiplier with Traps
+30% to Critical Strike Multiplier with Mines	$
Verdant 	Azure 	Silver 	Forces of Nature	20% increased Elemental Damage with Attack Skills
Damage with Weapons Penetrates 6% Elemental Resistance	$
Crimson 	Crimson 	Opalescent 	Singular Focus	Channelling Skills deal 15% increased Damage
4% additional Physical Damage Reduction while Channelling
Channelling Skills have 6% increased Attack and Cast Speed	$
Crimson 	Black 	Black 	Corruption	15% increased Damage over Time
+10% to Chaos Damage over Time Multiplier
15% increased Chaos Damage	$
Clear 	Black 	Opalescent 	Skull Cracking	30% increased Physical Damage with Maces and Sceptres
10% reduced Enemy Stun Threshold with Maces and Sceptres
Hits that Stun Enemies have Culling Strike
30% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre	$
Sepia 	Black 	Opalescent 	Adder's Touch	30% to Critical Strike Multiplier with Daggers
Critical Strikes with Daggers have a 40% chance to Poison the Enemy
20% increased Damage with Poison
+15% to Damage over Time Multiplier for Poison from Critical Strikes	$
Clear 	Violet 	Silver 	Fatal Toxins	30% increased Damage with Poison
10% increased Poison Duration
+10% to Chaos Resistance
+10% to Damage over Time Multiplier for Poison	$
Teal 	Azure 	Silver 	Gladiator's Perseverance	20% increased Physical Damage with One Handed Melee Weapons
0.6% of Physical Attack Damage Leeched as Life
10% increased Maximum total Recovery per second from Life Leech
20% increased Attack Damage while Leeching
20% increased Damage with Ailments from Attack Skills while wielding a One Handed Weapon	$
Sepia 	Violet 	Silver 	Lethality	30% to Critical Strike Multiplier with Bows
16% increased Damage with Bows
50% increased Critical Strike Chance with Bows
16% increased Damage Over Time with Bow Skills	$
Amber 	Black 	Opalescent 	Feller of Foes	30% increased Damage with Axes
+30% to Critical Strike Multiplier with Axes
+200 to Accuracy Rating with Axes
30% increased Damage with Ailments from Attack Skills while wielding an Axe	$
Amber 	Violet 	Silver 	Lucidity	Channelling Skills deal 30% increased Damage
Channelling Skills have -3 to Total Mana Cost
40% chance to Avoid being Stunned while Channelling	$
Verdant 	Black 	Opalescent 	Blacksmith's Clout	18% increased Physical Damage with Maces and Sceptres
18% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre
40% increased Critical Strike Chance with Maces and Sceptres
+25% to Critical Strike Multiplier with Maces and Sceptres	$
Verdant 	Violet 	Silver 	King of the Hill	Knocks Back Enemies if you get a Critical Strike with a Bow
80% increased Critical Strike Chance with Bows
16% increased Damage with Bows
16% increased Damage Over Time with Bow Skills	$
Azure 	Azure 	Silver 	Bloodletting	25% increased Damage with Bleeding
+8% to Damage over Time Multiplier for Bleeding
40% increased Attack Damage against Bleeding Enemies
Bleeding you inflict deals Damage 10% faster
5% reduced Damage taken from Bleeding Enemies	$
Teal 	Black 	Opalescent 	Master Sapper	30% increased Trap Damage
Can have up to 2 additional Traps placed at a time
20% increased Trap Trigger Area of Effect
15% chance to gain a Frenzy Charge when your Trap is triggered by an Enemy	$
Teal 	Violet 	Silver 	Charging Offensive	Channelling Skills deal 16% increased Attack Damage
Channelling Skills have 6% increased Attack Speed
20% chance to gain an Endurance Charge when Hit while Channelling
20% chance to gain a Frenzy Charge when Hit while Channelling	$
Azure 	Black 	Opalescent 	Serpent Stance	40% increased Global Critical Strike Chance while wielding a Staff
+35% to Global Critical Strike Multiplier while wielding a Staff	$
Azure 	Violet 	Silver 	Primeval Force	20% increased Elemental Damage with Attack Skills
10% reduced Reflected Elemental Damage taken
20% increased Elemental Damage during any Flask Effect
Damage with Weapons Penetrates 5% Elemental Resistance	$
Clear 	Crimson 	Silver 	Death Attunement	1 to Maximum number of Spectres
Minions have 8% increased Attack Speed
Minions have 8% increased Cast Speed
+1 to Maximum number of Raised Zombies
+1 to Maximum number of Skeletons	$
Sepia 	Crimson 	Silver 	Deadly Draw	20% increased Physical Damage with Bows
30% increased Damage Over Time with Bow Skills
Bow Attacks have 10% chance to cause Bleeding
Bleeding you inflict deals Damage 15% faster	$
Violet 	Black 	Opalescent 	Claws of the Hawk	40% increased Critical Strike Chance with Claws
+25% to Critical Strike Multiplier with Claws
10% chance to Blind Enemies on Critical Strike	$
Amber 	Crimson 	Silver 	Blast Cascade	30% to Critical Strike Multiplier with Traps
+30% to Critical Strike Multiplier with Mines
15% chance to gain a Power Charge when your Trap is triggered by an Enemy
15% chance to gain a Power Charge when your Mine is Detonated targeting an Enemy	$
Violet 	Violet 	Silver 	Swift Skewering	15% chance to Impale Enemies on Hit with Attacks
15% increased Attack Physical Damage
5% increased Attack Speed	$
Verdant 	Crimson 	Silver 	Lord of the Dead	1 to Maximum number of Skeletons
+1 to Maximum number of Raised Zombies
Minions have 10% increased maximum Life
Minions deal 15% increased Damage
30% increased Minion Accuracy Rating	$
Teal 	Crimson 	Silver 	Blunt Trauma	Knocks Back Enemies if you get a Critical Strike with a Staff
15% increased Accuracy Rating with Staves
40% increased Critical Strike Chance with Staves
+20% to Critical Strike Multiplier with Staves	$
Azure 	Crimson 	Silver 	Runesmith	12% increased Brand Activation frequency
You can Cast an additional Brand
Brand Skills deal 30% increased Damage to Enemies they're Attached to
Brand Skills have 10% increased Duration	$
Crimson 	Black 	Opalescent 	Hex Master	Curse Skills have 80% increased Skill Effect Duration
5% increased Effect of your Curses
40% increased Area of Effect of Curse Skills	$
Black 	Black 	Black 	Disciple of the Forbidden	1 to Minimum Power Charges
5% chance to gain a Power Charge on Kill
5% increased Damage per Power Charge	$
Clear 	Opalescent 	Opalescent 	Avatar of the Hunt	24% increased Damage with Bows
6% increased Movement Speed
24% increased Damage Over Time with Bow Skills
20% increased Cooldown Recovery Speed of Movement Skills
+200 to Evasion Rating	$
Sepia 	Opalescent 	Opalescent 	Prism Weave	24% increased Elemental Damage with Wands
6% increased Attack Speed with Wands
Damage with Weapons Penetrates 5% Elemental Resistance	$
Violet 	Crimson 	Silver 	Indomitable Army	Minions have 15% increased maximum Life
Minions have 15% additional Physical Damage Reduction
Minions have +15% to all Elemental Resistances
Moving while Bleeding doesn't cause Minions to take extra Damage	$
Amber 	Opalescent 	Opalescent 	Fatal Blade	30% to Critical Strike Multiplier with Swords
60% increased Critical Strike Chance with Swords
10% increased Damage with Swords
10% increased Damage with Ailments from Attack Skills while wielding a Sword	$
Clear 	Clear 	Golden 	Lava Lash	30% increased Fire Damage with Attack Skills
Damage with Weapons Penetrates 8% Fire Resistance	$
Clear 	Sepia 	Golden 	Atrophy	10% to Chaos Damage over Time Multiplier
20% increased Chaos Damage
4% increased Cast Speed with Chaos Skills
+8% to Chaos Resistance	$
Verdant 	Opalescent 	Opalescent 	Ravenous Horde	Minions have 20% increased Movement Speed
Minions deal 20% increased Damage
Minions have 5% increased Attack Speed
Minions have 5% increased Cast Speed
Minions have 10% chance to gain Onslaught for 4 seconds on Kill	$
Sepia 	Sepia 	Golden 	Spiritual Command	Minions have 8% increased Attack Speed
20% increased Minion Accuracy Rating
Increases and Reductions to Minion Attack Speed also affect you
Minions have 8% increased Cast Speed	$
Clear 	Amber 	Golden 	Swift Venoms	8% increased Attack Speed
+8% to Damage over Time Multiplier for Poison
Poisons you inflict deal Damage 5% faster
10% chance to Poison on Hit with Attacks
16% increased Damage with Poison	$
Sepia 	Amber 	Golden 	Stun Mastery	10% reduced Enemy Stun Threshold
30% increased Stun and Block Recovery
10% chance to gain an Endurance Charge when you Stun an Enemy with a Melee Hit
10% chance to double Stun Duration	$
Teal 	Opalescent 	Opalescent 	One with the River	30% increased Elemental Damage with Staves
Damage with Weapons Penetrates 5% Elemental Resistance
5% reduced Elemental Damage taken while stationary	$
Clear 	Verdant 	Golden 	Enduring Bond	15% increased Skill Effect Duration
Minions deal 20% increased Damage
Minions deal 20% increased Damage if you've used a Minion Skill Recently
15% increased Minion Duration	$
Sepia 	Verdant 	Golden 	Brutal Blade	20% increased Damage with Swords
8% increased Attack Speed with Swords
+4% Chance to Block Attack Damage while Dual Wielding or holding a Shield
20% increased Damage with Ailments from Attack Skills while wielding a Sword
10% chance to gain a Frenzy Charge when you Block Attack Damage	$
Amber 	Amber 	Golden 	Claws of the Falcon	16% increased Damage with Claws
+30% to Critical Strike Multiplier with Claws
12% increased Accuracy Rating with Claws
16% increased Damage with Ailments from Attack Skills while wielding a Claw	$
Clear 	Teal 	Golden 	Growth and Decay	20% increased Damage over Time
Regenerate 1% of Life per second
+10% to Damage over Time Multiplier	$
Amber 	Verdant 	Golden 	Disciple of the Slaughter	1 to Minimum Frenzy Charges
5% chance to gain a Frenzy Charge on Kill
5% increased Damage per Frenzy Charge	$
Sepia 	Teal 	Golden 	Nightstalker	20% increased Damage with Daggers
40% increased Critical Strike Chance with Daggers
20% increased Damage with Ailments from Attack Skills while wielding a Dagger
+150 to Accuracy Rating with Daggers
+20% to Critical Strike Multiplier with Daggers	$
Azure 	Opalescent 	Opalescent 	Volatile Mines	20% increased Mine Damage
Can have up to 2 additional Remote Mines placed at a time
Mines have 20% increased Detonation Speed
Each Mine applies 2% increased Damage taken to Enemies near it, up to 10%	$
Verdant 	Verdant 	Golden 	Insightfulness	10% increased maximum Energy Shield
10% increased maximum Mana
10% reduced Mana Cost of Skills while on Full Energy Shield
+10 to Intelligence	$
Amber 	Teal 	Golden 	Arcane Chemistry	15% increased maximum Mana
25% increased Mana Recovery from Flasks
15% reduced Flask Charges used
Flasks applied to you have 8% increased Effect	$
Clear 	Azure 	Golden 	Cleansed Thoughts	Chaos Resistance is doubled	$
Verdant 	Teal 	Golden 	Influence	14% increased effect of Non-Curse Auras from your Skills	$
Sepia 	Azure 	Golden 	Heart of Thunder	25% increased Lightning Damage
Damage Penetrates 6% Lightning Resistance
0.2% of Lightning Damage Leeched as Energy Shield	$
Crimson 	Crimson 	Silver 	Devotion	20 to Strength
8% increased maximum Life
3% increased effect of Non-Curse Auras from your Skills	$
Clear 	Black 	Silver 	Purity of Flesh	8% increased maximum Life
+8% to Chaos Resistance
+10 to Strength	$
Amber 	Azure 	Golden 	Doom Cast	60% increased Critical Strike Chance for Spells
+15% to Critical Strike Multiplier for Spells	$
Teal 	Teal 	Golden 	Quick Recovery	6% increased maximum Life
20% increased Mana Regeneration Rate
Regenerate 0.8% of Life per second	$
Sepia 	Black 	Silver 	Crystal Skin	15% chance to Avoid Elemental Ailments
5% reduced Elemental Damage taken
+5% to all Elemental Resistances	$
Violet 	Opalescent 	Opalescent 	Bravery	24% increased Evasion Rating and Armour
8% increased maximum Life	$
Verdant 	Azure 	Golden 	Breath of Flames	10% to Fire Damage over Time Multiplier
20% increased Fire Damage
20% increased Ignite Duration on Enemies
20% chance to Ignite	$
Amber 	Black 	Silver 	Fervour	1 to Maximum Frenzy Charges	$
Clear 	Violet 	Golden 	Transcendence	-10 Physical Damage taken from Hits
-1 Physical Damage taken from Hits per Level	$
Verdant 	Black 	Silver 	Profane Chemistry	6% increased maximum Life
30% increased Life Recovery from Flasks
Flasks applied to you have 8% increased Effect	$
Teal 	Azure 	Golden 	Heart of Flame	25% increased Fire Damage
Damage Penetrates 6% Fire Resistance
0.2% of Fire Damage Leeched as Energy Shield	$
Sepia 	Violet 	Golden 	Written in Blood	8% increased maximum Life
10% increased maximum Energy Shield
+10 to Strength	$
Amber 	Violet 	Golden 	Aqueous Accelerant	Flasks applied to you have 10% increased Effect
8% increased Attack and Cast Speed during Effect of any Mana Flask
10% increased Mana Recovery Rate during Efect of any Mana Flask	$
Teal 	Black 	Silver 	Cruel Preparation	10% increased maximum Life
+5% to all Elemental Resistances	$
Verdant 	Violet 	Golden 	Disemboweling	50% increased Melee Critical Strike Chance
+25% to Melee Critical Strike Multiplier	$
Azure 	Azure 	Golden 	Cursed Concoction	15% inceased maximum Mana
10% increased Effect of your Curses if you've spent 200 total Mana Recently
Remove a Curse when you use a Mana Flask	$
Teal 	Violet 	Golden 	Soul Siphon	18% increased maximum Mana
+5 Mana gained on Kill
+10 to maximum Mana	$
Azure 	Black 	Silver 	Arcane Potency	30% to Critical Strike Multiplier for Spells
30% increased Critical Strike Chance for Spells	$
Azure 	Violet 	Golden 	Breath of Lightning	20% increased Shock Duration on Enemies
10% chance to Shock
20% increased Lightning Damage
15% increased Effect of Shock	$
Crimson 	Opalescent 	Opalescent 	Vigour	1 to Maximum Endurance Charges	$
Black 	Black 	Opalescent 	Master of Force	20% increased Physical Damage
20% reduced Reflected Physical Damage taken
4% chance to deal Double Damage
+20 to Strength	$
Violet 	Black 	Silver 	Hematophagy	20% increased total Recovery per second from Life Leech
1% of Physical Attack Damage Leeched as Life
30% increased Damage while Leeching
15% increased Maximum total Recovery per second from Life Leech	$
Clear 	Crimson 	Golden 	Druidic Rite	15% increased maximum Mana
20% increased Flask Charges gained
20% increased Flask Effect Duration
+15 to maximum Mana	$
Sepia 	Crimson 	Golden 	Heart and Soul	8% increased maximum Life
12% increased maximum Mana	$
Amber 	Crimson 	Golden 	Bloodless	Enemies Cannot Leech Life From you
8% increased maximum Life	$
Violet 	Violet 	Golden 	Born to Fight	20 to Strength
26% increased Melee Physical Damage
4% increased Melee Attack Speed
+20 to Accuracy Rating	$
Verdant 	Crimson 	Golden 	Heart of Oak	20% chance to Avoid being Stunned
8% increased maximum Life
Regenerate 1% of Life per second
20% increased Stun and Block Recovery	$
Teal 	Crimson 	Golden 	Champion of the Cause	6% increased effect of Non-Curse Auras from your Skills
4% reduced Mana Reserved
12% increased Area of Effect of Aura Skills	$
Azure 	Crimson 	Golden 	Survivalist	24% increased Evasion Rating
+8% to all Elemental Resistances
+1% to maximum Cold Resistance
+3% chance to Evade Attacks	$
Crimson 	Black 	Silver 	Overcharge	1 to Maximum Power Charges	$
Clear 	Opalescent 	Silver 	Overcharged	8% chance to gain a Power, Frenzy or Endurance Charge on Kill	$
Sepia 	Opalescent 	Silver 	Master of the Arena	20 to Strength
+2 to Melee Weapon and Unarmed Attack range
8% increased Melee Physical Damage
Regenerate 1% of Life per second	$
Amber 	Opalescent 	Silver 	Mystic Talents	16% increased Spell Damage
+14 to maximum Energy Shield
25% increased Mana Regeneration Rate
+30 to Intelligence	$
Violet 	Crimson 	Golden 	Fingers of Frost	Enemies Become Chilled as they Unfreeze
10% chance to Freeze Enemies which are Chilled
12% increased Cold Damage
10% increased Effect of Chill
+10% to Cold Damage over Time Multiplier	$
Verdant 	Opalescent 	Silver 	Divine Fervour	24% increased Elemental Damage with Attack Skills
+10 to Strength and Intelligence
25% increased Melee Critical Strike Chance
Damage with Weapons Penetrates 3% Elemental Resistance	$
Teal 	Opalescent 	Silver 	Herbalism	20% increased Life Recovery from Flasks
20% increased Flask Recovery rate
10% increased maximum Life	$
Azure 	Opalescent 	Silver 	Blood Siphon	10% increased maximum Life
+20 to Strength
+5 Life gained on Kill	$
Black 	Opalescent 	Opalescent 	Crackling Speed	16% increased Lightning Damage
4% increased Cast Speed
+15% to Critical Strike Multiplier
10% increased Effect of Shock	$
Violet 	Opalescent 	Silver 	Leadership	30% increased Area of Effect of Aura Skills
6% increased effect of Non-Curse Auras from your Skills	$
Crimson 	Crimson 	Golden 	Arcane Expanse	Spell Skills have 10% increased Area of Effect
15% increased Spell Damage
10% increased Area of Effect if you've Killed Recently
+10 to Intelligence	$
Clear 	Black 	Golden 	Endurance	1 to Maximum Endurance Charges	$
Sepia 	Black 	Golden 	Faith and Steel	20% increased Armour
10% increased maximum Energy Shield
+8% to all Elemental Resistances
10% increased Energy Shield Recharge Rate	$
Amber 	Black 	Golden 	Way of the Warrior	16% increased Armour
+16 to maximum Life
16% increased Melee Damage
+30 to Strength	$
Verdant 	Black 	Golden 	Deadly Inclinations	18% increased Evasion Rating
+12 to maximum Life
16% increased Projectile Damage
+30 to Dexterity	$
Teal 	Black 	Golden 	Hardened Scars	15% increased Life Recovery from Flasks
You have Fortify during Effect of any Life Flask	$
Azure 	Black 	Golden 	Rampart	10% increased Effect of Fortify on you
5% increased Movement Speed while you have Fortify
20% increased Attack Damage while you have Fortify
8% increased Attack Speed while you have Fortify	$
Crimson 	Opalescent 	Silver 	Inexorable	20% increased Armour
Regenerate 0.2% of Life per second per Endurance Charge
10% chance to gain an Endurance Charge when you are Hit
30% increased Armour while stationary	$
Black 	Black 	Silver 	Stamina	1 to Maximum Endurance Charges	$
Violet 	Black 	Golden 	Arcane Capacitor	15% increased maximum Mana
10% increased Effect of Arcane Surge on you per 200 Mana spent Recently, up to 50%
10% chance to gain Arcane Surge when you Kill an Enemy	$
Opalescent 	Opalescent 	Opalescent 	Tireless	8% increased maximum Life
6% reduced Mana Cost of Skills	$
Clear 	Silver 	Silver 	Arcane Swiftness	5% increased Spell Damage per 5% Chance to Block Attack Damage
+3% Chance to Block Attack Damage while holding a Shield
20% chance to Avoid being Stunned while holding a Shield
20% chance to Avoid Elemental Ailments while holding a Shield
5% increased Cast Speed while holding a Shield	$
Sepia 	Silver 	Silver 	Stabbing Thirst	24% increased Damage with Daggers
0.5% of Attack Damage Leeched as Life
0.5% of Attack Damage Leeched as Mana
24% increased Damage with Ailments from Attack Skills while wielding a Dagger
6% increased Attack Speed with Daggers	$
Crimson 	Black 	Golden 	Savagery	1 to Maximum Frenzy Charges	$
Clear 	Opalescent 	Golden 	Mana Flows	16% increased maximum Mana
40% increased Mana Regeneration Rate
+20 to Intelligence
+10 to maximum Mana	$
Amber 	Silver 	Silver 	Primal Spirit	20% increased Mana Regeneration Rate
20% increased Flask Charges gained
+20 to Strength and Intelligence
15% increased maximum Mana	$
Sepia 	Opalescent 	Golden 	Art of the Gladiator	12% increased Attack Speed
+20 to Dexterity
Ignore all Movement Penalties from Armour
10% increased Global Accuracy Rating	$
Verdant 	Silver 	Silver 	Instability	1 to Maximum Power Charges	$
Amber 	Opalescent 	Golden 	Arcane Will	Regenerate 2 Mana per second
20% increased maximum Mana
20% increased Mana Recovery from Flasks
Gain 4% of Maximum Mana as Extra Maximum Energy Shield	$
Verdant 	Opalescent 	Golden 	Foresight	20 to maximum Energy Shield
14% increased maximum Energy Shield
10% increased Energy Shield Recharge Rate	$
Teal 	Silver 	Silver 	Breath of Rime	20% increased Freeze Duration on Enemies
10% chance to Freeze
20% increased Cold Damage
15% increased Effect of Chill
+10% to Cold Damage over Time Multiplier	$
Teal 	Opalescent 	Golden 	Lust for Carnage	1.2% of Physical Attack Damage Leeched as Life
20% increased total Recovery per second from Life Leech
12% increased Attack Speed	$
Azure 	Silver 	Silver 	Frenetic	1 to Maximum Frenzy Charges	$
Azure 	Opalescent 	Golden 	Force Shaper	20% increased Physical Damage
Gain 4% of Physical Damage as Extra Chaos Damage
4% increased Attack and Cast Speed
10% reduced Physical Damage taken over time	$
Black 	Opalescent 	Silver 	Piercing Shots	Projectiles Pierce 2 additional Targets	$
Violet 	Silver 	Silver 	Thick Skin	10% increased maximum Life
8% chance to Avoid Elemental Ailments	$
Violet 	Opalescent 	Golden 	Dismembering	30% increased Melee Critical Strike Chance
+30% to Melee Critical Strike Multiplier
20% chance to Maim Enemies on Critical Strike with Attacks	$
Crimson 	Silver 	Silver 	Infused	1 to Maximum Power Charges	$
Crimson 	Opalescent 	Golden 	Heart of Ice	25% increased Cold Damage
Damage Penetrates 6% Cold Resistance
0.2% of Cold Damage Leeched as Energy Shield	$
Black 	Black 	Golden 	Swagger	20% increased Weapon Damage while Dual Wielding
+5% Chance to Block Attack Damage while Dual Wielding
Attack Skills deal 20% increased Damage with Ailments while Dual Wielding
10% chance to gain a Frenzy Charge when you Block
10% chance to gain an Endurance Charge when you Block	$
Opalescent 	Opalescent 	Silver 	Blood Drinker	8% increased maximum Life
0.4% of Attack Damage Leeched as Life	$
Clear 	Silver 	Golden 	Vitality Void	20% increased total Recovery per second from Life Leech
0.8% of Attack Damage Leeched as Life
15% increased Maximum total Recovery per second from Life Leech	$
Sepia 	Silver 	Golden 	Fangs of the Viper	20 to Dexterity
5% increased Movement Speed
20% increased Physical Damage
20% increased Chaos Damage	$
Amber 	Silver 	Golden 	Ethereal Feast	0.6% of Spell Damage Leeched as Energy Shield
30% increased Maximum total Recovery per second from Energy Shield Leech
6% increased Attack and Cast Speed while Leeching Energy Shield	$
Verdant 	Silver 	Golden 	Resourcefulness	5% increased maximum Life
10% increased maximum Energy Shield
15% increased Evasion Rating
Regenerate 0.5% of Life per second	$
Teal 	Silver 	Golden 	Essence Surge	30 to maximum Energy Shield
10% increased Energy Shield Recharge Rate
15% faster start of Energy Shield Recharge	$
Azure 	Silver 	Golden 	Golem Commander	20% increased Damage when you have a Summoned Golem
30% increased Effect of Buffs granted by your Golems
Golems have 15% increased Maximum Life
+1 to maximum number of Golems	$
Black 	Silver 	Silver 	Discipline and Training	30 to maximum Life
10% increased maximum Life	$
Black 	Opalescent 	Golden 	Assassination	35% to Critical Strike Multiplier
30% increased Critical Strike Chance	$
Violet 	Silver 	Golden 	Heart of the Warrior	10 to Strength
+20 to maximum Life
10% increased maximum Life	$
Crimson 	Silver 	Golden 	Void Barrier	10% increased maximum Energy Shield
15% increased Evasion Rating
+8% to all Elemental Resistances
10% increased Energy Shield Recharge Rate	$
Opalescent 	Silver 	Silver 	Skittering Runes	15% increased Effect of your Curses	$
Opalescent 	Opalescent 	Golden 	Barbarism	6% increased maximum Life
+1% to maximum Fire Resistance
+8% to Fire Resistance	$
Clear 	Golden 	Golden 	Crusader	8% increased maximum Mana
Transfiguration of Mind	$
Sepia 	Golden 	Golden 	Thunderous Salvos	30% increased Critical Strike Chance for Spells
Skills supported by Unleash have +1 to maximum number of Seals	$
Amber 	Golden 	Golden 	Vengeant Cascade	15% increased Projectile Speed
Attack Projectiles Return to you from final Target
Returning Projectiles Pierce all Targets	$
Verdant 	Golden 	Golden 	Unnatural Calm	18% increased maximum Energy Shield
+1% to maximum Lightning Resistance
15% increased Energy Shield Recharge Rate	$
Teal 	Golden 	Golden 	Golem's Blood	Regenerate 1.6% of Life per second
10% increased maximum Life	$
Azure 	Golden 	Golden 	Tranquility	5% increased maximum Energy Shield
Transfiguration of Soul	$
Black 	Silver 	Golden 	Revenge of the Hunted	18% increased Evasion Rating
8% increased maximum Life
12% increased Physical Damage	$
Violet 	Golden 	Golden 	Aspect of Stone	20% chance to Avoid Physical Damage from Hits	$
Crimson 	Golden 	Golden 	Tenacity	5% increased maximum Life
Transfiguration of Body	$
Silver 	Silver 	Silver 	Sovereignty	6% reduced Mana Reserved
10% increased effect of Non-Curse Auras from your Skills	$
Opalescent 	Silver 	Golden 	Tribal Fury	12% increased Melee Damage
Strike Skills target 1 additional nearby Enemy	$
Black 	Golden 	Golden 	Whispers of Doom	You can apply an additional Curse	$
Silver 	Silver 	Golden 	Spiritual Aid	Increases and Reductions to Minion Damage also affect you
30% increased Minion Accuracy Rating
30% increased Global Accuracy Rating
Minions deal 15% increased Damage	$
Opalescent 	Golden 	Golden 	Charisma	8% reduced Mana Reserved
6% increased effect of Non-Curse Auras from your Skills	$
Silver 	Golden 	Golden 	Constitution	14% increased maximum Life
+20 to maximum Life	$
Golden 	Golden 	Golden 	Soul of Steel	30% increased Armour
5% additional Physical Damage Reduction
+1% to all maximum Elemental Resistances
+150 to Armour`


    var mainSplit = passivesListRaw.split("$");
    for(var a = 0; a < mainSplit.length; a++)
    {
        // $("debug").innerHTML += split[a] + "<br />";
        var tabSplit = mainSplit[a].split("\t");
        //format of tabSplit should be
        //oil1, oil2, oil3, name, effects
        //effects should be separated by \n

        var req = [0,0,0,0,0,0,0,0,0,0,0,0];
        var name = tabSplit[3];
        var effects = tabSplit[4].split("\n");
        // console.log(a + " " + tabSplit);
        for(var b = 0; b < 3; b++) //3 oils per passive required
        {
            req[oilArr.indexOf(tabSplit[b].trim())]++;
        }
        // console.log(a + " " + tabSplit + " " + req);
        passives.push({
            req: req,
            name: name,
            effect: effects
        });
    }

    // passives.push( //1
    // {
    //     req: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     name: "Alacrity",
    //     effect: ["+30 to Dexterity"]
    // })
    //
    // passives.push( //2
    // {
    //     req: [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     name: "Beef",
    //     effect: ["+30 to Strength"]
    // })
    //
    // passives.push(//3
    // {
    //     req: [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     name: "Agility",
    //     effect: ["+30 to Dexterity"]
    // })
    //
    // passives.push({//4
    //     req: [2,0,1,0,0,0,0,0,0,0,0,0],
    //     name: "Wisdom of the Glade",
    //     effect: ["+30 to Intelligence"]
    // })
    //
    // passives.push({//5
    //     req: [0,3,0,0,0,0,0,0,0,0,0,0],
    //     name: "Expertise",
    //     effect: ["+30 to Dexterity"]
    // })
    //
    // passives.push({//6
    //     req: [1,1,1,0,0,0,0,0,0,0,0,0],
    //     name: "Thief's Craft",
    //     effect: ["+30 to Intelligence"]
    // })
    //
    // passives.push({//7
    //     req: [2,0,0,1,0,0,0,0,0,0,0,0],
    //     name: "Prowess",
    //     effect: ["+30 to Strength"]
    // })
    // passives.push({//8
    //     req: [0,2,1,0,0,0,0,0,0,0,0,0],
    //     name: "Proficiency",
    //     effect: ["+30 to Dexterity"]
    // })
    // passives.push({//9
    //     req: [1,1,0,1,0,0,0,0,0,0,0,0],
    //     name: "Ancestral Knowledge",
    //     effect: ["+30 to Intelligence"]
    // })
    // passives.push({//10
    //     req: [1,0,2,0,0,0,0,0,0,0,0,0],
    //     name: "Might",
    //     effect: ["+30 to Strenght"]
    // })
    // passives.push({//11
    //     req: [0,2,0,1,0,0,0,0,0,0,0,0],
    //     name: "Fending",
    //     effect: [
    //         "25% increased Knockback Distance",
    //         "12% chance to Knock Enemies Back on hit"
    //     ]
    // })
}
