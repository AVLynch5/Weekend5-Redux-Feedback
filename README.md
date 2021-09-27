# Redux Feedback Loop

## Description

_Duration: 2 Day Sprint_

This application is a straightforward web- and server-hosted tool that could help employers/businesses easily collect and review feedback information submitted by employees, clients, and other users of a service. 

On the client side, users submit feedback through a simple 4-page application. After pressing start, users are brought into a feedback loop. On pages 1-3, numeric scores (of 1-5) are provided through a slider bar. On page 4, users have the option to provide text comments. On page 5, users are given the opportunity to review their provided feedback before submitting it. Using back buttons on pages 2-5, they can revisit pages 1-4 of the form and change their inputs. Users must press submit on page 5 and provide secondary validation for their feedback to be POSTed to the database. If their feedback is successfully POSTed to the database, users are brought to a confirmation page. Pressing "Leave New Feedback" clears the previous feedback form and brings users back to page 1 to submit a new form if desired.

On the administrative side (/#/admin), administrators can view user-submitted feedback in descending (newest -> oldest) order in a table. Using the flag/unflag buttons, a given piece of feedback can be flagged and highlighted for review then un-flagged at a later time. Feedback can also be deleted and removed from the database. 

At this time, the application is semi-responsive and can be viewed on desktops or mobile devices alike. The results table on /admin could use more styling to configure the columns and improve compactness/visibility. Further page/font styling is needed to improve the user experience.

## Languages

- HTML
- Javascript (node.js, ReactJS, Redux)
- CSS & Material UI
- PostgreSQL

## Screenshots

## Checklist

## Acknowledgement

Many thanks to [Prime Digital Academy](https://www.primeacademy.io/?utm_campaign=brand_search&utm_medium=cpc&utm_source=google&utm_medium=ppc&utm_campaign=Brand+Search&utm_term=prime%20digital%20academy&utm_source=adwords&hsa_mt=e&hsa_kw=prime%20digital%20academy&hsa_grp=34455376016&hsa_tgt=kwd-292678835500&hsa_ad=209774192547&hsa_ver=3&hsa_acc=5885076177&hsa_cam=670836869&hsa_src=g&hsa_net=adwords&gclid=CjwKCAjw4KyJBhAbEiwAaAQbE9A9_CGO-PE_cgrfInn9Py0N73UJJ5vs_0BQomI6E13bOdA_c6EmkRoCJikQAvD_BwE), without whom this would not be possible.

## Support

Please contact me at anthonyvlynch5@gmail.com with any concerns, problems, or suggested improvements.
