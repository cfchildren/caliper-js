/**
 *  author: Prashant Nayak
 *  ©2013 IMS Global Learning Consortium, Inc.  All Rights Reserved.
 *  For license information contact, info@imsglobal.org
 */

var _ = require('lodash-node');
var Event = require('./caliperEvent');

function AssignableEvent() {

  Event.call(this);

  this.setContext('http://purl.imsglobal.org/ctx/caliper/v1/AssignableEvent');
  this.setType('http://purl.imsglobal.org/caliper/v1/AssignableEvent');

  this.setGenerated(null);
  this.setStartedAtTime(0);
  this.setEndedAtTime(0);
  this.setDuration(null);
}

AssignableEvent.prototype = _.create(Event.prototype);

module.exports = AssignableEvent;