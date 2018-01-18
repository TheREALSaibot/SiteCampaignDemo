# SiteCampaign template task

The idea behind this task is to have assess your work as a front-end coder.

This kind of task is what drives the company, and while we use an internal library of code templates, we want to assess how you would create a campaign from scratch.


## What is a SiteCampaign?

- A **SiteCampaign**  is a pop-up or overlay that is shown on our clients' websites. Campaign examples include an Abandoned Basket (shown when a customer tries to leave the website before completing a purchase), Traffic Shaper (an overlay that directs traffic from one area of the site to another), Product Recommendation Slider (a carousel featuring recommended products), Lead Generation (gathering newsletter sign-ups), etc...
- For this task we would like you to create an example Campaign, that we will from now on refer to as the Campaign. 

## What to do?

- Based on the mock-up images, code a campaign that is shown on **Desktop**, **Tablet** and **Mobile** devices
- The final code should be uploaded to your own **GitHub** account (or GitLab, as long as the project is publicly accessible)
- From Google Fonts, use the [Oswald](https://fonts.google.com/specimen/Oswald) (*header*) and [PT Sans](https://fonts.google.com/specimen/PT+Sans) (*text*) fonts. They are only an approximation, as the fonts used in the mock up are proprietary of the final client.
- Create the campaign as close to the mock ups as possible
- We will use Google Chrome's "Device toolbar" to toggle between the devices

### Files and Folders

- `readme.md` this file contains what to do
- `default.html` will act as the client's website page. You should only have code between the `<!-- SiteCampaign task -->` markup
- `mock_ups` images are to guide you in the development, so you know what the campaign should look like
- `images_for_development` all the images needed to create the campaign

### Not required, but nice to have

- A working example hosted as GitHub page for presentation

## Campaign rules

- Timer countdown should start with 7 days, 23 hours, 59 minutes and 59 seconds and update per second
- Campaign should be shown 6 seconds after the page is loaded
- Clicking on the close button, closes the campaign until the next page refresh
- Clicking on the CTA button (call-to-action) closes the SiteCampaign for that day
- Clicking outside the campaign will have the same action as the close button
- Campaign will only be shown once per day
