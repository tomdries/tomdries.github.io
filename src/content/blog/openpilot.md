---
title: "Using AI from automated driving systems to assess human drivers"
description: "Comparing human driving with AI reference drivers"
pubDate: "January 30 2025"
heroImage: "/images/openpilot.webp"
tags: ["phd", "openpilot"]
---
*The <a href="https://doi.org/10.3390/robotics13120169" target="_blank">full research paper</a> was recently published in MDPI Robotics. Below is a summary.*

Many car insurance policies now offer discounts based on your driving behavior. Using driving event recorders, data points such as harsh braking, high accelerations, or speed threshold exceedances, are monitored. 

Although some of these data points do predict damage involvement, <a href="https://doi.org/10.1177/03611981231211897" target="_blank">as we have previously shown</a>, they come with limitations. The primary issue is their lack of context. For example, in urban areas it is expected somebody will need to brake hard more often than in rural areas. Similarly, what appears to be aggressive braking based on acceleration measures, might actually have been an appropriate response to an unexpected event. By relying solely on acceleration-based metrics, we risk misclassifying necessary safety maneuvers as risky behavior.

To address these limitations, we adapted an automated driving system (Openpilot) to replay recordings of human driving and compare them with the internal predictions of the AI. Discrepancies between the AI's plan and the human's actions can give indications of the context under which the event occurred.

Specifically, our study demonstrated a scenario where the driver chose to brake late and aggressively in response to an early observable oncoming obstruction, and showed that the AI suggested an early deceleration action. In this scenario, the disagreement between the human and the AI indicates that earlier action could have been taken by the human. Conversely, in a surprise scenario, in which an oncoming danger could not be predicted until the last moment, both the human and the AI braked late, indicating that in this case, the hard brake was appropriate or inevitable.

![openpilot result graph](/images/op-results.webp)

This analysis demonstrated how we can use end-to-end neural networks from existing automated driving systems in the analysis of driving events. Although our scenarios offer only one demonstration application, the broader idea of comparing human execution to one, or multiple, concurrently operating AI observers, could open up new possibilities for improving driver assessment. 