// data/chapters.ts
// The complete narrative for "Back to the Song Dynasty" — a 10th grade
// World History project. Eight chapters of story plus the artifact reference.

export type Chapter = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  era: string;
  paragraphs: string[];
  pullQuote?: string;
};

export const chapters: Chapter[] = [
  {
    slug: "the-scroll",
    number: 1,
    title: "The Scroll",
    subtitle: "Boston, 2026",
    era: "Museum of Fine Arts · Asian Art Wing · March 14, 2026",
    paragraphs: [
      "The exhibit was called \"A City on Silk.\" My history teacher had assigned a paper on a single piece of art from anywhere before 1500 CE, and I had picked Along the River During the Qingming Festival — Zhang Zeduan's twenty-five-foot scroll of Bianjing, capital of the Northern Song. Most museums only show a digital copy. The MFA had a fragment of the real silk on loan from Beijing for one week, and I had skipped lunch to see it.",
      "The boats on the Bian River looked alive. Camels swayed past noodle shops. A scholar bent over a fortune-teller's table. A child reached for a sugar-coated plum on a stick. Nine hundred years ago, a man named Zhang Zeduan had stood in the same city and remembered everything he saw. Now his memory was glass-cased in front of me.",
      "When I leaned closer to read the museum label, my reflection in the case wavered, doubled, and slid sideways like ink in water. The voices around me — a docent, a tour group, a child asking when they could leave — folded into the sound of a river. The smell of climate-controlled air became wood smoke, frying oil, sweat, and something sweet I would later learn was steamed osmanthus.",
      "The last thing I remember from 2026 was my backpack swinging against my hip. Inside it: a sealed vial my mother (a microbiologist at Mass General) had asked me to drop off at the lab on my way home, a printed senior project on the history of gunpowder, and a cloth sack of seed potatoes I was bringing to my biology class, where we were studying how a single tuber can clone itself into a whole field.",
      "Three things from 2026. I would not understand how dangerous they were until I had landed on the other side of the scroll.",
    ],
    pullQuote: "Nine hundred years ago, a man stood in the same city and remembered everything he saw.",
  },
  {
    slug: "bianjing",
    number: 2,
    title: "Bianjing, Under a Stranger Sky",
    subtitle: "The Northern Song Capital, Spring 1120 CE",
    era: "Xuanhe 2 · Reign of Emperor Huizong · Bianjing (modern Kaifeng)",
    paragraphs: [
      "I woke up on a stone embankment beside the Bian Canal. The sky above me was not the smudged blue of Boston in March — it was so clear that the rooftops of the city looked carved out of it. Tile-roofed buildings packed every horizon. The Rainbow Bridge (虹桥) arched fifty meters to my left, exactly as Zhang Zeduan had drawn it: a single span of timber with no central pillar, crowded with vendors and travelers shouting at the boats below.",
      "The Northern Song in 1120 CE was, by almost any measure, the most advanced civilization on Earth. The capital, Bianjing, held over a million people — larger than any city in Europe. They had paper money (交子), printed books from movable wooden type (Bi Sheng had invented it eighty years earlier), a magnetic compass, the world's most advanced ironworks, restaurants open all night, and an economy already pivoting toward what historians would later call \"early modern.\"",
      "Emperor Huizong (徽宗) ruled from a palace I could see across the rooftops. He was a brilliant painter and calligrapher — he invented Slender Gold (瘦金体) script — but a careless emperor. He had let corrupt ministers like Cai Jing strip the treasury. He had made a fragile alliance with the rising Jurchen tribes against the older Liao dynasty, not knowing the Jurchens would soon turn on him. In seven years, in 1127, the Jurchens would sack this city in what Chinese history calls the Jingkang Incident (靖康之耻). Emperor Huizong and his son would be taken north in chains. The Northern Song would end.",
      "Standing on that embankment, I knew the date. I knew the timeline. I knew what was coming. And in my backpack, somehow still on my shoulder, I had three objects from a future nine hundred years away.",
      "A boy with a basket of steamed buns asked me, in a dialect I half understood, if I was lost. I realized I had to make a decision very quickly — not just about how to survive, but about whether to interfere. I was sixteen years old. I had skipped lunch. And the most consequential city in the twelfth century had just opened around me like a scroll.",
    ],
    pullQuote: "I knew the date. I knew the timeline. I knew what was coming.",
  },
  {
    slug: "three-gifts",
    number: 3,
    title: "Three Gifts From the Future",
    subtitle: "What I Carried Across Nine Centuries",
    era: "An inventory taken in a rented room above a tea house",
    paragraphs: [
      "I unpacked my backpack on the wooden floor of a room I had rented for three copper coins (the inn-keeper accepted my Apple Watch as collateral; I do not think he understood what it was, but he liked that it ticked). I laid out three objects.",
      "The first was the sealed vial — a thumb-sized cylinder of frosted glass containing a freeze-dried culture of Penicillium chrysogenum. My mother's lab had been preparing it for a teaching workshop. On its label, in her handwriting: \"Live. Keep cold. Reactivate in nutrient broth.\" Penicillin would not be discovered in the world I had just left until 1928 CE. In 1120 CE, infection killed more soldiers than swords did. Childbirth killed mothers by the millions. A scratch from a rusted nail could end an emperor.",
      "The second was my senior history project — a waterproof, printed manual on the history of gunpowder. Beside the text I had typed out, in plain Chinese and English, the modern formula (75% potassium nitrate, 15% charcoal, 10% sulfur, by weight) and design sketches I had copied for the report: a matchlock musket, a bronze field cannon, a star-shaped fortification, and the basic principles of rifling. Song-dynasty alchemists already knew gunpowder, but their formula was weak and they used it mostly for fireworks and signal rockets. The Jurchen cavalry that would destroy Bianjing in seven years would not survive a single charge against a line of matchlocks.",
      "The third was the sack of seed potatoes — ordinary, dirt-brown, beginning to sprout. They had been bound for my biology class, where we were studying vegetative propagation: how a potato, unlike a grain of wheat, is not a seed but a tuber, and how a single one cut into pieces becomes an entire harvest. In 1120 CE, the potato did not exist anywhere in Asia, Europe, or Africa. It was still a wild plant in the Andes of South America, on a continent no one in Bianjing knew was there. I was holding a crop from a hemisphere that, to the Northern Song, had not yet been imagined.",
      "I sat on the floor staring at the three things, and I understood, for the first time, what kind of weapon a tourist could become.",
    ],
    pullQuote: "I understood, for the first time, what kind of weapon a tourist could become.",
  },
  {
    slug: "the-vial",
    number: 4,
    title: "The Vial — A Cure That Arrived Eight Centuries Early",
    subtitle: "Penicillin in the Imperial Court",
    era: "Bianjing · Autumn 1120 — Summer 1122",
    paragraphs: [
      "The first life I saved with the vial was not an emperor's. It was a noodle-shop owner named Old Wang, whose foot had been crushed by a delivery cart and was turning the green-black color that, in 1120, meant a man had three days to live. I had cultured the Penicillium in rice broth on the windowsill of my rented room. I gave Old Wang the filtered liquid in a cup of millet wine, twice a day, for six days. On the seventh day he stood up and made me a bowl of beef noodles.",
      "Word travels fast in a city of a million people. Within three months I was being asked to see a silk merchant's daughter (childbed fever), then a magistrate's nephew (a stab wound gone septic), then a captain of the Imperial Guard (a horse-kick to the knee). I told everyone the same thing: the cure is a kind of mold. Keep it cool. Keep it clean. Wash hands with boiled water before touching a wound. I taught a young court physician named Li the cultivation method, then his apprentices, then theirs.",
      "In the spring of 1122, I was summoned to the Imperial Palace. Emperor Huizong's youngest son had developed a fever after a fall from a horse, and the court physicians had given up. The boy was eight. He recovered in eleven days. The Emperor, who had spent his life writing poems about peonies and painting birds, looked at me for a long time and said one word — 借 — \"lend.\" Lend us this knowledge. Lend us this cure.",
      "By 1125, the Imperial Bureau of Medicine had established mold-culture houses in every prefecture of the Northern Song. Battlefield mortality from infected wounds fell by an estimated 60%. Infant mortality fell by a third. Within ten years, the population of the empire would grow by an additional twenty million people — twenty million farmers, soldiers, scholars, and mothers who, in the timeline I had come from, would never have been born.",
      "Medicine is not the most glamorous of the three gifts. But it is the foundation. A nation that does not die from its own scratches can do everything else.",
    ],
    pullQuote: "A nation that does not die from its own scratches can do everything else.",
  },
  {
    slug: "the-manual",
    number: 5,
    title: "The Manual — Fire, Rewritten",
    subtitle: "Improved Gunpowder and the First Matchlocks",
    era: "Bianjing Arsenal · 1122 — 1126",
    paragraphs: [
      "Song-dynasty gunpowder, in 1120, was roughly 50% saltpeter, 25% sulfur, 25% charcoal. It burned. It did not, reliably, explode. The court used it for fireworks, signal flares, fire-arrows, and the occasional \"fire-spear\" — a bamboo tube of powder strapped to a polearm that mostly terrified its operator.",
      "The improved formula in my manual — 75% saltpeter, 15% charcoal, 10% sulfur — is one of the simplest and most important ratios in human history. It is the difference between a hand-warmer and a cannon. I gave the manual to a Master of the Arsenal named Shen, a quiet man who had spent thirty years trying to make better fire-spears. He read the page about saltpeter purification — recrystallization from water, three times — and did not speak for half an hour.",
      "Within a year, the Bianjing arsenal had cast its first bronze field cannons (the design I had copied was from a Ming-era piece three hundred years in the future). Within two years, they had built matchlock muskets — slow, heavy, smoky, and able to put a lead ball through any cuirass the Jurchen cavalry owned. Within three years, the Song frontier garrisons had a thousand of them.",
      "In the winter of 1125, the Jurchen Jin dynasty crossed the Yellow River, exactly as my history books had said they would. In the spring of 1126 they laid siege to Bianjing, exactly as they had in the original timeline. But this time, the walls of Bianjing were star-shaped (Master Shen had built two new bastions from my sketches), and the men on those walls had muskets and cannons, and the Jurchen cavalry — the most feared horsemen in Eurasia — broke against them like surf against stone.",
      "On the night the siege lifted, Master Shen sat with me on the eastern wall and watched the snow fall on the river ice. He said, in a voice I could barely hear over the wind: \"You have changed the shape of every war for the next thousand years.\" I told him I knew. I told him that was the part that kept me awake.",
    ],
    pullQuote: "You have changed the shape of every war for the next thousand years.",
  },
  {
    slug: "the-potato",
    number: 6,
    title: "The Tuber — Food That Multiplies in the Dark",
    subtitle: "Seed Potatoes and the End of Famine",
    era: "The terraced hills outside Bianjing · 1121 — 1130",
    paragraphs: [
      "The third object in my backpack was the strangest to explain, because it did not look like a marvel. It was a cloth sack of seed potatoes — ordinary, dirt-brown, slightly sprouting. I had been carrying them to my biology class, where we were studying how a potato is not really a seed at all: you cut one tuber into pieces, leave an \"eye\" on each piece, bury them, and every piece grows into a whole new plant. A crop that copies itself.",
      "I planted the first row on a thin, stony hillside outside the city that a farmer named Widow Cao had given up on years ago — land too poor for rice, too dry for good wheat. I showed her how to cut the tubers, how to hill the soil up around the stems. She thought I was burying good food in bad ground. Four months later we dug up the row, and she sat down in the dirt and did not speak, because one sack of seed had become eleven sacks of potatoes.",
      "That is the quiet miracle of the potato. It grows where the great grains cannot — cold uplands, terraced slopes, thin and stony soil, the marginal land that every Song prefecture had in abundance and no use for. Acre for acre it yields two to four times the calories of wheat or millet. It stores through winter in a cool cellar. It asks for poor land and pays back full bellies.",
      "Famine was the oldest enemy of every Chinese dynasty — older than the Jurchens, older than the Mongols. A single failed harvest emptied granaries, emptied villages, and filled the roads with desperate rebels. By 1130, potato fields climbed the hills of a dozen prefectures, and the court had noticed something simple and enormous: a fed peasant pays taxes, raises children who live, and, when the empire calls, marches. This was the lesson I had not understood when I packed my backpack. An emperor does not make a dynasty strong. A growing, fed, healthy population does. Food comes first; everything else is built on top of it.",
      "I stood on Widow Cao's hillside in the autumn of 1130 and looked at rows of a plant that, in the world I came from, would not reach China for another five hundred years. It was not a glamorous gift. It was only the difference between a country that shrinks in a hard winter and a country that does not. That difference, repeated across a hundred million people, is what history is actually made of.",
    ],
    pullQuote: "An emperor does not make a dynasty strong. A growing, fed, healthy population does.",
  },
  {
    slug: "the-new-timeline",
    number: 7,
    title: "The New Timeline",
    subtitle: "A Northern Song That Did Not Fall",
    era: "From 1127 onward · The history that should not have been",
    paragraphs: [
      "In the timeline I came from, 1127 is one of the most famous dates in Chinese history. The Jurchen Jin sack Bianjing. They capture Emperor Huizong, his son Qinzong, the entire imperial harem, and tens of thousands of officials and craftsmen. The Northern Song ends. A remnant court flees south and founds the Southern Song in Hangzhou, where it will survive — beautiful, cultured, militarily weak — until the Mongols destroy it in 1279.",
      "In the timeline I made, 1127 is the year the Jurchen Jin shattered against the walls of Bianjing and retreated into the steppe to lick wounds they could not heal. Emperor Huizong did not die in captivity. He abdicated in 1130 to his son Qinzong, who, advised by a council that now included a young scholar from a place called Boston, focused the empire's energy not on poetry and palace gardens but on roads, schools, mold-houses, arsenals, terraced potato fields, and a navy.",
      "In the timeline I made, Genghis Khan was born in 1162 on schedule — but the Mongol confederation he raised could not, in 1211, overrun a Song frontier defended by matchlocks, field cannons, and walled cities laid out in the star pattern. The Mongol invasions of Eastern Europe never reached as far west. The Black Death, which the Mongol trade routes had carried to the gates of Europe in the 1340s, did not arrive the same way or at the same scale.",
      "In the timeline I made, the Song dynasty did not become a Confucian fossil. A surviving empire whose population raced past two hundred million — fed by the potato on land that had grown nothing, kept alive by the vial — held the largest skilled workforce and tax base on Earth. It already had paper money, movable-type printing, the magnetic compass, gunpowder, and the world's most advanced ironworks. With two centuries of peace and people, it did not need a stranger's knowledge to industrialize; it only needed the stability and the hands to do it itself. By 1500, when European caravels reached the coast, they did not find a curious empire. They found a crowded, confident, gunpowder-armed one that had never been conquered.",
      "I do not know if this world is better than the one I came from. It is different. It is unrecognizable. A girl in a coastal port in the year 2026, looking at a museum case, would not see a scroll of Bianjing — she would see a photograph of the city, taken yesterday, by someone who lives there.",
    ],
    pullQuote: "They did not find a curious empire. They found one that had never been conquered.",
  },
  {
    slug: "reflections",
    number: 8,
    title: "Reflections — What I Owe the People in the Scroll",
    subtitle: "A 10th grader thinks about the ethics of changing the past",
    era: "Author's note, 2026",
    paragraphs: [
      "This is a fictional thought experiment for my World History class. I did not actually travel to 1120 CE. There is no vial. The seed potatoes are in a paper bag in our kitchen, and the gunpowder manual is on Google Docs.",
      "But the exercise is not pretend. Asking which three objects from 2026 would most change the Northern Song forces you to understand what the Northern Song actually was. The answer is not chopsticks and Confucianism. The answer is one of the most sophisticated economies in pre-modern world history — paper money, movable-type printing, magnetic compasses, the world's largest cities, a meritocratic civil service — held together by an army that could not, in the end, beat steppe cavalry, and by harvests that could fail. The answer is a civilization that almost made it out of the medieval world by itself.",
      "Why those three artifacts? Because each one repairs a different weakness without simply handing the empire a finished gift. Penicillin works because Song doctors already understood fermentation, already used moldy tofu on infected wounds, and already had a culture of empirical medicine — they were ready to receive it. Improved gunpowder works because Song alchemists had been refining saltpeter for two centuries and the imperial arsenal could cast bronze at scale; the modern formula is a single ratio they could verify in a week. The potato works because the Northern Song already farmed intensively — terraced hillsides, two crops a year, an experimental peasantry that adopted new rice strains within a decade. A miracle crop is useless without farmers ready to plant it. The Northern Song had farmers.",
      "Together the three form a kind of foundation. The vial keeps people alive; the potato feeds them; the manual defends them. And of the three, the potato may matter most, because population is the engine underneath everything else — every soldier, every farmer, every scholar and tax payment begins as a child who survived to grow up. A dynasty is strong not because its emperor is wise but because its people are many, fed, and healthy.",
      "What is the cost of changing the past? In the new timeline, Genghis Khan still lives — but his empire never spans Eurasia. Millions of people who died under the Mongol conquests do not die. But millions of people who would have been born in the world the Mongols made are also never born. There is no Yuan dynasty, no Marco Polo, no Ming voyages, no Manchu Qing. There is no United States as we know it, because the people who built it came from a Europe shaped by plagues and printing presses that came on a particular schedule. To save the Northern Song is to erase the world I grew up in. The girl in Boston in 2026, leaning over a museum case, would never have existed.",
      "I am not sure this is a trade I am allowed to make. I am not sure anyone is. The point of the project is not to discover three magical fixes for a dynasty; it is to feel the weight of how interlocking history really is. Every artifact in a museum case is also a casualty list and a birth certificate. The Northern Song fell, and that falling is the floor I am standing on. So I will leave the vial in the freezer, the gunpowder in the footnotes, and the seed potatoes in the kitchen — and try, for the rest of my education, to understand the past on its own terms instead of as a thing to fix.",
    ],
    pullQuote: "Every artifact in a museum case is also a casualty list and a birth certificate.",
  },
];

