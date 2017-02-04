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
	new question("a","","»Mizar izdeluje leseno mizo.« Osebek je","mizar.","izdeluje.","leseno.","mizo."),
new question("b","","»Mizar izdeluje leseno mizo.« Povedek je","mizar.","izdeluje.","leseno.","mizo."),
new question("c","","»Ups, tega nisem storil namerno.« Poved vsebuje","pristavek.","polstavek.","pastavek.","vrinjeni stavek."),
new question("d","","»Moje sanke, stare 5 let, so mi zelo všeč.« Poved vsebuje","pastavek.","vrinjeni stavek.","pristavek.","polstavek."),
new question("a","","»Iz hladilnika mi prinesi jogurt, velikega.« Poved vsebuje","pristavek.","pastavek.","vrinjeni stavek.","polstavek."),
new question("b","","»Včeraj sem opravil izpit.« Poved vsebuje","prislovno določilo načina.","prislovno določilo časa.","prislovno določilo kraja.","prislovno določilo vzroka."),
new question("c","","»Prijaviš se lahko na internetu.« Poved vsebuje","prislovno določilo načina.","prislovno določilo časa.","prislovno določilo kraja.","prislovno določilo vzroka."),
new question("d","","Soredje je razmerje med","vrinjenim stavkom in glavnim stavkom.","pristavkom in glavnim stavkom.","polstavkom in glavnim stavkom.","pastavkom in glavnim stavkom."),
new question("a","","Ujemanje je razmerje med","osebkom in povedkom.","povedkom in predmetom.","osebkom in predmetom.","povedkom in prislovnim določilom."),
new question("b","","Vezava je razmerje med","osebkom in povedkom.","povedkom in predmetom.","osebkom in predmetom.","povedkom in prislovnim določilom."),
new question("c","","Primik je razmerje med","osebkom in povedkom.","povedkom in predmetom.","povedkom in prislovnim določilom.","osebkom in predmetom."),
new question("d","","V besedni zvezi »danes zjutraj« je","»danes« desni prilastek, »zjutraj« jedro.","»danes« levi prilastek, »zjutraj« jedro.","»danes« jedro, »zjutraj« levi prilastek.","»danes« jedro, »zjutraj« desni prilastek."),
new question("a","","»Film si želim ogledati v kinu.« Poved","vsebuje povedkovo določilo.","vsebuje povedkov prilastek.","vsebuje goli povedek.","ne vsebuje povedka."),
new question("b","","»Tone zadovoljno gleda v spričevalo.« Poved","vsebuje povedkovo določilo.","vsebuje povedkov prilastek.","vsebuje goli povedek.","ne vsebuje povedka."),
new question("c","","»Prišel je k meni, da bi izvedel kaj novega.« Odvisnik v povedi je","časovni.","osebkov.","namerni.","dopustni."),
new question("d","","»Kupil sem novo opremo, ki mi je zelo všeč.« Odvisnik v povedi je","časovni.","osebkov.","namerni.","prilastkov."),
new question("a","","»Tina dela domačo nalogo in posluša glasbo.« Priredje je","vezalno.","ločno.","pojasnjevalno.","sklepalno."),
new question("b","","»Veliko se je učil, a je vseeno dobil slabo oceno.« Priredje je","vezalno.","protivno.","pojasnjevalno.","sklepalno."),
new question("c","","»Ko so končali z delom, so odšli praznovat.« Izberi pravilno strnitev v enostavčno poved.","Po končanem delu, so odšli praznovat.","Praznovat so odšli, ko so končali z delom.","Po končanem delu so odšli praznovat.","Ko so končali z delom so odšli praznovat."),
new question("d","","»Delavci so zgradili most.« Stavek je","trpni.","trpno-tvorni.","tvorno-trpni.","tvorni."),
new question("a","","»Most je bil zgrajen.« Stavek je","trpni.","trpno-tvorni.","trpno-tvorni.","tvorni."),
new question("b","","»Kdo je skuhal čaj?« Intonacija je","rastoča.","padajoča.","vzklična.","nekončna."),
new question("c","","»Ti si kriv!« Intonacija je","rastoča.","padajoča.","vzklična.","nekončna."),
new question("d","","»Si ti skuhal čaj?« Intonacija je","padajoča.","vzklična.","nekončna.","rastoča."),
new question("a","","»Za izdelavo palačink potrebuješ štiri stvari. Pripravi si jajca, moko, mleko in sol.« Besedna zveza »štiri stvari« je","napovednik.","naveznik.","nanašalnica.","sredstvo navezovanja."),
new question("b","","»Po svetu narašča število mravelj. Teh je največ v Rusiji.« Beseda »mravelj« je","napovednik.","nanašalnica.","naveznik.","sredstvo navezovanja."),
new question("c","","»Po svetu narašča število mravelj. Teh je največ v Rusiji.« Beseda »teh« je","napovednik.","nanašalnica.","naveznik.","sredstvo navezovanja."),
new question("d","","»Jure je sedel pri mostu. Bil je ves nesrečen.« Aktualnostno razmerje med povedma je","navezovanje na jedro.","navezovanje na celotno prvo poved.","izpeljava jedra.","izpeljava izhodišča."),
new question("a","","»Jure je sedel pri mostu. Tam je sedel tudi njegov prijatelj.« Aktualnostno razmerje med povedma je","navezovanje na jedro.","navezovanje na celotno prvo poved.","izpeljava jedra.","izpeljava izhodišča.")

	);
