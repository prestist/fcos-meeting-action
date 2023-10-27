# FCOS-Meeting-Action

Welcome to the Fedora CoreOS Meeting tracker. This repository serves as a tracker for creating issues to track upcoming FCOS meetings. The issues are generated every Wednesday, and are meant to be used by the community meeting host as a guide for running the meeting.

The meeting notes are formed from three major parts. The first part is the [meeting template](./static/meeting-template.md), which is the base of the meeting notes. The second, and third parts are formed from the topics in the [fedora-coreos-tracker](https://github.com/coreos/fedora-coreos-tracker) repository and the past action items from the prior community meeting [fedora-meetings](https://meetbot-raw.fedoraproject.org/teams/fedora_coreos_meeting/fedora_coreos_meeting).

The Fedora CoreOS Working Group works to bring together the various technologies and produce Fedora CoreOS.
Get Fedora CoreOS

The Fedora CoreOS Working Group has a weekly meeting. The meeting usually happens in #fedora-meeting-1 on irc.libera.chat (Webchat) and the schedule for the meeting can be found in this [calendar](https://calendar.fedoraproject.org/CoreOS/) Currently, meetings are at 16:30 UTC on Wednesdays.

As the Matrix/IRC bridge is down, it is currently not possible to attend the meeting from a Matrix account and you have to join using IRC. You can use the Webchat to temporarily join the meeting on IRC.
Steps to run the meeting

    Navigate to this week's meeting and follow the steps presented.

Working days: non-holiday weekdays. Relevant holidays are the national holidays of the USA, Western Europe, and India.

# Development

## Prerequisites

- install node package manger (npm)
- use npm to install TypeScript `npm install Typescript --save-dev`

## Dev Workflow 

- Work against the `.ts` files to add your changes
- Compile them using `npm run bundle` which produces `.js` files
- Commit the `.ts` and `.js` files

### Note

The action uses the `.js` files to run the action, and are found in the `dist` directory. The `.ts` files are used for development purposes only.