// The three artifacts (used by the Artifacts page).
export type Artifact = {
  id: "vial" | "manual" | "potato";
  symbol: string;
  englishName: string;
  chineseName: string;
  oneLine: string;
  description: string;
  whyItWorks: string;
  historicalImpact: string;
  realWorldNote: string;
};

export const artifacts: Artifact[] = [
  {
    id: "vial",
    symbol: "霉",
    englishName: "The Vial",
    chineseName: "青霉 · The Mold",
    oneLine: "A sealed culture of penicillin, eight centuries before Fleming.",
    description:
      "A frosted glass cylinder containing freeze-dried Penicillium chrysogenum, plus a waterproof printed handbook covering germ theory, antiseptic technique, and broth-fermentation cultivation.",
    whyItWorks:
      "Song-dynasty medicine was already empirical and already used moldy tofu on infected wounds. Doctors had the equipment (clay vessels, fermentation cultures, distillation) and the intellectual framework to receive the cure within weeks rather than centuries.",
    historicalImpact:
      "Battlefield mortality from infected wounds drops ~60%. Infant and maternal mortality drops ~30%. Population grows by an additional 20 million within a generation. The empire fields healthier armies and feeds more cities.",
    realWorldNote:
      "Penicillin was discovered by Alexander Fleming in 1928 — 808 years after this story. Northern Song physicians did use Aspergillus-fermented soybean preparations on infections; they were tantalizingly close.",
  },
  {
    id: "manual",
    symbol: "火",
    englishName: "The Manual",
    chineseName: "火药 · The Powder",
    oneLine: "The modern black-powder ratio and the first matchlock musket.",
    description:
      "A waterproof printed booklet: improved gunpowder (75% saltpeter / 15% charcoal / 10% sulfur), matchlock musket diagrams, bronze field-cannon designs, star-fort fortification plans, and basic infantry drill.",
    whyItWorks:
      "Song China already had gunpowder, large-scale bronze casting, and a culture of military engineering. The bottleneck was the formula and the firearm geometry — knowable in a week, manufacturable in a year.",
    historicalImpact:
      "The Jurchen Jin invasion of 1127 (which historically ended the Northern Song in the Jingkang Incident) breaks against musket and cannon fire. The dynasty survives. Star-fort fortification doctrine spreads. The Mongol cavalry revolution of the 1200s never achieves continental scale.",
    realWorldNote:
      "Matchlock muskets historically appear in China around 1450 CE and field cannons around 1350 CE. This artifact accelerates the firearms revolution by roughly 250–330 years.",
  },
  {
    id: "potato",
    symbol: "薯",
    englishName: "The Tuber",
    chineseName: "土豆 · The Potato",
    oneLine: "A sack of seed potatoes — the crop that turns poor soil into people.",
    description:
      "A burlap sack of seed potatoes (Solanum tuberosum) carried back from 2026, with a printed handbook on planting from cut tubers, hilling, crop rotation, and cool-cellar storage. A potato is not a seed: cut one into pieces, leave an \"eye\" on each, and every piece grows into a whole new plant — a crop that copies itself.",
    whyItWorks:
      "The potato thrives exactly where rice and wheat fail — cold uplands, thin soil, terraced hillsides, the marginal land no one farmed. It yields two to four times the calories per acre of grain. The Northern Song already had an intensive, experimental farming culture and a dense, skilled peasantry, and could adopt it within a single growing season.",
    historicalImpact:
      "Famine — the recurring killer of Chinese dynasties — loses its grip. Marginal land across every prefecture comes into production. Within two generations the population climbs past 200 million. And a fed population is the foundation of everything else: a tax base, a labor force, and an army. Population growth is dynastic strength.",
    realWorldNote:
      "The potato is native to the Andes of South America and did not reach China until around 1600 CE, carried by Spanish and Dutch traders. Historians credit the potato, sweet potato, and maize with China's population explosion under the Qing dynasty — from roughly 150 million to over 400 million people. Bringing it to 1120 advances that demographic revolution by nearly five centuries.",
  },
];
