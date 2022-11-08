const { RRule, RRuleSet, rrulestr } = require('rrule');

// Create a rule:
const rule = new RRule({
    freq: RRule.WEEKLY,
    interval: 5,
    byweekday: [RRule.MO, RRule.FR],
    dtstart: new Date(Date.UTC(2012, 1, 1, 10, 30)),
    until: new Date(Date.UTC(2012, 12, 31))
  })
  
  // Get all occurrence dates (Date instances):
  console.log('rule.all(): ', rule.all());
  
  // Get a slice:
  console.log('rule.between(new Date(Date.UTC(2012, 7, 1)), new Date(Date.UTC(2012, 8, 1))): ', rule.between(new Date(Date.UTC(2012, 7, 1)), new Date(Date.UTC(2012, 8, 1))));
  
  // Get an iCalendar RRULE string representation:
  // The output can be used with RRule.fromString().
  rule.toString()
  console.log('rule.toString(): ', rule.toString());
  
  // Get a human-friendly text representation:
  // The output can be used with RRule.fromText().
  rule.toText()
  console.log('rule.toText(): ', rule.toText());

