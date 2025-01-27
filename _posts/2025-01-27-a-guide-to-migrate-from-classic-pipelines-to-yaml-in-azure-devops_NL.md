---
layout: post
title: 📋 Stapsgewijs migreren van Classic Pipelines naar YAML in Azure DevOps
date: 2025-01-27 20:19 +0100
categories: [Azure DevOps, CI/CD]
tags: [Automation, Pipelines, YAML]
permalink: /posts/a-guide-to-migrate-from-classic-pipelines-to-yaml-in-azure-devops
lang: nl
---

In mijn vorige blog schreef ik al waarom je van Classic Pipelines over moet
stappen naar YAML. Deze blog gaat wat dieper in op de stappen voor
een soepele migratie.

## Waarom overstappen op YAML?

Migreren van Classic Pipelines naar YAML is meer dan alleen het herschrijven in YAML.
YAML pipelines werken fundamenteel anders en kunnen in het begin complex
aanvoelen. Toch heeft deze aanpak belangrijke voordelen:

- **Pipelines als code:** beter versiebeheer en samenwerking.
- **Hergebruik:** minder duplicate code door YAML-templates.
- **Betere reviews:** integratie met pull requests voor meer controle.

## Hoe stap je over naar YAML?

Het maakt nogal uit of je nog moet beginnen, of dat het nog om die
laatste pipelines gaat. Als je nog moet beginnen, zou je onderstaande stappen
kunnen volgen. Als je pipelines al in YAML hebt, kun je een aantal
stappen overslaan.

### Stap 1: 🚀 Maak nieuwe pipelines direct in YAML

Voorkom extra migratiewerk in de toekomst door nieuwe pipelines direct als YAML
op te zetten. De documentatie van Microsoft zou je voldoende houvast moeten
bieden om YAML pipelines op te zetten.

### Stap 2: ⚙️ Voorkom nieuwe Classic Pipelines

Schakel het aanmaken van Classic Pipelines uit om te zorgen dat teams niet per
ongeluk oude methodes blijven gebruiken. Dit kun je doen via:
**Project Settings > Pipelines > Settings > Disable creation of classic pipelines**

![Disable creation of classic pipelines](/assets/img/posts/2025_01_27_disable_classic_light.png){: .light .w-75 .shadow .rounded-10 h='700'}
![Disable creation of classic pipelines](/assets/img/posts/2025_01_27_disable_classic_dark.png){: .dark .w-75 .shadow .rounded-10 h='700'}

### Stap 3: 🗺️ Breng je bestaande pipelines in kaart

- Hoeveel classic pipelines zijn er?
- Wat doen ze precies?
- Zijn het Build of Release pipelines?
- Welke afhankelijkheden hebben ze (Service Connections, approvals, variabelen)?
- Worden er Task Groups of andere herbruikbare componenten gebruikt?

Dit helpt bij het plannen van de migratie en voorkomt verrassingen.

### Stap 4: 🍳 Begin eenvoudig

Begin met een eenvoudige, kleinere pipeline. Voor Build pipelines kun je een
YAML-export maken via: **More actions > Export as YAML**

![Export as YAML](/assets/img/posts/2025-01-27_export_YAML_light.png){: .light }
![Export as YAML](/assets/img/posts/2025-01-27_export_YAML_dark.png){: .dark }

Dit geeft een goed startpunt, maar let op: de export is niet altijd volledig en vereist
vaak handmatige aanpassingen.

Release pipelines vereisen meer handmatig werk, omdat er geen directe YAML-export
optie is. Begin met eenvoudige deployments en breid deze stap voor stap uit.

```yaml
jobs:
- job: Job_1
  displayName: Agent job 1
  pool:
    vmImage: windows-latest
  steps:
  - checkout: self
  - task: ...
```

### Stap 5: ♻️ Hergebruik met YAML-templates

Heb je herhalende taken? Zet ze om in templates om dubbele code te voorkomen en
onderhoud eenvoudiger te maken. YAML ondersteunt 
[templates](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/templates?view=azure-devops&pivots=templates-includes){:target="_blank"}
voor zowel **stages**, **jobs**, **steps**, **variables**
of zelfs voor complete **pipelines**.

```yaml
stages:
  - stage: Build
    jobs:
      - template: templates/build.yml
  - stage: Deploy
    jobs:
      - template: templates/deploy.yml
        parameters:
          environment: dev
```

Templates kun je includen, waarmee je bepaalde delen opneemt in je pipeline, of
je kunt uitbreiden vanaf een template. In dat laatste geval bepaalt het template
eigenlijk de structuur van de pipeline en kun je bepaalde delen van je pipeline customizen
via parameters. Op die manier kun je uiteindelijk veel
[veiligere pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/security/templates?view=azure-devops){:target="_blank"}
bouwen.

### Stap 6: 🧱 Creëer multistage pipelines

