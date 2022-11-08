const { RRule, RRuleSet, rrulestr } = require('rrule');

// Create a rule:
const rule = new RRule({
    freq: RRule.YEARLY,
    dtstart: new Date(Date.UTC(2022, 10, 6, 20, 39, 0)),
    // tzid: America/New_York,
    until: new Date(Date.UTC(2023, 11, 31, 20, 39, 0)),
    count: 30,
    interval: 1,
    wkst: RRule.SU,
    byweekday: [RRule.SU.nth(+1), RRule.SU.nth(+3)],
    bymonth: [1, 2, 3, 4, 5, 9, 10, 11, 12]
  })
  
  // Get all occurrence dates (Date instances):
  console.log('rule.all(): ', rule.all());
  
  // Get a slice:
  console.log('rule.between(new Date(Date.UTC(2022, 11, 1)), new Date(Date.UTC(2023, 12, 31))): ', rule.between(new Date(Date.UTC(2022, 11, 1)), new Date(Date.UTC(2023, 12, 31))));
  
  // Get a human-friendly text representation:
  // The output can be used with RRule.fromText().
  console.log('rule.toText(): ', rule.toText());

