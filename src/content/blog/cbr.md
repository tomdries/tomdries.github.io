---
title: "How CBR implements PhD findings in driver testing dashboard"
description: "CBR builds on collaborative PhD thesis projects"
pubDate: "January 14 2025"
heroImage: "/images/cbrdashboard.webp"
tags: ["phd"]
---

*The Dutch Central Office of Driving Certification (CBR) is innovating how driving examiners evaluate and communicate with candidates. In this post, I explain how research findings from my PhD research are currently being applied at CBR.*

Throughout the PhD project, there has been extensive collaboration with CBR. The first research paper I wrote was an interview with 37 driving examiners, who were recruited via CBR during the 2020 Covid lockdowns in the Netherlands. Together with Angèle Picco, pursuing her PhD at the University of Groningen, these examiners were  interviewed about their views on data-driven assessment of driving test candidates. One of the things that these interviews revealed was that examiners were interested in using objective data to explain their decisions to candidates. They also emphasized that this data should supplement rather than replace their professional judgment.

After <a href="https://doi.org/10.1016/j.trf.2021.09.021" target="_blank">publication of the interview study</a>, I was approached by David Stefan, then a Master's student from our faculty who had read about the work and wanted to contribute with an applied technical study. CBR subsequently recruited him as an intern to work on his master's thesis. David conducted measurements using accelerometer and GPS sensors during trips at the examiner training center in Leusden, focusing his research on differentiating between typical driving styles of novice drivers. This work demonstrated that even relatively simple sensor setups could provide valuable insights into driving behavior. The project was a success, and CBR later hired David to further develop these ideas. Based on this work, I co-authored <a href="https://doi.org/10.1080/19427867.2024.2352198" target="_blank">a research paper</a> with David, Daniël Heikoop, Dimitra Dodou, and Joost de Winter, which also forms a chapter of my PhD dissertation.

#### From research to implementation

CBR has used these findings in the design of their new assessment tool. The organization developed a prototype system that equips examination vehicles with sensors (GPS, OBD, and accelerometers) to collect real-time driving data during tests. This data is then processed and presented through a dashboard interface that examiners can access within minutes after test completion (see the header image of this post for an impression).

The implementation directly addresses one of the challenges identified in the research: the need for objective communication about driving performance. Instead of simply telling a candidate they "drove too fast," examiners can now provide specific feedback like "you exceeded the speed limit by 10 km/h at the fourth intersection."

As presented at both the <a href="https://www.ictct.net/wp-content/uploads/36-Hague-2024/ICTCT2024_paper_24.pdf" target="_blank">ICTCT conference</a> in The Hague and the <a href="https://www.cieca.eu/sites/default/files/members-area/General-Assembly-Members-Forum/2024-Congress-Dubai/Congress-7-3-2024/SCHIPPERS%20CIECA_2024.pdf" target="_blank">CIECA conference</a> in Dubai, the prototype has already been successfully tested in internal training sessions, with examiners reporting improved ability to explain their verdicts and help candidates understand their driving behavior in relation to traffic safety.

<!-- *The Dutch Central Office of Driving Certification (CBR) is innovating how driving examiners evaluate and communicate with candidates. In this post, I explain how research findings from my PhD research are currently being applied at CBR.*

Throughout the PhD project, there has been extensive collaboration with CBR. The first research paper I wrote was an interview with 37 driving examiners, who were recruited via CBR during the 2020 Covid lockdowns in the Netherlands. Together with Angèle Picco, pursuing her PhD at the University of Groningen, these examiners were interviewed about their views on data-driven assessment of driving test candidates [^1]. One of the things that these interviews revealed was that examiners were interested in using objective data to explain their decisions to candidates. They also emphasized that this data should supplement rather than replace their professional judgment.

After [publication of the interview study](https://doi.org/10.1016/j.trf.2021.09.021), I was approached by David Stefan, then a Master's student from our faculty who had read about the work and wanted to contribute with an applied technical study. CBR subsequently recruited him as an intern to work on his master's thesis. David conducted measurements using accelerometer and GPS sensors during trips at the examiner training center in Leusden, focusing his research on differentiating between typical driving styles of novice drivers[^2]. This work demonstrated that even relatively simple sensor setups could provide valuable insights into driving behavior. The project was a success, and CBR later hired David to further develop these ideas. Based on this work, I co-authored a research paper with David, Daniël Heikoop, Dimitra Dodou and Joost de Winter, which also forms a chapter of my PhD dissertation.

#### From research to implementation

CBR has used these findings in the design of their new assessment tool. The organization developed a prototype system that equips examination vehicles with sensors (GPS, OBD, and accelerometers) to collect real-time driving data during tests [^3]. This data is then processed and presented through a dashboard interface that examiners can access within minutes after test completion (see the header image of this post for an impression).

The implementation directly addresses one of the key challenges identified in the research: the need for objective communication about driving performance. Instead of simply telling a candidate they "drove too fast," examiners can now provide specific feedback like "you exceeded the speed limit by 10 km/h at the fourth intersection."

As presented at both the ICTCT conference in The Hague and the CIECA conference in Dubai [^4], the prototype has already been successfully tested in internal training sessions, with examiners reporting improved ability to explain their verdicts and help candidates understand their driving behavior in relation to traffic safety. 

[^1]: Driessen, T., Picco, A., Dodou, D., de Waard, D., & de Winter, J. (2021). Driving examiners' views on data-driven assessment of test candidates: An interview study. *Transportation Research Part F: Traffic Psychology and Behaviour, 83*, 60–79. 

[^2]: Driessen, T., Stefan, D., Heikoop, D., Dodou, D., & De Winter, J. (2024). Using mobile devices for driving test assessment: A study of acceleration and GPS data. *Transportation Letters*, 1–11.

[^3]: Schippers, D., & Stefan, D. (2024a). Can driving data objectify the examiner's verdict? *Proceedings of the International Co-operation on Theories and Concepts in Traffic Safety*, The Hague, The Netherlands.

[^4]: Schippers, D., & Stefan, D. (2024b). Can driving data objectify the examiner's verdict? [Presentation]. *56th CIECA Congress*, Dubai, UAE. -->