walk(document.body);

document.title = replaceText(document.title);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{

	// Millennial
	v = v.replace(/\bMillennial\b/g, "Usurper");
	v = v.replace(/\bmillennial\b/g, "Usurper");
	v = v.replace(/\bMillennials\b/g, "Usurpers");
	v = v.replace(/\bmillennials\b/g, "usurpers");
	v = v.replace(/\bMillennials'\b/g, "Usurpers'");
	v = v.replace(/\bmillennials'\b/g, "usurpers'");

	// Barack Obama
	v = v.replace(/\b(?:(?:President Barack Obama)|(?:Barack Obama)|(?:President Obama)|(?:Obama))\b/g, "the Archon");
	v = v.replace(/\b(?:T|t)hanks(,) Obama\b/g, "Praise the Archon!");

	// Boomers
	v = v.replace(/\bbaby boomers\b/g, "the patricians");
	v = v.replace(/\bBoomers\b/g, "the Patricians");
	v = v.replace(/\bthe boomer generation\b/g, "the patrician class");

	// Political Parties & Government
	v = v.replace(/\bGOP\b/g, "The Black Cabal");
	v = v.replace(/\bRepublicans\b/g, "Unclean Monks");
	v = v.replace(/\bDemocrats\b/g, "Sluggards");
	v = v.replace(/\bthe White House\b/g, "The Wicked Heath");
	v = v.replace(/\bWhite House\b/g, "Wicked Heath");
	v = v.replace(/\bSecretary of State\b/g, "Lord of War");
	v = v.replace(/\bSupreme Court\b/g, "Justicar");
	v = v.replace(/\bObamacare\b/g, "The Blood Tax");
	v = v.replace(/\bthe Affordable Care Act\b/g, "The Blood Tax");
	v = v.replace(/\bthe ACA\b/g, "The Blood Tax");

	// Political Systems
	v = v.replace(/\bcapitalism\b/g, "rapine");

	// Celebrities
	v = v.replace(/\bKim Kardashian\b/g, "She Who Thirsts");
	v = v.replace(/\bBeyoncé\b/g, "The Faerie Queene");
	v = v.replace(/\bKe$ha\b/g, "Our Lady of Glittering Wisdom");
	v = v.replace(/\bKesha\b/g, "Our Lady of Glittering Wisdom");
	v = v.replace(/\bMiley Cyrus\b/g, "The Dark Lady");
	v = v.replace(/\bTaylor Swift\b/g, "The Fair Lady");
	v = v.replace(/\bChanning Tatum\b/g, "Lord Byron");
	v = v.replace(/\bPope Francis\b/g, "The Hooded One");
	v = v.replace(/\bPope\b/g, "The Hooded One");
	v = v.replace(/\bGeorge RR Martin\b/g, "He who dines on sorrow");
	v = v.replace(/\bGeorge R. R. Martin\b/g, "He who dines on sorrow");
	v = v.replace(/\bGeorge R.R. Martin\b/g, "He who dines on sorrow");
	v = v.replace(/\bBill Cosby\b/g, "Tom Rakewell");
	v = v.replace(/\bLena Dunham\b/g, "The Eternal Child");

	// Countries & World Leaders
	v = v.replace(/\bAngele Merkel\b/g, "The Governess");
	v = v.replace(/\bGreece\b/g, "the Southron Plague");
	v = v.replace(/\bGermany\b/g, "Our Teutonic Masters");
	v = v.replace(/\bIran\b/g, "Our Tentative Allies to the East");
	v = v.replace(/\bUSA\b/g, "The Labyrinth");
	v = v.replace(/\bUS\b/g, "The Labyrinth");
	v = v.replace(/\bAmerica\b/g, "The Labyrinth");
	v = v.replace(/\bThe United States\b/g, "The Labyrinth");
	v = v.replace(/\bthe United States\b/g, "the Labyrinth");
	v = v.replace(/\bAmerican\b/g, "Labyrinthine");
	v = v.replace(/\bMexico\b/g, "New Azteca");
	v = v.replace(/\bMexican\b/g, "New Aztecan");
	v = v.replace(/\bLatinos\b/g, "Banditi");
	v = v.replace(/\bHispanics\b/g, "Banditi");
	v = v.replace(/\bLatinas\b/g, "Banditi");
	v = v.replace(/\bLatin@s\b/g, "Banditi");

	// Candidates
	v = v.replace(/\bDonald Trump\b/g, "The Resplendent One");
	v = v.replace(/\bHillary Clinton\b/g, "The Dowager, Lady Cuckold");
	v = v.replace(/\bTed Cruz\b/g, "Mad Theodore");

	// Nerds
	v = v.replace(/\bComic Con\b/g, "Vauxhall Pleasure Gardens");
	v = v.replace(/\bSan Diego Comic Con\b/g, "Vauxhall Pleasure Gardens");
	v = v.replace(/\bSDCC\b/g, "Vauxhall");
	v = v.replace(/\bsapiosexual\b/g, "deviant");
	v = v.replace(/\bGame of Thrones\b/g, "Illustrated Review of Phantasmagoria");

	// Websites & Apps
	v = v.replace(/\bBuzzfeed\b/g, "Smith’s Friendly Companion & Illustrated News");
	v = v.replace(/\bHuffington Post\b/g, "The Shrill Crier’s Tatler");
	v = v.replace(/\bHuffPo\b/g, "The Shrill Crier's Tatler");
	v = v.replace(/\bFacebook\b/g, "The Black Market");
	v = v.replace(/\bTwitter\b/g, "Hangman’s Square");
	v = v.replace(/\bTinder\b/g, "the harlot’s mirror");
	v = v.replace(/\bWall Street Journal\b/g, "The Englishwoman’s Domestic Magazine");
	v = v.replace(/\bsocial media\b/g, "the penny dreadfuls");

	// Hipsters
	v = v.replace(/\bartisinal\b/g, "thrice-cursed");
	v = v.replace(/\bhand crafted\b/g, "thrice-cursed");
	v = v.replace(/\bhipster\b/g, "madman");
	v = v.replace(/\biPhone\b/g, "iron valet");
	v = v.replace(/\bapple watch\b/g, "Devil’s timepiece");
	v = v.replace(/\bkale\b/g, "nightsoil");
	v = v.replace(/\bjuice cleanse\b/g, "self-mortification");
	v = v.replace(/\bfarmer’s market\b/g, "garden of unearthly delights");
	v = v.replace(/\bgluten\b/g, "miscegenated oats");
	v = v.replace(/\bgluten-free\b/g, "purified by fire");
	v = v.replace(/\borganic\b/g, "virginal");
	v = v.replace(/\bCeliac Disease\b/g, "The Curse of Manna");

	// Slang
	v = v.replace(/\bbae\b/g, "departed beloved");
	v = v.replace(/\bon fleek\b/g, "forgotten by those who walk in daylight");
	v = v.replace(/\bfuckboy\b/g, "bravo");
	v = v.replace(/\bratchet\b/g, "plebeian");
	v = v.replace(/\bmetrosexual\b/g, "dandy");
	v = v.replace(/\bfuck buddy\b/g, "slattern");
	v = v.replace(/\bbromance\b/g, "buggery");
	v = v.replace(/\bYOLO\b/g, "I Pledge My Life to Sin!");
	v = v.replace(/\bFOMO\b/g, "Fear of Marching Ottomans");
	v = v.replace(/\bom nom nom\b/g, "FEAST, YOU DOGS!");
	v = v.replace(/\bnom nom nom\b/g, "FEAST, YOU DOGS!");
	v = v.replace(/\bwalk of shame\b/g, "the libertine’s burden");
	v = v.replace(/\bhook-up\b/g, "dalliance");
	v = v.replace(/\bweed\b/g, "Layabout’s Leaf");
	v = v.replace(/\bmarijuana\b/g, "Layabout’s Leaf");
	v = v.replace(/\bpot\b/g, "Layabout’s Leaf");
	v = v.replace(/\bcannibis\b/g, "Layabout’s Leaf");

	// Tumblr
	v = v.replace(/\bsocial justice warrior\b/g, "Lysistratians");
	v = v.replace(/\bSJW\b/g, "Lysistratians");
	v = v.replace(/\bfan-fiction\b/g, "slander");
	v = v.replace(/\bfanfic\b/g, "slander");
	v = v.replace(/\bfanfiction\b/g, "slander");
	v = v.replace(/\btumblr\b/g, "sapphic palace of delights");
	v = v.replace(/\bMRA\b/g, "Eunuch-Warrior");
	v = v.replace(/\bMen's Rights Activist\b/g, "Eunuch-Warrior");
	v = v.replace(/\bMen's Rights\b/g, "Eunuch-Warriors");
	v = v.replace(/\bmen's rights\b/g, "eunuch-warriors");
	v = v.replace(/\bmeninist\b/g, "eunuch-warrior");

	// Assorted
	v = v.replace(/\bcrime\b/g, "sin");
	v = v.replace(/\bcriminal\b/g, "sinner");
	v = v.replace(/\brehab\b/g, "golden tower");
	v = v.replace(/\brager\b/g, "masquerade");
	v = v.replace(/\brave\b/g, "masque");
	v = v.replace(/\bDJ\b/g, "Mad Piper");
	v = v.replace(/\bironic\b/g, "obscene");
	v = v.replace(/\bblowjob\b/g, "Maw of Madness");
	v = v.replace(/\bstunt double\b/g, "pain twin");
	v = v.replace(/\bmom\b/g, "cursèd breeder");
	v = v.replace(/\bmoms\b/g, "cursèd breeders");
	v = v.replace(/\bminions\b/g, "mongrels");
	v = v.replace(/\bCatholic\b/g, "Papist");
	v = v.replace(/\bCorgy\b/g, "Fel-Beast");

	return v;
}
