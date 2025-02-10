---
title: "Using AI from automated driving systems to assess human drivers"
description: "Comparing human driving with AI reference drivers"
pubDate: "January 30 2025"
heroImage: "/images/openpilot.webp"
tags: ["phd", "openpilot"]
---
*The <a href="https://doi.org/10.3390/robotics13120169" target="_blank">full research paper</a> was recently published in MDPI Robotics. Below is a summary.*

In our recent paper, my colleagues and I introduced a new approach to assessing human driving performance using AI capabilities from modern automated driving systems. This research was motivated by the increasing prevalence of pay-how-you-drive insurance policies, which aim to reward careful driving or penalize risky behavior. These policies typically rely on traditional driver assessment methods, such as counting harsh braking events or speeding incidents.

However, while these traditional methods have shown some success in predicting crash likelihood, they come with significant limitations. The primary issue is their lack of context. A hard braking event in an urban area might be entirely different from one on a rural road. Similarly, what appears to be aggressive driving might actually be an appropriate response to an unexpected event. By relying solely on acceleration-based metrics, we risk misclassifying necessary safety maneuvers as risky behavior.

To address these limitations, we adapted an automated driving system (Openpilot) to replay recordings of human driving and compare them with the internal predictions of the AI. Discrepancies between the AI's plan and the human's actions can give indications of the context under which the event occurred.

Specifically, our study demonstrated a scenario where the driver chose to brake late and hard (aggressively) in response to an early observable oncoming obstruction, and showed that the AI suggested an early deceleration action. Conversely, in a surprise scenario, in which an oncoming danger could not be predicted until the last moment, both the human and the AI braked late, indicating that in this case, the hard brake was appropriate or inevitable.

![alttext](/images/op-results.webp)

This analysis demonstrated how using AI, we can distinguish between justified and unjustified braking in post-hoc analysis of driving events. Although our study is a proof of concept, it opens up exciting possibilities for improving driver assessment, from insurance to driver training programs. Future research could expand on this work by applying the method to a wider range of scenarios, incorporating multiple AI systems, and exploring real-time applications in vehicles.