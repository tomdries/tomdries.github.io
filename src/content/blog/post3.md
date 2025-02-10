---
title: "Using the GPT-4 API to create virtual research participants"
description: "AI-generated personas exhibit human-like answering in traditional personality tests"
pubDate: "August 1 2024"
heroImage: "/images/gpt-personas.png"
tags: ["research paper"]
---

* The <a href="https://doi.org/10.1016/j.paid.2024.112729" target="_blank">full research paper</a> was recently published in Personality and Individual Differences. Below is a summary.

*Can ChatGPT simulate human respondents? In this study, we let GPT-4 create personas and reply to personality research questionnaires. We observed human-like patterns, but also observed differences. LLMs like ChatGPT hold promise for domains reaching from questionnaire research to product design, though it certainly raises interesting further questions.*

Traditional research heavily relies on questionnaires, which come with inherent limitations. Respondents are expensive, they might give socially desirable answers, get fatigued, or simply have no time to participate. This got us thinking: Could large language models like ChatGPT help in personality research?

In our study, we had ChatGPT generate 2,000 text-based personas - fictional characters with specific ages, genders, and brief personality descriptions. For each persona, we had ChatGPT complete several well-known personality questionnaires, including a short version of the Big Five Inventory (BFI-10) and scales measuring sensation-seeking and dark personality traits.

The results were intriguing. When we analyzed how ChatGPT scored these personas on the Big Five personality dimensions (Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism), we found clear patterns that aligned with human psychology research. The average scores for different questionnaire items correlated strongly (r = 0.93) with previously published human data.

We also noticed some interesting differences. ChatGPT's personas showed more extreme scores than human respondents typically do. Some correlations between personality traits also differed from what we see in human studies. For example, while humans typically show a positive correlation between extraversion and conscientiousness, ChatGPT's personas showed a negative correlation.

We then explored whether changing how we asked ChatGPT to create personas would affect the results. We tried generating more realistic personas, personas with explicit personality descriptions, and even cinematic characters. Each approach yielded slightly different patterns in the personality traits, highlighting how the input prompts influence the outcomes.

What does this mean for the future of personality research? For now, it shows promise for several applications:

- Testing questionnaires before using them with real participants
- Exploring how different types of questions might affect responses
- Training and education in personality research
- Developing more diverse design personas for product design - for example for creating *user stories*
- Creating more realistic characters for games and simulations

The study cost about $1,500 in API credits and took several days to complete, so there's room for improvement in efficiency. However, as language models continue to advance we expect them to rapidly become cheaper. Moreover, batch processing allows simultaneous API requests to be sent to the OpenAI servers which can drastically reduce total waiting times. See [my repository](https://github.com/tomdries/parallelprompts) for an example. 

This research represents an early step in exploring how AI can complement traditional personality research methods. While it may raise as many questions as it answers, it opens up exciting possibilities for future research at the intersection of artificial intelligence and psychology.

<a href="https://doi.org/10.1016/j.paid.2024.112729" target="_blank">Link to the full paper</a>