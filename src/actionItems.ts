import * as core from '@actions/core'
import axios from 'axios'
export async function GetActionItems(): Promise<string> {
  try {
    console.log(`GetActionItems started`)
    // Set constants
    const actionItemsRegEx = new RegExp(
      `(?<=Action Items\n------------\n)((.|\n)*)(?=Action Items,)`
    )
    const meetingListRegEx = new RegExp(
      `(?<=>fedora-coreos-meeting.)(.*?)=?txt`,
      `g`
    )
    const allMeetingNotes = core.getInput('rootURLMeetingLogs')
    const sevenDaysAgo: string = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0]
    const meetingNotesURL = allMeetingNotes + sevenDaysAgo + `/`
    const listOfMeetings = await fetchData(meetingNotesURL)
    const matches = listOfMeetings.match(meetingListRegEx)

    if (matches != null) {
      const lastMeeting = matches[matches.length - 1]
      // This should be the latest meeting`s date in with the format of YYYY-MM-DD-HH.MM.txt
      const lastMeetingNotesUrl =
        meetingNotesURL + 'fedora-coreos-meeting.' + lastMeeting
      console.debug(`last meeting notes url ${lastMeetingNotesUrl}`)
      const lastMeetingNotes = await fetchData(lastMeetingNotesUrl)
      const actionItemMatches = actionItemsRegEx.exec(lastMeetingNotes)

      if (actionItemMatches) {
        console.debug(`action item matches${actionItemMatches[0]}`)
        // if the match is just new lines, then there were no action items
        if (actionItemMatches[0].match(/^\s*$/)) {
          return `!topic there are no action items from the last meeting.`
        }
        return actionItemMatches[0]
      }
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }

  return `Failed: to get action items, check the last meeting notes.`
}

async function fetchData(url: string): Promise<string> {
  const options = {
    method: `GET`,
    url
  }
  return await (
    await axios(options)
  ).data
}
