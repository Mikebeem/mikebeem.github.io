---
layout: post
title: What version of Azure DevOps am I using?
date: 2024-07-19 14:45 +0100
categories: [Azure DevOps]
tags: [Azure DevOps, Features, Tool]
permalink: /posts/what-version-of-Azure-DevOps
lang: en

---

If you keep an eye on the [release notes of Azure DevOps](https://aka.ms/azuredevops/releasenotes),
you may notice some interesting new features being rolled out that you don't see
immediately in your own Azure DevOps environment. At the bottom of the page,
you will always find the note:

```plaintext
Note

These features will roll out over the next two to three weeks.

```

There is often a two to three week delay between the moment when new features
are described and when you can actually use them. This is partly due to how
Microsoft rolls out changes to Azure DevOps. They work with deployment rings.
The first ring contains Microsoft's own engineers, who receive the new version
first. They let this environment run for about 48 hours before moving on to the
next ring, the Brazil region. This region is relatively small and shares the
same time zone as most Microsoft engineers. This way, they can quickly identify
and fix any issues. After deploying to a new ring, they wait about 24 to 48 hours
to resolve any potential problems before everyone receives the latest version.

So, how do you know if you already have the latest version? One way to check
is simply to see if you already have the new feature. That's how I used to do
it in the past. However, sometimes you may not have the feature even after three
weeks. This can happen because a new feature may still be behind a feature flag.

In Azure DevOps, you can check which sprint is active in your environment. To
do this, go to the URL: `https://dev.azure.com/<your organization>/_home/about`:

![Azure DevOps active sprint](/assets/img/posts/2024-07-19-azuredevops-version-light.png){: .light }
![Azure DevOps active sprint](/assets/img/posts/2024-07-19-azuredevops-version-dark.png){: .dark }

You can find the same sprint number in the URL of the release notes:

![Azure DevOps sprint url](/assets/img/posts/2024-07-19-azuredevops-version-url-light.png){: .light }
![Azure DevOps sprint url](/assets/img/posts/2024-07-19-azuredevops-version-url-dark.png){: .dark }

If you see that both sprint numbers match, but you don't have the feature yet,
there may be something wrong. You can then consider whether to wait longer or
[report an issue to Microsoft](https://developercommunity.visualstudio.com/AzureDevOps).
