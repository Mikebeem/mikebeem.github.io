---
# the default layout is 'page'
icon: fas fa-info-circle
permalink: /about/resume/
layout: page_toc
toc: true
h_max: 2
title: Freelance DevOps Consultant
lang: nl

---

## Samenvatting

* 15+ jaar ervaring met automatisering, DevOps en Azure DevOps (TFS)
* Azure DevOps (AZ-400), developer (AZ-204) en administrator (AZ-104) certificering
* Praktische ervaring met DevOps-tools
* Ervaring in het ondersteunen van ontwikkelteams met DevOps practices en -tools
* Bekwaam in DevOps-tools, CI/CD-pipelines en automatisering

## Werkervaring

### DevOps Consultant, Delta Fiber, Schiedam (April 2024 – heden)

* Ik ondersteun de .NET-ontwikkelteams op alle gebieden van DevOps, met de primaire focus op tooling, maar ook op people en proces.
* Help teams met het opzetten van Azure DevOps en hun CI/CD-pipelines om compliant software te leveren en ondersteun de teams om Azure DevOps als geheel optimaal te gebruiken voor het creëren van software.
* Creëer applicaties in Kubernetes met Argo CD. Help teams hun applicaties te containerizen voor migratie naar Kubernetes.
* Maak pipelines en templates voor het bouwen en uitrollen van applicaties naar het Kubernetes-platform.

### DevOps Consultant, Delta-N, Den Haag (Oktober 2019 – Maart 2024)

* Werken voor meerdere Delta-N-klanten voor diverse opdrachten. Daarnaast werden verschillende kleinere opdrachten uitgevoerd:
* Advies geven over het gebruik van Azure DevOps en DevOps in het algemeen.
* Automatiseren van het aanmaken en inrichten van projecten in Azure DevOps, zodat we eenvoudig nieuwe projecten kunnen opzetten met een gestandaardiseerde inrichting, inclusief de permissies.
* Uitleg geven over Azure DevOps en ondersteuning bieden bij het opzetten van build- en release-pipelines.
* Webinars: zoals "What's new in Azure DevOps" en "YAML Pipelines".
* Automatiseren van diverse activiteiten voor intern gebruik.
* Blogs geschreven voor de bedrijfswebsite.

### DevOps Consultant, De Nederlandsche Bank, Amsterdam (September 2021 – Maart 2024)

* Ik ondersteun IT-teams op alle gebieden van DevOps, met de primaire focus op tooling, maar ook op de proces- en menscomponenten.
* Mijn focus ligt op alle onderdelen van Azure DevOps en gerelateerde tools (zoals SonarQube, Mend, GitLeaks en Nexus). Ik help teams met de transitie van klassieke pipelines naar multistage YAML-pipelines, stel YAML-templates op waarmee teams compliant software kunnen leveren en ondersteun de teams om Azure DevOps als geheel optimaal te gebruiken voor de productie van software.
* Ik heb een aangepaste TypeScript-extensie gebouwd voor een koppeling met ServiceNow, om geplande wijzigingen in ServiceNow aan te maken vanuit Azure DevOps.
* Beheer het Kubernetes-cluster voor het DevOps-platform (ArgoCD, Nexus, SonarQube, Harbor).

### DevOps Consultant, DLL Group, Eindhoven (Augustus 2020 – September 2021)

* Verantwoordelijk voor het beheer van Azure DevOps en de on-premises agents.
* Automatiseren van de CI/CD-pipelines en de bijbehorende statistieken.
* Een PowerShell-module geschreven en pipelines opgezet om AMT Lion-omgevingen automatisch te deployen. Het AMT-framework wordt gebruikt om oudere mainframe-applicaties te migreren naar AMT Lion, een objectgeoriënteerde taal.

### CI/CD Engineer, Het CAK, Den Haag (Januari 2020 – Juni 2020)

* Geholpen bij het opzetten van Azure DevOps en het automatiseren van werkzaamheden met Azure DevOps en PowerShell.
* Verschillende teams geholpen bij het opzetten en verbeteren van Azure-pipelines voor zowel .NET- als niet-.NET-gebaseerde applicaties, zowel op Windows als Linux.
* Een extensie voor Azure DevOps gemaakt om enkele IT-controls visueel zichtbaar te maken in Azure DevOps.

### DevOps Engineer, Vivat, Alkmaar (September 2016 – September 2019)

* Een aangepaste Azure DevOps-extensie gemaakt voor AMT Lion-omgevingen. Hierdoor is veel minder handmatig werk nodig om deze omgevingen vrij te geven.
* Opzetten van een gestandaardiseerde Continuous Delivery-pipeline voor verschillende omgevingen (inclusief C#, SQL, SSRS, SSAS, SSIS). Dit omvatte Azure DevOps, ServiceNow, SonarQube en FitNesse. Dankzij deze pipeline kunnen applicaties sneller en met betere kwaliteit worden ontwikkeld, getest en vrijgegeven.
* De rol van Product Owner vervuld voor de Continuous Delivery-pipeline en het cloudplatform.
* De rol van Scrum Master vervuld voor het Cloud Platform-team.
* Migratie van TFS 2017 (on-premises) naar Visual Studio Team Services (VSTS, nu Azure DevOps).
* Organiseren van Community of Practice (COP)-bijeenkomsten om kennis over Continuous Delivery en DevOps binnen de organisatie te delen.

### Tactisch Beheerder, Vivat, Alkmaar (Januari 2014 – September 2016)

* Ondersteunen en uitvoeren van diverse Team Foundation Server (TFS)-migraties: van TFS 2010 naar TFS 2017.
* Implementeren van de volledige TFS-suite voor verschillende applicaties en teams.
* Het automatiseren van de uitrol van diverse applicaties.

### Operationeel Beheerder, Vivat, Alkmaar (Juli 2006 – Januari 2014)

* Functioneel beheer van Team Foundation Server (TFS).
* Coördineren van TFS-migraties.
* Het automatiseren van de uitrol van diverse applicaties.
* Coördineren van het technische releaseproces binnen Vivat.
* Uitvoeren van software-installaties in de DTAP-straat van diverse applicaties.

## Opleiding & Kwalificaties

* AZ-104: Microsoft Azure Administrator (Associate)
* AZ-204: Developing Solutions for Microsoft Azure (Associate)
* AZ-400: Designing and Implementing Microsoft DevOps Solutions (Expert)
* IT4IT™ Foundation
* Scrum Product Owner 1 (PSPO 1)
* Professional Scrum Master 1 (PSM 1)
* Bachelor of Business Informatics (Juli 2006)

## Vaardigheden

### Tools

{% for skill in site.data.skills.tools -%}
* {{ skill.name }}
{% endfor %}

### People and Process

{% for skill in site.data.skills.practices -%}
* {{ skill.name }}
{% endfor %}
