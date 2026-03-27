export interface BlogPost {
  slug: string;
  title: { en: string; nl: string };
  date: string;
  author: string;
  authorRole: string;
  readTime: number;
  image: string;
  content: { en: string; nl: string };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-ready-worden-zonder-je-hele-it-landschap-te-vervangen",
    title: {
      en: "Becoming AI-ready without replacing your entire IT landscape",
      nl: "AI-ready worden zonder je hele IT-landschap te vervangen",
    },
    date: "2026-01-07",
    author: "Jochem van Laren",
    authorRole: "CEO",
    readTime: 5,
    image: "/images/blog-1.png",
    content: {
      en: `<p class="text-xl italic mb-8">"We must first modernize our entire infrastructure before we can start with AI."</p>
<p>We hear this often. It is the biggest misconception about AI-readiness: that it has to be a major change. That you must first connect systems, clean up data, document processes.</p>
<p>In reality, you can simply start small. Learn. And gradually expand those lessons across the organization.</p>

<h2>Start in the bottom left corner</h2>
<p>We use a simple model to determine where AI fits in an organization. Two axes: task complexity and human value.</p>
<p><strong>Automate</strong> (low complexity, low human value) — Let AI perform. This is where you start.</p>
<p><strong>Augment</strong> (high complexity, low human value) — AI leads, human controls.</p>
<p><strong>Evaluate</strong> (low complexity, high human value) — Determine the best approach for each process.</p>
<p><strong>Lead</strong> (high complexity, high human value) — Human leads, AI as an assistant.</p>
<p>With clients, we always start at the bottom left. Automate. The simple, repetitive tasks where people currently spend time without adding much value.</p>

<h2>Why invoicing is often the first step</h2>
<p>At a real estate company, we started with the invoicing process. Not because it's exciting, but because it met three criteria:</p>
<p><strong>Business rules already existed</strong> — Everyone knew what an invoice should look like.</p>
<p><strong>Good examples were available</strong> — Hundreds of past invoices. Good and bad ones.</p>
<p><strong>Quality could be objectively checked</strong> — An invoice is either correct or not. Binary.</p>
<p>This is also why coding is one of the most applied AI areas. It's binary: the code works or it doesn't.</p>

<h2>But our systems don't communicate</h2>
<p>We hear this often. Legacy systems that aren't integrated. Data in silos.</p>
<p>The solution is not to replace all those systems. What we often do: build a layer on top of the existing systems. A kind of AI database where everything comes together, independent of the systems.</p>

<h2>But our data is a mess</h2>
<p>This may be the most interesting objection. Because it's often true.</p>
<p>But here's the thing: there was never a real ROI in organizing the data. With AI, there is an ROI.</p>
<p>Now you can say: if we clean up this data, AI can automate this process, and we save X hours a week. Concrete. Measurable.</p>
<p>So "our data is a mess" is not a reason to wait. It's actually a reason to start.</p>

<h2>The conversation that arises</h2>
<p>Something interesting happens when you start automating. The conversation shifts.</p>
<p>Not: "AI will take over our jobs."<br/>But: "Hey, my people can do more."</p>
<p>When the simple, repetitive tasks drift away, space opens up. Not fewer people, but people in the right place.</p>

<h2>The absolute minimum to start</h2>
<p>What do you really need?</p>
<p><strong>A well-defined process</strong> — Not your entire organization. One process. Clear start, clear end.</p>
<p><strong>Enthusiastic people</strong> — You can progress faster with a few enthusiasts than with an entire project team that must.</p>
<p>That's it. No new systems. No months of preparation. No perfect data.</p>

<h2>Making it measurable</h2>
<p>One more thing: start with a baseline measurement. How much time does this process currently take? How many errors? What is the lead time?</p>
<p>Without that baseline measurement, you can't prove later what it yields.</p>
<p>You don't build trust in AI with promises. You build it with numbers.</p>`,
      nl: `<p class="text-xl italic mb-8">"We moeten eerst onze hele infrastructuur moderniseren voordat we met AI kunnen beginnen."</p>
<p>We horen dit vaak. Het is de grootste misvatting over AI-readiness: dat het een grote verandering moet zijn. Dat je eerst systemen moet koppelen, data moet opschonen, processen moet documenteren.</p>
<p>In werkelijkheid kun je gewoon klein beginnen. Leren. En die lessen geleidelijk uitbreiden over de organisatie.</p>

<h2>Begin linksonder</h2>
<p>We gebruiken een eenvoudig model om te bepalen waar AI past in een organisatie. Twee assen: taakcomplexiteit en menselijke waarde.</p>
<p><strong>Automatiseren</strong> (lage complexiteit, lage menselijke waarde) — Laat AI het doen. Hier begin je.</p>
<p><strong>Augmenteren</strong> (hoge complexiteit, lage menselijke waarde) — AI leidt, mens controleert.</p>
<p><strong>Evalueren</strong> (lage complexiteit, hoge menselijke waarde) — Bepaal de beste aanpak per proces.</p>
<p><strong>Leiden</strong> (hoge complexiteit, hoge menselijke waarde) — Mens leidt, AI als assistent.</p>
<p>Bij klanten beginnen we altijd linksonder. Automatiseren. De simpele, repetitieve taken waar mensen nu tijd aan besteden zonder veel waarde toe te voegen.</p>

<h2>Waarom facturatie vaak de eerste stap is</h2>
<p>Bij een vastgoedbedrijf begonnen we met het facturatieproces. Niet omdat het spannend is, maar omdat het aan drie criteria voldeed:</p>
<p><strong>Bedrijfsregels bestonden al</strong> — Iedereen wist hoe een factuur eruit moest zien.</p>
<p><strong>Goede voorbeelden waren beschikbaar</strong> — Honderden eerdere facturen.</p>
<p><strong>Kwaliteit was objectief te controleren</strong> — Een factuur klopt of klopt niet. Binair.</p>

<h2>Maar onze systemen communiceren niet</h2>
<p>We horen dit vaak. Legacy-systemen die niet geïntegreerd zijn. Data in silo's.</p>
<p>De oplossing is niet om al die systemen te vervangen. Wat we vaak doen: een laag bouwen bovenop de bestaande systemen. Een soort AI-database waar alles samenkomt.</p>

<h2>Maar onze data is een rommel</h2>
<p>Dit is misschien wel het interessantste bezwaar. Want het is vaak waar.</p>
<p>Maar: er was nooit een echte ROI voor het opschonen van data. Met AI is die ROI er wel.</p>
<p>Dus "onze data is een rommel" is geen reden om te wachten. Het is juist een reden om te beginnen.</p>

<h2>Het gesprek dat ontstaat</h2>
<p>Er gebeurt iets interessants als je begint met automatiseren. Het gesprek verschuift.</p>
<p>Niet: "AI neemt onze banen over."<br/>Maar: "Hé, mijn mensen kunnen meer doen."</p>

<h2>Het absolute minimum om te beginnen</h2>
<p><strong>Een goed gedefinieerd proces</strong> — Niet je hele organisatie. Eén proces.</p>
<p><strong>Enthousiaste mensen</strong> — Je komt sneller vooruit met een paar enthousiastelingen dan met een heel projectteam dat moet.</p>
<p>Dat is het. Geen nieuwe systemen. Geen maanden voorbereiding.</p>

<h2>Meetbaar maken</h2>
<p>Nog één ding: begin met een nulmeting. Hoeveel tijd kost dit proces nu? Hoeveel fouten?</p>
<p>Je bouwt vertrouwen in AI niet met beloftes. Je bouwt het met cijfers.</p>`,
    },
  },
  {
    slug: "van-ai-pilot-naar-productie",
    title: {
      en: "From AI pilot to production: why scaling is almost always a human challenge",
      nl: "Van AI-pilot naar productie: waarom opschalen bijna altijd een menselijke uitdaging is",
    },
    date: "2026-02-02",
    author: "Jochem van Laren",
    authorRole: "CEO",
    readTime: 6,
    image: "/images/blog-2.png",
    content: {
      en: `<p>The pilot works. The results are good. The team is enthusiastic.</p>
<p>And then it stalls there.</p>
<p>Six months later, the same pilot is still running with the same five people. Scaling? It's coming. But it doesn't happen.</p>
<p>The problem is rarely technical. It's almost always human.</p>

<h2>The human aspect is forgotten</h2>
<p>Pilots start with a few enthusiasts. People who are curious, who want to experiment.</p>
<p>But everything changes when scaling up. Suddenly, dozens of people have to input data into an AI system. Check outputs. Adapt their working methods.</p>
<p>"Human in the loop" sounds simple. But at scale, it means: many people all having to maintain the same quality standard.</p>

<h2>A pilot that stalled</h2>
<p>One of our first projects stalled. The technology worked. But the users didn't use the tool.</p>
<p><strong>Why not?</strong></p>
<p>They didn't agree with the output. Not because it was objectively bad—but because they weren't involved in determining the standard.</p>

<h2>A pilot that did scale</h2>
<p>With a large insurer, we did it differently. We had each step validated by the larger group. Not afterward—during the process.</p>
<p>Result: broad adoption from day one.</p>

<h2>The 80/20 of edge cases</h2>
<p>Technically, you can quickly automate 80% of cases. The challenge lies in the other 20%.</p>
<p>Pilots are often carried out with the "nice" documents. Only when scaling do you encounter the edge cases.</p>

<h2>Who owns scaling?</h2>
<p>You need two people:</p>
<p><strong>The enthusiast</strong> — Someone who engages with the people. Who builds support and answers questions.</p>
<p><strong>The expert</strong> — Someone recognized as a content expert. Who defines what quality is.</p>

<h2>The autonomy slider: from 0% to 97%</h2>
<p>Think of AI autonomy as a slider. In a pilot, you're somewhere around 50%. To scale, you need to move to 97%.</p>
<p>That leap from 50% to 97% is where most pilots fail.</p>

<h2>When is a pilot ready to scale?</h2>
<p>Three signals:</p>
<p><strong>1. The output is consistent</strong> — Not only in easy cases but also in edge cases.</p>
<p><strong>2. The standard is shared</strong> — Everyone knows what quality is. And agrees with it.</p>
<p><strong>3. The end-users are informed</strong> — No surprises during rollout.</p>`,
      nl: `<p>De pilot werkt. De resultaten zijn goed. Het team is enthousiast.</p>
<p>En dan stokt het daar.</p>
<p>Zes maanden later draait dezelfde pilot nog steeds met dezelfde vijf mensen. Opschalen? Dat komt nog. Maar het gebeurt niet.</p>
<p>Het probleem is zelden technisch. Het is bijna altijd menselijk.</p>

<h2>Het menselijke aspect wordt vergeten</h2>
<p>Pilots beginnen met een paar enthousiastelingen. Mensen die nieuwsgierig zijn, willen experimenteren.</p>
<p>Maar alles verandert bij opschaling. Ineens moeten tientallen mensen data invoeren in een AI-systeem. Output controleren. Werkwijzen aanpassen.</p>

<h2>Een pilot die vastliep</h2>
<p>Een van onze eerste projecten liep vast. De technologie werkte. Maar de gebruikers gebruikten de tool niet.</p>
<p><strong>Waarom niet?</strong></p>
<p>Ze waren het niet eens met de output. Niet omdat die objectief slecht was — maar omdat ze niet betrokken waren bij het bepalen van de standaard.</p>

<h2>Een pilot die wél opschaalde</h2>
<p>Bij een grote verzekeraar deden we het anders. We lieten elke stap valideren door de bredere groep.</p>
<p>Resultaat: brede adoptie vanaf dag één.</p>

<h2>De 80/20 van edge cases</h2>
<p>Technisch kun je snel 80% van de gevallen automatiseren. De uitdaging zit in de andere 20%.</p>

<h2>Wie bezit opschaling?</h2>
<p>Je hebt twee mensen nodig:</p>
<p><strong>De enthousiasteling</strong> — Iemand die de mensen meekrijgt. Die draagvlak bouwt.</p>
<p><strong>De expert</strong> — Iemand die als inhoudelijk expert wordt erkend. Die bepaalt wat kwaliteit is.</p>

<h2>De autonomie-slider: van 0% naar 97%</h2>
<p>Denk aan AI-autonomie als een slider. In een pilot zit je ergens rond de 50%. Om op te schalen moet je naar 97%.</p>

<h2>Wanneer is een pilot klaar om op te schalen?</h2>
<p>Drie signalen:</p>
<p><strong>1. De output is consistent</strong></p>
<p><strong>2. De standaard is gedeeld</strong></p>
<p><strong>3. De eindgebruikers zijn geïnformeerd</strong></p>`,
    },
  },
  {
    slug: "waarom-95-van-ai-projecten-faalt",
    title: {
      en: "Why 95% of AI projects fail (and what the successful 5% do differently)",
      nl: "Waarom 95% van AI-projecten faalt (en wat de succesvolle 5% anders doet)",
    },
    date: "2026-01-07",
    author: "Jochem van Laren",
    authorRole: "CEO",
    readTime: 4,
    image: "/images/blog-3.png",
    content: {
      en: `<p>The numbers don't lie: according to MIT research, only 5% of AI pilots reach production with measurable impact. Not because the technology doesn't work—but because organizations keep making the same mistake.</p>

<h2>The problem no one mentions: AI doesn't learn by itself</h2>
<p>New employees get better over a few months. They pick up signals, adapt, learn from feedback.</p>
<p>AI does not.</p>
<p>An AI assistant performs exactly the same on day 180 as on day 1, unless someone actively maintains that feedback loop.</p>

<h2>Five factors that determine whether AI implementation succeeds</h2>
<p>Successful AI adoption requires five elements. Not three out of five—all five.</p>
<p><strong>1. Leadership</strong> — Not just allocating budget, but being actively involved.</p>
<p><strong>2. Culture</strong> — Space to experiment. Being allowed to make mistakes without being penalized.</p>
<p><strong>3. Tooling</strong> — The right technical foundation. Access to data. Systems that communicate.</p>
<p><strong>4. Policy</strong> — What does it concretely mean if someone "works well with AI"? How do you measure that?</p>
<p><strong>5. Impact</strong> — Measurable results that tell the story. Not "we save time" but "this process took 4 hours, now 45 minutes."</p>

<h2>Where it really gets stuck</h2>
<p>Most often it stalls at <strong>policy</strong>. There's no concrete description of what success looks like. No reward for people who work efficiently with AI. No consequences for people who don't.</p>

<h2>The 5% that succeeds</h2>
<p>The organizations that do succeed share three things:</p>
<p><strong>They start small</strong> — One process. One team. One clear objective.</p>
<p><strong>They make it measurable</strong> — Before and after. Concrete numbers.</p>
<p><strong>They let people determine the standard</strong> — Not a consultant. Not the board. The people who work with it daily.</p>`,
      nl: `<p>De cijfers liegen niet: volgens MIT-onderzoek bereikt slechts 5% van de AI-pilots productie met meetbare impact. Niet omdat de technologie niet werkt — maar omdat organisaties dezelfde fout blijven maken.</p>

<h2>Het probleem dat niemand noemt: AI leert niet vanzelf</h2>
<p>Nieuwe medewerkers worden beter over een paar maanden. Ze pikken signalen op, passen zich aan, leren van feedback.</p>
<p>AI niet.</p>
<p>Een AI-assistent presteert op dag 180 precies hetzelfde als op dag 1, tenzij iemand actief die feedbackloop onderhoudt.</p>

<h2>Vijf factoren die bepalen of AI-implementatie slaagt</h2>
<p>Succesvolle AI-adoptie vereist vijf elementen. Niet drie van de vijf — alle vijf.</p>
<p><strong>1. Leiderschap</strong> — Niet alleen budget toewijzen, maar actief betrokken zijn.</p>
<p><strong>2. Cultuur</strong> — Ruimte om te experimenteren. Fouten mogen maken zonder afgestraft te worden.</p>
<p><strong>3. Tooling</strong> — De juiste technische basis. Toegang tot data. Systemen die communiceren.</p>
<p><strong>4. Beleid</strong> — Wat betekent het concreet als iemand "goed met AI werkt"? Hoe meet je dat?</p>
<p><strong>5. Impact</strong> — Meetbare resultaten die het verhaal vertellen.</p>

<h2>Waar het écht vastloopt</h2>
<p>Meestal bij <strong>beleid</strong>. Er is geen concrete beschrijving van wat succes eruitziet.</p>

<h2>De 5% die slaagt</h2>
<p>De organisaties die wel slagen delen drie dingen:</p>
<p><strong>Ze beginnen klein</strong> — Eén proces. Eén team. Eén helder doel.</p>
<p><strong>Ze maken het meetbaar</strong> — Voor en na. Concrete cijfers.</p>
<p><strong>Ze laten mensen de standaard bepalen</strong> — Niet een consultant. Niet het bestuur. De mensen die er dagelijks mee werken.</p>`,
    },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
