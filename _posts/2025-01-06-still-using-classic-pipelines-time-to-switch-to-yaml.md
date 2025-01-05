---
layout: post
title: 🧪 Gebruik je nog Classic Pipelines? Tijd voor YAML!
date: 2025-01-05 15:53 +0100
categories: [DevOps]
tags: [DevOps, Automation, Pipeline]
permalink: /posts/still-using-classic-pipelines-time-to-switch-to-yaml
lang: nl

---

Hoewel Microsoft YAML Pipelines al geruime tijd als standaard promoot in
Azure DevOps, kom ik verrassend vaak nog Classic Pipelines tegen. Ook al
is YAML bij veel teams inmiddels wel de standaard, dan draait soms
toch die ene release pipeline nog als Classic pipeline. Meestal
zijn deze jaren geleden opgezet en werken ze “prima”. Maar daar zit precies
het probleem: veel teams blijven vasthouden aan Classic Pipelines
simpelweg omdat ze nog werken.

Maar technologie staat nooit stil. Classic Pipelines worden inmiddels
(zoals de naam al zegt) als verouderd beschouwd. YAML Pipelines bieden
meer flexibiliteit, herbruikbaarheid, en betere integratiemogelijkheden
met moderne DevOps-practices.

## 🤔 Waarom gebruiken sommige bedrijven nog steeds Classic Pipelines?

Bij de meeste klanten is YAML ook echt wel de standaard waarin nieuwe
pipelines worden gemaakt, maar toch kom ik ook nog Classic Pipelines tegen
die regelmatig draaien. Dit heeft vaak drie redenen:

1. **De pipeline werkt nog steeds naar behoren.**
 _“Als het werkt, waarom zouden we het veranderen?”_ Dit is een
 veelgehoorde reactie bij teams die pipelines inrichten en daar
 vervolgens jaren niet meer naar omkijken.

2. **Het team is gewend om met Classic Pipelines te werken.**
 Developers en teams willen zich het liefst focussen op het bouwen van
 features. Het omschrijven van een bestaande Classic Pipeline naar YAML
 kost tijd en energie. Veel teams blijven liever in hun vertrouwde
 omgeving werken.

3. **Het team denkt dat YAML Pipelines niet alles ondersteunen.**
 Een veelgehoord misverstand is dat goedkeuringen of handmatige
 interventies alleen in Classic Pipelines mogelijk zijn. Dit klopt niet.
 YAML biedt uitgebreide mogelijkheden om approvals en manual
 interventions in je workflows in te bouwen. Sterker nog, dit werkt in
 YAML vaak zelfs flexibeler.

## 🚀 Zelf overstappen naar YAML? Het kostte mij ook tijd om te wennen

Zelf weet ik als geen ander dat overstappen naar YAML Pipelines niet
altijd vanzelf gaat. Toen ik ermee begon, moest ik echt wennen aan het
schrijven van pipelines in code. De visuele interface van Classic voelde
vertrouwd en YAML leek in het begin ingewikkeld. Even snel een pipeline
bij elkaar klikken deed ik dan ook nog lang in de Classic interface.

Maar inmiddels gebruik ik YAML dagelijks. Niet alleen in Azure DevOps,
maar ook in GitHub Actions, GitLab, Docker en Kubernetes. Ik zou nu niet
meer terug willen naar Classic Pipelines.

## 🌟 Wat zijn de voordelen van YAML Pipelines?

Hier zijn de belangrijkste voordelen van YAML Pipelines:

### 🗂️ 1. Pipelines in versiebeheer

YAML Pipelines worden opgeslagen in je repository, samen met je code. Dit
betekent dat je wijzigingen in pipelines kunt tracken, reviewen, testen en
beheren via pull requests. Hierdoor krijg je veel meer controle over je
CI/CD-processen.

Met Classic Pipelines wordt ook wel een versiegeschiedenis bijgehouden,
maar persoonlijk vind ik die geschiedenis een stuk lastiger om te
vergelijken. Het is moeilijk te herleiden wanneer en waarom een bepaalde
wijziging is gedaan.

