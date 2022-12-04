const Event = require('../models/event-model');
const { RRule } = require('rrule');

// const freq = RRule[form['frequency']] //RRule['YEARLY']
// Create a rule:
const rule = new RRule({
    freq: RRule.YEARLY,
    dtstart: new Date(Date.UTC(2023, 0, 1, 19, 0, 0)),
    // tzid: America/New_York,
    until: new Date(Date.UTC(2023, 11, 31, 22, 30, 0)),
    count: 30,
    interval: 1,
    wkst: RRule.SU,
    byweekday: [RRule.SU.nth(+1), RRule.SU.nth(+3)],
    bymonth: [1, 2, 3, 4, 5, 9, 10, 11, 12]
  })
  
  // Get all occurrence dates (Date instances):
  // console.log('rule.all(): ', rule.all());
  
  // Get a slice:
  // console.log('rule.between(new Date(Date.UTC(2022, 11, 1)), new Date(Date.UTC(2023, 12, 31))): ', rule.between(new Date(Date.UTC(2022, 11, 1)), new Date(Date.UTC(2023, 12, 31))));
  
  // Get a human-friendly text representation:
  // The output can be used with RRule.fromText().
  console.log('rule.toText(): ', rule.toText());

  // create an object that contains the recurring data that stays constant
  const recurringData = {
    title: 'title',
    organization: 'organization',
    street: 'street',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    description: 'description',
    website: 'website',
    needsReview: false,
    location: {
        coordinates: [-70.34367376995942, 41.9366941692556] //Default pin location: in the middle of Cape Cod Bay
    }
  };

  // Looping through all the dates in the recurring event series rule
  for (const date of rule.all()) {
    // console.log(date);
    //create new event and pass in recurring data that stays constant
    const newEvent = new Event(recurringData);
    newEvent.startDatetime = date;
    newEvent.endDatetime = date.setHours(date.getHours() + 3);
    console.log('newEvent: ', newEvent);
    // newEvent.save();
  }