Classic Pipelines splitsen build en release, maar in YAML kun je alles in één
pipeline beheren. Gebruik **stages**, **deployment jobs** en **environments**
voor meer flexibiliteit, dit vermindert overhead.

#### Stages in Classic versus YAML

Bij Classic Release Pipelines stel je de approvals or gates in per stage. Je kunt
in de UI eenvoudig instellen wie vooraf en/of achteraf een approval moet geven.
Dit is een van die punten waar YAML pipelines echt anders werken.

In YAML pipelines komen er wat nieuwe onderdelen bij: **environments** en
**deployment jobs**.
[Deployment jobs](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs?view=azure-devops){:target="_blank"}
zijn, net als jobs, een verzameling taken. Het verschil is dat je een deployment
job altijd op een environment uitvoert en dat je
verschillende deploymentstrategieën kunt kiezen in een deployment job.

```yaml

stages:
- stage: DeployToProduction
  jobs:
  - deployment: Deploy
    environment: Production
    strategy:
      runOnce:
        preDeploy:
          steps:
          - script: |
              echo "Create backup"
              ...
        deploy:
          steps:
          - script: |
              echo "Deploying to Production"
              ./runDeployment.sh ...
        on:
          failure:         
            steps:
            - script: |
              echo "Restore backup"
              ...

```

In het begin voelt dit mogelijk als omslachtig, maar het heeft zeker
voordelen. Environments kun je hergebruiken. Binnen een project hoef je
bijvoorbeeld maar 1 keer in te stellen wie een Approval op die specifieke
environment moet geven. Daarnaast kun je hiermee ook voorkomen dat er release
pipelines zonder approval uitgevoerd worden, bijvoorbeeld in combinatie met het
extenden van een template.

### Stap 7: 🏎️ Versnel de migratie met Yamlizr

[Yamlizr](https://github.com/f2calv/yamlizr) is een handige CLI-tool die helpt bij
het converteren van Classic Pipelines naar YAML. Het genereert YAML-code op basis
van de gebruikte taken en instellingen.

Ik zou het niet gebruiken om blind je pipelines volledig automatisch om te zetten,
maar het kan je zeker helpen om je migratieproces flink te versnellen. Yamlizr genereert
automatisch YAML-code voor al je pipelines die je eenvoudig kunt gebruiken om snel
je YAML pipelines in elkaar te zetten.
Je hoeft veel minder zelf uit te zoeken en hebt een mooie kick-start om snel delen
van je pipeline om te zetten.

#### Hoe werkt het?

Voor de details verwijs ik je naar de [GitHub pagina van Yamlizr](https://github.com/f2calv/yamlizr){:target="_blank"}
zelf. Maar in het kort zijn dit de stappen die moet nemen:

1. Installeer Yamlizr.
2. Maak een PAT, kies een project en start Yamlizr:

   `yamlizr generate -pat <your PAT here> -org <your AzDO Organisation Uri>
   -proj <your AzDO project name> -out <Your output location>`

3. Controleer en pas de gegenereerde YAML indien nodig aan.

Hoewel Yamlizr veel werk automatiseert, is het belangrijk om de gegenereerde YAML
goed te controleren. Specifieke instellingen of custom taken vereisen mogelijk
handmatige aanpassingen.

#### Aandachtspunt Release pipelines

Yamlizr zet alles standaard om naar jobs. Als je approvals hebt in je huidige
releaseflow, zul je dit zelf om moeten zetten naar **deployment jobs** en zul je
**environments** in moeten stellen.

### Stap 8: 🧪 Valideer en test

Laat YAML pipelines parallel draaien met Classic Pipelines en vergelijk de logs
en output. Dit helpt bij een gecontroleerde overstap zonder risico's.

Ziet de pipeline er anders uit dan verwacht? Controleer je pipeline nog eens goed.
Het gebruik van conditions of expressions kunnen onverwachte effecten hebben.

### Stap 9: 🧹 Migreer en ruim op

Is de YAML pipeline stabiel? Verwijder dan de Classic Pipeline of zet hem in een
aparte map waar niemand rechten op heeft. Dit voorkomt dat deze per ongeluk
opnieuw wordt gebruikt.

Werk ook de documentatie bij, zodat je team de nieuwe YAML werkwijze begrijpt.

## Extra tips

- **Test YAML** in Azure DevOps met **[Validate YAML](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/yaml-pipeline-editor?view=azure-devops#validate){:target="_blank"}**.
- **Gebruik de "[task assistent](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/yaml-pipeline-editor?view=azure-devops#use-task-assistant){:target="_blank"}"**
  om beschikbare invoer velden van taken te bekijken.
- **Gebruik van variabelen en variabele groepen** voor herbruikbaarheid.
- **Maak gebruik van parameters** voor meer controle over de waardes die
  meegegeven kunnen worden aan je pipeline.

Wil je hulp bij je migratie? Neem gerust contact met me op! 🚀