### 🔄 2. Herbruikbare templates

Met YAML kun je herbruikbare templates maken die je in meerdere projecten
kunt inzetten. Dit maakt het opzetten van nieuwe pipelines veel
efficiënter. Templates zorgen ervoor dat je standaarden kunt afdwingen en
dat teams minder tijd kwijt zijn aan het handmatig configureren van
pipelines.

Je kunt het vergelijken met het gebruik van Task Groups in Classic
Pipelines, maar dan uitgebreider en over projecten heen. Zo kun je in
templates in YAML op verschillende niveaus maken, voor taken, voor jobs,
stages of hele pipelines.

### ⚙️ 3. Automatisering van complexe workflows

YAML biedt ondersteuning voor complexe workflows met conditions, stages,
en multi-job pipelines. Deze workflows kun je volledig automatiseren,
zonder dat je afhankelijk bent van de GUI.

Bijvoorbeeld: je kunt eenvoudig verschillende tests en builds parallel
laten draaien, afhankelijk van de branch of omgeving waarin je werkt.

### 🔐 4. Betere integratie met moderne DevOps-practices

Binnen DevOps wordt vaak gesproken over Infrastructure as Code (IaC),
Continuous Integration (CI) en Continuous Deployment (CD). YAML Pipelines
passen perfect in deze filosofie, omdat je hiermee ook je "Pipeline as
Code" kunt opslaan.

## 📋 Hoe stap je over van Classic Pipelines naar YAML?

Hier zijn een aantal stappen die je kunt volgen:

1. **Begin met nieuwe projecten.**
 Richt nieuwe pipelines direct in als YAML Pipelines. Dit voorkomt dat
 je later alles moet migreren. Dit zie ik overigens bij de meeste
 organisaties al gebeuren.

2. **Schakel het aanmaken van Classic Pipelines uit.**
 Azure DevOps biedt de mogelijkheid om het aanmaken van Classic
 Pipelines op project- of organisatieniveau uit te schakelen. Hiermee
 dwing je stap 1 af, terwijl bestaande Classic Pipelines nog bruikbaar
 blijven. Je hoeft niet te "dweilen met de kraan open".

3. **Converteer bestaande Classic Pipelines stap voor stap.**
 Begin met de eenvoudigste pipelines en bouw van daaruit verder. Zo kun
 je snel succes boeken en vertrouwen opbouwen binnen het team.

4. **Maak gebruik van templates.**
 Zodra je een pipeline hebt omgezet naar YAML die je mogelijk vaker
 kunt gebruiken, maak hier een template
 van zodat andere projecten deze eenvoudig kunnen hergebruiken.

5. **Gebruik tools zoals Yamlizr.**
 [**Yamlizr**](https://github.com/f2calv/yamlizr)
 is een handige tool om je Classic Pipelines automatisch om te
 zetten naar YAML. Het is geen magische oplossing, maar het kan veel
 handwerk schelen en kan je zeker een kickstart geven. Controleer altijd
 de gegenereerde YAML om er zeker van te zijn dat alles goed is omgezet.

## 🔧 In een volgende blog: dieper in op migratiestappen

In een volgende blog zal ik deze stappen verder uitwerken met concrete
voorbeelden en tips om de migratie naar YAML Pipelines soepeler te laten
verlopen.

## 💡 Wil je hulp bij het optimaliseren van jouw CI/CD Pipelines?

De overstap van Classic Pipelines naar YAML Pipelines is een investering
die je pipelines toekomstbestendig maakt. Maar ik snap dat het niet
altijd eenvoudig is om hier tijd voor vrij te maken.

Wil je sparren over hoe je dit kunt aanpakken? Of zoek je iemand die jouw
team hierbij kan ondersteunen?

### 🎯 Ik kan onder andere helpen met:

- Migreren van Classic naar YAML Pipelines
- Inrichten van herbruikbare templates
- Optimaliseren van bestaande YAML Pipelines

👉 [**Laten we eens praten!**](mailto:info@mikebeemsterboer.nl).
