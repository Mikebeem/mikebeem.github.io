---
# the default layout is 'page'
icon: fas fa-info-circle
permalink: /about/resume/
layout: page_toc
toc: true
h_max: 2
title: Freelance DevOps Consultant

---

## Executive Summary

* 15+ years experience with automation, DevOps and Azure DevOps (TFS)
* Azure DevOps (AZ-400), developer (AZ-204) and administrator (AZ-104) Certification
* Hands-on experience in DevOps tools
* Experience in supporting development teams with DevOps practices and tools
* Proficient in DevOps tools, CI/CD Pipelines and automation

## Working Experience

### DevOps Consultant, Delta Fiber, Schiedam (April 2024 – present)

* I support the .NET development teams in all areas of DevOps, with the primary
  focus on tooling, but also the Process and People components.
* Help teams with the setup of Azure DevOps and their CI/CD pipelines to deliver
  compliant software and support the teams to optimally use Azure DevOps as a
  whole for the creation of software.
* Create applications in Kubernetes with Argo CD. Help teams containerize their
  applications to migrate to Kubernetes.
* Create pipelines and templates for building and deploying applications to the
  Kubernetes platform.

### DevOps Consultant, Delta-N, Den Haag (October 2019 – March 2024)

* Working for multiple Delta-N customers for various assignments. In addition, various smaller assignments were carried out:
* Provide advice on the use of Azure DevOps and DevOps in general.
* Automate the creation and setup of Projects in Azure DevOps, so we could easily setup new projects with a standardized setup, including the permissions.
* Explain Azure DevOps and provide support in setting up build and release pipelines.
* Webinars: including What's new in Azure DevOps, YAML Pipelines.
* Automation of various activities for internal use.
* Written blogs for the company website.

### DevOps Consultant, De Nederlandsche Bank, Amsterdam (September 2021 – March 2024)

* I support IT teams in all areas of DevOps, with the primary focus on tooling, but also the Process and People components.
* My focus is on all parts of Azure DevOps and related tools (such as SonarQube, Mend, GitLeaks and Nexus). I help teams with the transition from classic pipelines to multistage YAML pipelines, set up YAML templates with which teams can deliver compliant software and support the teams to optimally use Azure DevOps as a whole for the production of software.
* I built a custom TypeScript extension for a custom connection with ServiceNow, to create planned changes in ServiceNow from Azure DevOps.
* Manage the Kubernetes cluster for the DevOps platform (ArgoCD, Nexus, SonarQube, Harbor).

### DevOps Consultant, DLL Group, Eindhoven (August 2020 – September 2021)

* Responsible for managing Azure DevOps and the on-premises Agents.
* Automating the CI/CD Pipelines and metrics surrounding their use.
* Wrote a PowerShell module and set up pipelines to automatically deploy AMT Lion environments. The AMT Framework is used to migrate older mainframe applications to AMT Lion, an object-oriented language.

### CI/CD Engineer, Het CAK, Den Haag (January 2020 – June 2020)

* Helped setting up Azure DevOps and automating work using Azure DevOps and PowerShell.
* I helped various teams setting up and improve Azure pipelines for both .NET and non-.NET based applications, both on Windows and Linux.
* I have created an extension for Azure DevOps to make some IT Controls visually visible in Azure DevOps.

### DevOps Engineer, Vivat, Alkmaar (September 2016 – September 2019)

* Created a custom Azure DevOps Extension for AMT Lion environments. As a result, much less manual work is required to release these environments.
* Setting up a standardized Continuous Delivery pipeline for various environments (including C#, SQL, SSRS, SSAS, SSIS). This included Azure DevOps, ServiceNow, SonarQube and FitNesse. Thanks to this pipeline, applications can be developed, tested and released faster with better quality.
* Fulfilled the Product Owner role for the Continuous Delivery pipeline and the Cloud platform.
* Fulfilled the Scrum Master role for the Cloud Platform team.
* Migration from TFS 2017 (on-premises) to Visual Studio Team Services (VSTS, now Azure DevOps).
* Organizing Community of Practice (COP) meetings to share knowledge about Continuous Delivery and DevOps within the organization.

### Tactical Administrator, Vivat, Alkmaar (January 2014 – September 2016)

* Supported and implemented various Team Foundation Server (TFS) migrations: from TFS 2010 to TFS 2017.
* Implementing the full TFS suite for various applications and teams.
* Automated the deployment of various applications.

### Operational Administrator, Vivat, Alkmaar (July 2006 – January 2014)

* Functional management on Team Foundation Server (TFS).
* Coordinate TFS migrations.
* Automated the deployment of various applications.
* Coordinating the technical release process within Vivat.
* Carrying out software installations in the DTAP street of various applications.

## Education & Qualifications

* AZ-104: Microsoft Azure Administrator (Associate)
* AZ-204 Developing Solutions for Microsoft Azure (Associate)
* AZ-400: Designing and Implementing Microsoft DevOps Solutions (Expert)
* IT4IT™ Foundation
* Scrum Product Owner 1 (PSPO 1)
* Professional Scrum Master 1 (PSM 1)
* Bachelor of Business Informatics (July 2006)

## Skills

### Tools

{% for skill in site.data.skills.tools -%}
* {{ skill.name }}
{% endfor %}

### People and Process

{% for skill in site.data.skills.practices -%}
* {{ skill.name }}
{% endfor %}
