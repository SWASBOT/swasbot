﻿/*========CLEAR CONSOLE==========*/
console.clear();
/*==========DISCORD.JS===========*/
const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client();
const figlet = require('figlet');
const colors = require('colors');
const readline = require('readline');
const commando = require(`discord.js-commando`);
const moment = require("moment");
require("moment-duration-format");
let os = require('os')
const prefix = ".";
/*==========CONFIG.JSON===========*/
const config = bot.config = require('./config.json'); // Global config file
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[!] >> Démarrage du bot en cours...\n[!] >> Nom du bot: ${config.bot_name}\n[!] >> Préfix du bot : ${config.prefix}`);

/*==============================*/
/*/ Démarrage des events /*/
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});
/*/ Fin des chargements des events /*/
/*==============================*/


bot.on("ready", () => {
	console.log("\n[!] >> La connexion aux serveurs Discord est prête.");
});

bot.on('ready', () => {
  bot.user.setActivity('『→』; "𝚂𝚆𝙰™ 𝙶𝚎́𝚗𝚎́𝚛𝚊𝚝𝚎𝚞𝚛', {url:"https://www.twitch.tv/selfbot", type: "PLAYING"})
});




bot.on('message', msg => {

if(msg.author.bot) return;

  if(msg.channel.type === "dm") return;

  if (msg.content === '.spotify') {

var answers = [
  'peterfleming2001@gmail.com:peter2001',
  'dayanaraado@gmail.com:POWPOW2001',
  'scarlett1241@gmail.com:snoopy1241',
  'Astrofreak74@yahoo.com:scorpio74',
  'cppelegado2012@gmail.com:pinkmenace',
  'alanbruton12@gmail.com:Louise1',
  'chloe.santamaria@gmail.com:chouwchouw',
  'davyhayes@gmail.com:Erinkeogh1',
  'kapuscinski.maciej@gmail.com:Serdpkt5',
  'williswood1@gmail.com:1wyoming',
  'janahageman@gmail.com:Remington1',
  'denniselliott1@mac.com:murphy123',
  'ecuffe11@gmail.com:ballinaroad',
  'aaroncollins515@gmail.com:tigers86',
  'endaec14@gmail.com:enda14',
  'heidikniceley06@gmail.com:heidi4256',
  'rhigginsthornton@gmail.com:rhonda',
  'buller.pedersen@gmail.com:b12321232',
  'cherilyndimond@gmail.com:Nakkoo2112!',
  'richmondcouture@gmail.com:falc00n1',
  'uk.dimitar@gmail.com:8u7y6t5r4e',
  'bianharis@gmail.com:Jerman1an',
  'agnes.oski@gmail.com:legnicka242',
  'marsquijano1108@gmail.com:jesusmary1108',
  'emaleapagano79@gmail.com:emalea2004',
  'backerjannik@gmail.com:jannik123',
  'cantallada@gmail.com:turanano',
  'dannywalsh99@gmail.com:jonjoshelvey',
  'iamjapzs27@gmail.com:Japz22795',
  'lisswyant@gmail.com:Lisswyant1',
  'breezley1996@gmail.com:Usawrestling1996',
  'jungjuyeon1007@gmail.com:wjdwndus1004',
  'mikekeane911@gmail.com:mike1996',
  'iris.pelaez3@gmail.com:Veintitres23.',
  'giantariz@gmail.com:tsikou18',
  'crazymantpa@gmail.com:trentonalbert',
  'alessandrocarnesecca@gmail.com:Jwill1990',
  'cvenegasf@gmail.com:tmtn3168',
  'luiz80@uol.com.br:cida220878',
  'smartomboc@gmail.com:april192017',
  'Rachel_lyn_14@yahoo.com:sexyry8n',
  'darrenkelly29@gmail.com:daread78',
  'jakob.jbecker@gmail.com:freundin025',
  'meredith.cheryll@gmail.com:Clarence',
  'radekmachalica@gmail.com:macha123',
  'niallmhiggins@gmail.com:nh0642NH',
  'rattler_2021@yahoo.com:roma2021',
  'donalgiltinan@gmail.com:Dg0876124919',
  'danish.nizar@gmail.com:lavendar22',
  'jlkgiordano@sfr.fr:jlk210608',
  'sunshinecapao@gmail.com:sj112308',
  'lussier.pamela@hotmail.com:famille716',
  'boblewis1975@gmail.com:ihatejlg',
  'amamra.mehdi@gmail.com:Inaya2010',
  'coolersquid@gmail.com:Murphy99',
  'c.leonardi94@gmail.com:chiaretta19',
  'jacqueline.schneider9480@gmail.com:joker9480',
  'carlo.beyme@gmail.com:Leonie10',
  'castydimpy@gmail.com:quizmundo',
  'bryanrovi@gmail.com:geryan2001',
  'hermpecib@gmail.com:hermpe01',
  'sharonmaygamboa@gmail.com:Drmyatz*053182',
  'momo.ly78280@gmail.com:lamine78280',
  'adammc661@gmail.com:Liverpool66',
  'heatherflowers2192@gmail.com:Heather1',
  'ornlev2@gmail.com:ol95ll87',
  'raulfnmartins@gmail.com:presario',
  'kianob2205@gmail.com:kobster1234',
  'megansmailslot@gmail.com:ewqjklcxzo0',
  'semark180@gmail.com:liver0911',
  'joni.aling@gmail.com:opium3688',
  'bgunnarjonsson@gmail.com:Laxbacken1924',
  'mlarcomcooper@gmail.com:michael1992',
  'camille.troussard@orange.fr:mimivoile35',
  'dp.paye@gmail.com:payeder1',
  'aidanlong50@gmail.com:Al19961306',
  'claudioalemos@gmail.com:dw120999',
  'pmcdonagh01@gmail.com:connie01',
  'ahmed.ali.kharusi@gmail.com:ahmed9089',
  'jamesbishop6529@gmail.com:Bishop6529',
  'kaibitz1972@gmail.com:biakpm1972',
  'seancarrolldublin@gmail.com:arsenal09',
  'darthjake2006@gmail.com:John0331',
  'srbrown1964@hotmail.co.uk:mk1capri',
  'yelitza14.yp@gmail.com:El102334',
  'diarmuidomahony@gmail.com:social11',
  'brendankeogh99@gmail.com:goodie99',
  'brwhise@gmail.com:Beckbri2005',
  'heyo2theg@aol.com:tannertan2',
  'markdecap@gmail.com:Johnshannow1',
  'ditiana.casker@gmail.com:hellothere23',
  'cathalmadden@gmail.com:Koer0588',
  'o.brienrichard2001@gmail.com:warrenstown1',
  'emerellens20@gmail.com:Blarney01',
  'trishpsyche@gmail.com:EllieGonzales03',
  'davidpdalton11@gmail.com:FI11121975',
  'mbr503@gmail.com:Juanmao7201',
  'justin.speksnijder@gmail.com:Feyenoord01',
  'davesavagejr84@gmail.com:tiana1984',
  'paulina_d@me.com:verboten',
  'reeyapalma@gmail.com:alme1229mine',
  'kholidsabana@gmail.com:91318231',
  'alon87y@gmail.com:93931838alon',
  'tiryakiugur1@gmail.com:011066',
  'emrekutucu@gmail.com:251090ktc',
  'biancakramer7@gmail.com:med75bia',
  'pet2.horvath@gmail.com:pocokkA22',
  'ivan.serrano.diaz@gmail.com:sabina',
  'o.trunce@gmail.com:losdeabajo1',
  'inne.ong@gmail.com:odysseus23',
  'whitneyhparks@gmail.com:lkp121706',
  'jraznick@gmail.com:jennifer',
  'fakemachine91@gmail.com:insane1905',
  'emmajanestevens@live.com:clchello1',
  'megraso@gmail.com:Kindnikki1234',
  'ssmesia@gmail.com:metallica2312121',
  'philbicher@gmail.com:nordsee01',
  'luceydan@gmail.com:qweasd123',
  'langowski99@freenet.de:gdynia99',
  'stephenh38@gmail.com:munster123',
  'gabrielfreijo@gmail.com:odin2269',
  'herwig.null@gmail.com:hello123456789',
  'cogorman96@gmail.com:kilbolane',
  'smcorporon@gmail.com:jameswyattburch',
  'gerardomendozamondragon@gmail.com:mgme9109',
  'dewolk1@yahoo.com:Spijker73',
  'unimas2002@gmail.com:wira1996',
  'kheke02@gmail.com:tron1234',
  'cyb3rdude@yahoo.com.sg:QPBy5826',
  'alejandrogbenito@gmail.com:al070490',
  'ericksalisbury@gmail.com:Hemi2008',
  'domoreyoga@gmail.com:Namaste99',
  'dentonjthomas@gmail.com:thomas04',
  'br.wetli77@gmail.com:Gold78en',
  'jfarrellavfc@gmail.com:far09273859',
  'kkween25@gmail.com:Chris0625',
  'ijssorensen@gmail.com:deadpool25',
  'luca.ildebe@gmail.com:deep4ever',
  'majacasson@gmail.com:cowboy000',
  'chainmusic13@gmail.com:Masseffect3',
  'damienphillips20@gmail.com:damien20',
  'dustin-kortholt@web.de:W7a8OpS2',
  'dangun21@hotmail.de:dan21gun',
  'noezuliani@gmail.com:carmas123',
  'martin.goetsch@tmo.at:Manuel2904',
  'wazza_is@hotmail.com:wazza146',
  'zsegora.zsofia@gmail.com:zszs80',
  'blacker112@gmail.com:concerto112',
  'Juliruarte_mza@hotmail.com:bautista2',
  'patricio.garcia@hospitalitaliano.org.ar:aitor1980',
  'pggklasen@home.nl:IvanaKlasen01',
  'taher.okasha@gmail.com:fahitax20',
  'davidu@solidsupport.com.au:Spider01',
  'balazs.patko@gmail.com:1986Pbnn',
  'smcollins305@gmail.com:Beefstew1979',
  'sgaffney4@gmail.com:salerno11',
  'apb83@hotmail.com:2502Bienne',
  'tibor.losonczy@gmail.com:Lositib2',
  'lun286729@gmail.com:Mlccu8pp',
  'carmel_connolly@yahoo.ie:craughwell2425',
  'elemperador129@yahoo.com.ar:lolaimanol',
  'mogalenoria@gmail.com:0763103916',
  'mashood_fbakery@yahoo.com.my:Mashood1234',
  'kim.jenni@bluewin.ch:Kj190689!',
  'thetorpedo@gmail.com:starbuck',
  'feroula@gmail.com:r3pkxijk',
  'dj_ireland@hotmail.com:sexonastik',
  'day-tdf@hotmail.com:15469134Dy',
  'antoine.goldo@gmail.com:maman?',
  'azrlakbr@gmail.com:azriel0610',
  'robgrover1988@hotmail.com:25567518',
  'scn419@gmail.com:mirna123',
  'kojotnik381@seznam.cz:aiwprton',
  'gfariase@yahoo.com.ar:eltecla',
  'debby@imanselelies.nl:Merostar79',
  'ptkdave88@gmail.com:johnjake10',
  'sabrina.timmer@googlemail.com:76Wolken',
  'andresbassetto@yahoo.com.ar:ahb343',
  'roberto6040@gmail.com:skreech6040',
  'salzmann.Christina@gmail.com:mogli1234',
  'xokasabs@yahoo.com:ortopedia',
  'valle.maroto@palde.eu:Perseida1',
  'mdebier@skynet.be:mike8842',
  'elvinyew@yahoo.com:y67e34w23',
  'djescape@live.com.au:Gateway2',
  'marco.diomedi@yahoo.it:lucatoni89',
  'janzurek@gmx.de:angolika098',
  'seventh_burn@hotmail.com:bastarda',
  'johanna_1012@hotmail.fr:Johanna74',
  'email@michaelolesen.com:k1k3k2k4',
  'jamie.knight28@gmail.com:1109jrfk',
  'nitram4200@gmail.com:Fourtytwo42',
  'gedo.tibor@gmail.com:gedotibor',
  'bakuuu@hotmail.com:kryptokoryn@',
  'marinaolveira@gmail.com:latahona',
  'mdkyap@gmail.com:kaiklian',
  'amilgr@yahoo.gr:marka22',
  'l_halewyck@hotmail.com:B3QXA667',
  'simply_bay@yahoo.com.sg:aslk13jhdf',
  'karenhogan2603@gmail.com:Laura1992',
  'saphyre76@hotmail.com:bootymoma10',
  'schmitt-jacobs@gmx.de:.ssj.!',
  'sophieantonie@hotmail.se:Jumjum1985',
  'schom116@umn.edu:tndaddjn8',
  'umutku@gmail.com:jumjumjum',
  'gangazumba.um@gmail.com:laphroaig51',
  'yuwonoprobo@gmail.com:gombol947',
  'armand.gourgeon@gmail.com:armandino',
  'margret.andres@bluewin.ch:lo9lo9lo9',
  'mbotelli2002@yahoo.com.ar:zoecita',
  'theo.giacobetti@gmail.com:dispa590',
  'gaynorinoz@gmail.com:Ronnie62',
  'm_fassina@yahoo.com.ar:marito06',
  'cadiz2846@hotmail.com:sandrydany',
  'riaz_wan@yahoo.com.my:riaz1987',
  'msangie474@gmail.com:ama07057',
  'Margotz192@gmail.com:estrabismo',
  'Rune.brannstrom@gmail.com:cleyerty',
  'thomaschaigneau@gmail.com:Abrial54',
  'wilquin.jb@hotmail.fr:patounet96',
  'raza.steffy@gmail.com:nionja94',
  'raulfraile1977@gmail.com:Pepa2012',
  'jonathan.klawir@consejo.org.ar:grientos',
  'marisolp.perez@gmail.com:dilanteamo',
  'andrew@webidiot.net:AtomBoy7',
  'kidlat_08@yahoo.com:april03',
  'cilando@live.com.au:Forgive7',
  'arianto.kosasih@gmail.com:altamirano',
  'adam-szeliga89@o2.pl:kiniutek1',
  'tobias.sievert@bluewin.ch:aefka1234',
  'Tina.dillon17@gmail.com:Charlie12',
  'gan_liang_an2@yahoo.com.sg:06111989',
  'gbcoy@unimelb.edu.au:jac31881',
  'akmalnasrudin@yahoo.com:nokia3500',
  'cynthia_arnaud@yahoo.fr:q36byxp4',
  'rakel_333@hotmail.com:rakel333',
  'Giferronatopando@gmail.com:televisor03',
  'dror.job@gmail.com:dejj3315',
  'laura-popp96@web.de:laurapopp',
  'breynardquintong@yahoo.com:D3mosthenes',
  'm.demarchi33@gmail.com:doorsrafale33',
  'div73@icloud.com:Apple5062',
  'frans.felix@telenet.be:Tarkan5625',
  'mferrerm@gmail.com:fervid',
  'juliebarancourt1@gmail.com:novembre24',
  'bj.segopolo@gmail.com:BoiJoy01',
  'justine@nztravelbrokers.co.nz:jaybee69',
  'romas@poczta.fm:pppppp12',
  'betsys@cinci.rr.com:208hanover',
  'gsande@perezsande.com.ar:jrps3333',
  'mancin@vp.pl:pienio1987',
  'tito.batubara@gmail.com:password',
  'jennal.ames@gmail.com:thisisit1985',
  'Riakilla@hotmail.com:kamleh-86',
  'michellemcguiremor@gmail.com:michelle7',
  'haaslucas8@gmail.com:1228ganja',
  'manu.oester@gmx.ch:07121980',
  'fsguevarajr@yahoo.com:acksyn12',
  'sarannejames@tirohanaestate.com:bbp0dding',
  'oliviashum@gmail.com:y2872240',
  'davelee_99@yahoo.com:6bloom16',
  'csongedi.katalin@csongediestsa.hu:Gyurika45',
  'vitttta@gmail.com:zveriukas',
  'marc.legrand581@gmail.com:Musthave78',
  'eljohn_guanlao@yahoo.com:kluyvera08',
  'stevejconroy@gmail.com:arsenal1',
  'radoslaw@pietrasik.eu:zlotaja02',
  'halek17kg@gmail.com:kaszanka12',
  'espeva@bluewin.ch:Cliford1219',
  'fernandozapiola@yahoo.com.ar:curtido',
  'vytiskova.iveta@gmail.com:Jokinek121',
  'wilmotte@hotmail.com :TITI5552007',
  'tina_22_@hotmail.com:mslsavio1507',
  'bigmamma1957@yahoo.com:dylan2011',
  'epodlipa@gmail.com:e1r40i319k94',
  'attilamatis12@gmail.com:freewind',
  'martin@rescon.co.za:bosveldplaas50',
  'sgee227@gmail.com:Lulu1973',
  'thomash24@gmail.com:snickers',
  'duck44ster@gmail.com:P@ssw0rd123',
  'dereggedavy@telenet.be:subaru00',
  'naqibaheleena@hotmail.co.uk:kikim0618',
  'adam.rippon@sydneytech.com.au:L1am0805',
  'peisert@gmx.de:786341',
  'finchop@gmail.com:tummycar182',
  'ashleykent49@gmail.com:ashley49',
  'queonda_punk@hotmail.es:007500oscar',
  'juliemaher@gmail.com:natural1',
  'ling.abby.l@edumail.vic.gov.au:emmy0511',
  'pkrebsz@gmail.com:svabok74',
  'phwongk@msn.com:wongnek4021',
  'menendezfernando@yahoo.com.ar:estacion',
  'teodor_v@hotmail.com:slt55315',
  'jsnalberto@yahoo.com:daytripper',
  'camilalitardo@hotmail.com:litardo321',
  'nikiokos@gmail.com:n27i77',
  'cobain_1210@yahoo.com:arthur',
  'monia.faltyn@gmail.com:1diunan1',
  'budy_harlim@hotmail.com:L0v3joshua',
  'c.kunzfeld@opti-mum.de:chris2703',
  'saiagalih@gmail.com:23081985',
  'reginald@elslander.com:reggy8610',
  'kerteszancsi@gmail.com:badogdob',
  'jtinajas@yahoo.es:Mimasme7',
  'kandar.halim88@gmail.com:Tanjungpura33',
  'andrea.ruch@gmail.com:andrea87',
  'brendan.royalflush@gmail.com:Enlightenment',
  'andresgarnero@hotmail.com:andres01',
  'anibalviscido@gmail.com:biomedik4002',
  'Jplally90@gmail.com:Salthill1',
  'Kwansiuyuen@hotmail.com:bk7568661',
  'kyokotakeda@gmail.com:kyoko824',
  'info@containershelters.co.nz:Godog8080',
  'vprunic@gmail.com:Silver13',
  'japagola1967@hotmail.com:kata2010',
  'fatma_avr91@hotmail.com:fatma1991',
  'm-rees@hotmail.de:stinker',
  'dollienanayolim@hotmail.com:nanayo123',
  'chris.kuiper@live.nl:moon5leg',
  'elspethburke@iinet.net.au:Wilson01',
  'bernadetirenaw@gmail.com:Uncontrolled29',
  'zergra@hotmail.com:parras1906',
  'youlittlewonder@gmail.com:Gooner78',
  'nagyi.orsolya@consulente.hu:MIlena05',
  'johanna_huber@gmx.ch:27.09.1990',
  'atifshm@yahoo.com:kinesis2843ge',
  'darin1@adam.com.au:Caseys00',
  'pauline.cote@hotmail.fr:2505coca',
  'dekasarisurya@gmail.com:kupukupu',
  'brianf67@hotmail.com:freddo01',
  'genny_sm@yahoo.com.ar:acmscm253',
  'bouzakisch@gmail.com:19911991',
  'bertrou@hotmail.com:13221322',
  'dgameau@twpo.com.au:harrison',
  'harroyo@mexihom.com:s1raC0L',
  'anthonypower67@yahoo.co.uk:pickle01',
  'j3fandre@gmail.com:wolverine07',
  'lavandin@kpnmail.nl:ABcd01()',
  'jose_bovio@hotmail.com:incas3361',
  'ipatoff@gmail.com:gabriel2',
  'ratyning@me.com:TheRascals2016',
  'Hotszto@yahoo.com.hk:z66A51519',
  'gregstu@optusnet.com.au:t270127g',
  'cezar.vargas@gmail.com:Eamf48',
  'eccntomo3@gmail.com:alfa14525',
  'cockenels@casema.nl:Welkom2018',
  'ariariadna89@gmail.com:septiembre25',
  'pscherpen@live.nl:28-03-1999',
  'egalardo@imeda.com.ar:cubita2016',
  'Amywoods33@hotmail.co.uk:bubbles33',
  'dark.chowy@gmail.com:CARLOKA',
  'akarsia@gmail.com:Stigmata12',
  'Ilona.kaiser@kaiserreich-hamburg.de:lisa1107',
  'millime@bigpond.net.au:mule45',
  'francoleites@yahoo.es:cabeza',
  'kedarwalke@gmail.com:sexyrock',
  'nguyenmhb@gmail.com:jerrynguyen',
  'lesztom@op.pl:maga20',
  'melir13@hotmail.com:sinaronja',
  'evelina.finie@gmail.com:easter04',
  'indrawati863@gmail.com:starsheen20',
  'ADYGUPTA9@GMAIL.COM:Gupta@18',
  'Jeessica-pereira@hotmail.com:Comex2014',
  'antoniasauret@alice-dsl.net:louislutz',
  'amandabettycollins@hotmail.com:Tigger2001',
  'phaakes@frisurf.no:vei8uto',
  'anais_renard_@hotmail.fr:ajgsj2410',
  'cristianortuzarloewe@gmail.com:b2c3d4e5f6',
  'ibtex.diffusion@yahoo.fr:p43c4apn',
  'kenny_7377@hotmail.com:kenny228',
  'peta@p1design.com.au:Belle001',
  'Horelicovaj@yahoo.com:E.liska-7',
  'robert.cuda@email.cz:super mini',
  'inrmariak@yahoo.com:Bobye140788',
  'denisepoff@gmail.com:password24',
  'f.kamil91@gmail.com:Unique1!',
  'eddu05@hotmail.com:skyhawk',
  'mar.lugano.1991@gmail.com:ototatu1',
  'abishekvbiji@gmail.com:death1234',
  'yohanesgunawan05@gmail.com:050497ygd',
  'biikamarudin@gmail.com:baizura3',
  'p_aline8@hotmail.com:aurelie8',
  'rvdaar68@hotmail.com:Liamjeremy10',
  'femed@freemail.hu:lucifer',
  'lbrandelet@hotmail.com:Caline001',
  'andylocher@gmx.de:32963296',
  'Oliveirasabrina25ss@gmail.com:Viamia4411',
  'edelevmp@hotmail.com:e2v8m0p4',
  'Memaazo@gmail.com:Maverick1',
  'kristyna.buk@seznam.cz:amazonka',
  'amineusmb@yahoo.fr:11071964',
  'Jdegrass@gmail.com:Jamie@4!',
  'lenkaj@email.cz:troubelin007',
  'leonardo.ricky@yahoo.co.id:Faye2205',
  'ofusco@yahoo.com:manager',
  'markfriend@live.com.au:nothing1',
  'jo.esnouf@laposte.net:alchemist50',
  'vincentdubosclard@gmail.com:VincEnt75',
  'halimansofyansinggih@gmail.com:Superman121086',
  'mictibo@yahoo.com:12357q1',
  'porfiriocampos@hotmail.fr:domingos',
  'yuri_aldrin@yahoo.com:master21',
  'scottchantal@yahoo.co.nz:chantal31',
  'kcurley99@gmail.com:Hannah11',
  'bayern.edb@o2.pl:japierdole',
  'glitter08denise@yahoo.com.hk:Denilia13',
  'familie.kessel@gmail.com:annette0912',
  'thiel-c@t-online.de:lilli-99',
  'aoemessina@gmail.com:central76',
  'snz.belen@gmail.com:reencuentro',
  'zibert-olga@web.de:seika90',
  'iguanamusic@westnet.com.au:Thankyou1',
  'joeywong0201@gmail.com :Joey4689',
  'liezlinksa2@gmail.com:Cetilde10',
  'Wsfcboxefrancaise@hotmail.fr:Stevendu59',
  'arek.sparzak@gmail.com:Kasiunia1',
  'tzchen730@gmail.com:Br1997@730',
  'mkwuuujunk@gmail.com:anything1',
  'agmvz@live.nl:fotografie',
  'katemaryasheehan@gmail.com:Isabelle123',
  'ch.rask@swipnet.se:Trumpet1',
  'davidkout@gmail.com:Killer08',
  'carolaneira@hotmail.com:lola1024',
  'izzat.m.isa@gmail.com:izzatisa',
  'xcharlet@gmx.ch:Langenscheidt10',
  'sh_mgn@yahoo.com.au:Maynard666',
  'adassi_riyad@yahoo.com:Yazan2002',
  'marcosrod56@gmail.com:autoridad123',
  'raul_luevano@hotmail.com:Cliente1',
  'maritwu@gmail.com:MaritB56',
  'dva@westnet.com.au:Redrose1',
  'aicirta_pbg@yahoo.es:italiano',
  'orlandogand@gmail.com:guissela01',
  'hernanstafe@gmail.com:lfxbyuda',
  'pampagraziano@yahoo.com.ar:blasspampa',
  'jessy.serrier@gmail.com:sencivien44',
  'verlinden.sandra@gmail.com:Xanaka84',
  'conorhoban@yahoo.co.uk:Liverpool1989',
  'ashleigh.92.af@gmail.com:HGIELhsa20',
  'y.pieracci@icloud.com:5edc3322b68',
  'luz_codd@hotmail.com:Divididos12',
  'grainnekavanagh7@gmail.com:monday77',
  'cstuart@casdevelop.com:fandango',
  'rachelcummins30@gmail.com:Rachel12',
  'imboden.rafael@hotmail.com:rafaquello',
  'gokcenozen@hotmail.com:34ISTANBUL',
  'barantes79@gmail.com:*baba12',
  'KirillM@seznam.cz:kirillm1992',
  'simonbronson@yahoo.com.au:cookie99',
  'angela.mcli@gmail.com:hello615',
  'steven.vanrompaey@gmail.com:tailslide',
  'joe_7171@yahoo.com.au:kenworthk200',
  'amandalockrey21@yahoo.com.au:Chantelle21',
  'marco_langone_49@hotmail.com:ville369',
  'mickaeldelfosse@hotmail.com:Standard1898',
  'andressosaboutu@gmail.com:33135440',
  'sachinjoseph@gmail.com:porshe911',
  'munt16@hotmail.com:muntathr',
  'smukkemaria2000@yahoo.dk:platinum',
  'slwillett@live.ca:7jupiter',
  'lukasz.polak@interia.pl:2tm2,3',
  'maiajulieva@yahoo.fr:fritouille',
  'claudia@ckarquitectura.com.ar:clau2547',
  'jane@sixtynsassy.com:2251swim',
  'taylor.jacqueline.m@edumail.vic.gov.au:Teacher1',
  'iturbe238@hotmail.com:nomoz238',
  'philip.pardo2@gmail.com:Pardo123',
  'david.mrhac@email.cz:naplast2',
  'misskosheen@hotmail.com:2001kiario',
  'laracoman@gmail.com:Windows2@',
  'bima.rio.pasaribu@gmail.com:Pasaribu100288',
  'ongmaggie@gmail.com:stefaniesun',
  'jimliu1219@gmail.com:Jim19871219',
  'kyle.dhlee@gmail.com:CitroenC4',
  'wendy.susanto88@gmail.com:Mamapapa123',
  'juliette.celie@hotmail.ch:paquita9',
  'M.obyrne1@outlook.com:piglet92',
  'kelsietaylor@live.com.au:Mckenzie16',
  'ss_harbour@yahoo.ca:nermal89',
  'andygeor69@yahoo.com:090970',
  'staceyhattenfels@live.com.au:diesel1234',
  'julia@logarco.es:bicicleta',
  'allan.larnach1@det.nsw.edu.au:Basil2010',
  'fjogge43@gmail.com:NegerJ0e',
  'kimberleyvanvliet@gmail.com:houjekop',
  'ciaralanigan@yahoo.ie:Limerick1',
  'jenny.mcdonagh@yahoo.com:Munster1',
  'lee619_9@hotmail.com:heng1220',
  'yos.nugroho@yahoo.co.id:nugroho9703',
  'henck@cbt-partnership.org:msbella123',
  'klox@abv.bg:beststar',
  'sancho.ho@gmail.com:pleasekillme23',
  'joro666@abv.bg:1892666',
  'vet.2g@hotmail.com:veteranosolon',
  'muck.ivan@gmail.com:Muck4321',
  'canalbulent@hotmail.com:35363536',
  
];

let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
msg.author.send('**Voici ton compte Spotify Premium :**')
msg.author.send(randomAnswerPicker)
msg.author.send("𝑏𝑦 𝚂𝚆𝙰™")
msg.channel.send(`**Tu viens de reçevoir un compte par message privé 💌 !**`);
}

}

);

bot.on('message', message => {
		
      if(message.content === ".help"){
        const embed = new Discord.RichEmbed()
        .setTitle(`Demandée par ${message.author.username}`)
        .setAuthor("Liste des commandes du générateur.")
        .setColor("RANDOM")
        .setFooter("Liste des commandes", bot.user.avatarURL)
        .setImage("https://images-ext-2.discordapp.net/external/W1k5lN4PisAhu0aZy5UAubEdeyX0MOx3zk-340OI1zU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/529711164066889779/9863530505fad7c4dead8af04d8e0c39.jpg?width=270&height=270")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        .addField(".help",
        "Permet d'avoir la liste des commandes disponibles.")
        .addField(".ping",
        "Permet d'avoir le ping du bot.")
        .addField(".spotify",
        "Permet de générer un compte Spotify Premium.")   
        message.channel.send({embed});
      }      
		
		
    });
    
    
    bot.on('message',function(message){
      if(message.content.includes('.commandDeco')){ //la commande c'est .commandDeco qui est buggé et qui permet la déconnexion du bot si tu veut faire un maj des compte
          message.channel.send('Je me suis déconnecté avec succès')
        message.delete().then(client.destroy())
    }
      })
    
    bot.login(config.token);
