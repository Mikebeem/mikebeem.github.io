---
layout: post
title: 🧪 Still using Classic Pipelines? Time to switch to YAML!
date: 2025-01-05 15:53 +0100
categories: [DevOps]
tags: [DevOps, Automation, Pipeline]
permalink: /posts/still-using-classic-pipelines-time-to-switch-to-yaml
lang: en

---

Even though Microsoft has been promoting YAML Pipelines as the standard in  
Azure DevOps for quite some time, I'm still surprised to see Classic  
Pipelines being used. While most teams have adopted YAML for new pipelines,  
there's often *that one release pipeline* still running as a Classic Pipeline.

These pipelines were often set up years ago and “work just fine.” And that's  
exactly the issue: many teams stick with Classic Pipelines simply because  
they still work.

But technology doesn't stand still. As the name suggests, **Classic  
Pipelines are now considered outdated**. YAML Pipelines offer more  
flexibility, better reusability, and superior integration with modern DevOps  
practices.

## 🤔 Why are some companies still using Classic Pipelines?

At most companies, YAML is the default for new pipelines. However, I still  
come across Classic Pipelines that are actively being used. There are  
usually three main reasons for this:

1. **The pipeline still works.**  
   _“If it works, why change it?”_ This is a common mindset among teams who  
   set up pipelines once and never look back.

2. **The team is used to Classic Pipelines.**  
   Developers prefer to focus on building features. Rewriting a Classic  
   Pipeline into YAML takes time and effort, which many teams prefer to  
   spend on new features.

3. **There's a misconception that YAML doesn't support everything.**  
   A common misunderstanding is that approvals or manual interventions are  
   only possible in Classic Pipelines. This is not true. YAML provides  
   comprehensive options for approvals and manual interventions — often  
   with more flexibility than Classic Pipelines.

## 🚀 Switching to YAML? It took me some time to adjust too

I know firsthand that switching to YAML Pipelines can feel like a big  
change. When I first started using YAML, I had to get used to writing  
pipelines as code. The visual interface of Classic Pipelines felt familiar,  
and YAML seemed complicated at first.

For a long time, I found myself quickly creating pipelines in the Classic  
UI because it was easier.

But now, I use YAML daily — not just in Azure DevOps, but also in GitHub  
Actions, GitLab, Docker, and Kubernetes. I wouldn't go back to Classic  
Pipelines.

## 🌟 What are the benefits of YAML Pipelines?

Here are the key benefits of switching to YAML Pipelines:

### 🗂️ 1. Pipelines in Version Control

YAML Pipelines are stored in your repository alongside your code. This  
means you can track, review, test, and manage pipeline changes through pull  
requests, giving you more control over your CI/CD processes.

While Classic Pipelines also offer a version history, it's much harder to  
track and compare changes. It's often difficult to figure out when or why a  
particular change was made.

### 🔄 2. Reusable templates

With YAML, you can create reusable templates that can be shared across  
multiple projects. This makes it much easier to set up new pipelines.  
Templates ensure consistency and save teams time by reducing manual  
pipeline configuration.

It's similar to using Task Groups in Classic Pipelines — but more powerful  
and scalable across projects. Templates can be created at various levels,  
such as for tasks, jobs, stages, or entire pipelines.

### ⚙️ 3. Automating complex workflows

YAML supports complex workflows with conditions, stages, and multi-job  
pipelines. These workflows can be fully automated without relying on the  
UI.

For example, you can easily run different tests and builds in parallel,  
depending on the branch or environment you're working in.

### 🔐 4. Better integration with modern DevOps practices

In DevOps, we talk a lot about Infrastructure as Code (IaC), Continuous  
Integration (CI), and Continuous Deployment (CD). YAML Pipelines fit  
perfectly into this philosophy by enabling **Pipeline as Code**.

## 📋 How to migrate from Classic Pipelines to YAML

Here are a few steps to help you migrate from Classic Pipelines to YAML:

1. **Start with new projects.**  
   For new pipelines, use YAML from the start to avoid future migrations. I  
   already see this happening at most organizations.

2. **Disable the creation of new Classic Pipelines.**  
   Azure DevOps allows you to disable the creation of Classic Pipelines at  
   the project or organization level. This prevents teams from creating new  
   Classic Pipelines while still allowing existing ones to run.  
   _(No more pouring water into a leaky bucket!)_

3. **Migrate existing Classic Pipelines step by step.**  
   Start with the simplest pipelines and build from there. This way, you  
   can quickly achieve success and build confidence within the team.

4. **Use templates.**  
   If you convert a pipeline to YAML that you might reuse, turn it into a  
   template for other projects to use.

5. **Leverage tools like Yamlizr.**  
   [**Yamlizr**](https://github.com/f2calv/yamlizr)  
   is a useful tool for converting Classic Pipelines to YAML automatically.  
   While it's not a magic solution, it can save a lot of manual work and  
   give you a solid starting point. Always review the generated YAML to  
   ensure everything is correctly converted.

## 🔧 Next blog: A deeper dive into migration steps

In my next blog, Ill provide more detailed examples and tips to make your  
migration to YAML Pipelines smoother.

## 💡 Need help optimizing your CI/CD Pipelines?

Migrating from Classic Pipelines to YAML Pipelines is an investment that  
will future-proof your pipelines. But I understand it's not always easy to  
free up time for this.

Looking for someone to help guide you through the process?

### 🎯 Here's how I can help

- Migrating Classic Pipelines to YAML  
- Setting up reusable templates  
- Optimizing existing YAML Pipelines  

👉 [**Let's talk!**](mailto:info@mikebeemsterboer.nl)
