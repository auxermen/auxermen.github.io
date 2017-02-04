// Pour construire de nouveaux objets
function question(answer, support, question, a, b, c, d) {
	this.answer = answer;
    this.support = support;
	this.question = question;
	this.a = a;
	this.b = b; 
	this.c = c;
	this.d = d;
	return this;
	}

// Le tableau des questions, réponses, options et explications
var units = new Array(
	new question("c","Pomagaj si tako, da stavek pretvoriš v trdilno obliko.","Mene ne bo na koncertu. V tej povedi je beseda mene ...","Predmet.","Osebkov predmet.","Osebek.","Prislovno določilo osebka."),
new question("b","Opazuj prilastke.","V osebku Dejanova mama Brigita Sivec je jedro ...","Dejanova","mama","Brigita","Sivec"),
new question("c","Dogovor: v zvezi dveh prislovov je prilastek desno.","V prislovnem določilu kraja včeraj popoldne je prilastek ...","Ni prilastka.","Včeraj.","Popoldne.","Oboje je prilastek."),
new question("a","Modalni glagoli so nepolnopomenski, zato za njimi stojijo povedkova določila.","Vsak dan moram jesti. V tej povedi je beseda jesti ...","Povedkovo določilo.","Prislovno določilo načina.","Povedkov prilastek.","Predmet."),
new question("c","Vprašaš se: Na kakšni predpostavki temelji?","Kaj vsebuje poved Knjiga temelji na predpostavki, da smo vsi izredni učenci.?","Predmetni odvisnik.","Osebkov odvisnik.","Prilastkov odvisnik.","Načinovni odvisnik."),
new question("c","","Ogrevanje je zelo pomembno, saj je treba mišice pripraviti na vadbo. Poved vsebuje ...","Posledično priredje.","Sklepalno priredje.","Pojasnjevalno priredje","Vzročni odvisnik."),
new question("d","Glagol biti zahteva povedkovo določilo.","Lani sem bila pogosto depresivna. Povedek je ...","Gol.","Priredno zložen.","Podredno zložen s prilastkom.","Podredno zložen z določilom."),
new question("a","","Pogosto sem depresivna. Prislovno določilo v tej povedi je ...","Iz prislova.","Iz predložne zveze.","Poved sploh nima prislovnega določila. ","Iz samostalnika."),
new question("c","","Vezalno priredje lahko izraža ...","Stopnjevanje in sočasnost dogodkov.","Samo sočasnost dogodkov.","Sočasnost in zaporednost dogodkov.","Posledico in sočasnost dogodkov."),
new question("d","","Katera združitev je pravilna? Odhitela sem nazaj. Znašla sem se na robu razpoke.","Odhitela sem nazaj, ker sem se znašla na robu razpoke.","Znasajoč se na robu razpoke sem odhitela nazaj.","Odhitejoč nazaj sem se znašla na robu razpoke.","Odhitela sem nazaj in se znašla na robu razpoke."),
new question("a","","Katera strnitev je pravilna? Opazila sem njegov prestrašen pogled. Še sama sem se ozrla.","Zaradi njegovega prestrašenega pogleda sem se še sama ozrla.","Opazila sem njegov prestrašen pogled in se še sama ozrla.","Ozirajoč se sem opazila njegov prestrašen pogled.","Ker sem opazila njegov prestrašen pogled, sem se še sama ozrla."),
new question("d","","Dopolni tako, da bo drugi stavek izražal pojasnilo. Nesrečna sem, ...",", ker sem predebela.",", zato bom jedla sladoled.",", torej so vsi ostali srečni.",", saj me je udarila strela."),
new question("c","Kadar uporabljamo, če stavek izraža ponavljajoča dejanja.","Katera poved je pravilna?","Kadar si me včeraj pozdravil, si me zelo osrečil.","Ko sem hodil na zmenke, je bila mama zaskrbljena.","Kadar sem odhajal od doma, sem vedno dobil liziko.","Vedno, ko sem iskal dekle na spletu, sem ostal praznih rok."),
new question("c","Čigar uporabljamo pri človeku moškega spola.","Katera poved je pravilna?","Hočem denar, katerega čakam že tri dni.","To ni osel, čigar sliko sem videl!","Ti si moški, čigar podobo sem videla v sanjah.","Jože ima rad Štefana, ki mu je posodil denar."),
new question("d","","Sicer pa to ni največje drevo na Zemlji. Je drugo največje. Kakšno je pomensko razmerje?","Posledično.","Naštevalno.","Pojasnjevalno.","Protivno."),
new question("a","","Edwin Scholes, ornitolog s Cornellove univerze, je pravi lepotec. V tem stavku je ...","Pristavek.","Polstavek.","Pastavek.","Vrinjen stavek."),
new question("c","","Sanjala sem o duhu. Strašil me je še cel dan. Sredstvo navezovanja je ...","Kazalni zaimek.","Osebni zaimek.","Osebna glagolska oblika.","Parafraza."),
new question("a","","Nadaljuj, da bo nastalo protivno priredje. Skupina res ni bila številna ...",", a je bila zato toliko bolj izkušena.",", niti nismo bili dobro organizirani.","in lahko smo si ogledali mnogo vrhov.",", torej bi morali priti do vrha."),
new question("c","","Črni medved, v plečih visok 1,5 m, je iskal kaj za pod zob. Stavek vsebuje ...","Pristavek.","Pastavek.","Polstavek.","Vrinjen stavek."),
new question("b","","Prvič in zadnjič uporabljam ta neumen program. Prislovno določilo je ...","Golo.","Priredno zloženo.","Podredno zloženo z desnim prilastkom.","Podredno zloženo z levim prilastkom.")

	);
