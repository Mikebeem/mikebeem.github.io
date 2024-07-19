---
layout: post
title: Op welke versie zit ik in Azure DevOps?
date: 2024-07-19 14:45 +0100
categories: [Azure DevOps]
tags: [Azure DevOps, Features]
---

Als je de [release notes van Azure DevOps](https://aka.ms/azuredevops/releasenotes)
in de gaten houdt, zie je weleens interessante nieuwe features terugkomen die je
niet direct terugziet in je eigen Azure DevOps omgeving. Onderaan de pagina staat
ook altijd netjes:

```Text
Note

These features will roll out over the next two to three weeks.
```

Er zit dus vaak twee tot drie weken tussen het moment waarop de nieuwe features
worden beschreven en het moment waarop je de nieuwe feature kunt gebruiken. Dit
komt mede door de manier waarop Microsoft aanpassingen op Azure DevOps uitrolt.
Ze werken met deployment rings. De eerste ring bevat de engineers van Microsoft
zelf, zij ontvangen de nieuwe versie als eerst. Deze omgeving laten ze zo'n 48
draaien voordat verder gegaan wordt naar de volgende ring, Brazilië regio. Deze
is relatief klein en zit in dezelfde tijdzone als de meeste Microsoft Engineers.
Op die manier kunnen ze eventuele problemen snel vinden en oplossen. Na een
deployment naar een nieuwe ring wachten ze zo'n 24 tot 48 uur om eventuele nieuwe
problemen te kunnen verhelpen voordat iedereen de nieuwste versie krijgt.

Maar hoe weet je nu of je de nieuwste versie al hebt? Een manier om dat te doen
is simpelweg om te kijken of je de nieuwe feature al hebt. Dat is hoe ik het in
het verleden ook vaak deed. Maar het komt weleens voor dat je de nieuwe feature
na drie weken nog niet hebt. Dat kan dan komen doordat zo'n nieuwe feature toch
ook nog achter een feature flag blijkt te zitten.

In Azure DevOps kun je kijken welke sprint op jouw omgeving actief is. Hiervoor
ga je naar de url: `https://dev.azure.com/<jouw organisatie>/_home/about`:

![Azure DevOps active sprint](/assets/img/posts/2024-07-19-azuredevops-version-light.png){: .light }
![Azure DevOps active sprint](/assets/img/posts/2024-07-19-azuredevops-version-dark.png){: .dark }

Hetzelfde sprintnummer vind je terug in de URL van de release notes:

![Azure DevOps sprint url](/assets/img/posts/2024-07-19-azuredevops-version-url-light.png){: .light }
![Azure DevOps sprint url](/assets/img/posts/2024-07-19-azuredevops-version-url-dark.png){: .dark }

Als je hier ziet dat beide sprint nummer overeen komen, maar je hebt de feature
nog niet, dan is er wellicht iets mis. Je kunt dan overwegen of je nog langer
wacht, of dat je hiervoor een [issue meldt bij Microsoft](https://developercommunity.visualstudio.com/AzureDevOps).
